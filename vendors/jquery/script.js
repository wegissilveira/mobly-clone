$(function(){
    $("#includedHeader").load("../../shared/header.html"); 
});

$(function(){
    $("#includedFooter").load("../../shared/footer.html"); 
});

$(document).ready(function(){

    /* MainSlider */
    $.getScript("../../data/mainSliderData.js", function() {

        const dataArr = $.map(returnData(), value => {
            return [value]
        })

        $.each(dataArr, (index, value) => {

            // Inserção de imagens no slider
            const mainSliderDiv = $('<div></div>')
            if (index === 0) {
                mainSliderDiv.css("background-image", `url(${value})`)
                mainSliderDiv.addClass('slider__img slide--js')

                mainSliderDiv.appendTo('#mainSlider')
            } else {
                mainSliderDiv.css({"background-image": `url(${value})`, 'display': 'none'})
                mainSliderDiv.addClass('slider__img slide--js')

                mainSliderDiv.appendTo('#mainSlider')
            }

            // Inserção de thumbnails do slider
            const thumbnailDiv = $('<div></div>')
            const thumbnailImg = $('<img>')
            const thumbnailArrow = $('<i></i>')

            thumbnailDiv.attr('id', `slider__thumbnail_js-${index + 1}`)
            thumbnailDiv.addClass('slider__thumbnail')
            thumbnailImg.attr('src', value)
            thumbnailArrow.addClass('flaticon-down-arrow')
            
            thumbnailImg.appendTo(thumbnailDiv)
            thumbnailArrow.appendTo(thumbnailDiv)
            thumbnailDiv.appendTo('#slider__marker_thumbnails')

            // Inserção dos pontos de marcação dos slides
            const sliderMarker = $('<i></i>')

            sliderMarker.addClass('flaticon-circle mainMarker--js')
            if (index === 0) {sliderMarker.addClass('flaticon-circle mainMarker--js markerT')}
            sliderMarker.on('click', () => currentSlide(index + 1))
            sliderMarker.on('mouseover', () => openThumbnail(index + 1))
            sliderMarker.on('mouseout', () => closeThumbnail(index + 1))

            sliderMarker.appendTo('#slider__marker_icons')

        })

    }) .fail(function( jqxhr, settings, exception ) {
        console.log('error:')
        console.log(exception)
    })
    
    /* SemanaM imagens */
    $.getScript("../../data/semanaMData.js", function() {

        const dataArr = $.map(returnData(), value => {
            return [value]
        })

        // Criando as divs parents das imagens
        for (let i = 0; i < dataArr.length; i++) {
            if ((i + 1) % 3 === 0) {
                $('<div></div>').addClass('semanaM__galeria--row')
                .appendTo('.semanaM__galeria--images')
            }
        }
        
        let divRef = 0
        const semanaMDivs = $('.semanaM__galeria--row')
        semanaMDivs.css('margin-bottom', 20)

        // Populando as divs com as imagens
        $.each(dataArr, (index, value) => {

            const semanaMLink = $('<a></a>')
            const semanaMImg = $('<img>')
            const semanaMArrow_div = $('<div></div>') 
            const semanaMArrow = $('<i></i>') 
            
            semanaMImg.attr('src', value)
            semanaMArrow_div.addClass('semanaM__galeria--iContainer-green')
            if (index % 2 !== 0) {semanaMArrow_div.addClass('semanaM__galeria--iContainer-grey')}
            semanaMArrow.addClass('flaticon-right-arrow')

            semanaMArrow.appendTo(semanaMArrow_div)
            semanaMImg.appendTo(semanaMLink)
            semanaMArrow_div.appendTo(semanaMLink)
            semanaMLink.appendTo(semanaMDivs[divRef])

            if ((index + 1) % 3 === 0) {
                divRef++
            }
        })
        
    }).fail(function( jqxhr, settings, exception ) {
        console.log('error:')
        console.log(exception)
    })

    /* Acabaram de chegar */
    $.getScript('../../data/novosProdutosData.js', function () {

        $.each(returnData(), (index, value) => {

            // Criação da div com todos os elementos necessários dentro
            const slideDiv = $('<div></div>')
            const slideLink = $('<a></a>')
            const slideImg = $('<img>')
            const slideDescriptionDiv = $('<div></div>')
            const slideDescriptionTitle = $(`<p>${value.nome}<br>${value.material}</p>`)
            const slideDescriptionPrice = $(`<p>${value.preco}</p>`)
            const slideDescriptionArrow = $('<i></i>')

            slideDiv.addClass('promo__container--slider-uni')
            slideImg.attr('src', value.img)
            slideDescriptionDiv.addClass('promo__container--slider-description')
            slideDescriptionPrice.addClass('promo__container--slider-preco')
            slideDescriptionArrow.addClass('flaticon-right-arrow promo__container--description-arrow')
            
            slideDescriptionTitle.appendTo(slideDescriptionDiv)
            slideDescriptionPrice.appendTo(slideDescriptionDiv)
            slideDescriptionArrow.appendTo(slideDescriptionDiv)
            slideImg.appendTo(slideLink)
            slideDescriptionDiv.appendTo(slideLink)
            slideLink.appendTo(slideDiv)
            slideDiv.appendTo('.promo__container--slider-bloco')

        })

        let dotsQtd = Math.floor(returnData().length / 4)

        for (let i = 0; i < dotsQtd; i++) {

            let dotIcon = $('<i></i>')

            dotIcon.addClass('flaticon-circle marker-amostras--js')
            if (i === 0) {dotIcon.addClass('flaticon-circle marker-amostras--js markerT2')}
            
            dotIcon.appendTo('.promo__container--header-markerSlider')
        }

    })
}) 
