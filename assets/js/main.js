let sections = document.querySelectorAll('section')
let activeSection = 0
let lastActiveSection = null
let navUp = document.getElementById('nav-up')
let navDown = document.getElementById('nav-down')
let toTopNav = document.getElementById('nav-right')
let mobileMenuVisible = false
let mobileMenuSvg = document.getElementById('mobile-menu-svg')
let navLeftAnchors = document.getElementById('nav-left').querySelectorAll('a')

reset()

function reset() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    activeSection = 0
    lastActiveSection = null
    slideInItems(activeSection)
}

function showHideMobileMenu() {
    if (mobileMenuVisible) {
        navLeftAnchors.forEach((elt) => elt.setAttribute('style', 'transform: translateY(-100vh);'))
        mobileMenuSvg.style.fill = '#668393'
        mobileMenuSvg.style.transform = 'scale(1)'
        mobileMenuVisible = false
    } else {
        navLeftAnchors.forEach((elt) => elt.setAttribute('style', 'transform: translateY(0vh);'))
        mobileMenuSvg.style.fill = 'var(--color3)'
        mobileMenuSvg.style.transform = 'scale(1.1)'
        mobileMenuVisible = true
    }
}

function setActiveSection() {
    activeSection = Number((scrollY / sections[0].offsetHeight).toFixed(0))
    if (lastActiveSection != activeSection) {
        showHideNavs()
        slideInItems(activeSection)
        lastActiveSection = activeSection
    }
}

function showHideNavs() {
    activeSection == 0 ? hideNav(navUp) : showNav(navUp)
    activeSection == sections.length - 1 ? hideNav(navDown) : showNav(navDown)
    activeSection > 1 ? showNav(toTopNav) : hideNav(toTopNav)
}

function slideInItems(section) {
    let divs = [...sections[section].getElementsByClassName('left'), ...sections[section].getElementsByClassName('right')]
    divs.forEach((elt) => elt.setAttribute('style', 'animation: slide-in 600ms cubic-bezier(.36,1.14,.64,1) 0s 1 normal forwards'))
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