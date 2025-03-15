---
title: Class two, Electric Boogaloo
published_at: 2022-03-06
snippet: Creative coding 101
disable_html_sanitization: true
allow_math: true
---

<h1 style="color:CornflowerBlue;">Summery</h1>

This class seemed very short, we just went though a breif history of creative coding + the significant figures and the mycelial creative structure. Then we worked on homework and blog stuff.

<h1 style="color:CornflowerBlue;">Class work</h1>
😐

<h1 style="color:CornflowerBlue;">Homework</h1>

<h3 style="color:CornflowerBlue;">Asking peers questions:</h3>

**Questions to ask:**
1. what do you think is going on, under the hood?
2. what concepts would I need to understand in order to replicate this work in p5?
3. what resources might help me to learn those concepts?

**Lam:**
1. There could be various squares scaleing from the centre that overlap. They don't seem to redraw thre background each frame🤔
2. you might need to learn how to make the cut off square shape. Like a triangle like a trapazoid. You might also need to learn how to line up/connect each shape.
3. W3schools and p5 resources page.

... I didn't get any other responces but I'll work on it👀

<h3 style="color:CornflowerBlue;">JavaScript homework</h3>

The next part of the homework was to imporve at JavaScript... 
I looked briefly at the resources provided: and went through the 
- comments
- print and log
- frameCount & noLoop
- template literals

<h4 style="color:CornflowerBlue;">Notes:</h4>

- Try to use console.log rather than print becuase it will appempt to print the page to a printer if outside of the set up scope.
- Useing backticks rathas aposed to quotations means you can concole.log ${...} expretions.
- haveing one "=" triggers an assignment 

This was a quick sketch I whipped up to demonstrate an understanding of each topic:
<iframe src="https://editor.p5js.org/POP161516/full/BZ5I14iuA"   width="500" height="300" aline="middle" >  </iframe>

<h4 style="color:CornflowerBlue;">Code:</h4>

``` function setup() {
    //frameRate is reduced to make the numbers count up slower
    //increasing this will increase the difficulty
    frameRate(3);
    createCanvas(500, 200);
    background(200);
    noStroke();
    Num = 0;
    }

function draw() {
  background(200);

  //makign sure the text is styled right
  textAlign(CENTER);
  textSize(25);
  fill("black");

  //game text
  text(`Click to reduce the number!!`, 250, 75);
  text(`${frameCount + Num}`, 250, 125);

  //printing the effective value of clicks
  console.log(` ${Num} `);

  //easter egg
  if (Num < -1000) {
    textSize(10);
    text(`wow... you've been clicking for a while :/`, 250, 190);
  }

  //ending the game
  if (Num + frameCount < 0) {
    noLoop();
    background(200);
    text(`You win!`, 250, 100);
    console.log(`Good Game!`);
  }
}

// function creating mouse click interactivity
function mousePressed() {
  Num -= 1;
}`



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
        <a href="/01-first-blog-post" class="button middle">
            <img id= "home_id" src="/Images/Buttons/Back.png" width="40" height="40" alt="Page 2">
        <a href="/" class="button middle">
            <img id= "home_id" src="/Images/Buttons/Home.png" width="40" height="40" alt="Page 2">
        </a>
        <a href="/03-introductions" class="button right">
            <img id= "next_id" src="/Images/Buttons/Forward.png" width="30" height="30" alt="Page 3">
        </a>
    </div>
</body>

![blank](/Images/w1/blankpng.png)
