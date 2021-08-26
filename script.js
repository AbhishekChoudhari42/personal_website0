
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
// background-graphic

// auto-scroll

// page-transition

// contact-form-submission

let canvasHeight = window.innerHeight;
let canvasWidth = window.innerWidth;
    
// window.onresize = function(){
//    location.reload()
// }
function map(point,low,high,low2,high2){
    
    p = (high2 - low2) * (point/(high-low));
    return p;
}

let sec = document.querySelector('section')




let angle = 0.1


function setup(){
    
    createCanvas(canvasWidth,canvasHeight,WEBGL);
    frameRate(30)
}
let size = 150
function draw(){
    // translate(canvasWidth/2,0)
    size = (150 + window.pageYOffset)>1500?1500:150 + window.pageYOffset/5
    background(10,10,10)
    // stroke(150 + cos(angle)*105,0,100 + sin(angle)*155)
    // stroke((cos(angle)*cos(angle))*255,0,sin(angle)*sin(angle)*255)
    stroke(250,0,0)
    // strokeWeight(2)
    fill(0,0,0,0)
   
    // let rX = mouseX*(angle/5000) + 0.005
    // let rY = mouseY*(angle/5000) + 0.005
    let rX = (angle) + 0.005
    let rY = (angle) + 0.005
    rotateX(rY/2)
    rotateY(rX/2)
    sphere(size) 
    // box(size)
    angle+=0.01

}