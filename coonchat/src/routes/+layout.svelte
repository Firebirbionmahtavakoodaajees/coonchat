<script>
    import {goto} from "$app/navigation";

    function goCoon() {
        goto('/');
    }
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Lexend:wght@100..900&display=swap" rel="stylesheet">

<div class="background">
    <div class="main">
        <button class="logo" on:click={goCoon}>coonchat</button>
        <slot />
    </div>
</div>

<style>
    .background {
        background: black;
        position: fixed;
        top: 0;
        left: 0;

        width: 100dvw;
        height: 100dvh;

        z-index: -100;

        overflow-y: auto;
    }

    .logo {
        color: white;
        font-family: "Lexend", sans-serif;
        font-optical-sizing: auto;
        font-weight: 500;
        font-style: normal;
        font-size: 18px;
        margin: 15px 10dvw;
        background: black;
        border: none;
        padding: 0;
        cursor: pointer;
        outline: inherit;
    }

    .main {
        overflow-y: auto;
    }

    /* Handle */
    /* width */
    ::-webkit-scrollbar {
        width: 7px;
        right: 1px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: white;
        margin-top: 1dvh;
        margin-bottom: 1dvh;
        border-radius: 15px;
        border-left: 3px solid transparent;
        border-right: 3px solid transparent;
        background-clip: padding-box;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #adb5bd;
        border-radius: 10px;
        margin-left: 1px;
        margin-right: 1px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #adb5bd;
    }
</style>