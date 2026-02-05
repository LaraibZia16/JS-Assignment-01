// Ask user to select weather and convert input to lowercase
var weather = prompt(`
  Select Weather:
  1. Sunny
  2. Cloudy
  3. Rainy
  4. Snowy
  5. Windy
  6. Stormy
  7. Foggy
  8. Rainbow
  `).toLowerCase();

// If user enters "sunny", show sunny weather card
if (weather === "sunny") {
  document.writeln(`
  <div class="d-flex align-items-center justify-content-center" style="
height: 100vh;
width: 100vw;
background-color:rgb(5, 79, 129);
overflow: hidden;
">
    <div class="card animate__animated animate__backInDown text-center" style="width: 18rem;">
      <img src="./images/sunny.gif" style="background-color: rgb(195, 248, 255);" class="card-img-top animate__animated animate__backInLeft" alt="...">
      <div class="card-body animate__animated animate__backInRight ">
        <h3>Sunny Day</h3>
        <p>The sun is shining bright today. Perfect weather to go outside and enjoy your day.</p>
        <a href="./index.html" class="btn btn-warning">Try Another Weather</a>
      </div>
    </div>
</div>
`)
}

// If user enters "cloudy", show cloudy weather card
else if (weather === "cloudy") {
  document.writeln(`
     <div class="d-flex align-items-center justify-content-center" style="
height: 100vh;
width: 100vw;
background-color: rgb(112, 112, 112);
overflow: hidden;
">
    <div class="card animate__animated animate__backInDown text-center" style="width: 18rem;">
      <img src="./images/cloudy.gif" class="card-img-top animate__animated animate__backInLeft" alt="...">
      <div class="card-body animate__animated animate__backInRight">
        <h3>Cloudy Sky</h3>
        <p>The sky is covered with clouds. It might feel calm and a little cool outside.</p>
        <a href="./index.html" class="btn btn-secondary">Try Another Weather</a>
      </div>
    </div>
 </div>
    `)
}

// If user enters "rainy", show rainy weather card
else if (weather === "rainy") {
  document.writeln(`
 <div class="d-flex align-items-center justify-content-center" style="
height: 100vh;
width: 100vw;
background-color: rgb(0, 144, 163);
overflow: hidden;
">
    <div class="card  animate__animated animate__backInDown text-center" style="width: 18rem;">
      <img src="./images/rainy.gif" style="background-color: rgb(3, 51, 58);" class="card-img-top animate__animated animate__backInLeft" alt="...">
      <div class="card-body animate__animated animate__backInRight">
        <h3>Rainy Weather</h3>
        <p>It is raining outside. Don’t forget to carry an umbrella and stay dry.</p>
        <a href="./index.html" class="btn btnrainy">Try Another Weather</a>
      </div>
    </div>
</div>
`)
}

// If user enters "snowy", show snowy weather card
else if (weather === "snowy") {
  document.writeln(`
     <div class="d-flex align-items-center justify-content-center" style="
height: 100vh;
width: 100vw;
background-color: rgb(4, 42, 73);
overflow: hidden;
">
    <div class="card  animate__animated animate__backInDown text-center" style="width: 18rem;">
      <img src="./images/snowy.gif" style="background-color: rgb(151, 118, 87);" class="card-img-top animate__animated animate__backInLeft" alt="...">
      <div class="card-body animate__animated animate__backInRight">
        <h3>Snowy Day</h3>
        <p>Snow is falling and the weather is very cold. Stay warm and enjoy the winter vibes.</p>
        <a href="./index.html" class="btn btnsnowy">Try Another Weather</a>
      </div>
    </div>
 </div>
    `)
}

// If user enters "windy", show windy weather card
else if (weather === "windy") {
  document.writeln(`
<div class="d-flex align-items-center justify-content-center" style="
height: 100vh;
width: 100vw;
background-color: rgb(94, 114, 4);
overflow: hidden;
">
    <div class="card  animate__animated animate__backInDown text-center" style="width: 18rem;">
      <img src="./images/windy.gif" style="background-color:rgb(214, 239, 248);" class="card-img-top animate__animated animate__backInLeft" alt="...">
      <div class="card-body animate__animated animate__backInRight">
        <h3>Windy Weather</h3>
        <p>Strong winds are blowing today. Be careful when going outside.</p>
        <a href="./index.html" class="btn btnwindy">Try Another Weather</a>
      </div>
    </div>
</div>
`)
}

// If user enters "stormy", show stormy weather card
else if (weather === "stormy") {
  document.writeln(`
   <div class="d-flex align-items-center justify-content-center" style="
height: 100vh;
width: 100vw;
background-color:  rgb(219, 211, 146);
overflow: hidden;
">
    <div class="card  animate__animated animate__backInDown text-center" style="width: 18rem;">
      <img src="./images/stormy.gif" style="background-color: rgb(53, 49, 10);" class="card-img-top animate__animated animate__backInLeft" alt="...">
      <div class="card-body animate__animated animate__backInRight">
        <h3>Stormy Weather</h3>
        <p>The weather is stormy with heavy winds and clouds. It is safer to stay indoors.</p>
        <a href="./index.html" class="btn btnstormy">Try Another Weather</a>
      </div>
    </div>
 </div>
    `)
}

// If user enters "foggy", show foggy weather card
else if (weather === "foggy") {
  document.writeln(`
<div class="d-flex align-items-center justify-content-center" style="
height: 100vh;
width: 100vw;
background-color: rgb(190, 199, 199);
overflow: hidden;
">
<div class="card  animate__animated animate__backInDown text-center" style="width: 18rem;">
      <img src="./images/foggy.gif" style="background-color:  rgb(82, 82, 82);" class="card-img-top animate__animated animate__backInLeft" alt="...">
      <div class="card-body animate__animated animate__backInRight">
        <h3>Foggy Morning</h3>
        <p>Fog is everywhere and visibility is low. Drive carefully and stay alert.</p>
        <a href="./index.html" class="btn btn-dark">Try Another Weather</a>
      </div>
    </div>
</div>
`)
}

// If user enters "rainbow", show rainbow weather card
else if (weather === "rainbow") {
  document.writeln(`
<div class="d-flex align-items-center justify-content-center" style="
height: 100vh;
width: 100vw;
background-color: rgb(108, 2, 122);
overflow: hidden;
">
    <div class="card  animate__animated animate__backInDown text-center" style="width: 18rem;">
      <img src="./images/rainbow.gif" style="background-color: rgb(203, 245, 255);" class="card-img-top animate__animated animate__backInLeft" alt="...">
      <div class="card-body animate__animated animate__backInRight">
        <h3>Rainbow View</h3>
        <p>A beautiful rainbow appears after the rain. Nature looks colorful and fresh.</p>
        <a href="./index.html" class="btn btnbow">Try Another Weather</a>
      </div>
    </div>
</div>
`)
}

// If user enters an invalid weather, show error message
else {
  document.writeln(`
<div class="d-flex align-items-center justify-content-center" style="
height: 100vh;
width: 100vw;
background-color: rgb(2, 58, 122);
overflow: hidden;
">
    <div class="card  animate__animated animate__backInDown text-center" style="width: 20rem;">
      <img src="./images/notfound.gif" style="background-color: rgb(203, 245, 255);" class="card-img-top animate__animated animate__backInLeft" alt="...">
      <div class="card-body animate__animated animate__backInRight">
        <h3>Weather Not Found</h3>
        <p>Sorry, we couldn't find the weather information you're looking for. Please try again.</p>
        <a href="./index.html" class="btn btnerror">Try Another Weather</a>
      </div>
    </div>
</div>
`)
}
