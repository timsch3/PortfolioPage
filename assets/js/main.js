const sections = document.querySelectorAll("section");
let activeSection = 0;
let lastActiveSection = null;
const navUp = document.getElementById("nav-up");
const navDown = document.getElementById("nav-down");
const toTopNav = document.getElementById("nav-right");
const toTopNavSvg = document.getElementById("to-top-nav-svg");
let mobileMenuOn = false;
const mobileMenuSvg = document.getElementById("mobile-menu-svg");
const navLeftAnchors = document
  .getElementById("nav-left")
  .querySelectorAll("a");

reset();

function showHideMobileMenu() {
  if (mobileMenuOn) {
    navLeftAnchors.forEach((elt) =>
      elt.setAttribute("style", "transform: translateX(-100vw);")
    );
    mobileMenuSvg.style.fill = "var(--color1)";
    mobileMenuSvg.style.transform = "scale(1)";
    mobileMenuOn = false;
  } else {
    navLeftAnchors.forEach((elt) =>
      elt.setAttribute("style", "transform: translateX(0vh);")
    );
    mobileMenuSvg.style.fill = "var(--color3)";
    mobileMenuSvg.style.transform = "scale(1.1)";
    mobileMenuOn = true;
  }
}

function reset() {
  if (window.innerWidth <= 768) {
    // check if on mobile for correct styling of the toTopNav
    toTopNavSvg.style.fill = "var(--color3)";
  }
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  activeSection = 0;
  lastActiveSection = null;
}

function setActiveSection() {
  activeSection = Number((scrollY / sections[0].offsetHeight).toFixed(0));
  if (lastActiveSection != activeSection) {
    showHideNavs();
    slideInItems(activeSection);
    lastActiveSection = activeSection;
  }
  if (activeSection > 0)
    document.getElementById("nav-down").style.animation = "none";
}

function showHideNavs() {
  activeSection == 0 ? hideNav(navUp) : showNav(navUp);
  activeSection == sections.length - 1 ? hideNav(navDown) : showNav(navDown);
  activeSection > 1 ? showNav(toTopNav) : hideNav(toTopNav);
}

function slideInItems(section) {
  let divs = [
    ...sections[section].getElementsByClassName("left"),
    ...sections[section].getElementsByClassName("right"),
  ];
  divs.forEach((elt) =>
    elt.setAttribute(
      "style",
      "animation: slide-in 600ms cubic-bezier(.36,1.14,.64,1) 0s 1 normal forwards"
    )
  );
}

function navigateUp() {
  if (activeSection > 0) {
    window.scrollTo({
      top: sections[0].offsetHeight * (activeSection - 1),
      left: 0,
      behavior: "smooth",
    });
    activeSection--;
  }
}
function navigateDown() {
  if (activeSection < sections.length - 1) {
    window.scrollTo({
      top: sections[0].offsetHeight * (activeSection + 1),
      left: 0,
      behavior: "smooth",
    });
    activeSection++;
  }
}

function hideNav(nav) {
  setTimeout(makeNavInvisible(nav), 300);
  if (nav == navUp) {
    nav.style.transform = "translateY(-100%)";
  } else if (nav == navDown) {
    nav.style.transform = "translateY(100%)";
  } else if (nav == toTopNav) {
    nav.style.transform = "translateX(200%)";
    if (window.innerWidth <= 768) {
      // check if on mobile for correct styling of the toTopNav
      setTimeout(function () {
        toTopNavSvg.style.fill = "var(--color1)";
      }, 300);
    }
  }
  nav.style.cursor = "default";
}
function makeNavInvisible(nav) {
  nav.style.visibility = "hidden";
}
function showNav(nav) {
  nav.style.transform = "translate(0, 0)";
  nav.style.visibility = "visible";
  nav.style.cursor = "pointer";
}
