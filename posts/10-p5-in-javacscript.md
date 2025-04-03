---
title: JavaScript(I'm running out of title names😰)
published_at: 2025-04-3
snippet: -w5:c2- Implementing p5.js through a library📚 
disable_html_sanitization: true
allow_math: true
---

<script src="./scripts/p5.js"></script>

<canvas id="p5_example"></canvas>

<script>
    const cnv = document.getElementById ("p5_example")

    function setup () {
        createCanvas (300, 300, P2D, cnv)
    }

    function draw () {
        background (`turquoise`)
        console.log (frameCount)
    }
</script>

![blank](/Images/w1/blankpng.png)

<style>
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px; /* Optional: Add some padding if needed */
}

.button {
    display: flex;
    align-items: center;
    /* Add additional styling for buttons if needed */
}

.button img {
    display: block;
}
</style>

<body>
    <div class="container">
        <a href="/08-vanilla-javascript" class="button middle">
            <img id= "home_id" src="/Images/Buttons/Back.png" width="40" height="40" alt="Page 2">
        <a href="/" class="button middle">
            <img id= "home_id" src="/Images/Buttons/Home.png" width="40" height="40" alt="Page 2">
        </a>
        <a href="/" class="button right">
            <img id= "next_id" src="/Images/Buttons/Forward.png" width="30" height="30" alt="Page 3">
        </a>
    </div>
</body>

![blank](/Images/w1/blankpng.png)
