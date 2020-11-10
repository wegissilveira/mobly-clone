/* *Slides 1* */

// let sliderImages = document.querySelectorAll('.slide--js'),
    //leftArrowMain = document.querySelector("#left-arrow--mainSlider-js"),
    //rightArrowMain = document.querySelector("#right-arrow--mainSlider-js"),
// let dots = document.getElementsByClassName("mainMarker--js"),
    // let i,
    let currentDotMainSlider = 0
    // currentPromoDot = 0,
    // currentPromo2 = 1,
    // currentDeco = 1

// showSlides(current);


// function passMainSlidesCallback(n) {
//     passMainSlides(current += n);
// }

// function passMainSlidesDots(n) {
//     passMainSlides(current = n);
// }

const mainSliderContainer = document.getElementById('mainSlider')
function passMainSlides(n, ref) {

    const windowWidth = document.documentElement.clientWidth
    let mainSliderContainerWidth = mainSliderContainer.style.width
    mainSliderContainerWidth = Number(mainSliderContainerWidth.replace(/[^\d.]/g, ''))

    const transformValue = mainSliderContainer.style.transform
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
    

    mainSliderContainer.style.transform = `translateX(${translateValue}px)`

    passMainSlidesDots(newN) 

}

function passMainSlidesDots(n) {
    
    let dots = document.getElementsByClassName("mainMarker--js")

    let totalDots = mainSliderContainer.children.length

    currentDotMainSlider = currentDotMainSlider + n
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" markerT", "");
    } 

    if (currentDotMainSlider < totalDots - 1 && currentDotMainSlider > 0) {
        currentDotMainSlider = currentDotMainSlider

    } else if (currentDotMainSlider >= totalDots) {
        currentDotMainSlider = 0
        
    } else if (currentDotMainSlider < 0) {
        currentDotMainSlider = totalDots - 1
    }

    if (dots[currentDotMainSlider] !== undefined) {
        dots[currentDotMainSlider].className += " markerT"
    }
    
}

function passMainSlidesAuto() {

    passMainSlides(1)

    setTimeout(passMainSlidesAuto, 5000);
}

passMainSlidesAuto()


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


/* *Thumbnails Main Slider */
function openThumbnail(n) {
    let marker = document.getElementsByClassName("mainMarker--js")
    let position = marker[n - 1].getBoundingClientRect().x - (223 / 2)
    let thumbnail = document.querySelector("#slider__thumbnail_js-"+n)

    thumbnail.style.display ="flex";
    thumbnail.style.left = position + 'px'
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


/* *Slider Decorados* */

// let sliderDecorado = document.querySelectorAll('.decorados__slider--bloco');

// showSlidesDeco(currentDeco);

// function plusSlidesDeco(n) {
//     showSlidesDeco(currentDeco += n);
// }

let currentDeco = 1

function passSlidesDecorados(n) {

    const sliderDecorado = document.querySelectorAll('.decorados__slider--bloco');
    const sliderDecoradoTabs = document.getElementsByClassName('decorados__header-tabs')
    const sliderDecoradoTabsArr = Array.from(sliderDecoradoTabs[0].children)
    // const tabsQtd = sliderDecorado.length
    
    sliderDecoradoTabsArr.map(tab => {
        tab.className = ''
    }) 

    for (i = 0; i < sliderDecorado.length; i++) {
        sliderDecorado[i].style.display = "none";
    }
        
    // if (ref !== 'tab') {

    //     let newN = currentDeco += n

    //     if (newN - 1 < tabsQtd && newN - 1 >= 0) {
    //         sliderDecoradoTabsArr[newN - 1].className = 'decorados__header-tab-active'
    //     } else if (newN - 1 >= tabsQtd) {
    //         sliderDecoradoTabsArr[0].className = 'decorados__header-tab-active'  
    //     } else if (newN - 1 <= 0) {
    //         sliderDecoradoTabsArr[tabsQtd - 1].className = 'decorados__header-tab-active' 
    //     }

    //     if (newN > sliderDecorado.length) {currentDeco = 1}
    //     if (newN < 1) {currentDeco = sliderDecorado.length}

    //     sliderDecorado[currentDeco-1].style.display = "block";

    // } else {
        currentDeco = n + 1

        sliderDecoradoTabsArr[n].className = 'decorados__header-tab-active' 
        sliderDecorado[n].style.display = "block";
    // }

}

let overSliderIndex
let currentImg
let overSlider
const arrowsContainer = document.getElementsByClassName('decorados__overSlider_arrows-container')[0]

function showDecorados_overSlider(action, indexBlock, indexImg) {

    overSliderIndex = indexBlock !== undefined ? indexBlock : overSliderIndex
    currentImg = indexImg !== undefined ? indexImg : currentImg

    // console.log(indexBlock)
    // console.log('toggle')

    const body = document.getElementsByTagName("BODY")[0]
    overSlider = document.getElementsByClassName('decorados_overSlider')[0]
    const overlay = document.getElementsByClassName('decorados_overSlider_overlay')[0]
    const currentOverSlider = overSlider.children[overSliderIndex + 2]
    const currentOverSliderImage = currentOverSlider.children[currentImg]

    // const decoradosContainerTop = document.getElementsByClassName('decorados')[0].offsetTop

    // console.log(currentOverSlider)
    // console.log(currentOverSliderImage)
    // console.log(currentImg)

    if (action === 'open') {
        body.style.overflow = 'hidden'
        overSlider.style.display = 'flex'
        overlay.style.display = 'block'
        overlay.style.height = body.offsetHeight + 'px'
        // overlay.style.marginTop = -decoradosContainerTop + 'px'
        currentOverSlider.style.display = 'block'
        currentOverSliderImage.style.display = 'block'
        arrowsContainer.style.display = 'flex'
        
        if (currentImg === 0) {
            arrowsContainer.children[0].style.display = 'none'
            arrowsContainer.children[1].style.display = 'flex'
            arrowsContainer.children[2].style.display = 'flex'
            arrowsContainer.children[3].style.display = 'none'
        } else if (currentImg === 3) {
            arrowsContainer.children[0].style.display = 'flex'
            arrowsContainer.children[1].style.display = 'none'
            arrowsContainer.children[2].style.display = 'none'
            arrowsContainer.children[3].style.display = 'flex'
        } else {
            arrowsContainer.children[0].style.display = 'flex'
            arrowsContainer.children[1].style.display = 'none'
            arrowsContainer.children[2].style.display = 'flex'
            arrowsContainer.children[3].style.display = 'none'
        }

    } else if (action === 'close') {
        
        body.style.overflow = 'unset'
        overSlider.style.display = 'none'
        currentOverSlider.style.display = 'none'
        currentOverSliderImage.style.display = 'none'
        arrowsContainer.style.display = 'none'
    }
    
}


function passSlidesOverSlider(arg) {
    // console.log('pass')
    const currentOverSlider = overSlider.children[overSliderIndex + 2].children
    
    currentImg = currentImg + arg
    
    for (let i = 0; i < currentOverSlider.length; i++) {
        currentOverSlider[i].style.display = 'none'
    }

    if (currentImg === currentOverSlider.length - 1) {
        arrowsContainer.children[2].style.display = 'none'
        arrowsContainer.children[3].style.display = 'flex'
    } else if (currentImg === 0) {
        arrowsContainer.children[0].style.display = 'none'
        arrowsContainer.children[1].style.display = 'flex'
    } else {
        arrowsContainer.children[0].style.display = 'flex'
        arrowsContainer.children[1].style.display = 'none'
        arrowsContainer.children[2].style.display = 'flex'
        arrowsContainer.children[3].style.display = 'none'
    }

    currentOverSlider[currentImg].style.display = 'block'
    
}



/* slider promo */

// let sliderPromo = document.getElementsByClassName('promo__container--slider-bloco'),
// let dotsAmostras = document.getElementsByClassName('marker-amostras--js');
let sliderPromo2 = document.getElementsByClassName('promo__container--slider-bloco2'),
    dotsAmostras2 = document.getElementsByClassName('marker-amostras2--js');
/* *Nessa maneira eu passo os slides baseado na localização, mas neste caso eu vou ter que colocar cada 4 em um container para que possa ser identificado como uma unidade e possibilitar a mudança dos dots. Por isso inserir a forma com a qual eu já estava fazendo os outros slides.
function translate() {
    sliderPromo.style.transform = "translateX("+current+"px)";
}

function nextPromo() {
    current += -986.66666666666667;
    if (current < -3000) { current = 0;}

    translate();
    dotsAmostras();
}

function prevPromo() {
    current += 986.66666666666667;
    if (current > 0 ) { current = -2960}

    translate();
}
*//*
function dotsAmostras() {
    for (i = 0; i < dotsAmostras.length; i++) {
        dotsAmostras[i].className = dotsAmostras[i].className.replace(" markerT", "");
    }
    dotsAmostras[current-1].className += " markerT";
}
*/

// showSlidesPromoDots(currentPromoDot);
// showSlidesPromo2(current);
let currentPromoDot = 0

function passSlidesPromo(n) {
    
    const sliderPromo = document.getElementsByClassName('promo__container--slider-bloco')

    const transformValue = sliderPromo[0].style.transform
    let translateValue = transformValue.replace(/[^\d.]/g, '')
    translateValue = Number(translateValue)

    if (n === 1) {

        translateValue < 75 ?
            sliderPromo[0].style.transform = `translateX(-${translateValue + 25}%)`
        :
            sliderPromo[0].style.transform = `translateX(0)`

    } else if (n === -1) {
        translateValue > 0 ?
            sliderPromo[0].style.transform = `translateX(-${translateValue - 25}%)`
        :
            sliderPromo[0].style.transform = `translateX(-75%)`
    }

    /* Pontos de marcação dos slides (dots) */
    const newTransformValue = sliderPromo[0].style.transform
    let newTranslateValue = newTransformValue.replace(/[^\d.]/g, '')
    newTranslateValue = Number(newTranslateValue)

    passSlidesPromoDots(newTranslateValue)
}


function passSlidesPromoDots(n) {

    const dotsAmostras = document.getElementsByClassName('marker-amostras--js')

    const currentPromoDot = n / 25

    for (i = 0; i < dotsAmostras.length; i++) {
        dotsAmostras[i].className = dotsAmostras[i].className.replace(" markerT2", "");
    }

    if (dotsAmostras[currentPromoDot] !== undefined) {
        dotsAmostras[currentPromoDot].className += " markerT2";
    } 
}


// function plusSlidesPromo2(n) {
//     showSlidesPromo2(currentPromo2 += n);
// }

// function currentSlidePromo2(n) {
//     showSlidesPromo2(currentPromo2 = n);
// }

// function showSlidesPromo2(n) {
//     if (n > sliderPromo2.length) {currentPromo2 = 1}
//     if(n < 1) {currentPromo2 = sliderPromo2.length}
//     for (i = 0; i < sliderPromo2.length; i++) {
//         sliderPromo2[i].style.display = "none";
//     }

//     for (i = 0; i < dotsAmostras2.length; i++) {
//         dotsAmostras2[i].className = dotsAmostras2[i].className.replace(" markerT2", "");
//     }

//     sliderPromo2[currentPromo2 - 1].style.display = "flex";
//     dotsAmostras2[currentPromo2 - 1].className += " markerT2";
// }


/* */
//Setando arrows 'none' e 'block'

function openArrows(n) {
    document.getElementById('arrow'+n).style.display = "flex";
}

function closeArrows(n) {
    document.getElementById('arrow'+n).style.display = 'none';
}


/* */
//Semana M countdown
let htmlCrono = document.getElementById('semanaM__countdown');
let countdownDate = new Date("September 15, 2021 12:00:00").getTime();

let x = setInterval(function() {
    let now = new Date().getTime();
    let distance = countdownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % ( 1000 * 60 * 60 * 24))/ (100 * 60 * 600)).toLocaleString(undefined, {minimumIntegerDigits: 2});
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toLocaleString(undefined, {minimumIntegerDigits: 2});
    let seconds = Math.floor((distance % (1000 * 60)) / 1000).toLocaleString(undefined, {minimumIntegerDigits: 2});
    //console.log(hours);
    if (days < 2 && days >= 1 ) {
        htmlCrono.innerHTML =  days + " Dia " + hours + ":" + minutes + ":" + seconds;
    } else if (days < 1) {
        htmlCrono.innerHTML = hours + ":" + minutes + ":" + seconds;
    } else if (days > 2) {
        htmlCrono.innerHTML = days + " Dias " + hours + ":" + minutes + ":" + seconds;
    } else if (minutes < 10) {
        htmlCrono.innerHTML = days + " Dias" + hours + ":" + minutes + ":" + seconds;
    } else if (distance < 0) {
        clearInterval(x);
        htmlCrono.innerHTML = "EXPIRED";
    }
}, 1000);


    //console.log(days);

let fosco = document.getElementById('titles');

function foscoImg() {
    fosco.style.color = "red";
}

/* */
//Incluindo itens na página de favoritos

let heart = document.getElementById('heartClick');
let heartList = document.getElementById('favoritos--js');

// heart.addEventListener('click', addItem);

function addItem() {
    let newItem = document.getElementById('item');

    let img = document.createElement('img');

    img.appendChild(document.createTextNode(newItem));

    itemList.appendChild(img);
}


/* **lancamentos.js** */

function passPageProducts(index) {
    
    const productPagesContainer = document.getElementsByClassName('filters__mostruarioContainer--page')
    const productPagesNumber = document.getElementsByClassName('filters__container--row-pages')
    const productPagesArray = Array.from(productPagesNumber[0].children)

    for (let i = 0; i < productPagesArray.length; i++) {
        //Esse bloco 'if' só será necessário caso eu insira as arrow
        // if (i !== productPagesArray.length - 1) {
        //     productPagesArray[i].className = ''
        // }
        
        productPagesContainer[i].style.display = 'none'
        productPagesArray[i].className = ''
    }

    productPagesContainer[index].style.display = 'block'
    productPagesArray[index].className = 'filters__container--row-pages-active'

    // console.log(productPagesArray)
    // console.log(productPages[0].children[index])
    // console.log(index)
}




/* **Itens individuais** */

function changeTabDescriptionProduct(tab) {

    const descriptionTabs = document.getElementsByClassName('produto__comprar--detalhes-descricaoTitle')[0].children
    const dimensions = document.getElementsByClassName('produto__comprar--detalhes-descricaoDimensoes')[0]
    const text = document.getElementsByClassName('produto__comprar--detalhes-descricaoText')[0]
    
    if (tab === 'size') {
        descriptionTabs[0].className = 'active-tab'
        descriptionTabs[1].className = 'disabled-tab'
        dimensions.style.display = 'block'
        text.style.display = 'none'
    } else if (tab ===  'text') {
        descriptionTabs[0].className = 'disabled-tab'
        descriptionTabs[1].className = 'active-tab'
        dimensions.style.display = 'none'
        text.style.display = 'block'
    }
}