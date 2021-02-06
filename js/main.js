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
const moreBtn = document.querySelector('.more-items .btn')

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
        whyUsSection.style.height = `${whyUsItem.clientHeight*6}px`
    } else {
        whyUsSection.style.height = `${whyUsItem.clientHeight}px`
        window.scroll({
            top: document.querySelector('.why-us').offsetTop - 50,
            left: 0,
            behavior: 'smooth'
        });
    }
})

// Pricing
const switchPricing = document.querySelector(".pricing__switch-button input")
const priceParagraph = document.querySelector('.pricing__cards__card--pro .price')
const priceMonth = document.querySelector('.pricing__cards__card--pro .price__month')

switchPricing.addEventListener('change',()=>{
    if(switchPricing.checked){
        priceParagraph.textContent = "$899"
        priceMonth.textContent = "/year"
    } else {
        priceParagraph.textContent = "$99"
        priceMonth.textContent = "/month"
    }
})