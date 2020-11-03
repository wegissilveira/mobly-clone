// import $ from 'jquery'


$(function(){
    $("#includedHeader").load("../../shared/header.html"); 
});

$(function(){
    $("#includedFooter").load("../../shared/footer.html"); 
});

$(function(){
    
    /* Main Slider */
    $.getScript("../../data/mainSliderData.js", function() {

        const windowWidth = $(window).width()
        const mainSliderContainer = $('#mainSlider')
        mainSliderContainer.css('width', windowWidth * 7)

        const dataArr = $.map(returnData(), value => {
            return [value]
        })

        $.each(dataArr, (index, value) => {

            // Inserção de imagens no slider
            const mainSliderDiv = $('<div></div>')
            
            if (index === 0) {
                mainSliderDiv.css("background-image", `url(${value})`)
                mainSliderDiv.addClass('slider__img slide--js')

                mainSliderDiv.appendTo(mainSliderContainer)
            } else {
                // mainSliderDiv.css({"background-image": `url(${value})`, 'display': 'none'})
                mainSliderDiv.css({"background-image": `url(${value})`})
                mainSliderDiv.addClass('slider__img slide--js')
                
                mainSliderDiv.appendTo(mainSliderContainer)
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
           
            // sliderMarker.appendTo('.promo__container--header-markerSlider')

            sliderMarker.on('click', () => passMainSlides(index + 1, 'dot'))
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

    /* Ambientes decorados */
    $.getScript('../../data/ambientesDecoradosData.js', function() {

        const dataArr = $.map(returnData(), value => {
            return [value]
        })
        
        $.each(dataArr, (index, value) => {

            const decoradosBloco = $('<div></div>')
            const decoradosBlocoRow_1 = $('<div><a></a><a></a></div>')
            const decoradosBlocoRow_2 = $('<div><a></a><a></a></div>')

            decoradosBloco.addClass('decorados__slider--bloco')
            if (index !== 0) {decoradosBloco.css('display', 'none')}
            decoradosBlocoRow_1.addClass('decorados__slider--row')
            decoradosBlocoRow_2.addClass('decorados__slider--row')

            const valueArr = $.map(value, imgBlock => {
                return [imgBlock]
            })

            $.each(valueArr, (i, val) => {

                const decoradosImg = $('<img>')

                decoradosImg.attr('src', val)

                if (i <= 1) {
                    decoradosImg.appendTo(decoradosBlocoRow_1[0].children[i])
                } else {
                    decoradosImg.appendTo(decoradosBlocoRow_2[0].children[i - 2])
                } 
                
            })

            decoradosBlocoRow_1.appendTo(decoradosBloco)
            decoradosBlocoRow_2.appendTo(decoradosBloco)
            decoradosBloco.appendTo('.decorados__slider--container')
        })

    }).fail(function( jqxhr, settings, exception ) {
        console.log('error:')
        console.log(exception)
    })

    /* Produtos */
    $.getScript('../../data/produtosData.js', function() {

        /* Acabaram de chegar (HOMEPAGE) */
        let novosProdutosArr = []

        $.each(returnData(), (index, value) => {

            // Criação da div com todos os elementos necessários dentro
            if (value.novoProduto) {

                const slideDiv = $('<div></div>')
                const slideLink = $('<a></a>')
                const slideImg = $('<img>')
                const slideDescriptionDiv = $('<div></div>')
                const slideDescriptionTitle = $(`<p>${value.nome}<br>${value.material}</p>`)
                const slideDescriptionPrice = $(`<p>R$ ${value.preco}</p>`)
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

                novosProdutosArr.push(value.novoProduto)
            }

        })

        let dotsQtd = Math.floor(novosProdutosArr.length / 4)

        for (let i = 0; i < dotsQtd; i++) {

            let dotIcon = $('<i></i>')

            dotIcon.addClass('flaticon-circle marker-amostras--js')
            if (i === 0) {dotIcon.addClass('flaticon-circle marker-amostras--js markerT2')}
            
            dotIcon.appendTo('.promo__container--header-markerSlider')
        }
        

        /* Lista de produtos (LANÇAMENTOS PAGE) */
        console.log(returnData())

    }).fail(function( jqxhr, settings, exception ) {
        console.log('error:')
        console.log(exception)
    })

    
}) 
