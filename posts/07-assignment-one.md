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

Innicialy I exported it with material files link but fixed that up later.*

As you can see, in the blender viewport there was no conections between the frames back legs but there was some sort of error when I viewed it in p5 and on my desktop. I didn't bother fixing this up, I though aslong as the normals pointed in the right direction textureing would function fine and it sort of looks intentional 🧐

![blender bike model](/Images/w3/assignment/blenderBikeModel.png)

<h2 style="color:CornflowerBlue;">Loading models and working out orbitControle</h2>

Next I started loading the models into my sketch. I immidiatly realised it would take a few lines that hoepfuly I could optimise later but for now they were just going to have to take up the space.**

Then when I called the model(variable name) syntax I noticed the models didn't show up. I assumed this was becuause the scale was off so I looked into the p5 resources page which explained I could use a second perameter and dictate "true" to normalise the model scale. Then all I needed to do was push() and pop() each model instance to scale and translate them to model the bike. I could have exported one model but then I coulsn't textue differant parts differant colours or spin the wheels.

Another annoying feature was seeing all the edges of the model. Dispite being low-poly there were plenty of edges that were very distracting but I assumed that setting noStroke() would remove the edges, which it did. 

To rotate and zoom the model I used the orbitControle() syntax but quickly realised if I added any squares abd text for UI later that would also be affected. If I push()'ed the orbitControle into a scope that only the bike was in it meant the velocity of the bike didn't remain. 

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

<a href="https://www.figma.com/proto/ZKlKPdINwOHSP3Z5YdM52G/CSS_Assignment1?node-id=0-1&t=XwW1yqLRu4P6cR95-1" target="_blank">Use this to see the prototype view</a>

This was really helpful to translate what I was thinking to how it might look.

To implement this into my p5 sketch I created rectangles that had the variable "ui" in the x potition meaning I could increase the value when the ui was active bringing each element onto canvas and revert it easily.

Making it smooth on the other hand was much trickier. 
I tryed all sorts of methods of for loops that increment the value to a certain point but I found that it would snap the UI open every time. I turned to old faithful chatGPT. 

![GPT](/Images/w3/assignment/ChatGPTlog.png)

<p style="text-align:center;"> 
<iframe src="https://editor.p5js.org/POP161516/full/OotjsMePT" width="500" height="500"></iframe>
</p>

This produced exactly what I needed but with new syntax???🧐

This lead me into a rabbit hole of discovery about abs and the ternery opperatior. I found abs(probably short of absolute) on the p5 resources and worked out it finds the distance from 0 so essencialy returns negitive numbers as positive, in this case allows the target to work when going back and forth and helps more accuratly snap. Unfortunetly p5 resources and the coding train had nothing on the "? :" but I found <a href="https://www.youtube.com/watch?app=desktop&v=ib8MHSMwtYg&t=13s" target="_blank">this video</a> had fun examples and taught me what the turnery opperator was.

I tried not to blatantly rip the code but much of the functionality is the same. I used the same functionality again later to move the toggle button smoothly and rotate the wheels.  

I think what I wasn't getting was the need to multiply the value by 0.1 or a small fraction to slow the growth and I had no plans to add the snapping feature but it if really helpful. The ternery isn't **really** neccecery but its fun to use and it shortens the code.

Right after implimenting it I wrote some code that checked for mouse position on tab to open and close the UI. 

<p style="text-align:center;"> 
<iframe src="https://editor.p5js.org/POP161516/full/k0Ss7_CYN" width="600" height="450"></iframe>
</p>

This is how I got to the mockup from last week.

<h2 style="color:CornflowerBlue;">Sounds and bike interactivity</h2>

At this point I was getting to the pointy end of the assingment and decided to source my sounds from <a href="https://freesound.org/" target="_blank">freesound.org</a>. This involved me opening up adobe audition to clip and normalise the sounds + clean them up a bit, fading in and out to stop any peaking. Since there wern't to many sounds I tried the method of storing them in the global library and using a for loop to load each sound. This way also stored each loaded sound in an array so I could cycle through teh index to make the active sound new. 

The interactivity for the bike wheels was pretty simple, just rotating on the X axis useing the UI target logic(I could have just made the wheels spin one way but I like the back spin too👍)

The next main issue was working out how make the wheels spin or bell ring when the mouse pressed over spicific parts of the model. It would be a simple fix if the model was static but in 3d the mouse perameters are constantly changing. I tryed working out some sort of hitbox detection with a mouseOver function using a box as a perameter but it wasn't working for me.*** My temporary fix was to add an image at the bottom of the page :/

This was the temporary vertion with sounds (but no way to change them) wheels(but only one spinning and a broken hitbox other the other) and UI with a functioning basket button(but no colour pallet yet)

<p style="text-align:center;"> 
<iframe src="https://editor.p5js.org/POP161516/full/uaWbLa5N-" width="615" height="460"></iframe>
</p>


<h2 style="color:CornflowerBlue;">Pallet class</h2>

This was by far the most time consuming and laborious part of the project. It became clear to me I had very little understanding of classes.

I relyed heavily on the coding train tutorials esspetical chapters <a href="https://www.youtube.com/playlist?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA" target="_blank">6.1 ~ 7.7</a>. Rather than explain the whole journey of understanding classes, below I've included three sketches highlighting significant developments in my process. (1)creating a class and populating a grid with objects (2)mouse interaction changing individual obejcts in the grid (3) finished product with a seperated .js file and a grid of obejcts that set the active colour of another square to the colour clicked.

<p style="text-align:center;"> 
<iframe src="https://editor.p5js.org/POP161516/full/rwbOhqFsc" width="405" height="415"></iframe>
</p>

<p style="text-align:center;"> 
<iframe src="https://editor.p5js.org/POP161516/full/Y_mhhgejH" width="500" height="500"></iframe>
</p>

<p style="text-align:center;"> 
<iframe src="https://editor.p5js.org/POP161516/full/EZwdUJxD8" width="500" height="500"></iframe>
</p>

<h2 style="color:CornflowerBlue;">Feedback</h2>
screen size



<h2 style="color:CornflowerBlue;">Finish</h2>

<h2 style="color:CornflowerBlue;">Issues</h2>

<h2 style="color:CornflowerBlue;">Successes</h2>

## Issues
- **load optimisation
- textures 
- *models mtl
- scale canvas
- ***hitbox
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