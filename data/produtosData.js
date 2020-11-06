let produtosData

function returnData() {
    produtosData = [
        // {
        //     img: '../vendors/img/promo/img-1.jpg',
        //     nome: 'Escrivaninha Mesa',
        //     material: 'Escritório Madeira Pinus',
        //     preco: '394.90',
        //     novoProduto: true
        // },
        {
            id: 1,
            img: '../vendors/img/produtos/armario_1.jpg',
            nome: 'Escrivaninha Mesa',
            material: 'Escritório Madeira Pinus',
            preco: '394.90',
            novoProduto: true
        },
        {
            id: 2,
            img: '../vendors/img/produtos/cadeira_1.jpg',
            nome: 'Escrivaninha Mesa',
            material: 'Escritório Madeira Pinus',
            preco: '394.90',
            novoProduto: true
        },
        {
            id: 3,
            img: '../vendors/img/produtos/cama_1.jpg',
            nome: 'Escrivaninha Mesa',
            material: 'Escritório Madeira Pinus',
            preco: '394.90',
            novoProduto: true
        },
        {
            id: 4,
            img: '../vendors/img/produtos/guardaRoupas_1.jpg',
            nome: 'Escrivaninha Mesa',
            material: 'Escritório Madeira Pinus',
            preco: '394.90',
            novoProduto: false
        },
        {
            id: 5,
            img: '../vendors/img/produtos/mesa_1.jpg',
            nome: 'Escrivaninha Mesa',
            material: 'Escritório Madeira Pinus',
            preco: '394.90',
            novoProduto: true
        },
        {
            id: 6,
            img: '../vendors/img/produtos/sofa_1.jpg',
            nome: 'Escrivaninha Mesa',
            material: 'Escritório Madeira Pinus',
            preco: '394.90',
            novoProduto: true
        },
        {
            id: 7,
            img: '../vendors/img/produtos/cama_2.jpg',
            nome: 'Escrivaninha Mesa',
            material: 'Escritório Madeira Pinus',
            preco: '394.90',
            novoProduto: true
        },
        {
            id: 8,
            img: '../vendors/img/produtos/cadeira_2.jpg',
            nome: 'Escrivaninha Mesa',
            material: 'Escritório Madeira Pinus',
            preco: '394.90',
            novoProduto: true
        },
        {
            id: 9,
            img: '../vendors/img/produtos/sofa_2.jpg',
            nome: 'Escrivaninha Mesa',
            material: 'Escritório Madeira Pinus',
            preco: '394.90',
            novoProduto: true
        },
        {
            id: 10,
            img: '../vendors/img/produtos/sofa_3.jpg',
            nome: 'Escrivaninha Mesa',
            material: 'Escritório Madeira Pinus',
            preco: '394.90',
            novoProduto: true
        },
        {
            id: 11,
            img: '../vendors/img/produtos/cama_3.jpg',
            nome: 'Escrivaninha Mesa',
            material: 'Escritório Madeira Pinus',
            preco: '394.90',
            novoProduto: true
        },
        {
            id: 12,
            img: '../vendors/img/produtos/armario_1.jpg',
            nome: 'Escrivaninha Mesa',
            material: 'Escritório Madeira Pinus',
            preco: '394.90',
            novoProduto: true
        },
        {
            id: 13,
            img: '../vendors/img/produtos/cadeira_1.jpg',
            nome: 'Escrivaninha Mesa',
            material: 'Escritório Madeira Pinus',
            preco: '394.90',
            novoProduto: true
        },
        {
            id: 14,
            img: '../vendors/img/produtos/guardaRoupas_1.jpg',
            nome: 'Escrivaninha Mesa',
            material: 'Escritório Madeira Pinus',
            preco: '394.90',
            novoProduto: true
        },
        {
            id: 15,
            img: '../vendors/img/promo/img-3.jpg',
            nome: 'Escrivaninha Mesa',
            material: 'Escritório Madeira Pinus',
            preco: '394.90',
            novoProduto: true
        },
        {
            id: 16,
            img: '../vendors/img/produtos/sofa_4.jpg',
            nome: 'Escrivaninha Mesa',
            material: 'Escritório Madeira Pinus',
            preco: '394.90',
            novoProduto: true
        },
        {
            id: 17,
            img: '../vendors/img/produtos/sofa_5.jpg',
            nome: 'Escrivaninha Mesa',
            material: 'Escritório Madeira Pinus',
            preco: '394.90',
            novoProduto: false
        },
        {
            id: 18,
            img: '../vendors/img/produtos/sofa_6.jpg',
            nome: 'Escrivaninha Mesa',
            material: 'Escritório Madeira Pinus',
            preco: '394.90',
            novoProduto: true
        },
        {
            id: 19,
            img: '../vendors/img/produtos/cama_3.jpg',
            nome: 'Escrivaninha Mesa',
            material: 'Escritório Madeira Pinus',
            preco: '394.90',
            novoProduto: false
        },
        {
            id: 20,
            img: '../vendors/img/produtos/sofa_7.jpg',
            nome: 'Escrivaninha Mesa',
            material: 'Escritório Madeira Pinus',
            preco: '394.90',
            novoProduto: false
        },
        {
            id: 21,
            img: '../vendors/img/produtos/cama_4.jpg',
            nome: 'Escrivaninha Mesa',
            material: 'Escritório Madeira Pinus',
            preco: '394.90',
            novoProduto: false
        },
        {
            id: 22,
            img: '../vendors/img/produtos/sofa_8.jpg',
            nome: 'Escrivaninha Mesa',
            material: 'Escritório Madeira Pinus',
            preco: '394.90',
            novoProduto: false
        },
        {
            id: 23,
            img: '../vendors/img/produtos/cama_5.jpg',
            nome: 'Escrivaninha Mesa',
            material: 'Escritório Madeira Pinus',
            preco: '394.90',
            novoProduto: false
        },
        {
            id: 24,
            img: '../vendors/img/produtos/sofa_9.jpg',
            nome: 'Escrivaninha Mesa',
            material: 'Escritório Madeira Pinus',
            preco: '394.90',
            novoProduto: false
        },
        {
            id: 25,
            img: '../vendors/img/produtos/guardaRoupas_1.jpg',
            nome: 'Escrivaninha Mesa',
            material: 'Escritório Madeira Pinus',
            preco: '394.90',
            novoProduto: false
        },
        {
            id: 26,
            img: '../vendors/img/produtos/mesa_1.jpg',
            nome: 'Escrivaninha Mesa',
            material: 'Escritório Madeira Pinus',
            preco: '394.90',
            novoProduto: false
        },
        {
            id: 27,
            img: '../vendors/img/produtos/cadeira_1.jpg',
            nome: 'Escrivaninha Mesa',
            material: 'Escritório Madeira Pinus',
            preco: '394.90',
            novoProduto: false
        },
        {
            id: 28,
            img: '../vendors/img/produtos/armario_1.jpg',
            nome: 'Escrivaninha Mesa',
            material: 'Escritório Madeira Pinus',
            preco: '394.90',
            novoProduto: false
        },
    ]

    return produtosData
}