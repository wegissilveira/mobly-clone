/* *Menu responsivo* */

var toggle = document.getElementById("hamburger-menu--js")
var responsiveMenu = document.getElementById("header-responsive--js")

toggle.addEventListener( "click", function(e) {
    e.preventDefault();
    (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");

    responsiveMenu.classList.contains('is-open') === true ? 
        responsiveMenu.classList.remove('is-open') :
        responsiveMenu.classList.add('is-open')
});


/* *Floating Menus* */

let bg = document.getElementById('floatingMenuBg');
// let mainSubMenu = document.getElementById('mainSub-1--js');

function openBg() {
    bg.style.display = "block";
}

function closeBg() {
    bg.style.display = "none";
}

/* *Floating Menu* */
function openMenu(n) {
    let menu = document.getElementById('floatingMenu'+n)
    menu.style.display = "block";
    let menuLeft = menu.getBoundingClientRect().x

    let title = document.getElementsByClassName('header__navigation--subMenu-mainItem')
    let titleLeft = title[n - 1].getBoundingClientRect().x
    let titleWidth = title[n - 1].clientWidth

    let iconArrow = document.getElementById('floatingMenu'+n).children[0]
    let iconArrowWidth = iconArrow.clientWidth
    let arrowPosition = titleLeft + ((titleWidth / 2) - iconArrowWidth / 2) - menuLeft

    iconArrow.style.left = arrowPosition + 'px'

    openBg();
}

function closeMenu(n) {
    document.getElementById('floatingMenu'+n).style.display = "none";
    closeBg();
}

// /* */
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

// function closeSubMenu1(el) {
//     el.children[0].classList.remove('active') 
//     mainSubMenu.style.display = "none";
// }


/* *Floating Banners* */

/* Floating Banner */
function openFloatingBanner(n) {
    let title = document.getElementsByClassName('header__navigation--subMenu-mainItem')
    let titleLeft = title[n + 2].getBoundingClientRect().x
    let titleWidth = title[n + 2].clientWidth

    const bannerName = n === 1 ? 'lancamento' : 'outlet'
    let banner = document.getElementById('banner-'+bannerName)
    banner.style.display = "block";
    let bannerLeft = banner.getBoundingClientRect().x

    let iconArrow = document.getElementsByClassName('header__navigation--floatingImage-'+bannerName)[0].children[0]
    let iconArrowWidth = iconArrow.clientWidth
    let arrowPosition = titleLeft + ((titleWidth / 2) - iconArrowWidth / 2) - bannerLeft

    iconArrow.style.left = arrowPosition + 'px'

    openBg();
}

function closeFloatingBanner(n) {
    const bannerName = n === 1 ? 'lancamento' : 'outlet'
    document.getElementById('banner-'+bannerName).style.display = "none";
    closeBg();
}

