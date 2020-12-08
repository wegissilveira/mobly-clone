/* *Menu responsivo* */

const toggle = document.getElementById("hamburger-menu--js")
const responsiveMenu = document.getElementById("header-responsive--js")
const body_El = document.getElementsByTagName("BODY")[0]

// window.addEventListener('load', () => {
//     responsiveMenu.style.top = '156px'
// })

toggle.addEventListener( "click", function(e) {
    e.preventDefault();
    (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");

    if (responsiveMenu.classList.contains('is-open') === true) {
        responsiveMenu.classList.remove('is-open')
        body_El.style.overflow = 'unset'
    } else {
        responsiveMenu.classList.add('is-open')
        body_El.style.overflow = 'hidden'
    }

});

function toggleSubContainer(child) {

    const menuSubContainer = document.getElementsByClassName('responsive__menu')[child]

    menuSubContainer.classList.contains('is-open') ?
        menuSubContainer.classList.remove('is-open') :
        menuSubContainer.classList.add('is-open')
}


/* *Floating ITEMS* */

let bg = document.getElementById('floatingMenuBg');

function openBg() {
    bg.style.display = "block";
}

function closeBg() {
    bg.style.display = "none";
}

function openSubMenu1(el) {

    for (let i = 0; i < el.parentNode.children.length; i++) {
        el.parentNode.children[i].children[0].classList.remove('active')
        el.parentNode.children[i].children[1].classList.remove('active2')
        el.parentNode.children[i].children[2].classList.remove('active2')
        el.parentNode.children[i].children[3].style.display = 'none'
    }

    el.children[0].classList.add('active')
    el.children[1].classList.add('active2')
    el.children[2].classList.add('active2')
    el.children[3].style.display = 'block'
    // mainSubMenu.style.display = "block";
}

/* Floating Banner e floating menus */
function openFloatingBanner(e) {

    const tab = e.currentTarget;
   
    const tabLeft = tab.getBoundingClientRect().x
    const tabWidth = tab.clientWidth

    const banner = tab.querySelector('div')    
    banner.style.display = "block";
    const bannerLeft = banner.getBoundingClientRect().x

    const iconArrow = tab.querySelector('.flaticon-drop-up-arrow')
    const iconArrowWidth = iconArrow.clientWidth
    const arrowPosition = tabLeft + ((tabWidth / 2) - iconArrowWidth / 2) - bannerLeft

    iconArrow.style.left = arrowPosition + 'px'

    openBg();
}

function closeFloatingBanner(e) {
    const tab = e.currentTarget
    const banner = tab.querySelector('div')    
    banner.style.display = "none";

    closeBg();
}
  
function getTabsNavigation() {
    document.querySelectorAll('.header__navigation--subMenu')
        .forEach((elmNode, i) => {
            if (i === 0 || i === 1 || i === 3 || i === 4) {
                elmNode.addEventListener('mouseover', openFloatingBanner)
                elmNode.addEventListener('mouseout', closeFloatingBanner)
            }
        });
}

getTabsNavigation();