/* *Slides 1* */

let sliderImages = document.querySelectorAll('.slide--js'),
    //leftArrowMain = document.querySelector("#left-arrow--mainSlider-js"),
    //rightArrowMain = document.querySelector("#right-arrow--mainSlider-js"),
    dots = document.getElementsByClassName("mainMarker--js"),
    i,
    current = 1,
    currentPromo = 1,
    currentPromo2 = 1

showSlides(current);
showSlidesAuto();

function plusSlides(n) {
    showSlides(current += n);
}

function currentSlide(n) {
    showSlides(current = n);
}

function showSlides(n) {
    if (n > sliderImages.length) {current = 1}
    if (n < 1) {current = sliderImages.length}
    for (i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" markerT", "");
    }

    sliderImages[current-1].style.display = "block";
    dots[current-1].className += " markerT";
}

function showSlidesAuto() {
    for (i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" markerT", "");
    }
    
    current++; 

    if (current > sliderImages.length) {current = 1}

    sliderImages[current-1].style.display = "block";
    dots[current-1].className += " markerT";

    setTimeout(showSlidesAuto, 5000);
}


/* *Thumbnails Main Slider */   
function openThumbnail(n) {
    let marker = document.getElementsByClassName("mainMarker--js")
    let position = marker[n - 1].getBoundingClientRect().x - (223 / 2)
    let thumbnail = document.querySelector(".slider__thumbnail"+n)

    thumbnail.style.display ="flex";
    thumbnail.style.left = position + 'px'
}

function closeThumbnail(n) {
    document.querySelector(".slider__thumbnail"+n).style.display = "none";
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
    document.getElementById('inspirese__banner').style.backgroundImage="URL(../../../vendors/img/"+img+")";
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

let sliderDecorado = document.querySelectorAll('.decorados__slider--bloco');

showSlidesDeco(current);

function plusSlidesDeco(n) {
    showSlidesDeco(current += n);
}

function showSlidesDeco(n) {
    if (n > sliderDecorado.length) {current = 1}
    if (n < 1) {current = sliderDecorado.length}
    for (i = 0; i < sliderDecorado.length; i++) {
        sliderDecorado[i].style.display = "none";
    }

    sliderDecorado[current-1].style.display = "block";
}

/* slider promo */

let sliderPromo = document.getElementsByClassName('promo__container--slider-bloco'),
    dotsAmostras = document.getElementsByClassName('marker-amostras--js');
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

showSlidesPromo(currentPromo);
showSlidesPromo2(current);

function plusSlidesPromo(n) {
    showSlidesPromo(currentPromo += n);
}

function currentSlidePromo(n) {
    showSlidesPromo(currentPromo = n);
}

function showSlidesPromo(n) {
    if (n > sliderPromo.length) {currentPromo = 1}
    if(n < 1) {currentPromo = sliderPromo.length}
    for (i = 0; i < sliderPromo.length; i++) {
        sliderPromo[i].style.display = "none";
    }

    for (i = 0; i < dotsAmostras.length; i++) {
        dotsAmostras[i].className = dotsAmostras[i].className.replace(" markerT2", "");
    }

    sliderPromo[currentPromo - 1].style.display = "flex";
    dotsAmostras[currentPromo - 1].className += " markerT2";

    // console.log(currentPromo)
}


function plusSlidesPromo2(n) {
    showSlidesPromo2(currentPromo2 += n);
}

function currentSlidePromo2(n) {
    showSlidesPromo2(currentPromo2 = n);
}

function showSlidesPromo2(n) {
    if (n > sliderPromo2.length) {currentPromo2 = 1}
    if(n < 1) {currentPromo2 = sliderPromo2.length}
    for (i = 0; i < sliderPromo2.length; i++) {
        sliderPromo2[i].style.display = "none";
    }

    for (i = 0; i < dotsAmostras2.length; i++) {
        dotsAmostras2[i].className = dotsAmostras2[i].className.replace(" markerT2", "");
    }

    sliderPromo2[currentPromo2 - 1].style.display = "flex";
    dotsAmostras2[currentPromo2 - 1].className += " markerT2";
}


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



