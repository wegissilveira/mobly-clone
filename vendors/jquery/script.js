$(function(){
    $("#includedHeader").load("../../shared/header.html"); 
});

$(function(){
    $("#includedFooter").load("../../shared/footer.html"); 
});

$(document).ready(function(){
    // MainSlider
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
    
    // SemanaM imagens
    $.getScript("../../data/semanaMData.js", function() {

        const dataArr = $.map(returnData(), value => {
            return [value]
        })

        let semanaMDiv = $('<div></div>')
        semanaMDiv.addClass('semanaM__galeria--row')

        $.each(dataArr, (index, value) => {

            let semanaMLink = $('<a></a>')
            let semanaMImg = $('<img>')
            let semanaMArrow_div = $('<div></div>') 
            let semanaMArrow = $('<i></i>') 

            // if (index <= 2) {
            
                // semanaMDiv.attr('id', 'semanaM__galeria--row1')
                semanaMImg.attr('src', value)
                semanaMArrow_div.addClass('semanaM__galeria--iContainer-green')
                if (index % 2 !== 0) {semanaMArrow_div.addClass('semanaM__galeria--iContainer-grey')}
                semanaMArrow.addClass('flaticon-right-arrow')

                semanaMArrow.appendTo(semanaMArrow_div)
                semanaMImg.appendTo(semanaMLink)
                semanaMArrow_div.appendTo(semanaMLink)
                semanaMLink.appendTo(semanaMDiv)

                if ((index + 1) % 3 === 0) {
                    // semanaMLink.appendTo(semanaMDiv)
                    semanaMDiv.appendTo('.semanaM__galeria--images')
                    // console.log('teste')
                    console.log(index)
                }
            // }
        })

        
    }).fail(function( jqxhr, settings, exception ) {
        console.log('error:')
        console.log(exception)
    })
}) 
