const burger = document.querySelector('.main__nav__burger');
const menu = document.querySelector('.main__nav__ul')

burger.addEventListener('click', ()=>{
    menu.classList.toggle('active')
    if(menu.classList.contains('active')){
        menu.style.opacity = 1
        document.body.style.overflowY= 'hidden'
    } else{
        menu.style.opacity = 0
        document.body.style.overflowY = 'initial'
    }
})

window.addEventListener('resize', ()=>{
    if(window.innerWidth > 854){
        menu.style.opacity = 1
    } 
})
