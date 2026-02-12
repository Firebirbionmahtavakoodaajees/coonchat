<script>
    let currentIndex = 0;
    let touchstartX = 0;
    let touchendX = 0;

    /** @param {TouchEvent} e */
    function handleTouchStart(e) {
        touchstartX = e.changedTouches[0].screenX;
    }

    /** @param {TouchEvent} e */
    function handleTouchEnd(e) {
        touchendX = e.changedTouches[0].screenX;
        handleSwipe();
    }

    function handleSwipe() {
        const diff = touchstartX - touchendX;
        if (Math.abs(diff) < 50) return;
        if (diff > 0) {
            const maxIndex = 2;
            currentIndex = Math.min(currentIndex + 1, maxIndex);
        } else {
            currentIndex = Math.max(currentIndex - 1, 0);
        }
    }
</script>

<div class="center-cardbox-container">
    <div class="card-viewport">
        <div class="card-carousel" style="transform: translateX({-currentIndex * 230}px)">
            {#each [0,1,2] as _}
                <button class="center-cardbox"
                        title="Carrousel"
                        on:touchstart={handleTouchStart}
                        on:touchend={handleTouchEnd}>
                </button>
            {/each}
        </div>
    </div>


    <div class="carousel-dots">
        {#each [0,1,2] as i}
            <span class="dot" class:active={i === currentIndex} role="button" tabindex="0" on:click={() => currentIndex = i} on:keydown={(e) => e.key === 'Enter' && (currentIndex = i)}>
            </span>
        {/each}
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
}

.center-cardbox {
    flex-shrink: 0;
    margin-right: 20px;
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
</style>