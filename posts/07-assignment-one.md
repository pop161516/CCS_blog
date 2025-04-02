---
title: Assignment One
published_at: 2022-03-24
snippet: -assignment one- summery
disable_html_sanitization: true
allow_math: true
---

<h1 style="color:CornflowerBlue;">Summery of CCS assignment one (p5.js components)</h1>

<h2 style="color:CornflowerBlue;">Creating models</h2>

First step, make your assets!
I innicialy didn't want to source any assets from other libraries but I ran out of time at the end and had to use <a href="https://freesound.org/" target="_blank">freesound.org</a> for some sound effects. 

Really quickly I whipped up a model. I wanted to stay low polly hopfully achiving the nostalgic and cute register.

*Innicialy I exported it with material files link but fixed that up later. 

As you can see, in the blender viewport there was no conections between the frames back legs but there was some sort of error when I viewed it in p5 and on my desktop. I didn't bother fixing this up, I though aslong as the normals pointed in the right direction textureing would function fine and it sort of looks intentional 🧐

![blender bike model](/Images/w3/assignment/blenderBikeModel.png)

<h2 style="color:CornflowerBlue;">Loading models and working out orbitcControle</h2>

Next I started loading the models into my sketch. I immidiatly realised it would take a few lines that hoepfuly I could optimise later but for now they were just going to have to take up the space.

Then when I called the model(variable name) syntax I noticed the models didn't show up. I assumed this was becuause the scale was off so I looked into the p5 resources page which explained I could use a second perameter and dictate "true" to normalise the model scale. Then all I needed to do was push() and pop() each model instance to scale and translate them to model the bike. I could have exported one model but then I coulsn't textue differant parts differant colours or spin the wheels.

Another annoying feature was seeing all the edges of the model. Dispite being low-poly there were plenty of edges that were very distracting but I assumed that setting noStroke() would remove the edges, whitch it did. 

To rotate and zoom the model I used the orbitControle() syntax but quickly realised if I added any squares abd text for UI later that would also be efected. If I push()'ed the orbitControle into a scope that only the bike was in it meant the velocity of the bike didn't remain. 

<p style="text-align:center;"> 
<iframe src="https://editor.p5js.org/POP161516/full/poHV1tn8i" width="500" height="500"></iframe>
</p>

^you can also notice at this point I was using double clicks to change the size of the canvas, with the idea of moveing the bike down and showing the ui that was off screen. Although the rotation point was still the center of the screen meaning the UI would cover the model in some positions.

<h3 style="color:CornflowerBlue;">Solution</h3>

I did a bunch of tests and research into how to manually rotate the model. In the end mouseDrag function helped create the interactivity and I used a function to store and decrement the velosity of the model to simulate air resistance.

The most useful resources were from codeing train videos <a href="https://www.youtube.com/watch?v=6TPVoB4uQCU" target="_blank">18.2</a> + <a href="https://www.youtube.com/watch?v=BW3D9WwalQE" target="_blank">18.5</a> and the <a href="https://p5js.org/reference/p5/rotateX/" target="_blank">p5 resource library</a> 

<h2 style="color:CornflowerBlue;">UI</h2>

Next I wanted to get an idea of what UI elements I might need🤔 I headed to Figma to mock up a super simple vertion of my idea.

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://embed.figma.com/design/ZKlKPdINwOHSP3Z5YdM52G/CSS_Assignment1?node-id=0-1&embed-host=share" allowfullscreen></iframe>

<h2 style="color:CornflowerBlue;">Sounds and bike interactivity</h2>

<h2 style="color:CornflowerBlue;">Pallet class</h2>

<h2 style="color:CornflowerBlue;">Feedback</h2>

<h2 style="color:CornflowerBlue;">Finish</h2>

<h2 style="color:CornflowerBlue;">Issues</h2>

<h2 style="color:CornflowerBlue;">Successes</h2>

## Issues
- load optimisation
- textures 
- *models mtl
- scale canvas
- hitbox
- including boolean
- drawing posiiton was centered rathan than the top left in WEBGL

## Successes
- Found coding train an amazing resource (personaly)
- Successfuly translated visual ideas from figma to p5
- utilised modeling skills 
- Made a project that includes all the code criteria and (that I personaly think) looks, sounds, and acts cute


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
        <a href="/06-working-on-assignment-one" class="button middle">
            <img id= "home_id" src="/Images/Buttons/Back.png" width="40" height="40" alt="Page 2">
        <a href="/" class="button middle">
            <img id= "home_id" src="/Images/Buttons/Home.png" width="40" height="40" alt="Page 2">
        </a>
        <a href="/08-vanilla-javascript" class="button right">
            <img id= "next_id" src="/Images/Buttons/Forward.png" width="30" height="30" alt="Page 3">
        </a>
    </div>
</body>

![blank](/Images/w1/blankpng.png)