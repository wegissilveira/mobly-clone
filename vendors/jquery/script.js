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
            let mainSliderDiv = $('<div></div>')
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
            let thumbnailDiv = $('<div></div>')
            let thumbnailImg = $('<img>')
            let thumbnailArrow = $('<i></i>')

            thumbnailDiv.attr('id', `slider__thumbnail_js-${index + 1}`)
            thumbnailDiv.addClass('slider__thumbnail')
            thumbnailImg.attr('src', value)
            thumbnailArrow.addClass('flaticon-down-arrow')
            
            thumbnailImg.appendTo(thumbnailDiv)
            thumbnailArrow.appendTo(thumbnailDiv)
            thumbnailDiv.appendTo('#slider__marker_thumbnails')

            // Inserção dos pontos de marcação dos slides
            let sliderMarker = $('<i></i>')

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
        let semanaMDivs = $('.semanaM__galeria--row')
        semanaMDivs.css('margin-bottom', 20)

        // Populando as divs com as imagens
        $.each(dataArr, (index, value) => {

            let semanaMLink = $('<a></a>')
            let semanaMImg = $('<img>')
            let semanaMArrow_div = $('<div></div>') 
            let semanaMArrow = $('<i></i>') 
            
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
        // console.log(returnData())

        $.each(returnData(), (index, value) => {
            console.log(index)
            console.log(value)

            
        })
    })
}) 
