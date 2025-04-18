---
title: Working on assignment one
published_at: 2025-03-21
snippet: -w3:c2- filler 😐
disable_html_sanitization: true
allow_math: true
---

<h1 style="color:CornflowerBlue;">Summery</h1>

In today's lecture, we went through different coding styles. 

Then we ran through last week's homework 📚🙏 (explaining how falling falling works)

<h1 style="color:CornflowerBlue;">Class Work</h1>

We didn't do too much in class this class. Mainly because most people were working on their assignments. We just commented through "falling falling" and learnt to separate the class into a new file.

I was doing a lot of work on my assignment at this point. I'll include a snippet of the process here but rather than splitting it into different posts I'll publish an "assignment one" post with all the process soon🔜

([Assignment one post(not active)](https://editor.p5js.org/POP161516/sketches/avsd5Y1ui))

<h1 style="color:CornflowerBlue;">Homework</h1>

1) Explain how I will use:
    **Variables** - very easily, in fact it would be way more challenging to create an interactive piece with no variables. An example of one I might use could be to store the value of my bikes position so I can rotate it without using orbitControle.

    Functions - by default I'll use setup and draw but I might use a function to make some interactivity with the mousepress() or mousedragged()for bike movement

    Iteration - I might use a loop like a for loop to make a grid of colours in a colour pallet without having to draw each square🤷

    Boolean logic - I could store the state of the UI e.g. uiIsOpen === true and uiIsOpen === false. 

    Arrays - I may may need to store position or colour vales in my colour pallet squares which can be stored through an array. [listing, the, colours]

    Classes - Again with my colour pallet I'll need to simplify it and make a cookie cutter so that I don't have to re-write the mouse register position and 'clicked' and active colour code.

2) Embed a rough draft

<p style="text-align:center;"> 
<iframe src="https://editor.p5js.org/POP161516/full/k0Ss7_CYN" width="600" height="450"></iframe>
</p>

In this version, I managed to figure out the UI movement and the bike model movement ≠ orbitControle.

I'm still missing **A LOT** of the ideas and required components but we'll get there💪🤓

In terms of visual cuteness, I think the pink is doing the heavy lifting. With the UI movement I managed to make it fluid rather than flat which I think adds cuteness of the interaction. Sonically, Nutt'in😐... yet

What communities and resources did you learn from?

A combination of <a href="https://p5js.org/reference/p5/rotateX/" target="_blank">p5.js resources</a> and Coding train videos <a href="https://www.youtube.com/watch?v=6TPVoB4uQCU" target="_blank">18.2</a> , <a href="https://www.youtube.com/watch?v=BW3D9WwalQE" target="_blank">18.5</a> helped me loadmodels and create my own 3d movement without orbit control.

It was important to make a non-orbitControl approach because the UI elements needed to be static. Here is an earlier mock of my sketch:

<p style="text-align:center;"> 
<iframe src="https://editor.p5js.org/POP161516/full/poHV1tn8i" width="500" height="500"></iframe>
</p>

What's been good and bad?:

So far I've enjoyed working out the mousePressed functions and being able to move the UI components. I also love the energy and enthusiasm of the coding train videos!

I found the analog 3d movement challanging but I got it in the end. I want to find a better way of preloading each model but I've been confused. I wanted to set up a loop for each model to load but it doesn't like when I use `` or when I use "" so it only works when I have no file path and leave all the models in the global library :/ not ideal.




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
        <a href="/05-leraning-more-p5" class="button middle">
            <img id= "home_id" src="/Images/Buttons/Back.png" width="40" height="40" alt="Page 2">
        <a href="/" class="button middle">
            <img id= "home_id" src="/Images/Buttons/Home.png" width="40" height="40" alt="Page 2">
        </a>
        <a href="/07-assignment-one" class="button right">
            <img id= "next_id" src="/Images/Buttons/Forward.png" width="30" height="30" alt="Page 3">
        </a>
    </div>
</body>

![blank](/Images/w1/blankpng.png)