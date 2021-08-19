
const  img = document.getElementById('logo');
const  pj = document.getElementById('pj');
const  rs = document.getElementById('rs');
const  cm = document.getElementById('cm');
const welcome = document.querySelector('.welcome')
const content= document.querySelector('.content')
const resume = document.querySelector('.resume_container')
const contactMe = document.querySelector('.contact__inner')
function scrollTo (element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: "smooth"
    })
}

img.addEventListener('click', () => {
    scrollTo(welcome)
})

pj.addEventListener('click', () => {
    scrollTo(content)
})

rs.addEventListener('click', () => {
    scrollTo(resume)
})

cm.addEventListener('click', () => {
    scrollTo(contactMe)
})