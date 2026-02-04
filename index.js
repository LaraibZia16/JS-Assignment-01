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

if (weather === "sunny") {
  document.writeln(`
    
      <div class="d-flex align-items-center justify-content-center" style="
height: 100vh;
width: 100vw;
background-color:rgb(5, 79, 129);
overflow: hidden;
">

    <div class="card text-center" style="width: 18rem;">
      <img src="./images/sunny.gif" style="background-color: rgb(195, 248, 255);" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s
          content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
</div>
    
    `)
} else if (weather === "cloudy") {
  document.writeln(`
     <div class="d-flex align-items-center justify-content-center" style="
height: 100vh;
width: 100vw;
background-color: rgb(112, 112, 112);
overflow: hidden;
">

    <div class="card text-center" style="width: 18rem;">
      <img src="./images/cloudy.gif" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s
          content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
 </div>
    `)
} else if (weather === "rainy") {
  document.writeln(`
 
 <div class="d-flex align-items-center justify-content-center" style="
height: 100vh;
width: 100vw;
background-color: rgb(0, 144, 163);
overflow: hidden;
">

    <div class="card text-center" style="width: 18rem;">
      <img src="./images/rainy.gif" style="background-color: rgb(3, 51, 58);" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s
          content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
</div>
 

`)
} else if (weather === "snowy") {
  document.writeln(`
    
     <div class="d-flex align-items-center justify-content-center" style="
height: 100vh;
width: 100vw;
background-color: rgb(4, 42, 73);
overflow: hidden;
">

    <div class="card text-center" style="width: 18rem;">
      <img src="./images/snowy.gif" style="background-color: rgb(151, 118, 87);" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s
          content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
 </div>
    
    `)
} else if (weather === "windy") {
  document.writeln(`
 
<div class="d-flex align-items-center justify-content-center" style="
height: 100vh;
width: 100vw;
background-color: rgb(94, 114, 4);
overflow: hidden;
">

    <div class="card text-center" style="width: 18rem;">
      <img src="./images/windy.gif" style="background-color:rgb(214, 239, 248);" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s
          content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
</div>

`)
}else if (weather === "stormy") {
  document.writeln(`
    
   <div class="d-flex align-items-center justify-content-center" style="
height: 100vh;
width: 100vw;
background-color:  rgb(219, 211, 146);
overflow: hidden;
">

    <div class="card text-center" style="width: 18rem;">
      <img src="./images/stormy.gif" style="background-color: rgb(53, 49, 10);" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s
          content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
 </div>
    `)
} else if (weather === "foggy") {
  document.writeln(`
 
<div class="d-flex align-items-center justify-content-center" style="
height: 100vh;
width: 100vw;
background-color: rgb(190, 199, 199);;
overflow: hidden;
">
<div class="card text-center" style="width: 18rem;">
      <img src="./images/foggy.gif" style="background-color:  rgb(82, 82, 82);" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s
          content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
</div>

`)
}else if (weather === "rainbow") {
  document.writeln(`
 
<div class="d-flex align-items-center justify-content-center" style="
height: 100vh;
width: 100vw;
background-color: rgb(108, 2, 122);
overflow: hidden;
">

    <div class="card text-center" style="width: 18rem;">
      <img src="./images/rainbow.gif" style="background-color: rgb(203, 245, 255);" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s
          content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
</div>

`)
}

else {
   document.writeln(`
 
<div class="d-flex align-items-center justify-content-center" style="
height: 100vh;
width: 100vw;
background-color: rgb(2, 58, 122);
overflow: hidden;
">

    <div class="card text-center" style="width: 25rem;">
      <img src="./images/notfound.gif" style="background-color: rgb(203, 245, 255);" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Weather Not Found</h5>
        <p class="card-text">Sorry, we couldn't find the weather information you're looking for. Please try again later.</p>
        <a href="#" style="background-color: rgb(1, 59, 59);" class="btn btn-primary">Try Again</a>
      </div>
    </div>
</div>

`)
}