let allSections = document.querySelectorAll('section')
let activeSection = 0
let scrollPos = 0
let navOverlay = document.getElementById('nav-overlay')
let navUp = document.getElementById('nav-up')
let navDown = document.getElementById('nav-down')

hideNav(navUp) // hide initally

function setPos() { // set scroll position vars and show/hide navs 
    scrollPos = window.pageYOffset
    activeSection = Number((scrollPos / allSections[0].offsetHeight).toFixed(0))
    if (activeSection == 0) hideNav(navUp)
    else showNav(navUp)
    if (activeSection == allSections.length - 1) hideNav(navDown)
    else showNav(navDown)
    console.log(activeSection)
}

function navigateUp() {
    if (activeSection > 0) {
        window.scrollTo({ top: (scrollPos - allSections[activeSection - 1].offsetHeight), left: 0, behavior: 'smooth' })
        activeSection--
    }
}
function navigateDown() {
    if (activeSection < allSections.length - 1) {
        showNav(navUp)
        window.scrollTo({ top: scrollPos + allSections[activeSection + 1].offsetHeight, left: 0, behavior: 'smooth' })
        activeSection++
    }
}

function hideNav(nav) {
    nav.style.visibility = 'hidden'
    nav.style.cursor = 'default'
}
function showNav(nav) {
    nav.style.visibility = 'visible'
    nav.style.cursor = 'pointer'
}