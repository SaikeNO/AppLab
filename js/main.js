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
const sliderImg = document.querySelector('.slider__img img');
const sliderPersonalTitle = document.querySelector('.slider__personal__name .name__title');
const sliderPersonalFirst = document.querySelector('.slider__personal__name .name__first');
const sliderPersonalLast = document.querySelector('.slider__personal__name .name__last');
const sliderPersonalProff = document.querySelector('.slider__personal__proffesion');
const slides = [...document.querySelectorAll('.opinion')]

async function fetchRandomUsers(url = ''){
    const users = await fetch(url)
        .then(response => {
                if(response.ok){
                    return response
                } else {
                    throw Error(response.status)
                }
            })
        .then(response => response.json())
        .then(response => response.results)
        .catch(error => console.log(error + " coś nie tak"))
    return users
}

async function setRandomUsers() {
    const users = await fetchRandomUsers('https://randomuser.me/api/?results=7')

    const imgs = users.map(user => user.picture.medium)
    const name = users[0].name

    peopleImgs.forEach((item, index) => {
        item.src = imgs[index]
    })
    sliderImg.src = imgs[0]
    console.log(users[0])
    sliderPersonalTitle.textContent = name.title
    sliderPersonalFirst.textContent = name.first
    sliderPersonalLast.textContent = name.last
    sliderPersonalProff.textContent = users[0].location.city

}
setRandomUsers ()

peopleImgs.forEach((person, index)=>{
    person.addEventListener('click', function(){
        sliderImg.src = this.src
    })
})

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
            slide.style.transform = 'translate(-130%)'
        } else if (slide === nextSlide){
            slide.style.transform = 'translate(130%)'
        }
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
    activeSlide.style.transform = 'translate(-130%)';
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
    activeSlide.style.transform = 'translate(130%)';
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




// // Example POST method implementation:
// async function postData(url = '', data = {}) {
//   // Default options are marked with *
//   const response = await fetch(url, {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//       'Content-Type': 'application/json'
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     body: JSON.stringify(data) // body data type must match "Content-Type" header
//   });
//   return response.json(); // parses JSON response into native JavaScript objects
// }

// postData('https://example.com/answer', { answer: 42 })
//   .then(data => {
//     console.log(data); // JSON data parsed by `data.json()` call
//   });