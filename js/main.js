const burger = document.querySelector('.main__nav__burger');
const menu = document.querySelector('.main__nav__ul')

burger.addEventListener('click', ()=>{
    menu.classList.toggle('active')
    if(menu.classList.contains('active')){
        menu.style.opacity = 1
    } else{
        menu.style.opacity = 0
    }
})

const whyUsSection = document.querySelector('.items-awards')
const whyUsItem = document.querySelector('.items-awards__item')
const moreBtn = document.querySelector('.more-items')

window.addEventListener('resize', ()=>{
    if(window.innerWidth > 854){
        menu.style.opacity = 1
        menu.classList.remove('active')
    }  
})

const mediaQuery = window.matchMedia('(max-width: 768px)')
if(mediaQuery.matches){
    whyUsSection.style.height = `${whyUsItem.clientHeight}px`
    moreBtn.style.display= 'block'
} else {
    moreBtn.style.display= 'none'
    whyUsSection.style.height = 'auto'
}

moreBtn.addEventListener('click', ()=>{
    if(whyUsSection.style.height === `${whyUsItem.clientHeight}px`){
        whyUsSection.style.height = 'auto'
    } else {
        whyUsSection.style.height = `${whyUsItem.clientHeight}px`
    }
})