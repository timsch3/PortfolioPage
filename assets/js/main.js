let sections = document.querySelectorAll('section')
let activeSection = 0
let navUp = document.getElementById('nav-up')
let navDown = document.getElementById('nav-down')
let toTopNav = document.getElementById('nav-right')

scrollToTop() // reset on page reload

function scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    activeSection = 0
}

function setPos() { // set scroll position vars and show/hide navs
    activeSection = Number((scrollY / sections[0].offsetHeight).toFixed(0))
    activeSection == 0 ? hideNav(navUp) : showNav(navUp)
    activeSection == sections.length - 1 ? hideNav(navDown) : showNav(navDown)
    activeSection > 1 ? showNav(toTopNav) : hideNav(toTopNav)
}

function navigateUp() {
    if (activeSection > 0) {
        window.scrollTo({ top: (sections[0].offsetHeight * (activeSection - 1)), left: 0, behavior: 'smooth' })
        activeSection--
    }
}
function navigateDown() {
    if (activeSection < sections.length - 1) {
        window.scrollTo({ top: (sections[0].offsetHeight * (activeSection + 1)), left: 0, behavior: 'smooth' })
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
        nav.style.transform = 'translateX(200%)'
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