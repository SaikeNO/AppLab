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
    } else setWidthOfPeople()
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

// MAP
const peopleImgs = [...document.querySelectorAll('.testimonial__map__person img')]
const leftArrow = document.querySelector('.slider__arrow--left')
const rightArrow = document.querySelector('.slider__arrow--right')
const slides = [...document.querySelectorAll('.opinion')]

setSrcOfImgs = (array) => {
    array.forEach((item, index) => {
        item.src = `img/people/person${index+1}.png`
    })
}
setSrcOfImgs (peopleImgs)

getPrevAndNext = () => {
    const activeSlide = document.querySelector('.opinion.active')
    const activeIndex = slides.indexOf(activeSlide)

    let nextSlide = slides[activeIndex + 1]
    let prevSlide = slides[activeIndex - 1]

    return [nextSlide, prevSlide];
}

getPosition = () => {
    const activeSlide = document.querySelector('.opinion.active')
    const activeIndex = slides.indexOf(activeSlide)
    const [nextSlide, prevSlide] = getPrevAndNext()
    
    slides.forEach((slide,index) => {
        if(index === activeIndex){
            slide.style.transform = 'translateX(0)'
        } else if (slide === prevSlide){
            slide.style.transform = 'translate(-100%)'
        } else if (slide === nextSlide){
            slide.style.transform = 'translate(110%)'
        }
        // slide.addEventListener('transitioned', () => {
        //     slide.classList.remove('top');
        // })
    })
}

getNextSlide = () => {
    const activeSlide = document.querySelector('.opinion.active')
    const activeIndex = slides.indexOf(activeSlide)
    const [nextSlide, prevSlide] = getPrevAndNext()

    if (activeIndex === slides.length - 2) {
        rightArrow.classList.add('disabled')

    }else if (activeIndex === slides.length - 1) {
        return
    } else {
        rightArrow.classList.remove('disabled')
        leftArrow.classList.remove('disabled')
    }

    activeSlide.classList.remove('active');
    activeSlide.style.transform = 'translate(-100%)';
    nextSlide.classList.add('active');
    nextSlide.style.transform = 'translateX(0)';
    getPosition()
}

getPrevSlide = () => {
    const activeSlide = document.querySelector('.opinion.active')
    const activeIndex = slides.indexOf(activeSlide)
    const [nextSlide, prevSlide] = getPrevAndNext()
    
    if (activeIndex === 1) {
        leftArrow.classList.add('disabled')
    } else if (activeIndex === 0) {
        return
    } else {
        leftArrow.classList.remove('disabled')
        rightArrow.classList.remove('disabled')
    }
    activeSlide.classList.remove('active');
    activeSlide.style.transform = 'translate(100%)';
    prevSlide.classList.add('active');
    prevSlide.style.transform = 'translateX(0)';
    getPosition()
}

leftArrow.addEventListener('click', getPrevSlide)
rightArrow.addEventListener('click', getNextSlide)

const people = [...document.querySelectorAll('.testimonial__map__person')]
setWidthOfPeople = (array, percentOfWidth) => {
    array.forEach( item => {
        item.style.width = `${window.innerWidth * percentOfWidth}px`
        item.style.height = `${window.innerWidth * percentOfWidth}px`
    })
}

if (window.matchMedia('(max-width: 875px)').matches){
    setWidthOfPeople(people, 0.12)
} else if(window.matchMedia('(max-width: 360px)').matches){
    setWidthOfPeople(people, 0.08)
}
