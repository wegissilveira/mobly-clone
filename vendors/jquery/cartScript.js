
// $(function(){
    const cartStorage = JSON.parse(localStorage.getItem('cart'))
    // $.getScript('../../data/produtosData.js', function() {

        $.each(cartStorage, (index, value) => {

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

            cartContainer_El.addClass('carrinho-produto-container')
            cartSubContainer_El.addClass('carrinho-produto-subContainer')
            cartImgContainer_El.addClass('carrinho-img-container')
            cartDetailsContainer_El.addClass('carrinho-produto-detalhes-container')
            cartDetails_El.addClass('carrinho-produto-detalhes')
            cartMontagem_El.addClass('carrinho-produto-montagem')


            $('<p>Quantidade</p><div><i class="flaticon-trash"></i><p>Excluir</p></div>').appendTo(cartDetailsDiv_3_El)
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

            $(cartContainer_El).appendTo('#teste')


            
            // if (cartStorage.includes(value.id)) {
                
                // const productQtde = 2
                // const productTotalValue = productQtde * parseFloat(value.preco.replace(',', '.'))

                
                // const productLink_El = $('<a></a>')
                // const productImg_El = $('<img>')
                // const productDetalhes_El = $('.carrinho-produto-detalhes').eq(0).children()
                // const productName_El = $(`<h4>${value.nome}</h4>`)
                // const productId_El = $(`<p>ID: ${value.id}</p>`)
                // const productValue_El = $(`<p><span>R$ ${value.preco}</span></p>`)
                // const productQtde_El = $(`<p>${productQtde}</p>`)
                // const productTotalValue_El = $(`<p><span>R$ ${productTotalValue}</span></p>`)
                
                // console.log(productDetalhes_El)
                // console.log(productDetalhes_El.eq(2).children().eq(0))

                // productImg_El.attr('src', value.imgs.img_1)
                // productLink_El.attr('href', `/item.html?product_id${value.id}`)

                // productImg_El.appendTo(productLink_El)
                // productLink_El.appendTo(productDiv_El)
                // productDiv_El.appendTo('.carrinho-img-container')

                // productId_El.prependTo(productDetalhes_El.eq(0))
                // productName_El.prependTo(productDetalhes_El.eq(0))
                // productValue_El.appendTo(productDetalhes_El.eq(1))
                // productQtde_El.insertAfter(productDetalhes_El.eq(2).children().eq(0))
                // productTotalValue_El.appendTo(productDetalhes_El.eq(3))

                
                console.log('teste')
            // }
        })

        // console.log('teste')

    // }).fail(function( jqxhr, settings, exception ) {
    //     console.log('error:')
    //     console.log(exception)
    // })
// })