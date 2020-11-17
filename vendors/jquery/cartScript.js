
$(function(){
    const cartStorage = JSON.parse(localStorage.getItem('cart'))
    $.getScript('../../data/produtosData.js', function() {

        $.each(returnData(), (index, value) => {
            
            if (cartStorage.includes(value.id)) {
                
                const productQtde = 2
                const productTotalValue = productQtde * parseFloat(value.preco.replace(',', '.'))

                const productDiv_El = $('<div></div>')
                const productLink_El = $('<a></a>')
                const productImg_El = $('<img>')
                const productDetalhes_El = $('.carrinho-produto-detalhes').eq(0).children()
                const productName_El = $(`<h4>${value.nome}</h4>`)
                const productId_El = $(`<p>ID: ${value.id}</p>`)
                const productValue_El = $(`<p><span>R$ ${value.preco}</span></p>`)
                const productQtde_El = $(`<p>${productQtde}</p>`)
                const productTotalValue_El = $(`<p><span>R$ ${productTotalValue}</span></p>`)
                
                // console.log(productDetalhes_El)
                // console.log(productDetalhes_El.eq(2).children().eq(0))

                productImg_El.attr('src', value.imgs.img_1)
                productLink_El.attr('href', `/item.html?product_id${value.id}`)

                productImg_El.appendTo(productLink_El)
                productLink_El.appendTo(productDiv_El)
                productDiv_El.appendTo('.carrinho-img-container')

                productId_El.prependTo(productDetalhes_El.eq(0))
                productName_El.prependTo(productDetalhes_El.eq(0))
                productValue_El.appendTo(productDetalhes_El.eq(1))
                productQtde_El.insertAfter(productDetalhes_El.eq(2).children().eq(0))
                productTotalValue_El.appendTo(productDetalhes_El.eq(3))

            }
        })

        console.log('teste')

    }).fail(function( jqxhr, settings, exception ) {
        console.log('error:')
        console.log(exception)
    })
})