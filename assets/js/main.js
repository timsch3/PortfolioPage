let allSections = document.querySelectorAll('section')
let activeSection = 0
let navOverlay = document.getElementById('nav-overlay')
let navUp = document.getElementById('nav-up')
let navDown = document.getElementById('nav-down')

hideNav(navUp) // hide initally

function setPos() { // set scroll position vars and show/hide navs 
    activeSection = Number((scrollY / allSections[0].offsetHeight).toFixed(0))
    if (activeSection == 0) hideNav(navUp)
    else showNav(navUp)
    if (activeSection == allSections.length - 1) hideNav(navDown)
    else showNav(navDown)
    console.log(scrollY)
    console.log(window.pageYOffset)
}

function navigateUp() {
    if (activeSection > 0) {
        window.scrollTo({ top: (allSections[0].offsetHeight * (activeSection - 1)), left: 0, behavior: 'smooth' })
        activeSection--
    }
}
function navigateDown() {
    if (activeSection < allSections.length - 1) {
        window.scrollTo({ top: (allSections[0].offsetHeight * (activeSection + 1)), left: 0, behavior: 'smooth' })
        activeSection++
    }
}

function hideNav(nav) {
    setTimeout(makeNavInvisible(nav), 300)
    nav.style.transform = 'scaleY(0)'
    nav == navUp ? nav.style.transform = 'translateY(-100%)' : nav.style.transform = 'translateY(100%)'
    nav.style.cursor = 'default'
}
function makeNavInvisible(nav) {
    nav.style.visibility = 'hidden'
}
function showNav(nav) {
    nav.style.visibility = 'visible'
    nav.style.transform = 'scaleY(1)'
    nav.style.cursor = 'pointer'
}