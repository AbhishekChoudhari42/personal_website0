
// preloader

paceOptions = {
    ajax:true,
    document:true,
    eventLag:false
}
Pace.on('done',function(){
    document.querySelector('.preloader').classList.add('donee')
    document.querySelector('.pace').style.display = 'none';
})



// menu - animation



var menu = document.querySelector('.menu');
var slide = document.querySelectorAll('.slide');
var slideInfo= document.querySelector('.slide-info');




menu.addEventListener('click',function(){
    


    // gsap.to(".slide", {translate: 100, duration: 1});

    menu.classList.toggle('cancel');
    slideInfo.classList.toggle('show')

    slide.forEach(element => {
        element.classList.toggle('open1')
    });
   



    
    
    
})
let infoLink = document.querySelectorAll('.slide-info a');
infoLink.forEach(element => {
    element.addEventListener('click',function(){
        menu.classList.toggle('cancel');
        slideInfo.classList.toggle('show')
    
        slide.forEach(element => {
            element.classList.toggle('open1')
        });
    })
});

// scroll

var scrollToTop = document.querySelector('.scroll-to-top a');

var lastscroll = 0;
var navbar = document.querySelector('.navigation-bar');
var op = 0
window.addEventListener('scroll',function(){
    console.log('show')
    
    

    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollToTop.style.opacity = (scrollTop > 1000)?1:0
    


    if(scrollTop > lastscroll){
        navbar.style.top = '-100%'
        console.log('down')

    }
    else{
        navbar.style.top = '0%'
        console.log('up')
        

    }
    lastscroll = scrollTop;
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

let sphereWidth = canvasWidth>500?canvasWidth*0.15:canvasWidth*0.4
let size;
let c = 0
setInterval(() => {
    c = c==0?1:0
}, 500);

function draw(){
    size = (sphereWidth + window.pageYOffset)>1500?1500:sphereWidth + window.pageYOffset/5
    background(0,0,0)

    stroke(205,0,0)
    fill(0,0,0,0)

    let rX = (angle) + 0.005
    let rY = (angle) + 0.005
  
    rotateX(rY/2)
    rotateY(rX/2)
    sphere(size) 

    fill(255,0,0)

   

   
    angle+=0.01

}