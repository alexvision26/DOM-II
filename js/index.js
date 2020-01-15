// Your code goes here

const pageTitle = document.querySelector('.logo-heading')
var randOne = (Math.floor(Math.random()*255))
var randTwo = (Math.floor(Math.random()*255))
var randThree = (Math.floor(Math.random()*255))

const nav = document.querySelector('.text-content')
nav.addEventListener('click', function(e){
    nav.style.backgroundColor = 'orange'
    e.stopPropagation();
})

//Makes title color random every click
pageTitle.addEventListener('click', function(){
    pageTitle.style.color = `rgb(${randOne}, ${randTwo}, ${randThree})`
})


//Changes the color of menu items
const menuItems = document.querySelectorAll('.nav-link')
menuItems.forEach(el => {
    el.addEventListener('mousemove', () =>{ //When mouse enters, generate random color
        el.style.color = `rgb(${randOne}, ${randTwo}, ${randThree})`
        el.style.transition = '0.3s'
    })
})
menuItems.forEach(el => {
    el.addEventListener('mouseout', () =>{ //When mouse leaves, return to default
        el.style.color = 'black'
        el.style.textDecoration = 'none'
    })
})

menuItems.forEach(el =>{
    el.addEventListener('mouseup', function(){
        el.style.color = 'yellow'
        el.style.transition = '0.8s'
        el.style.textDecoration = 'underline'
    })
})

menuItems.forEach(el => {
    el.addEventListener('click', function(e){
        e.preventDefault();
    })
})

//Pop up to protect content
const protectPage = document.querySelector('html')
protectPage.addEventListener('contextmenu', event =>{
    event.preventDefault();
    alert('This content is copyright protected!')
})

//Images grow on hover
const growImg = document.querySelectorAll('img')
growImg.forEach(el => {
    el.addEventListener('dblclick', function(){
        el.style.transition = '0.4s'
        el.style.transform = 'scale(1.06)'
    })
})

//Adds image pop up on scroll
function scrollAppear(){
    var imgAppear = document.querySelector('.img-dest');
    var imgPosition = imgAppear.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.5;

    if (imgPosition < screenPosition){
        imgAppear.classList.add('img-appear')
    }
}
window.addEventListener('scroll', scrollAppear)

//H2 Hghlights titles on hover
const newSub = document.querySelectorAll('h2, h4')
newSub.forEach(el => {
    el.addEventListener('mouseenter', function(){
        el.style.backgroundColor = 'yellow'
        el.style.width = '85%'
        el.stopPropagation();
    })
})

newSub.forEach(el => {
    el.addEventListener('mousedown', function(){
        el.style.backgroundColor = 'transparent'
    })
})

//Allows scrolling on the title to resize
let scale = 1;
function scrollToZoom(e){
    e.preventDefault();
    scale += e.deltaY * -0.001;
    scale = Math.min(Math.max(.125, scale), 4);
    pageTitle.style.transform = `scale(${scale})`;
}
pageTitle.addEventListener('wheel', scrollToZoom)
