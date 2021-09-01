
// menu-toggle
var menu = document.querySelector('.menu');
// var menulist = document.querySelector('.menulist')
// var sec = document.querySelector('section')

// console.log(menu)
menu.addEventListener('click',function(){
    menu.classList.toggle('cancel')
    // menulist.classList.toggle('slidedown')
    // document.body.classList.toggle('disable');
    // sec.classList.toggle('disable')
    
    
    console.log('cancel')
})



// page-transition


//background-graphic 

let canvasHeight = window.innerHeight;
let canvasWidth = window.innerWidth;
    

function map(point,low,high,low2,high2){
    
    p = (high2 - low2) * (point/(high-low));
    return p;
}

let sec = document.querySelector('section')




let angle = 0


function setup(){
    
    createCanvas(canvasWidth,canvasHeight,WEBGL);
    frameRate(30)
}

let sphereWidth = canvasWidth>500?canvasWidth*0.4:canvasWidth*0.4
let size;

function draw(){
    size = (sphereWidth + window.pageYOffset)>1500?1500:sphereWidth + window.pageYOffset/5
    background(10,10,10)

    stroke(250,0,0)
    fill(0,0,0,0)

    let rX = (angle) + 0.005
    let rY = (angle) + 0.005
    rotateX(rY/2)
    rotateY(rX/2)
    sphere(size) 
    angle+=0.01

}