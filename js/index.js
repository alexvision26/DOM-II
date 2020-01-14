// Your code goes here

const pageTitle = document.querySelector('.logo-heading')
var randOne = (Math.floor(Math.random()*255))
var randTwo = (Math.floor(Math.random()*255))
var randThree = (Math.floor(Math.random()*255))

//Makes title color random every click
pageTitle.addEventListener('click', function(){
    pageTitle.style.color = `rgb(${randOne}, ${randTwo}, ${randThree})`
})

const menuItems = document.querySelectorAll('.nav-link')

menuItems.forEach(el => {
    el.addEventListener('mousemove', () =>{
        el.style.color = `rgb(${randOne}, ${randTwo}, ${randThree})`
        el.style.transition = '0.3s'
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


//Changes the color of menu items
menuItems.forEach(el => {
    el.addEventListener('mouseout', () =>{
        el.style.color = 'black'
        el.style.textDecoration = 'none'
    })
})


//H2 Hovers
const newSub = document.querySelectorAll('h2, h4')
newSub.forEach(el => {
    el.addEventListener('mouseenter', function(){
        el.style.backgroundColor = 'yellow'
        el.style.width = '85%'
    })
})

