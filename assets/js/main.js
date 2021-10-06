let allSections = document.querySelectorAll('section')
let activeSection = 0
let navUp = document.getElementById('nav-up')
let navDown = document.getElementById('nav-down')
let toTopNav = document.getElementById('nav-right')

hideNav(navUp) // hide initally
hideNav(toTopNav)

function setPos() { // set scroll position vars and show/hide navs 
    activeSection = Number((scrollY / allSections[0].offsetHeight).toFixed(0))
    if (activeSection == 0) hideNav(navUp)
    else showNav(navUp)
    if (activeSection == allSections.length - 1) hideNav(navDown)
    else showNav(navDown)
    activeSection > 1 ? showNav(toTopNav) : hideNav(toTopNav)
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
    if (nav == navUp) {
        nav.style.transform = 'translateY(-100%)'
    } else if (nav == navDown) {
        nav.style.transform = 'translateY(100%)'
    } else if (nav == toTopNav) {
        nav.style.transform = 'translateX(100%)'
    }
    nav.style.cursor = 'default'
}
function makeNavInvisible(nav) {
    nav.style.visibility = 'hidden'
}
function showNav(nav) {
    nav.style.transform = 'translate(0, 0)'
    nav.style.visibility = 'visible'
    nav.style.cursor = 'pointer'
}