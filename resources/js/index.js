
let pathname
window.addEventListener('load', () => {
    const url_string = window.location.href
    const url = new URL(url_string)
    pathname = url.pathname

    if (pathname === '/index.html') {

        startPromotionClock()
        passMainSlidesAuto()
        toggleMainSliderArrows()
    }

    if (pathname === '/carrinho.html') {

        enableShoppingCartPage()
    }

})


/* *MENU RESPONSIVO* */

function toggleResponsiveMenu() {

    const hamburger = document.getElementsByClassName('header__first-row-responsiveMenu')[0]
    
    if (hamburger.style.height !== 'unset') {

        hamburger.children[0].style.transform = 'translateY(13px)'
        hamburger.children[2].style.transform = 'translateY(-13px)'

        setTimeout(() => {
            hamburger.style.height = 'unset'
            hamburger.style.justifyContent = 'center'
            hamburger.style.position = 'relative'
            hamburger.children[0].style.transform = 'rotate(-45deg)'
            hamburger.children[0].style.position = 'absolute'
            // hamburger.children[1].style.transform = 'rotate(45deg)'
            // hamburger.children[1].style.position = 'absolute'
            hamburger.children[2].style.transform = 'rotate(45deg)'
            hamburger.children[2].style.position = 'absolute'
            // hamburger.children[2].style.display = 'none'
        }, 2000)

    } else {

        // hamburger.children[0].style.transform = 'translateY(0)'
        // hamburger.children[2].style.transform = 'translateY(0)'

        hamburger.style.height = '30px'
        // hamburger.style.justifyContent = 'center'
        hamburger.children[0].style.transform = 'rotate(0)'
        hamburger.children[1].style.transform = 'rotate(0)'
        hamburger.children[2].style.transform = 'rotate(0)'

        setTimeout(() => {
            
            
            hamburger.children[0].style.position = 'unset'
            // hamburger.children[1].style.position = 'unset'
            hamburger.children[2].style.position = 'unset'
            // hamburger.children[2].style.display = 'block'
            // hamburger.style.justifyContent = 'space-between'
            hamburger.children[0].style.transform = 'translateY(-13px)'
            // hamburger.children[1].style.transform = 'translateY(0)'
            hamburger.children[2].style.transform = 'translateY(13px)'

            
            hamburger.style.position = 'unset'

            // hamburger.children[0].style.transform = 'rotate(0)'
            // hamburger.children[1].style.transform = 'rotate(0)'
        }, 2000)
    }
    
}




/* *Slides 1* */

let currentDotMainSlider = 0

const mainSliderContainer_El = document.getElementById('mainSlider')

function passMainSlides(n, ref) {

    const windowWidth = document.documentElement.clientWidth
    let mainSliderContainerWidth = mainSliderContainer_El.style.width
    mainSliderContainerWidth = Number(mainSliderContainerWidth.replace(/[^\d.]/g, ''))

    const transformValue = mainSliderContainer_El.style.transform
    let translateValue = transformValue.replace(/[^\d.]/g, '')
    translateValue = Number(translateValue) 

    let newN = n
    if (ref !== 'dot') {
        if (n === 1) {
            translateValue < mainSliderContainerWidth - windowWidth ? 
                translateValue = -translateValue - windowWidth :
                translateValue = 0
    
        } else if (n === -1) {
            translateValue > 0 ?
                translateValue = -translateValue + windowWidth :
                translateValue = windowWidth - mainSliderContainerWidth
        }

    } else {
        translateValue = -windowWidth * (n - 1)
        newN = (n - 1) - currentDotMainSlider
    }
    

    mainSliderContainer_El.style.transform = `translateX(${translateValue}px)`

    passMainSlidesDots(newN) 

}


function passMainSlidesDots(n) {
    
    let dots_El = document.getElementsByClassName("mainMarker--js")

    let totalDots = mainSliderContainer_El.children.length

    currentDotMainSlider = currentDotMainSlider + n
    
    for (i = 0; i < dots_El.length; i++) {
        dots_El[i].className = dots_El[i].className.replace(" markerT", "");
    } 

    if (currentDotMainSlider < totalDots - 1 && currentDotMainSlider > 0) {
        currentDotMainSlider = currentDotMainSlider

    } else if (currentDotMainSlider >= totalDots) {
        currentDotMainSlider = 0
        
    } else if (currentDotMainSlider < 0) {
        currentDotMainSlider = totalDots - 1
    }

    if (dots_El[currentDotMainSlider] !== undefined) {
        dots_El[currentDotMainSlider].className += " markerT"
    }
    
}

function passMainSlidesAuto() {

    passMainSlides(1)

    setTimeout(passMainSlidesAuto, 5000);
}


function toggleMainSliderArrows() {

    /* Mostrar setas do mainSlider */
    const mainSlider_El = document.getElementById('mainSlider')
    const mainSliderArrows_El = document.getElementsByClassName('mainSlider-arrows-container')[0]

    mainSlider_El.addEventListener('mouseenter', () => {
        mainSliderArrows_El.style.display = 'flex'
    })

    mainSliderArrows_El.addEventListener('mouseenter', () => {
        mainSliderArrows_El.style.display = 'flex'
    })

    mainSlider_El.addEventListener('mouseleave', () => {
        mainSliderArrows_El.style.display = 'none'
    })
    /* ** */
}


/* *Thumbnails Main Slider */
function openThumbnail(n) {
    let marker_El = document.getElementsByClassName("mainMarker--js")
    let position = marker_El[n - 1].getBoundingClientRect().x - (223 / 2)
    let thumbnail_El = document.querySelector("#slider__thumbnail_js-"+n)

    thumbnail_El.style.display ="flex";
    thumbnail_El.style.left = position + 'px'
}

function closeThumbnail(n) {
    document.querySelector("#slider__thumbnail_js-"+n).style.display = "none";
}



/* slider inspire-se*/


function startSlide() {
    max=3;
    min=1;
    fi=min;
    loadImg("inspiracao1.jpg");
    nextAuto();
}

function loadImg(img) {
    document.getElementById('inspirese__banner').style.backgroundImage="URL(../../../vendors/img/inspiresse/"+img+")";
}

function next() {
    fi++;
    if (fi > max) { fi = min;}
    loadImg("inspiracao"+fi+".jpg");
}

function nextAuto() {
    fi++;
    if (fi > max) { fi = min;}
    loadImg("inspiracao"+fi+".jpg");
    setTimeout(nextAuto, 5000);
}



//setTimeout(next, 2000);

function prev() {
    fi--;
    if (fi < min) { fi = max;}
    loadImg("inspiracao"+fi+".jpg");
}


let currentDeco = 1

function passSlidesDecorados(n) {

    const slider_decorados_El = document.querySelectorAll('.decorados__slider--block');
    const slider_decorados_navigation_El = document.getElementsByClassName('decorados__header-tabs')
    const slider_decorados_navigation_arr = Array.from(slider_decorados_navigation_El[0].children)
    // const tabsQtd = sliderDecorado.length
    
    slider_decorados_navigation_arr.map(tab => {
        tab.className = ''
    }) 

    for (i = 0; i < slider_decorados_El.length; i++) {
        slider_decorados_El[i].style.display = "none";
    }
      
    currentDeco = n + 1

    slider_decorados_navigation_arr[n].className = 'decorados__header-tab-active' 
    slider_decorados_El[n].style.display = "block";

}

let overSliderIndex
let currentImg
let overSlider
const arrows_container_El = document.getElementsByClassName('decorados__overSlider_arrows-container')[0]

function showDecorados_overSlider(action, indexBlock, indexImg) {

    overSliderIndex = indexBlock !== undefined ? indexBlock : overSliderIndex
    currentImg = indexImg !== undefined ? indexImg : currentImg

    const body_El = document.getElementsByTagName("BODY")[0]
    overSlider_El = document.getElementsByClassName('decorados_overSlider')[0]
    const overlay_El = document.getElementsByClassName('decorados_overSlider_overlay')[0]
    const currentOverSlider = overSlider_El.children[overSliderIndex + 2]
    const currentOverSliderImage = currentOverSlider.children[currentImg]

    if (action === 'open') {
        body_El.style.overflow = 'hidden'
        overSlider_El.style.display = 'flex'
        overlay_El.style.display = 'block'
        overlay_El.style.height = body_El.offsetHeight + 'px'
        // overlay.style.marginTop = -decoradosContainerTop + 'px'
        currentOverSlider.style.display = 'block'
        currentOverSliderImage.style.display = 'block'
        arrows_container_El.style.display = 'flex'
        
        if (currentImg === 0) {
            arrows_container_El.children[0].style.display = 'none'
            arrows_container_El.children[1].style.display = 'flex'
            arrows_container_El.children[2].style.display = 'flex'
            arrows_container_El.children[3].style.display = 'none'
        } else if (currentImg === 3) {
            arrows_container_El.children[0].style.display = 'flex'
            arrows_container_El.children[1].style.display = 'none'
            arrows_container_El.children[2].style.display = 'none'
            arrows_container_El.children[3].style.display = 'flex'
        } else {
            arrows_container_El.children[0].style.display = 'flex'
            arrows_container_El.children[1].style.display = 'none'
            arrows_container_El.children[2].style.display = 'flex'
            arrows_container_El.children[3].style.display = 'none'
        }

    } else if (action === 'close') {
        
        body_El.style.overflow = 'unset'
        overSlider_El.style.display = 'none'
        currentOverSlider.style.display = 'none'
        currentOverSliderImage.style.display = 'none'
        arrows_container_El.style.display = 'none'
    }
    
}


function passSlidesOverSlider(arg) {
    const currentOverSlider = overSlider_El.children[overSliderIndex + 2].children
    
    currentImg = currentImg + arg
    
    for (let i = 0; i < currentOverSlider.length; i++) {
        currentOverSlider[i].style.display = 'none'
    }

    if (currentImg === currentOverSlider.length - 1) {
        arrows_container_El.children[2].style.display = 'none'
        arrows_container_El.children[3].style.display = 'flex'
    } else if (currentImg === 0) {
        arrows_container_El.children[0].style.display = 'none'
        arrows_container_El.children[1].style.display = 'flex'
    } else {
        arrows_container_El.children[0].style.display = 'flex'
        arrows_container_El.children[1].style.display = 'none'
        arrows_container_El.children[2].style.display = 'flex'
        arrows_container_El.children[3].style.display = 'none'
    }

    currentOverSlider[currentImg].style.display = 'block'
    
}



/* slider promo */

let currentPromoDot = 0

function passSlidesPromo(n) {
    
    const slider_promo_El = document.getElementsByClassName('promo__subContainer--slider-block')

    const transformValue = slider_promo_El[0].style.transform
    let translateValue = transformValue.replace(/[^\d.]/g, '')
    translateValue = Number(translateValue)

    if (n === 1) {

        translateValue < 75 ?
            slider_promo_El[0].style.transform = `translateX(-${translateValue + 25}%)`
        :
            slider_promo_El[0].style.transform = `translateX(0)`

    } else if (n === -1) {
        translateValue > 0 ?
            slider_promo_El[0].style.transform = `translateX(-${translateValue - 25}%)`
        :
            slider_promo_El[0].style.transform = `translateX(-75%)`
    }

    /* Pontos de marcação dos slides (dots) */
    const newTransformValue = slider_promo_El[0].style.transform
    let newTranslateValue = newTransformValue.replace(/[^\d.]/g, '')
    newTranslateValue = Number(newTranslateValue)

    passSlidesPromoDots(newTranslateValue)
}


function passSlidesPromoDots(n) {

    const promo_slider_dots_El = document.getElementsByClassName('marker-promoSlider--js')

    const currentPromoDot = n / 25

    for (i = 0; i < promo_slider_dots_El.length; i++) {
        promo_slider_dots_El[i].className = promo_slider_dots_El[i].className.replace(" marker-amostras--active", "");
    }

    if (promo_slider_dots_El[currentPromoDot] !== undefined) {
        promo_slider_dots_El[currentPromoDot].className += " marker-amostras--active";
    } 
}

//Setando arrows 'none' e 'block'

function openArrows(n) {
    document.getElementById('arrow'+n).style.display = "flex";
}

function closeArrows(n) {
    document.getElementById('arrow'+n).style.display = 'none';
}


/* */
//Semana M countdown

function startPromotionClock() {

    const semanaM_countdown_El = document.getElementById('semanaM__countdown');
    const countdown_date = new Date("September 15, 2021 12:00:00").getTime();

    let x = setInterval(function() {
        let now = new Date().getTime();
        let distance = countdown_date - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % ( 1000 * 60 * 60 * 24))/ (100 * 60 * 600)).toLocaleString(undefined, {minimumIntegerDigits: 2});
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toLocaleString(undefined, {minimumIntegerDigits: 2});
        let seconds = Math.floor((distance % (1000 * 60)) / 1000).toLocaleString(undefined, {minimumIntegerDigits: 2});
        //console.log(hours);
        if (days < 2 && days >= 1 ) {
            semanaM_countdown_El.innerHTML =  days + " Dia " + hours + ":" + minutes + ":" + seconds;
        } else if (days < 1) {
            semanaM_countdown_El.innerHTML = hours + ":" + minutes + ":" + seconds;
        } else if (days > 2) {
            semanaM_countdown_El.innerHTML = days + " Dias " + hours + ":" + minutes + ":" + seconds;
        } else if (minutes < 10) {
            semanaM_countdown_El.innerHTML = days + " Dias" + hours + ":" + minutes + ":" + seconds;
        } else if (distance < 0) {
            clearInterval(x);
            semanaM_countdown_El.innerHTML = "EXPIRED";
        }
    }, 1000);

}


/* **lancamentos.js** */

function passPageProducts(index) {
    
    const products_block_El = document.getElementsByClassName('products__list_block')
    const product_pages_number_El = document.getElementsByClassName('products__list_header--pages')
    const product_pages_number_arr = Array.from(product_pages_number_El[0].children)

    for (let i = 0; i < product_pages_number_arr.length; i++) {        
        products_block_El[i].style.display = 'none'
        product_pages_number_arr[i].className = ''
    }

    products_block_El[index].style.display = 'block'
    product_pages_number_arr[index].className = 'products__list_header--pages-active'
}

function productLike(event, product_id, el) {
    
    const liked_storage = JSON.parse(localStorage.getItem('liked'))
    const liked_qtd_storage = JSON.parse(localStorage.getItem('liked_qtd'))

    let liked_arr = liked_storage !== null ? [...liked_storage] : []
    let liked_qtd_arr = liked_qtd_storage !== null ? {...liked_qtd_storage} : {}
    let liked_qtd = liked_qtd_arr[product_id] !== undefined ? liked_qtd_arr[product_id] : 0

    if (el === 'icon') {
        if (event.target.className === 'flaticon-like') {

            event.target.className = 'flaticon-favorite-heart-button'
            liked_arr.push(product_id)

            liked_qtd = ++liked_qtd

        } else {

            event.target.className = 'flaticon-like'

            liked_arr = liked_arr.filter(item => item !== product_id)

            liked_qtd = liked_qtd > 0 ? --liked_qtd : 0
        }

    } else if (el === 'div') {
        if (event.currentTarget.children[0].className === 'flaticon-like') {

            liked_arr.push(product_id)

            liked_qtd = ++liked_qtd

            event.currentTarget.children[0].className = 'flaticon-favorite-heart-button'
            event.currentTarget.children[2].innerHTML = liked_qtd + ' favoritaram'

        } else {

            liked_arr = liked_arr.filter(item => item !== product_id)

            liked_qtd = liked_qtd > 0 ? --liked_qtd : 0

            event.currentTarget.children[0].className = 'flaticon-like'
            event.currentTarget.children[2].innerHTML = liked_qtd + ' favoritaram'
        }
    }

    liked_qtd_arr[product_id] = liked_qtd

    localStorage.setItem('liked', JSON.stringify(liked_arr))
    localStorage.setItem('liked_qtd', JSON.stringify(liked_qtd_arr))
    event.preventDefault()
}




/* **Itens individuais** */

function addProductToCarrinho(product_id, page) {
    
    let shopping_cart
    const cart_storage = JSON.parse(localStorage.getItem('shopping_cart'))

    const insert_cart_btn_El = document.getElementById('product__buy_btn--js')
    
    if (page !== 'carrinho') {
        if (cart_storage !== null) {
            if (cart_storage.includes(product_id)) {
                shopping_cart = cart_storage.filter(prod => prod !== product_id)
                insert_cart_btn_El.className = 'product__buy--btn'
                insert_cart_btn_El.innerHTML = 'Inserir do carrinho'
            } else {
                shopping_cart = [...cart_storage, product_id]
                insert_cart_btn_El.className = 'product__buy--btn product__buy--btn-remove'
                insert_cart_btn_El.innerHTML = 'Remover no carrinho'
            }
        } else {
            shopping_cart = [product_id]
            insert_cart_btn_El.className = 'product__buy--btn product__buy--btn-remove'
            insert_cart_btn_El.innerHTML = 'Remover do carrinho'
        }

        localStorage.setItem('shopping_cart', JSON.stringify(shopping_cart))

    } else {
        shopping_cart = cart_storage.filter(prod => prod !== product_id)
        localStorage.setItem('shopping_cart', JSON.stringify(shopping_cart))
        location.reload()
    }
    
}

function changeTabDescriptionProduct(tab) {
    
    const description_navigation_El = document.getElementsByClassName('product__buy--details-navigation')[0].children
    const product_dimensions_El = document.getElementsByClassName('product__buy--details-dimensions')[0]
    const product_description_El = document.getElementsByClassName('product__buy--details-description')[0]
    
    if (tab === 'size') {
        description_navigation_El[0].className = 'active-tab'
        description_navigation_El[1].className = 'disabled-tab'
        product_dimensions_El.style.display = 'block'
        product_description_El.style.display = 'none'
    } else if (tab === 'text') {
        description_navigation_El[0].className = 'disabled-tab'
        description_navigation_El[1].className = 'active-tab'
        product_dimensions_El.style.display = 'none'
        product_description_El.style.display = 'block'
    }
}




/* **CARRINHO** */

function enableShoppingCartPage() {
    if (JSON.parse(localStorage.getItem('shopping_cart')).length > 0) {
        const cep_input_El = document.getElementsByClassName('shopping__cart--products-shipping-placeholder')[0].parentNode.children

        window.addEventListener('click', () => {
            if (cep_input_El[1] === document.activeElement) {
                cep_input_El[0].style.transform = 'translate(0, 10px)'
                cep_input_El[0].style.color = '#5A98FF'
            } else {
                cep_input_El[0].style.transform = 'translate(0, 33px)'
                cep_input_El[0].style.color = '#BEBEBE'
            }
        })
    }
}
