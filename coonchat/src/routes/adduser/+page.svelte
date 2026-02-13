<script>
    //Variables
    let currentIndex = 0;
    let touchstartX = 0;
    let touchendX = 0;

    let velocity = 0;
    let lastTouchX = 0;
    let lastTime = 0;

    //Functions

    /** @param {TouchEvent} e */
    function handleTouchStart(e) {
        touchstartX = e.changedTouches[0].screenX;
        lastTouchX = touchstartX;
        lastTime = Date.now();
    }


    /** @param {TouchEvent} e */
    function handleTouchEnd(e) {
        touchendX = e.changedTouches[0].screenX;

        const now = Date.now();
        velocity = (touchendX - lastTouchX) / (now - lastTime);

        handleSwipe();
    }

    function handleSwipe() {
        const diff = touchstartX - touchendX;
        if (Math.abs(diff) < 40) return;

        const maxIndex = document.querySelectorAll('.center-cardbox').length - 1;

        // Momentum: fast flick skips cards
        const speed = Math.abs(velocity);
        let step = 1;
        if (speed > 0.5) step = 2;
        if (speed > 1) step = 3;

        if (diff > 0) currentIndex += step;
        else currentIndex -= step;

        currentIndex = Math.max(0, Math.min(currentIndex, maxIndex));
    }



    //Logic

</script>

<div class="center-cardbox-container">
    <div class="card-viewport">
        <div class="card-carousel" style="transform: translateX({-currentIndex * 230}px)">
            <button class="center-cardbox" class:active-card={currentIndex === 0}
                    title="Card 1"
                    on:touchstart={handleTouchStart}
                    on:touchend={handleTouchEnd}>

                I
            </button>

            <button class="center-cardbox" class:active-card={currentIndex === 1}
                    title="Card 2"
                    on:touchstart={handleTouchStart}
                    on:touchend={handleTouchEnd}>

                Love
            </button>

            <button class="center-cardbox" class:active-card={currentIndex === 2}
                    title="Card 3"
                    on:touchstart={handleTouchStart}
                    on:touchend={handleTouchEnd}>

                You
            </button>

            <button class="center-cardbox" class:active-card={currentIndex === 3}
                    title="Card 4"
                    on:touchstart={handleTouchStart}
                    on:touchend={handleTouchEnd}>

                Babygirl
            </button>

            <button class="center-cardbox" class:active-card={currentIndex === 4}
                    title="Card 5"
                    on:touchstart={handleTouchStart}
                    on:touchend={handleTouchEnd}>

                ❤️
            </button>

        </div>
    </div>


    <div class="carousel-dots">
        <span
                class="dot"
                class:active={0 === currentIndex}
                role="button"
                tabindex="0"
                on:click={() => currentIndex = 0}
                on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && (currentIndex = 0)}>
        </span>

        <span
                class="dot"
                class:active={1 === currentIndex}
                role="button"
                tabindex="0"
                on:click={() => currentIndex = 1}
                on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && (currentIndex = 0)}>
        </span>

        <span
                class="dot"
                class:active={2 === currentIndex}
                role="button"
                tabindex="0"
                on:click={() => currentIndex = 2}
                on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && (currentIndex = 0)}>
        </span>

        <span
                class="dot"
                class:active={3 === currentIndex}
                role="button"
                tabindex="0"
                on:click={() => currentIndex = 3}
                on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && (currentIndex = 0)}>
        </span>

        <span
                class="dot"
                class:active={4 === currentIndex}
                role="button"
                tabindex="0"
                on:click={() => currentIndex = 4}
                on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && (currentIndex = 0)}>
        </span>

    </div>
</div>

<style>

/* Card */
.center-cardbox-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 90dvh;
    color: white;
}
.center-cardbox {
    border: 1px solid white;
    height: 250px;
    width: 200px;
    border-radius: 24px;
    background: black;
    color: white;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    flex-shrink: 0;
    margin: 0 10px;
    backdrop-filter: blur(10px);
}
.center-cardbox:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(255,255,255,0.3);
}

/*Carrousel*/
.card-viewport {
    width: 220px;
    overflow-x: clip;
    overflow-y: visible;
    padding: 12px 0;
}

.card-carousel {
    display: flex;
    transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
    will-change: transform;

    perspective: 1200px;
}

.center-cardbox {
    flex-shrink: 0;
    margin-right: 20px;

    transition:
            transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 0.6s cubic-bezier(0.16, 1, 0.3, 1),
            opacity 0.4s ease;

    opacity: 0.5;
    transform: scale(0.9) rotateY(10deg);

    backdrop-filter: blur(18px);
    background: rgba(0,0,0,0.4);
}

.active-card {
    opacity: 1;
    transform: scale(1.08) rotateY(0deg);
    box-shadow: 0 0 10px white;

}




/* Dots */

.carousel-dots {
    display: flex;
    gap: 10px;
    margin-top: 20px;
}

.dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(255,255,255,0.3);
    transition: all 0.3s ease;
    cursor: pointer;
}

.dot.active {
    background: white;
    transform: scale(1.2);
    width: 24px;
    border-radius: 4px;
}

.dot:hover {
    background: rgba(255,255,255,0.8);
    transform: scale(1.2);
}

/*Desktop*/
@media (max-width: 600px) {
}
</style>