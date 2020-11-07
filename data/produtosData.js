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
            imgs: {
                img_1: '../vendors/img/produtos/sofa-1/sofa-1-img-1.jpg',
                img_2: '../vendors/img/produtos/sofa-1/sofa-1-img-2.jpg',
                img_3: '../vendors/img/produtos/sofa-1/sofa-1-img-3.jpg',
                img_4: '../vendors/img/produtos/sofa-1/sofa-1-img-4.jpg'
            },
            nome: 'Escrivaninha Mesa',
            material: 'Escritório Madeira Pinus',
            preco: '394.90',
            dimensoes: {
                altura: '94 cm',
                largura: '210 cm',
                profundidade: '87 cm',
                peso: '51,680 kg'
            },
            descricao: 'É na <strong>sala de estar</strong> onde a maior parte dos momentos de lazer da família acontece, seja curtindo um filminho, jogando aquele lançamento dos games ou recebendo os amigos para um café, por isso é essencial ter um sofá para acomodar a todos muito bem. Espaçoso, bem estruturado e com um design para deixar o lar-style perfeito, o modelo Nairóbi tem assento retrátil, o que faz dele uma peça ótima para oferecer aquele aconchego extra. Revestido com o elegante e macio tecido suede, esse móvel tem ainda uma cor sóbria que pode ser facilmente harmonizada com vários estilos de decoração, sendo ideal para te inspirar e dar aquela mãozinha na hora de criar o ambiente dos sonhos. Agora é só combiná-lo com aquele rack e TV incríveis e pronto! Seu centro de entretenimento está completo.',
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