// Criando o objeto da quantidade de favoritos no local storage
window.addEventListener('load', () => {
    const favoritosQtde = JSON.parse(localStorage.getItem('favoritosQtde'))

    localStorage.setItem('favoritosQtde', favoritosQtde !== null ? JSON.stringify   (favoritosQtde) : JSON.stringify({}))
})


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

// $(function(){
//     $("#product-list").load("../../shared/product-cart.html")
// });


$(function(){

    const favoritosStorage = JSON.parse(localStorage.getItem('favoritos'))
    const cartStorage = JSON.parse(localStorage.getItem('cart'))
    
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
                $('<div></div>').addClass('semanaM__galery--row')
                .appendTo('.semanaM__galery--images')
            }
        }
        
        let divRef = 0
        const semanaMDivs = $('.semanaM__galery--row')
        semanaMDivs.css('margin-bottom', 20)

        // Populando as divs com as imagens
        $.each(dataArr, (index, value) => {

            const semanaMLink = $('<a></a>')
            const semanaMImg = $('<img>')
            const semanaMArrow_div = $('<div></div>') 
            const semanaMArrow = $('<i></i>') 
            
            semanaMImg.attr('src', value)
            semanaMArrow_div.addClass('semanaM__galery--iContainer-green')
            if (index % 2 !== 0) {semanaMArrow_div.addClass('semanaM__galery--iContainer-grey')}
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

                slideDiv.addClass('promo__subContainer--slider-uni')
                slideLink.attr('href', `/item.html?product_id=${value.id}`)
                slideImg.attr('src', value.imgs.img_1)
                slideDescriptionDiv.addClass('promo__subContainer--slider-description')
                slideDescriptionPrice.addClass('promo__subContainer--slider-preco')
                slideDescriptionArrow.addClass('flaticon-right-arrow promo__subContainer--description-arrow')
                
                slideDescriptionTitle.appendTo(slideDescriptionDiv)
                slideDescriptionPrice.appendTo(slideDescriptionDiv)
                slideDescriptionArrow.appendTo(slideDescriptionDiv)
                slideImg.appendTo(slideLink)
                slideDescriptionDiv.appendTo(slideLink)
                slideLink.appendTo(slideDiv)
                slideDiv.appendTo('.promo__subContainer--slider-bloco')

                novosProdutosArr.push(value.novoProduto)
            }

        })

        const dotsQtd = Math.floor(novosProdutosArr.length / 4)

        for (let i = 0; i < dotsQtd; i++) {

            let dotIcon = $('<i></i>')

            dotIcon.addClass('flaticon-circle marker-amostras--js')
            if (i === 0) {dotIcon.addClass('flaticon-circle marker-amostras--js marker-amostras--active')}
            
            dotIcon.appendTo('.promo__subContainer--header-markerSlider')
        }
        

        /* **Lista de produtos (LANÇAMENTOS PAGE)** */
        /* **Produtos favoritos (Favoritos PAGE)** */

        const favoritosDataArr = returnData().filter(item => favoritosStorage.includes(item.id) )

        const url_string = window.location.href
        const url = new URL(url_string)

        let newReturnData
        let pagesQtde
        let rowsQtde

        if (url.pathname === '/lancamentos.html') {
            newReturnData = returnData()
            pagesQtde = Math.ceil(returnData().length / 12)
            rowsQtde = Math.ceil(returnData().length / 4)
        } else if (url.pathname === '/favoritos.html') {
            newReturnData = favoritosDataArr
            pagesQtde = Math.ceil(favoritosDataArr.length / 12)
            rowsQtde = Math.ceil(favoritosDataArr.length / 4)
        }

        for (let i = 0; i < pagesQtde; i++) {
            $(`<p>${i+1}</p>`)
                .addClass(i === 0 ? 'products__list_header--pages-active' : '')
                .on('click', () => passPageProducts(i))
                .appendTo('.products__list_header--pages')            

            const productsBlock = $('<div></div>')
                // .css('display', i !== 0 ? 'none' : 'block')
                .addClass('products__list_block')

            productsBlock.appendTo('.products__list_container')

            productsBlock.appendTo('.favoritos')
        }

        if (favoritosStorage.length === 0) {
            $('<div><p>Sua lista de favoritos está vazia.</p></div>').appendTo('.favoritos')
        }
        
        // => TALVEZ INSERIR ESSA ARROW PARA MUDAR DE BLOCO DE PÁGINAS, MAS CASO ISSO OCORRA SERIA NECESSÁRIO UMA ARROW PARA VOLTAR TBM
        // $('<i></i>')
        //     .addClass('flaticon-right-arrow filters__container--row-pages-arrow')
        //     .appendTo('.filters__container--row-pages')

        const produtosPages = $('.products__list_block')

        for (let i = 0; i < rowsQtde; i++) {

            const pageIndex = Math.floor(i / 3)
            
            const produtosRow = $('<div></div>')

            produtosRow.addClass('products__list_block--row')
            produtosRow.attr('id', `row-${i}`)

            produtosRow.appendTo(produtosPages[pageIndex])
        }

        const produtosRow = $('.products__list_block--row')

        let width = []
        $.each(newReturnData, (index, value) => {
  
            const favorito = favoritosStorage !== null ? favoritosStorage.includes(value.id) : false
            
            const rowIndex = Math.floor(index / 4)
            
            const produtosSubContainerLink = $('<a></a>')
            const produtosDiscount = $(`<p>-${value.desconto}%</p>`)
            const produtosImg = $('<img>')
            const produtosIcon = $('<i></i>')
            const produtosDescriptionDiv = $('<div></div>')
            const produtosDescriptionTitle = $(`<p>${value.nome}</p>`)
            const produtosDescriptionPriceParc = $(`<p><strong>10x ${(finalPrice / 10).toFixed(2).replace('.', ',')}</strong><span> sem juros</span></p>`)
            const produtosDescriptionPrice = $(`<p><span>${value.preco}</span><strong> ${finalPriceStr}</strong></p>`)
            
            produtosSubContainerLink.addClass('products__list_product--container')
            produtosSubContainerLink.attr('href', `/item.html?product_id=${value.id}`)
            produtosDiscount.addClass('products__list_product--discount')
            produtosImg.attr('src', value.imgs.img_1)
            produtosIcon.addClass(favorito ? 'flaticon-favorite-heart-button' : 'flaticon-like')
            produtosIcon.on('click', () => productLike(event, value.id, 'icon'))
            produtosDescriptionPriceParc.addClass('products__list_product--installment')
            produtosDescriptionPrice.addClass('products__list_product--price')

            produtosDiscount.appendTo(produtosSubContainerLink)
            produtosImg.appendTo(produtosSubContainerLink)
            produtosIcon.appendTo(produtosSubContainerLink)
            produtosDescriptionDiv.appendTo(produtosSubContainerLink)
            produtosDescriptionTitle.appendTo(produtosDescriptionDiv)
            produtosDescriptionPriceParc.appendTo(produtosDescriptionDiv)
            produtosDescriptionPrice.appendTo(produtosDescriptionDiv)

            produtosSubContainerLink.appendTo(produtosRow[rowIndex])

            // O width da row é a soma dos widths de cada div do produto, aqui se garante que cada row tenha o seu próprio array para determinar a qtde de div em cada uma.
            if (width.includes(rowIndex)) {
                width.push(rowIndex)
            } else {
                width = [rowIndex]
            }

            $(`#row-${rowIndex}`).css('width', (produtosSubContainerLink[0].offsetWidth * width.length + (width.length * 20)) + 'px') 
            
            // console.log(produtosSubContainerLink[0].offsetWidth)
            // console.log(width.length)
            // console.log(produtosSubContainerLink[0].offsetWidth * width.length + (width.length * 20))
            // console.log('***')
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

            const favorito = favoritosStorage !== null ? favoritosStorage.includes(value.id) : false
            const favoritosQtde = JSON.parse(localStorage.getItem('favoritosQtde'))
            const productIsInCart = cartStorage !== null ? cartStorage.includes(value.id) : false            

            if (value.id === id) {

                priceFormat = Number(value.preco.replace(',', '.'))
                finalPrice = (priceFormat / 100) * (100 - value.desconto)
                finalPriceStr = finalPrice.toFixed(2).replace('.', ',')
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
                    thumb_img_El.addClass(i === 0 ? 'product__image--thumb-active' : '')

                    thumb_img_El.on('mouseover', () => {
                        const thumb_imgs_container = $('.product__image--thumb')
                        const thumb_imgs_arr = Array.from(thumb_imgs_container[0].children)

                        $.map(thumb_imgs_arr, thumb => {
                            thumb.className = ''
                        })

                        product_mainImg_El.attr('src', imgsArr[i])

                        thumb_imgs_arr[i].className = 'product__image--thumb-active'

                    })

                    thumb_img_El.appendTo('.product__image--thumb')
                    
                })

                const productLike_icon_El = $('<i></i>')
                let productLike_qtde_El
                if (favoritosQtde !== null) {
                    productLike_qtde_El = $(`<p>${favoritosQtde[value.id] !== undefined ? favoritosQtde[value.id] : 0} favoritaram</p>`)
                } else {
                    productLike_qtde_El = 0
                }
                

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
                productLike_icon_El.addClass(favorito ? 'flaticon-favorite-heart-button' : 'flaticon-like')
                $('.produto__comprar--detalhes-boxesLike').on('click', () => productLike(event, value.id, 'div'))
                $('#comprar_btn--js').addClass(productIsInCart ? 'produto__comprar--detalhes-comprarBtn produto__comprar--detalhes-comprarBtn-remove' : 'produto__comprar--detalhes-comprarBtn ')
                $('#comprar_btn--js').html(productIsInCart ? 'Remover do carrinho' : 'Inserir no carrinho')
                $('#comprar_btn--js').on('click', () => addProductToCarrinho(value.id))

                product_mainImg_El.appendTo('.product__image--mainImage')
                productBuyDetailsPriceTitle_El.appendTo('.produto__comprar--detalhes-preco')
                price_savePercentage_El.appendTo('.produto__comprar--detalhes-preco')
                price_original_El.appendTo('.produto__comprar--detalhes-preco')
                price_final_El.appendTo('.produto__comprar--detalhes-preco')
                price_saveMoney_El.appendTo('.produto__comprar--detalhes-preco')
                textDescription_El.appendTo('.produto__comprar--detalhes-descricaoText')
                productLike_icon_El.prependTo('.produto__comprar--detalhes-boxesLike')
                productLike_qtde_El.appendTo('.produto__comprar--detalhes-boxesLike')

            }
        })

        /* **CARRINHO** */
        let productStorageIndex = 0
        let finalTotalPriceValue = 0
        let productsQtdeTotal = 0

        if (cartStorage.length > 0) {
            $.each(returnData(), (index, value) => {
                
                if (cartStorage.includes(value.id)) {

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

                    cartContainer_El.addClass('carrinho-produto-container')
                    cartSubContainer_El.addClass('carrinho-produto-subContainer')
                    cartImgContainer_El.addClass('carrinho-img-container')
                    cartDetailsContainer_El.addClass('carrinho-produto-detalhes-container')
                    cartDetails_El.addClass('carrinho-produto-detalhes')
                    cartMontagem_El.addClass('carrinho-produto-montagem')
                    deleteProduct_El.on('click', () => addProductToCarrinho(value.id, 'carrinho'))

                    $('<p>Quantidade</p>').appendTo(cartDetailsDiv_3_El)
                    deleteProduct_El.appendTo(cartDetailsDiv_3_El)    
                    $('<div><i class="flaticon-settings"></i><h4>Serviço de montagem</h4></div>').appendTo(cartMontagem_El)
                    $('<p><a href="#" >Clique aqui</a> e insira seu CEP para verificar a disponibilidade do serviço.</p>').appendTo(cartMontagem_El)

                    cartDetailsDiv_1_El.appendTo(cartDetails_El)
                    cartDetailsDiv_2_El.appendTo(cartDetails_El)
                    cartDetailsDiv_3_El.appendTo(cartDetails_El)
                    cartDetailsDiv_4_El.appendTo(cartDetails_El)
                    cartDetails_El.appendTo(cartDetailsContainer_El)
                    cartMontagem_El.appendTo(cartDetailsContainer_El)
                    cartImgContainer_El.appendTo(cartSubContainer_El)
                    cartDetailsContainer_El.appendTo(cartSubContainer_El)
                    cartSubContainer_El.appendTo(cartContainer_El)

                    $(cartContainer_El).appendTo('#product-list')
                    
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
                    const productDetalhes_El = $('.carrinho-produto-detalhes').eq(productStorageIndex).children()
                    const productName_El = $(`<a><h4>${value.nome}</h4></a>`)
                    const productId_El = $(`<p>ID: ${value.id}</p>`)
                    const productValue_El = $(`<p><span>R$ ${finalPriceStr}</span></p>`)
                    const productQtde_El = $(`<p>${productQtde}</p>`)
                    const productTotalValue_El = $(`<p><span>R$ ${productTotalValueStr}</span></p>`)

                    productImg_El.attr('src', value.imgs.img_1)
                    productLink_El.attr('href', `/item.html?product_id=${value.id}`)
                    productName_El.attr('href', `/item.html?product_id=${value.id}`)

                    productImg_El.appendTo(productLink_El)
                    productLink_El.appendTo(productDiv_El)
                    productDiv_El.appendTo($('.carrinho-img-container').eq(productStorageIndex))

                    productId_El.prependTo(productDetalhes_El.eq(0))
                    productName_El.prependTo(productDetalhes_El.eq(0))
                    productValue_El.appendTo(productDetalhes_El.eq(1))
                    productQtde_El.insertAfter(productDetalhes_El.eq(2).children().eq(0))
                    productTotalValue_El.appendTo(productDetalhes_El.eq(3))
                    
                    productStorageIndex = ++productStorageIndex

                    /* *Coluna de compra* */
                    const comprarSubtotalItens_El = $(`<p></p>`).html(productsQtdeTotal === 1 ? `Subtotal (1 item)` : `Subtotal (${productsQtdeTotal} itens)`)
                    const comprarSubtotalPrice_El = $(`<p>R$ ${finalTotalPriceValueStr}</p>`)
                    const comprarTotalPrice_El = $(`<p>R$ ${finalTotalPriceValueStr}</p>`)

                    const comprarSubContainer_El = $('.comprar-subContainer').eq(0).children()

                    if (productStorageIndex === cartStorage.length) {
                        comprarSubtotalItens_El.appendTo(comprarSubContainer_El.eq(0).children()[1])
                        comprarSubtotalPrice_El.appendTo(comprarSubContainer_El.eq(0).children()[1])
                        comprarTotalPrice_El.appendTo(comprarSubContainer_El.eq(1).children()[0])
                        $(`<p>em até 10x de R$ ${(finalTotalPriceValue / 10).toFixed(2)} sem juros</p>`).appendTo(comprarSubContainer_El.eq(1))
                    }
                    
                }
                
            })

        } else {

            $('.carrinho-session').css('background-color', '#fff')
            $('.produto-container').remove()
            $('.comprar-container').remove()

            const emptyCardIcon_El = $('<i></i>')
            const emptyCardTitle_El = $('<h1></h1>')
            const emptyCardLinkDiv_El = $('<div></div>')

            emptyCardIcon_El.addClass('flaticon-remove-from-cart')
            emptyCardIcon_El.css('font-size', '100px')
            emptyCardTitle_El.html('Seu carrinho de compras está vazio!')
            emptyCardLinkDiv_El.css('text-align', 'center')
            $('.carrinho-container').css('color', '#828282')
            $('.carrinho-container').css('display', 'flex')
            $('.carrinho-container').css('flex-direction', 'column')
            $('.carrinho-container').css('align-items', 'center')

            $('<p>Não perca mais tempo <a href="/lancamentos.html">clique aqui</a></p>').appendTo(emptyCardLinkDiv_El)
            $('<p>e aproveite nossas ofertas.</p>').appendTo(emptyCardLinkDiv_El)

            emptyCardIcon_El.appendTo('.carrinho-container')
            emptyCardTitle_El.appendTo('.carrinho-container')
            emptyCardLinkDiv_El.appendTo('.carrinho-container')

            $('.carrinho-container a').css('color', '#337ab7')
            $('.carrinho-container a').css('text-decoration', 'underline')
        }

        

    }).fail(function( jqxhr, settings, exception ) {
        console.log('error:')
        console.log(exception)
    })

    
}) 
