<script>
    import {goto} from "$app/navigation";

    let user = "User 0"
    let user1 = "User 1"

    function addUserButton() {
        goto('/adduser');
    }

    function goToUser() {
        goto('/');
    }

</script>

<div class="title-shell">
    <h1 class="title">Welcome back {user}!</h1>
</div>

<div class="content-shell">
    <button class="contact" on:click={goToUser}>
        {user1}
    </button>
</div>

<button class="addUser" on:click={addUserButton}>+</button>

<div class="bottom"></div>


<style>
.title-shell {
    z-index: -1;
    margin: 10dvh 10dvw 10dvh 10dvw;
}
.title {
    font-family: "Lexend", sans-serif;
    font-optical-sizing: auto;
    font-weight: 720;
    font-style: normal;
    color: white;
    border-radius: 24px;
    font-size: 56px;
}

/**/

.contact {
    width: 300px;
    height: 50px;
    border: 1px solid white;
    margin: 0 10dvw 0 10dvw;
    border-radius: 10px;
    box-shadow: 0 0 30px -5px white;

    background: black;

    padding-left: 25px;
    text-align: left;
    color: white;
    font-family: "Anonymous Pro", monospace;
    font-weight: 400;
    font-style: normal;

    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
}

.contact:hover {
    transform: scale(1.1);
    box-shadow: 0 0 0 white;
}

.contact:active {
    transform: scale(0.95);
}

/* Add user */

.addUser {
    position: fixed;

    bottom: 25px;
    right: 30px;
    width: 60px;
    height: 60px;

    background-color: black;
    color: white;
    font-size: 32px;
    font-weight: 600;

    border-radius: 10px;
    border: 1px solid white;

    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
    z-index: 1;
}

.addUser:hover {
    transform: scale(1.1);
    box-shadow: 0 0 25px rgba(255, 255, 255, 0.4);
}

.addUser:active {
    transform: scale(0.95);
}

/*Desktop*/
@media (max-width: 600px) {
}

.bottom {
    height: 5vh;
}
</style>