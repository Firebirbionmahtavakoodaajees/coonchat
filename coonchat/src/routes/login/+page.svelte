<script>
    import { createClient } from '@supabase/supabase-js'

    const supabaseUrl = "https://dprudkvkotavzhieovfx.supabase.co"
    const supabaseKey = "sb_publishable_WGmi5uPdwEs8UwsNBrUNpQ_9SZb3W0d"
    const supabase = createClient(supabaseUrl, supabaseKey)

    let username = ""
    let password = ""

    async function login() {
        const email = username.trim().toLowerCase() + "@coonchat.local"

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password
        })

        if (error) {
            alert("login failed")
        } else {
            alert("Welcome," + username + "!")
        }
    }
</script>

<div class="username">
    Username:
</div>
<input bind:value={username}>

<div class="username">
    Password:
</div>
<input bind:value={password}>

<button on:click={login}>Submit</button>

<style>
    .username{
        color: white;

        font-family: "Anonymous Pro", monospace;
        font-weight: 800;
        font-style: normal;
        font-size: 16px;
    }
</style>