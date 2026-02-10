<script>
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">

<div class="background">
    <div class="main">
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
    }
</style>