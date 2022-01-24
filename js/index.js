// Burger
function burger(){
    const navbar = document.querySelector('.navbar')
    navbar.classList.toggle('active')
}
function link(){
    const navbar = document.querySelector('.navbar')
    navbar.classList.toggle('active')
}


// When Scroll Y
window.addEventListener('scroll', function(){
    if (window.scrollY > 100){
        const scroll = document.querySelector('.navbar')
        scroll.classList.add('scrolled')
    }
    else{
        const scroll = document.querySelector('.navbar')
        scroll.classList.remove('scrolled')
    }
})


