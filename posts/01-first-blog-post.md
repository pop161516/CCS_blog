---
title: Blog post No.1
published_at: 2022-04-03
snippet: Starting p5 and setting up CCS blog
disable_html_sanitization: true
allow_math: true
---

# Summery
This morning we had a class packed with learning about p5, to my undertanding p5 is a web vertion of JavaScript... "a free and open-source JavaScript library". I've not used JS before, in fact I've not coded before which is a little frightening but I get the feeling there are poeple in my class that will be able to help me 🫣

Then after the break we got into setting up our blogs and git accounts and deno deplot and whatever. I'd done this before in DMS1 but I didn;t manage to get the local set up working. I'll figure that out later though. 

# Class work
### Things I lernt in class:
- JS dosn't care about ";" or spaces which is conviniant but highlights the importance of getting into the habit of writting clean code.
- I learnt syntax:
    - ' ' are used for strings (text)
    - strings are coloured teal
    - variables are blue
    - keywords are yellow
    - and numbers are pink
    - comments are grey
- I learnt commands like
    - ⌘ + / comments out text
    - /* ... */ comments out large chunks
    - ⌘ + return plays the scene
    - ⌘ + return + shift stops the scene
- I learnt about the layered nature of JS and how it reads though line by line and paints a picture each frame.
- I learnt about the help tab and the resources available to leanr how to make shapes like squareds and ajust their propoties like location, size, colour, and stroke.
- I leanr about frsameCounts and making mini animations. I sort of checked out a bit when Thomas was explaining modulo but I'll understand another day 🤷‍♂️
- then at the end when we are creating th eblogs I learnt about terminal navigation. I'll leave my notes he for future Mataso 🫡
    - ls = list
    - pwd = print working directory
    - cd ~ = chnage directory
    - cd.. +go back (I found that just cd worked for me)
    - open. = open in finder (didnt work for me)

This is sort of cheating becuase I just took it from the template(rather than properly iframing it in) but this is essecialy what we made in class today. 

<canvas id="canvas_example"></canvas>

<script type="module">
    const cnv = document.getElementById (`canvas_example`)
    cnv.width = cnv.parentNode.scrollWidth
    cnv.height = cnv.width * 9 / 16

    const ctx = cnv.getContext (`2d`)
    const pos = {
        x: -100,
        y: cnv.height / 2 - 50
    }
    
    function draw_frame () {
        ctx.fillStyle = `turquoise`
        ctx.fillRect (0, 0, cnv.width, cnv.height)

        ctx.fillStyle = `hotpink`
        ctx.fillRect (pos.x, pos.y, 100, 100)

        pos.x += 2

        if (pos.x > cnv.width) {
            pos.x = -100
        }

        requestAnimationFrame (draw_frame)
    }

    draw_frame ()
</script>

# Homework
Ok, for homework I began looking into for loops. These are ways of repeating code in a clean and minimal way. I started by looking at the example provided

test



-
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
        <a>
            <img id= "back_id" src="/Images/Buttons/Back.png" width="30" height="30" alt="Page 1">
        </a>
        <a href="/" class="button middle">
            <img id= "home_id" src="/Images/Buttons/Home.png" width="40" height="40" alt="Page 2">
        </a>
        <a href="/02-downloading-reaper" class="button right">
            <img id= "next_id" src="/Images/Buttons/Forward.png" width="30" height="30" alt="Page 3">
        </a>
    </div>
</body>



 <!-- # This is h1

![a drippy lemon](logo.svg)

^ images are written like this: `![description](file_path/file_name.png)`

## This is h2

*This is italic.*[^1]

[^1]: This is a footnote, *which can also be italic*.

**This is bold.**

Hyperlinks can be written like this: `[text](https://URL)`

You can find a markdown cheat-sheet [here](https://www.markdownguide.org/cheat-sheet/).

## Maths:

... which can be written inline, like this: $\{ x, y, z \} \in \N$

... or block, like this:

$$ x^2 + y^2 = z^2 $$

Visit [ $\KaTeX$ ](https://katex.org/docs/supported#fractions-and-binomials) for more information about writing maths.

## Embedding video:

<iframe id="coding_train_video" src="https://www.youtube.com/embed/rI_y2GAlQFM?si=RDgjkpunxk1mQzMI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<script type="module">

    console.log (`hello world! 🚀`)

    const iframe  = document.getElementById (`coding_train_video`)
    iframe.width  = iframe.parentNode.scrollWidth
    iframe.height = iframe.width * 9 / 16

</script>

## Embedding p5 sketches:

<iframe id="falling_falling" src="https://editor.p5js.org/capogreco/full/Fkg05m7aA"></iframe>

<script type="module">

    const iframe  = document.getElementById (`falling_falling`)
    iframe.width  = iframe.parentNode.scrollWidth
    iframe.height = iframe.width * 9 / 16 + 42

</script>

## Canvas API

<canvas id="canvas_example"></canvas>

<script type="module">
    const cnv = document.getElementById (`canvas_example`)
    cnv.width = cnv.parentNode.scrollWidth
    cnv.height = cnv.width * 9 / 16

    const ctx = cnv.getContext (`2d`)
    const pos = {
        x: -100,
        y: cnv.height / 2 - 50
    }
    
    function draw_frame () {
        ctx.fillStyle = `turquoise`
        ctx.fillRect (0, 0, cnv.width, cnv.height)

        ctx.fillStyle = `hotpink`
        ctx.fillRect (pos.x, pos.y, 100, 100)

        pos.x += 2

        if (pos.x > cnv.width) {
            pos.x = -100
        }

        requestAnimationFrame (draw_frame)
    }

    draw_frame ()
</script>


 -->