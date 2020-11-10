
$(function(){
    $("#includedHeader").load("../../shared/header.html"); 
});

$(function(){
    $("#includedFooter").load("../../shared/footer.html"); 
});

$(function(){
    $("#info").load("../../shared/info-session.html"); 
});

$(function(){
    $("#newsletter").load("../../shared/newsletter-session.html"); 
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
            const decoradosBlocoRow_1 = $('<div><div></div><div></div></div>')
            const decoradosBlocoRow_2 = $('<div><div></div><div></div></div>')

            const overSliderContainer = $('.decorados_overSlider')
            const overSliderDiv = $('<div></div>')

            decoradosBloco.addClass('decorados__slider--bloco')
            if (index !== 0) {decoradosBloco.css('display', 'none')}
            decoradosBlocoRow_1.addClass('decorados__slider--row')
            decoradosBlocoRow_2.addClass('decorados__slider--row')

            const valueArr = $.map(value, imgBlock => {
                return [imgBlock]
            })

            overSliderDiv.appendTo('.decorados_overSlider')
            
            $.each(valueArr, (i, val) => {

                const decoradosImg = $('<img>')
                decoradosImg.on('click', () => showDecorados_overSlider('open', index, i))
                decoradosImg.attr('src', val)

                if (i <= 1) {
                    decoradosImg.appendTo(decoradosBlocoRow_1[0].children[i])
                } else {
                    decoradosImg.appendTo(decoradosBlocoRow_2[0].children[i - 2])
                } 

                const overSliderImg = $('<img>')
                overSliderImg.attr('src', val)
                overSliderImg.appendTo(overSliderContainer[0].children[index + 2])
                
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

    let priceFormat 
    let finalPrice 
    let finalPriceStr 

    $.getScript('../../data/produtosData.js', function() {

        /* Acabaram de chegar (HOMEPAGE) */
        let novosProdutosArr = []

        $.each(returnData(), (index, value) => {

            // Criação da div com todos os elementos necessários dentro
            if (value.novoProduto) {

                priceFormat = Number(value.preco.replace(',', '.'))
                finalPrice = (priceFormat / 100) * (100 - value.desconto)
                finalPriceStr = finalPrice.toFixed(2).replace('.', ',')

                const slideDiv = $('<div></div>')
                const slideLink = $('<a></a>')
                const slideImg = $('<img>')
                const slideDescriptionDiv = $('<div></div>')
                const slideDescriptionTitle = $(`<p>${value.nome}</p>`)
                const slideDescriptionPrice = $(`<p>Por: R$ ${finalPriceStr}</p>`)
                const slideDescriptionArrow = $('<i></i>')

                slideDiv.addClass('promo__container--slider-uni')
                slideLink.attr('href', `/item.html?product_id=${value.id}`)
                slideImg.attr('src', value.imgs.img_1)
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

        const dotsQtd = Math.floor(novosProdutosArr.length / 4)

        for (let i = 0; i < dotsQtd; i++) {

            let dotIcon = $('<i></i>')

            dotIcon.addClass('flaticon-circle marker-amostras--js')
            if (i === 0) {dotIcon.addClass('flaticon-circle marker-amostras--js markerT2')}
            
            dotIcon.appendTo('.promo__container--header-markerSlider')
        }
        

        /* **Lista de produtos (LANÇAMENTOS PAGE)** */
        
        const pagesQtde = Math.ceil(returnData().length / 12)
        const rowsQtde = Math.ceil(returnData().length / 4)

        for (let i = 0; i < pagesQtde; i++) {
            $(`<p>${i+1}</p>`)
                .addClass(i === 0 ? 'filters__container--row-pages-active' : '')
                .on('click', () => passPageProducts(i))
                .appendTo('.filters__container--row-pages')            

            $('<div></div>')
                .css('display', i !== 0 ? 'none' : 'block')
                .addClass('filters__mostruarioContainer--page')
                .appendTo('.filters__mostruarioContainer')
        }

        // => TALVEZ INSERIR ESSA ARROW PARA MUDAR DE BLOCO DE PÁGINAS, MAS CASO ISSO OCORRA SERIA NECESSÁRIO UMA ARROW PARA VOLTAR TBM
        // $('<i></i>')
        //     .addClass('flaticon-right-arrow filters__container--row-pages-arrow')
        //     .appendTo('.filters__container--row-pages')

        const produtosPages = $('.filters__mostruarioContainer--page')

        for (let i = 0; i < rowsQtde; i++) {

            const pageIndex = Math.floor(i / 3)
            
            const produtosRow = $('<div></div>')

            produtosRow.addClass('filters__mostruarioContainer--row')

            produtosRow.appendTo(produtosPages[pageIndex])
        }

        const produtosContainer = $('.filters__mostruarioContainer--row')

        $.each(returnData(), (index, value) => {

            // priceFormat = Number(value.preco.replace(',', '.'))
            // finalPrice = (priceFormat / 100) * (100 - value.desconto)
            // finalPriceStr = finalPrice.toFixed(2).replace('.', ',')
            
            const rowIndex = Math.floor(index / 4)
            
            const produtosSubContainerLink = $('<a></a>')
            const produtosDiscount = $(`<p>-${value.desconto}%</p>`)
            const produtosImg = $('<img>')
            const produtosIcon = $('<i></i>')
            const produtosDescriptionDiv = $('<div></div>')
            const produtosDescriptionTitle = $(`<p>${value.nome}</p>`)
            const produtosDescriptionPriceParc = $(`<p><strong>10x ${(finalPrice / 10).toFixed(2).replace('.', ',')}</strong><span> sem juros</span></p>`)
            const produtosDescriptionPrice = $(`<p><span>${value.preco}</span><strong> ${finalPriceStr}</strong></p>`)
            
            produtosSubContainerLink.addClass('filters__mostruarioContainer--row-uni4')
            produtosSubContainerLink.attr('href', `/item.html?product_id=${value.id}`)
            produtosDiscount.addClass('filters__mostruarioContainer--row-discount')
            produtosImg.attr('src', value.imgs.img_1)
            produtosIcon.addClass('flaticon-like')
            produtosDescriptionPriceParc.addClass('filters__mostruario--price-split')
            produtosDescriptionPrice.addClass('filters__mostruario--price')
            
            produtosDiscount.appendTo(produtosSubContainerLink)
            produtosImg.appendTo(produtosSubContainerLink)
            produtosIcon.appendTo(produtosSubContainerLink)
            produtosDescriptionDiv.appendTo(produtosSubContainerLink)
            produtosDescriptionTitle.appendTo(produtosDescriptionDiv)
            produtosDescriptionPriceParc.appendTo(produtosDescriptionDiv)
            produtosDescriptionPrice.appendTo(produtosDescriptionDiv)
            produtosSubContainerLink.appendTo(produtosContainer[rowIndex])
            
        })


        /* **Item individual (Item PAGE)** */

        const url_string = window.location.href
        const url = new URL(url_string)
        const id = Number(url.searchParams.get("product_id"))
        
        $.each(returnData(), (index, value) => {

            if (value.id === id) {

                // const priceFormat = Number(value.preco.replace(',', '.'))
                // const finalPrice = (priceFormat / 100) * (100 - value.desconto)
                // const finalPriceStr = finalPrice.toFixed(2).replace('.', ',')
                const priceSave = (priceFormat - finalPrice).toFixed(2).replace('.', ',')
                
                const product_mainImg_El = $('<img>')
                const productBuyDetailsPriceTitle_El = $(`<h3>${value.nome}</h3>`)
                const price_savePercentage_El = $(`<p>Economize ${value.desconto}%</p>`)
                const price_original_El = $(`<p>De: ${value.preco}</p>`)
                const price_final_El = $(`<p>por<span>&nbsp;${finalPriceStr}</span></p>`)
                const price_saveMoney_El = $(`<p><span>(economize ${priceSave})</span><br> Ou em até 10x de ${(finalPrice / 10).toFixed(2).replace('.', ',')} sem juros</p>`)

                const measuresContainer_El = $('.produto__comprar--detalhes-descricaoDimensoes')
                const textDescription_El = $(`<p>${value.descricao}</p>`)

                // Alterando imagem principal para a que receber o hover
                const imgsArr = $.map(value.imgs, value => {
                    return [value]
                })

                $.each(imgsArr, (i, val) => {

                    if (i === 0) {
                        product_mainImg_El.attr('src', val)
                    } 

                    const thumb_img_El = $('<img>')
                    thumb_img_El.attr('src', val)
                    thumb_img_El.addClass(i === 0 ? 'produto__imagem--thumb-img produto__imagem--thumb-img-active' : 'produto__imagem--thumb-img')

                    thumb_img_El.on('mouseover', () => {
                        const thumb_imgs_container = $('.produto__imagem--thumb')
                        const thumb_imgs_arr = Array.from(thumb_imgs_container[0].children)

                        $.map(thumb_imgs_arr, thumb => {
                            thumb.className = 'produto__imagem--thumb-img'
                        })

                        product_mainImg_El.attr('src', imgsArr[i])

                        thumb_imgs_arr[i].className = 'produto__imagem--thumb-img produto__imagem--thumb-img-active'

                    })

                    thumb_img_El.appendTo('.produto__imagem--thumb')
                    
                })

                const measuresArr = $.map(value.dimensoes, value => {
                    return [value]
                })

                const measuresArr_keys = Object.keys(value.dimensoes).map(item => {
                    return item.charAt(0).toUpperCase() + item.slice(1)
                })
                
                $.each(measuresArr, (i, val) => {
                    
                    $(`<p>${measuresArr_keys[i]}:<span> ${val}</span></p>`)
                    .addClass('measure_unit')
                    .appendTo(measuresContainer_El[0].children[i])
                })

                price_savePercentage_El.addClass('produto__comprar--detalhes-economize')
                price_original_El.addClass('produto__comprar--detalhes-price-origin')
                price_final_El.addClass('produto__comprar--detalhes-por')
                price_saveMoney_El.css('line-through', '1.5')

                product_mainImg_El.appendTo('.produto__imagem--main')
                productBuyDetailsPriceTitle_El.appendTo('.produto__comprar--detalhes-preco')
                price_savePercentage_El.appendTo('.produto__comprar--detalhes-preco')
                price_original_El.appendTo('.produto__comprar--detalhes-preco')
                price_final_El.appendTo('.produto__comprar--detalhes-preco')
                price_saveMoney_El.appendTo('.produto__comprar--detalhes-preco')
                textDescription_El.appendTo('.produto__comprar--detalhes-descricaoText')

            }
        })

        

    }).fail(function( jqxhr, settings, exception ) {
        console.log('error:')
        console.log(exception)
    })

    
}) 
