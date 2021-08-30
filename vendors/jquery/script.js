$(function(){
    $("#includedHeader").load("./shared/header.html"); 
});

$(function(){
    $("#includedFooter").load("./shared/footer.html"); 
});

$(function(){
    $("#info").load("./shared/info-session.html"); 
});

$(function(){
    $("#newsletter").load("./shared/newsletter-session.html"); 
});


$(function(){
    const window_width = $(window).width()

    const url_string = window.location.href
    const url = new URL(url_string)

    let liked_storage = JSON.parse(localStorage.getItem('liked'))
    liked_storage = liked_storage === null ? [] : liked_storage

    let cart_storage = JSON.parse(localStorage.getItem('shopping_cart'))
    cart_storage = cart_storage === null ? [] : cart_storage
    
    /* Main Slider */
    $.getScript("./data/mainSliderData.js", function() {
        
        const mainSliderContainer = $('#mainSlider')
        mainSliderContainer.css('width', window_width * 7)

        let imgsObj = returnData().fullSizeImgs

        if (window_width < 1200) {
            imgsObj = returnData().responsiveImgs
            // O height é o width + 10%, para que a imagem seja quadrada e sobre ainda o espaço dos dots
            $('.mainSlider').css('height', window_width + ((window_width / 100) * 10))
        }

        const dataArr = $.map(imgsObj, value => {
            return [value]
        })

        $.each(dataArr, (index, value) => {

            // Inserção de imagens no slider
            const mainSliderDiv_El = $('<div></div>')
            
            if (index === 0) {
                mainSliderDiv_El.css("background-image", `url(${value})`)
                mainSliderDiv_El.addClass('slider__img slide--js')

                mainSliderDiv_El.appendTo(mainSliderContainer)
            } else {
                mainSliderDiv_El.css({"background-image": `url(${value})`})
                mainSliderDiv_El.addClass('slider__img slide--js')
                
                mainSliderDiv_El.appendTo(mainSliderContainer)
            }

            // Inserção de thumbnails do slider
            const thumbnailDiv_El = $('<div></div>')
            const thumbnailImg_El = $('<img>')
            const thumbnailArrow_El = $('<i></i>')
            
            thumbnailDiv_El.attr('id', `slider__thumbnail_js-${index + 1}`)
            thumbnailDiv_El.addClass('slider__thumbnail')
            thumbnailImg_El.attr('src', value)
            thumbnailArrow_El.addClass('flaticon-down-arrow')
            
            thumbnailImg_El.appendTo(thumbnailDiv_El)
            thumbnailArrow_El.appendTo(thumbnailDiv_El)
            thumbnailDiv_El.appendTo('#slider__marker_thumbnails')

            // Inserção dos pontos de marcação dos slides
            const sliderMarker_El = $('<i></i>')

            sliderMarker_El.addClass('flaticon-circle mainMarker--js')
            if (index === 0) {sliderMarker_El.addClass('flaticon-circle mainMarker--js markerT')}

            sliderMarker_El.on('click', () => passMainSlides(index + 1, 'dot'))
            sliderMarker_El.on('mouseover', () => openThumbnail(index + 1))
            sliderMarker_El.on('mouseout', () => closeThumbnail(index + 1))

            sliderMarker_El.appendTo('#slider__marker_icons')

        })

    }) .fail(function( jqxhr, settings, exception ) {
        console.log('error:')
        console.log(exception)
    })
    
    /* SemanaM imagens */
    $.getScript("./data/semanaMData.js", function() {

        const dataArr = $.map(returnData(), value => {
            return [value]
        })

        // Criando as divs parents das imagens
        for (let i = 0; i < dataArr.length; i++) {
            if ((i + 1) % 3 === 0) {
                $('<div></div>').addClass('semanaM__gallery--row')
                .appendTo('.semanaM__gallery--images')
            }
        }
        
        let divRef = 0
        const semanaM_divs_El = $('.semanaM__gallery--row')
        semanaM_divs_El.css('margin-bottom', 20)

        // Populando as divs com as imagens
        $.each(dataArr, (index, value) => {

            const semanaM_link_El = $('<a></a>')
            const semanaM_img_El = $('<img>')
            const semanaM_arrow_div = $('<div></div>') 
            const semanaM_arrow_El = $('<i></i>') 
            
            semanaM_img_El.attr('src', value)
            semanaM_arrow_div.addClass('semanaM__gallery--arrow')
            semanaM_link_El.addClass('semanaM__gallery--iContainer-green')
            if (index % 2 !== 0) {semanaM_link_El.addClass('semanaM__gallery--iContainer-grey')}
            semanaM_arrow_El.addClass('flaticon-right-arrow')

            semanaM_arrow_El.appendTo(semanaM_arrow_div)
            semanaM_img_El.appendTo(semanaM_link_El)
            semanaM_arrow_div.appendTo(semanaM_link_El)
            semanaM_link_El.appendTo(semanaM_divs_El[divRef])

            if ((index + 1) % 3 === 0) {
                divRef++
            }
        })
        
    }).fail(function( jqxhr, settings, exception ) {
        console.log('error:')
        console.log(exception)
    })

    /* Ambientes decorados */
    if (url.pathname === '/mobly-clone/index.html') {
        $.getScript('./data/ambientesDecoradosData.js', function() {

            const dataArr = $.map(returnData(), value => {
                return [value]
            })
            
            $.each(dataArr, (index, value) => {

                const decorados_block_El = $('<div></div>')
                const decorados_row_1_El = $('<div><div></div><div></div></div>')
                const decorados_row_2_El = $('<div><div></div><div></div></div>')

                const over_slider_container_El = $('.decorados_overSlider')
                const over_slider_div_El = $('<div></div>')

                decorados_block_El.addClass('decorados__slider--block')
                if (index !== 0) {decorados_block_El.css('display', 'none')}
                decorados_row_1_El.addClass('decorados__slider--row')
                decorados_row_2_El.addClass('decorados__slider--row')

                const valueArr = $.map(value, imgBlock => {
                    return [imgBlock]
                })

                over_slider_div_El.appendTo('.decorados_overSlider')
                
                $.each(valueArr, (i, val) => {
                    const decorados_img_El = $('<img>')
                    decorados_img_El.on('click', () => showDecorados_overSlider('open', index, i))
                    decorados_img_El.attr('src', val)

                    if (i <= 1) {
                        decorados_img_El.appendTo(decorados_row_1_El[0].children[i])
                    } else {
                        decorados_img_El.appendTo(decorados_row_2_El[0].children[i - 2])
                    } 

                    const over_slider_img_El = $('<img>')
                    over_slider_img_El.attr('src', val)
                    over_slider_img_El.appendTo(over_slider_container_El[0].children[index + 2])
                })

                decorados_row_1_El.appendTo(decorados_block_El)
                decorados_row_2_El.appendTo(decorados_block_El)
                decorados_block_El.appendTo('.decorados__slider--container')
            })

        }).fail(function( jqxhr, settings, exception ) {
            console.log('error:')
            console.log(exception)
        })
    }
    

    /* Produtos */

    let priceFormat 
    let finalPrice 
    let finalPriceStr 

    $.getScript('./data/produtosData.js', function() {

        /* Acabaram de chegar (HOMEPAGE) */
        let new_products_arr = []

        $.each(returnData(), (index, value) => {
            // console.log(value)
            // Criação da div com todos os elementos necessários dentro
            if (value.novoProduto) {

                priceFormat = Number(value.preco.replace(',', '.'))
                finalPrice = (priceFormat / 100) * (100 - value.desconto)
                finalPriceStr = finalPrice.toFixed(2).replace('.', ',')
                
                const product_El = $('<div></div>')
                const product_link_El = $('<a></a>')
                const product_img_El = $('<img>')
                const product_description_El = $('<div></div>')
                const product_description_title_El = $(`<p>${value.nome}</p>`)
                const product_description_price_El = $(`<p>Por: R$ ${finalPriceStr}</p>`)
                const product_description_arrow_El = $('<i></i>')

                product_El.addClass('promo__product--container')
                product_link_El.attr('href', `./item.html?product_id=${value.id}`)
                product_img_El.attr('src', value.imgs.img_1)
                product_description_El.addClass('promo__product--description')
                product_description_price_El.addClass('promo__product--price')
                product_description_arrow_El.addClass('flaticon-right-arrow')
                
                product_description_title_El.appendTo(product_description_El)
                product_description_price_El.appendTo(product_description_El)
                product_description_arrow_El.appendTo(product_description_El)
                product_img_El.appendTo(product_link_El)
                product_description_El.appendTo(product_link_El)
                product_link_El.appendTo(product_El)
                product_El.appendTo('.promo__subContainer--slider-block')

                new_products_arr.push(value.novoProduto)
            }

        })

        let dotsQtd

        if (window_width >= 1200) {
            dotsQtd = Math.ceil(new_products_arr.length / 4)
        } else if (window_width < 1200 && window_width >= 768) {
            dotsQtd = Math.ceil(new_products_arr.length / 3)
        }

        if (window_width >= 768) {
            for (let i = 0; i < dotsQtd; i++) {

                let dot_icon_El = $('<i></i>')
    
                dot_icon_El.addClass('flaticon-circle marker-promoSlider--js')
                if (i === 0) {dot_icon_El.addClass('flaticon-circle marker-promoSlider--js marker-amostras--active')}
                
                dot_icon_El.appendTo('.promo__subContainer--header-markerSlider')
            }
            
            $('.promo__subContainer--header-markerSlider').css('width', dotsQtd * 1.5 * 10)
        }
        

        /* **Lista de produtos (LANÇAMENTOS PAGE)** */
        /* **Produtos favoritos (Favoritos PAGE)** */
        
    
        const favoritosDataArr = returnData().filter(item => liked_storage.includes(item.id) )

        // const url_string = window.location.href
        // const url = new URL(url_string)

        let newReturnData
        let pagesQtde
        let rowsQtde

        // if (url./mobly-clone === '/lancamentos.html') {
        //     newReturnData = returnData()
        //     pagesQtde = Math.ceil(returnData().length / 12)
        //     rowsQtde = Math.ceil(returnData().length / 4)
        // } else if (url.pathname === '/favoritos.html') {
        //     newReturnData = favoritosDataArr
        //     pagesQtde = Math.ceil(favoritosDataArr.length / 12)
        //     rowsQtde = Math.ceil(favoritosDataArr.length / 4)
        // }

        if (url.pathname === '/mobly-clone/lancamentos.html') {
            newReturnData = returnData()
            console.log(newReturnData)
            if (window_width >= 992) {
                pagesQtde = Math.ceil(returnData().length / 12)
                rowsQtde = Math.ceil(returnData().length / 4)
            } else if (window_width > 767 && window_width < 992) {
                pagesQtde = Math.ceil(returnData().length / 9)
                rowsQtde = Math.ceil(returnData().length / 3)
            } else if (window_width <= 767) {
                pagesQtde = 1
                rowsQtde = Math.ceil(returnData().length / 2)
            }
            
        } else if (url.pathname === '/mobly-clone/favoritos.html') {
            newReturnData = favoritosDataArr

            if (window_width >= 992) {
                pagesQtde = Math.ceil(favoritosDataArr.length / 12)
                rowsQtde = Math.ceil(favoritosDataArr.length / 4)
            } else if (window_width > 767 && window_width < 992) {
                pagesQtde = Math.ceil(favoritosDataArr.length / 9)
                rowsQtde = Math.ceil(favoritosDataArr.length / 3)
            } else if (window_width <= 767) {
                pagesQtde = 1
                rowsQtde = Math.ceil(favoritosDataArr.length / 2)
            }
            
        }

        for (let i = 0; i < pagesQtde; i++) {
            $(`<p>${i+1}</p>`)
                .addClass(i === 0 ? 'products__list_header--pages-active' : '')
                .on('click', () => passPageProducts(i))
                .appendTo('.products__list_header--pages')            

            const products_container_El = $('<div></div>')
                // .css('display', i !== 0 ? 'none' : 'block')
                .addClass('products__list_block')

            products_container_El.appendTo('.products__list_container')

            products_container_El.appendTo('.liked--container')
        }

        if (liked_storage.length === 0) {
            $('<div><p>Sua lista de favoritos está vazia.</p></div>').appendTo('.liked--container')
        }
        
        const products_block_El = $('.products__list_block')

        for (let i = 0; i < rowsQtde; i++) {

            let pageIndex 
            if (window_width > 767) {
                pageIndex = Math.floor(i / 3)
            } else {
                pageIndex = 0
            }
            
            const products_row_El = $('<div></div>')

            products_row_El.addClass('products__list_block--row')
            products_row_El.attr('id', `row-${i}`)

            products_row_El.appendTo(products_block_El[pageIndex])
        }

        const products_row_El = $('.products__list_block--row')

        let widths_arr = []
        $.each(newReturnData, (index, value) => {
  
            const is_product_liked = liked_storage !== null ? liked_storage.includes(value.id) : false
            
            let rowIndex
            if (window_width >= 992) {
                rowIndex = Math.floor(index / 4)
            } else if (window_width > 767 && window_width < 992) {
                rowIndex = Math.floor(index / 3)
            } else if (window_width <= 767) {
                rowIndex = Math.floor(index / 2)
            }
            
            const products_link_subContainer_El = $('<a></a>')
            const products_discount_El = $(`<p>-${value.desconto}%</p>`)
            const products_img_El = $('<img>')
            const produtos_icon_El = $('<i></i>')
            const products_description_El = $('<div></div>')
            const products_description_title_El = $(`<p>${value.nome}</p>`)
            const products_description_installment_El = $(`<p><strong>10x ${(finalPrice / 10).toFixed(2).replace('.', ',')}</strong><span> sem juros</span></p>`)
            const products_description_price_El = $(`<p><span>${value.preco}</span><strong> ${finalPriceStr}</strong></p>`)
            
            products_link_subContainer_El.addClass('products__list_product--container')
            products_link_subContainer_El.attr('href', `./item.html?product_id=${value.id}`)
            products_discount_El.addClass('products__list_product--discount')
            products_img_El.attr('src', value.imgs.img_1)
            produtos_icon_El.addClass(is_product_liked ? 'flaticon-favorite-heart-button' : 'flaticon-like')
            produtos_icon_El.on('click', () => productLike(event, value.id, 'icon'))
            products_description_installment_El.addClass('products__list_product--installment')
            products_description_price_El.addClass('products__list_product--price')

            products_discount_El.appendTo(products_link_subContainer_El)
            products_img_El.appendTo(products_link_subContainer_El)
            produtos_icon_El.appendTo(products_link_subContainer_El)
            products_description_El.appendTo(products_link_subContainer_El)
            products_description_title_El.appendTo(products_description_El)
            products_description_installment_El.appendTo(products_description_El)
            products_description_price_El.appendTo(products_description_El)

            products_link_subContainer_El.appendTo(products_row_El[rowIndex])

            // O width da row é a soma dos widths de cada div do produto, aqui se garante que cada row tenha o seu próprio array para determinar a qtde de div em cada uma.
            if (widths_arr.includes(rowIndex)) {
                widths_arr.push(rowIndex)
            } else {
                widths_arr = [rowIndex]
            }

            let products_row_width

            if (window_width > 767) {
                products_row_width = (products_link_subContainer_El[0].offsetWidth * widths_arr.length + (widths_arr.length * 20)) + 'px'
            } else {
                products_row_width = '100%'
            }
            // $(`#row-${rowIndex}`).css('width', window_width > 767 ? (products_link_subContainer_El[0].offsetWidth * width.length + (width.length * 20)) + 'px' : '100%') 
            $(`#row-${rowIndex}`).css('width', products_row_width) 
        })

        // Aplicando block na página 1 e none nas demais
        const items = $('.products__list_block')
        items.slice(0, items.length).css('display', 'none')
        items.slice(0,1).css('display', 'block')


        /* **Item individual (Item PAGE)** */

        // const url_string = window.location.href
        // const url = new URL(url_string)
        const id = Number(url.searchParams.get("product_id"))
        
        $.each(returnData(), (index, value) => {

            const is_product_liked = liked_storage !== null ? liked_storage.includes(value.id) : false
            let liked_qtd_storage = JSON.parse(localStorage.getItem('liked_qtd'))
            liked_qtd_storage = liked_qtd_storage === null ? {} : liked_qtd_storage
            const is_product_in_cart = cart_storage !== null ? cart_storage.includes(value.id) : false            

            if (value.id === id) {

                priceFormat = Number(value.preco.replace(',', '.'))
                finalPrice = (priceFormat / 100) * (100 - value.desconto)
                finalPriceStr = finalPrice.toFixed(2).replace('.', ',')
                const priceSave = (priceFormat - finalPrice).toFixed(2).replace('.', ',')
                
                const product_mainImg_El = $('<img>')
                const product_responsive_circles_El = $('<div>')
                const productBuyDetailsPriceTitle_El = $(`<h3>${value.nome}</h3>`)
                const price_savePercentage_El = $(`<p>Economize ${value.desconto}%</p>`)
                const price_original_El = $(`<p>De: ${value.preco}</p>`)
                const price_final_El = $(`<p>por<span>&nbsp;${finalPriceStr}</span></p>`)
                const price_saveMoney_El = $(`<p><span>(economize ${priceSave})</span><br> Ou em até 10x de ${(finalPrice / 10).toFixed(2).replace('.', ',')} sem juros</p>`)

                const measuresContainer_El = $('.product__buy--details-dimensions')
                const textDescription_El = $(`<p>${value.descricao}</p>`)

                // Alterando imagem principal para a que receber o hover
                const imgsArr = $.map(value.imgs, value => {
                    return [value]
                })

                $.each(imgsArr, (i, val) => {

                    if (window_width >= 992) {
                        if (i === 0) {
                            product_mainImg_El.attr('src', val)
                        } 
                        console.log('1')

                    } else {
                        $('<img>').attr('src', val).appendTo('.product__image--mainImage') 
                        console.log('2')
                    }
                    
                    const circles_img_El = $('<i></i>')
                    
                    i === 0 ? 
                        circles_img_El.addClass('product_item_circle is-active') 
                    : 
                        circles_img_El.addClass('product_item_circle') 

                    circles_img_El.addClass('flaticon-circle')
                    circles_img_El.appendTo(product_responsive_circles_El)

                    const thumb_img_El = $('<img>')
                    thumb_img_El.attr('src', val)
                    thumb_img_El.addClass(i === 0 ? 'product__image--thumb-active' : '')

                    thumb_img_El.on('mouseover', () => {
                        const thumb_imgs_container_El = $('.product__image--thumb')
                        const thumb_imgs_arr = Array.from(thumb_imgs_container_El[0].children)

                        $.map(thumb_imgs_arr, thumb => {
                            thumb.className = ''
                        })

                        product_mainImg_El.attr('src', imgsArr[i])

                        thumb_imgs_arr[i].className = 'product__image--thumb-active'
                    })
                    
                    if (window_width >= 992) {
                        thumb_img_El.appendTo('.product__image--thumb')
                    }
                })

                product_responsive_circles_El.appendTo('.product__image--circles')

                const dotsQtd_item = product_responsive_circles_El.children().length
                product_responsive_circles_El.css('width', dotsQtd_item * 2.5 * 10)


                const productLike_icon_El = $('<i></i>')
                let productLike_qtde_El

                productLike_qtde_El = $(`<p>${liked_qtd_storage[value.id] !== undefined ? liked_qtd_storage[value.id] : 0} favoritaram</p>`)

                const dimensions_arr = $.map(value.dimensoes, value => {
                    return [value]
                })

                const dimensions_arr_keys = Object.keys(value.dimensoes).map(item => {
                    return item.charAt(0).toUpperCase() + item.slice(1)
                })
                
                $.each(dimensions_arr, (i, val) => {
                    
                    $(`<p>${dimensions_arr_keys[i]}:<span> ${val}</span></p>`)
                    .addClass('measure_unit')
                    .appendTo(measuresContainer_El[0].children[i])
                })


                const product_boxes = $('.product__buy_boxes--container')
                const like_box = product_boxes.children().eq(0)

                price_savePercentage_El.addClass('product__buy--save')
                price_original_El.addClass('product__buy--originalPrice')
                price_final_El.addClass('product__buy--currentPrice-container')
                price_saveMoney_El.css('line-through', '1.5')
                productLike_icon_El.addClass(is_product_liked ? 'flaticon-favorite-heart-button' : 'flaticon-like')
                like_box.on('click', () => productLike(event, value.id, 'div'))
                $('#product__buy_btn--js').addClass(is_product_in_cart ? 'product__buy--btn product__buy--btn-remove' : 'product__buy--btn ')
                $('#product__buy_btn--js').html(is_product_in_cart ? 'Remover do carrinho' : 'Inserir no carrinho')
                $('#product__buy_btn--js').on('click', () => addProductToCarrinho(value.id))

                if (window_width >= 992) {
                    product_mainImg_El.appendTo('.product__image--mainImage') 
                } 
                productBuyDetailsPriceTitle_El.appendTo('.product__buy--price')
                price_savePercentage_El.appendTo('.product__buy--price')
                price_original_El.appendTo('.product__buy--price')
                price_final_El.appendTo('.product__buy--price')
                price_saveMoney_El.appendTo('.product__buy--price')
                textDescription_El.appendTo('.product__buy--details-description')
                productLike_icon_El.prependTo(like_box)
                productLike_qtde_El.appendTo(like_box)

            }
        })

        /* **CARRINHO** */
        let productStorageIndex = 0
        let finalTotalPriceValue = 0
        let productsQtdeTotal = 0

        if (cart_storage.length > 0) {
            $.each(returnData(), (index, value) => {
                
                if (cart_storage.includes(value.id)) {
                    
                    /* *Lista de produtos* */
                    /* Estrutura base */
                    const cartContainer_El = $(`<div></div>`)
                    const cartSubContainer_El = $(`<div></div>`)
                    const cartImgContainer_El = $(`<div></div>`)
                    const cartDetailsContainer_El = $(`<div></div>`)

                    const cartDetails_El = $(`<div></div>`)
                    const cartDetailsDiv_1_El = $(`<div><p>Vendido e entregue por <span>Mobly</span></p></div>`)
                    const cartDetailsDiv_2_El = $(`<div><p>Valor Unitário</p></div>`)
                    const cartDetailsDiv_3_El = $(`<div></div>`)
                    const cartDetailsDiv_4_El = $(`<div><p>Total</p></div>`)

                    const cartMontagem_El = $(`<div></div>`)
                    const deleteProduct_El = $(`<div><i class="flaticon-trash"></i><p>Excluir</p></div>`)

                    cartContainer_El.addClass('shopping__cart--product-container')
                    cartSubContainer_El.addClass('shopping__cart--product-subContainer')
                    cartImgContainer_El.addClass('shopping__cart--product-img')
                    cartDetailsContainer_El.addClass('shopping__cart--product-info-container')
                    cartDetails_El.addClass('shopping__cart--product-info')
                    cartMontagem_El.addClass('shopping__cart--product-setUp')
                    deleteProduct_El.on('click', () => addProductToCarrinho(value.id, 'carrinho'))

                    $('<p>Quantidade</p>').appendTo(cartDetailsDiv_3_El)
                    deleteProduct_El.appendTo(cartDetailsDiv_3_El)    
                    $('<div><i class="flaticon-settings"></i><h4>Serviço de montagem</h4></div>').appendTo(cartMontagem_El)
                    $('<p><a href="#" >Clique aqui</a> e insira seu CEP para verificar a disponibilidade do serviço.</p>').appendTo(cartMontagem_El)

                    if (window_width > 767.68) {
                        cartDetailsDiv_1_El.appendTo(cartDetails_El)
                        cartDetailsDiv_2_El.appendTo(cartDetails_El)
                        cartDetailsDiv_3_El.appendTo(cartDetails_El)
                        cartDetailsDiv_4_El.appendTo(cartDetails_El)
                    }
                    
                    cartDetails_El.appendTo(cartDetailsContainer_El)
                    cartMontagem_El.appendTo(cartDetailsContainer_El)
                    cartImgContainer_El.appendTo(cartSubContainer_El)
                    cartDetailsContainer_El.appendTo(cartSubContainer_El)
                    cartSubContainer_El.appendTo(cartContainer_El)

                    $(cartContainer_El).appendTo('#shopping__cart--product-list')
                    
                    /* Estrutura dinâmica */
                    priceFormat = Number(value.preco.replace(',', '.'))
                    finalPrice = (priceFormat / 100) * (100 - value.desconto)
                    finalPriceStr = finalPrice.toFixed(2).replace('.', ',')
                    const productQtde = Math.floor(Math.random() * 3) + 1
                    const productTotalValue = productQtde * finalPrice

                    const productTotalValueStr = productTotalValue.toFixed(2).replace('.', ',')
                    finalTotalPriceValue = finalTotalPriceValue + productTotalValue
                    finalTotalPriceValueStr = finalTotalPriceValue.toFixed(2).replace('.', ',')
                    productsQtdeTotal = productsQtdeTotal + productQtde
                    
                    const productDiv_El = $('<div></div>')
                    const productLink_El = $('<a></a>')
                    const productImg_El = $('<img>')
                    const productDetalhes_El = $('.shopping__cart--product-info').eq(productStorageIndex)
                    const productName_El = $(`<a><h4>${value.nome}</h4></a>`)
                    const productId_El = $(`<p>ID: ${value.id}</p>`)
                    const productValue_El = $(`<p><span>R$ ${finalPriceStr}</span></p>`)
                    const productQtde_El = $(`<p>${productQtde}</p>`)
                    const productTotalValue_El = $(`<p><span>R$ ${productTotalValueStr}</span></p>`)

                    productImg_El.attr('src', value.imgs.img_1)
                    productLink_El.attr('href', `./item.html?product_id=${value.id}`)
                    productName_El.attr('href', `./item.html?product_id=${value.id}`)

                    productImg_El.appendTo(productLink_El)
                    productLink_El.appendTo(productDiv_El)
                    productDiv_El.appendTo($('.shopping__cart--product-img').eq(productStorageIndex))

                    if (window_width > 767.98) {
                        productId_El.prependTo(productDetalhes_El.children().eq(0))
                        productName_El.prependTo(productDetalhes_El.children().eq(0))
                        productValue_El.appendTo(productDetalhes_El.children().eq(1))
                        productQtde_El.insertAfter(productDetalhes_El.children().eq(2).children().eq(0))
                        productTotalValue_El.appendTo(productDetalhes_El.children().eq(3))

                    } else {
                        const div = $('<div></div>')
                        productName_El.appendTo(productDetalhes_El)
                        productQtde_El.appendTo(div)
                        productTotalValue_El.insertAfter(productQtde_El)
                        div.appendTo(productDetalhes_El)
                    }                  

                    productStorageIndex = ++productStorageIndex

                    /* *Coluna de compra* */
                    const comprarSubtotalItens_El = $(`<p></p>`).html(productsQtdeTotal === 1 ? `Subtotal (1 item)` : `Subtotal (${productsQtdeTotal} itens)`)
                    const comprarSubtotalPrice_El = $(`<p>R$ ${finalTotalPriceValueStr}</p>`)
                    const comprarTotalPrice_El = $(`<p>R$ ${finalTotalPriceValueStr}</p>`)

                    const comprarSubContainer_El = $('.shopping__cart--buy-subContainer').eq(0).children()

                    if (productStorageIndex === cart_storage.length) {
                        comprarSubtotalItens_El.appendTo(comprarSubContainer_El.eq(0).children()[1])
                        comprarSubtotalPrice_El.appendTo(comprarSubContainer_El.eq(0).children()[1])
                        comprarTotalPrice_El.appendTo(comprarSubContainer_El.eq(2).children()[0])
                        $(`<p>em até 10x de R$ ${(finalTotalPriceValue / 10).toFixed(2)} sem juros</p>`).appendTo(comprarSubContainer_El.eq(2))
                    }
                }
            })

            if (window_width < 1580) {
                $('.shopping__cart--buy-container').insertAfter('.shopping__cart--products-shipping-container')

                const newDiv = $('<div></div>')
                const div_2 = $('.shopping__cart--buy-subContainer').eq(0).children().eq(2)
                const div_3 = $('.shopping__cart--buy-subContainer').eq(0).children().eq(3)

                div_2.appendTo(newDiv)
                div_3.appendTo(newDiv)

                newDiv.insertAfter($('.shopping__cart--buy-subContainer').eq(0).children().eq(1))
            }

        } else {

            $('.shopping__cart--session').css('background-color', '#fff')
            $('.shopping__cart--products-container').remove()
            $('.shopping__cart--buy-container').remove()

            const emptyCardIcon_El = $('<i></i>')
            const emptyCardTitle_El = $('<h1></h1>')
            const emptyCardLinkDiv_El = $('<div></div>')

            emptyCardIcon_El.addClass('flaticon-remove-from-cart')
            emptyCardIcon_El.css('font-size', '100px')
            emptyCardTitle_El.html('Seu carrinho de compras está vazio!')
            emptyCardLinkDiv_El.css('text-align', 'center')
            $('.shopping__cart--container').css('color', '#828282')
            $('.shopping__cart--container').css('display', 'flex')
            $('.shopping__cart--container').css('flex-direction', 'column')
            $('.shopping__cart--container').css('align-items', 'center')

            $('<p>Não perca mais tempo <a href="./lancamentos.html">clique aqui</a></p>').appendTo(emptyCardLinkDiv_El)
            $('<p>e aproveite nossas ofertas.</p>').appendTo(emptyCardLinkDiv_El)

            emptyCardIcon_El.appendTo('.shopping__cart--container')
            emptyCardTitle_El.appendTo('.shopping__cart--container')
            emptyCardLinkDiv_El.appendTo('.shopping__cart--container')

            $('.shopping__cart--container a').css('color', '#337ab7')
            $('.shopping__cart--container a').css('text-decoration', 'underline')
        }

        

    }).fail(function( jqxhr, settings, exception ) {
        console.log('error:')
        console.log(exception)
    })

    
}) 
