let produtosData

function returnData() {
    produtosData = [
        {
            id: 1,
            imgs: {
                img_1: '../vendors/img/produtos/sofa-1/sofa-1-img-1.jpg',
                img_2: '../vendors/img/produtos/sofa-1/sofa-1-img-2.jpg',
                img_3: '../vendors/img/produtos/sofa-1/sofa-1-img-3.jpg',
                img_4: '../vendors/img/produtos/sofa-1/sofa-1-img-4.jpg'
            },
            nome: 'Sofá 3 Lugares Retrátil Nairóbi Suede Grafite 210 cm',
            preco: '1849,99',
            desconto: 58,
            dimensoes: {
                altura: '94 cm',
                largura: '210 cm',
                profundidade: '87 cm',
                peso: '51,680 kg'
            },
            descricao: 'É na <strong>sala de estar</strong> onde a maior parte dos momentos de lazer da família acontece, seja curtindo um filminho, jogando aquele lançamento dos games ou recebendo os amigos para um café, por isso é essencial ter um <strong>sofá</strong> para acomodar a todos muito bem. Espaçoso, bem estruturado e com um design para deixar o lar-style perfeito, o <strong>modelo Nairóbi</strong> tem assento retrátil, o que faz dele uma peça ótima para oferecer aquele aconchego extra. Revestido com o elegante e macio tecido suede, esse móvel tem ainda uma <strong>cor sóbria que pode ser facilmente harmonizada com vários estilos de decoração</strong>, sendo ideal para te inspirar e dar aquela mãozinha na hora de criar o ambiente dos sonhos. Agora é só combiná-lo com aquele rack e TV incríveis e pronto! Seu centro de entretenimento está completo.',
            novoProduto: true
        },
        {
            id: 2,
            imgs: {
                img_1: '../vendors/img/produtos/estante-1/estante-1-img-1.jpg',
                img_2: '../vendors/img/produtos/estante-1/estante-1-img-2.jpg',
                img_3: '../vendors/img/produtos/estante-1/estante-1-img-3.jpg',
                img_4: '../vendors/img/produtos/estante-1/estante-1-img-4.jpg'
            },
            nome: 'Estante Home para TV 65 Polegadas Eldorado Avelã Off White',
            preco: '904,99',
            desconto: 30,
            dimensoes: {
                altura: '181 cm',
                largura: '200 cm',
                profundidade: '48 cm',
                peso: '88,800 kg'
            },
            descricao: 'Uma <strong>sala de estar</strong> linda e com móveis de muito bom gosto não precisa mais ficar só nos seus sonhos! A <strong>Estante Eldorado</strong> chegou para mostrar que é muito fácil transformar esse desejo em realidade, pois é uma <strong>peça funcional</strong> e com um charme que vai deixar seu lar-style do jeitinho que sempre quis. Com design excepcional, sua estrutura é produzida com <strong>materiais de qualidade</strong> que se unem para formar uma mobília que vai <strong>acompanhar a rotina da família</strong>, com cantinhos para itens decorativos e eletrônicos. Um verdadeiro achado!',
            novoProduto: true
        },
        {
            id: 3,
            imgs: {
                img_1: '../vendors/img/produtos/guarda-roupas-1/guarda-roupas-1-img-1.jpg',
                img_2: '../vendors/img/produtos/guarda-roupas-1/guarda-roupas-1-img-2.jpg',
                img_3: '../vendors/img/produtos/guarda-roupas-1/guarda-roupas-1-img-3.jpg',
                img_4: '../vendors/img/produtos/guarda-roupas-1/guarda-roupas-1-img-4.jpg',
                img_5: '../vendors/img/produtos/guarda-roupas-1/guarda-roupas-1-img-5.jpg',
            },
            nome: 'Guarda-Roupa Casal com Espelho Florida 2 PT 6 GV Neve',
            preco: '1804,99',
            desconto: 38,
            dimensoes: {
                altura: '234 cm',
                largura: '274 cm',
                profundidade: '55 cm',
                peso: '221,872 kg'
            },
            descricao: 'Item necessário para o bom funcionamento do quarto, o Guarda-Roupa Florida é o móvel ideal para que a arrumação do ambiente fique em dia. Equipado com 2 portas e 6 gavetas, ele tem compartimentos para vestuário, calçados, acessórios, cosméticos e até caixas organizadoras - tudo para garantir que peças fundamentais à sua rotina estejam sempre à mão. De quebra, o visual robusto com coloração tradicional a esse tipo de mobiliário oferece sofisticação e bom gosto para a decoração do seu espaço. Só benefícios para um lar incrível como o seu',
            novoProduto: false
        },
        {
            id: 4,
            imgs: {
                img_1: '../vendors/img/produtos/comoda-1/comoda-1-img-1.jpg',
                img_2: '../vendors/img/produtos/comoda-1/comoda-1-img-2.jpg',
                img_3: '../vendors/img/produtos/comoda-1/comoda-1-img-3.jpg',
                img_4: '../vendors/img/produtos/comoda-1/comoda-1-img-4.jpg'
            },
            nome: 'Cômoda Sing Retrô 4 Gv Branco e Garapa',
            preco: '730,99',
            desconto: 26,
            dimensoes: {
                altura: '96 cm',
                largura: '88 cm',
                profundidade: '45 cm',
                peso: '38,200 kg'
            },
            descricao: 'Aliada da <strong>organização do seu dormitório</strong>, a <strong>Cômoda Sing</strong> é a peça que faltava para garantir um <strong>dia a dia mais otimizado</strong> e um <strong>ambiente bem decorado</strong>. Ela pode ter o <strong>uso compartilhado com o do guarda-roupa</strong> já que as gavetas se reservam para <strong>peças menores e dobráveis</strong>, mas se o seu <strong>cômodo é pequeno</strong>, ela também vai bem como a protagonista para deixar tudo sempre à mão. Ah, além do <strong>visual charmoso</strong> que ajuda na composição do <em>lar-style</em>, a peça ainda tem um amplo tampo para você dispor cosméticos, enfeites ou outros itens pertinentes à sua rotina. Agora é só combiná-la com o restante do mobiliário e conquistar o quarto dos seus sonhos!',
            novoProduto: true
        },
        {
            id: 5,
            imgs: {
                img_1: '../vendors/img/produtos/escrivaninha-1/escrivaninha-1-img-1.jpg',
                img_2: '../vendors/img/produtos/escrivaninha-1/escrivaninha-1-img-2.jpg',
                img_3: '../vendors/img/produtos/escrivaninha-1/escrivaninha-1-img-3.jpg',
            },
            nome: 'Escrivaninha Window 1 GV Preto',
            preco: '236,99',
            desconto: 32,
            dimensoes: {
                altura: '75 cm',
                largura: '90 cm',
                profundidade: '47 cm',
                peso: '15,600 kg'
            },
            descricao: 'Se você busca ter um espaço de trabalho ou estudo mais organizado, conte com a <strong>Escrivaninha Window</strong>. Ela possui uma estrutura simples com tampo amplo e é ideal para ser utilizada com praticidade e conforto. Já a parte interna conta com <strong>1 gaveta</strong> para os documentos e objetos importantes estarem sempre ao seu alcance, além de ter uma cor forte que garante elegância para o visual do ambiente.',
            novoProduto: true
        },
        {
            id: 6,
            imgs: {
                img_1: '../vendors/img/produtos/armario-1/armario-1-img-1.jpg',
                img_2: '../vendors/img/produtos/armario-1/armario-1-img-2.jpg',
            },
            nome: 'Armário de Escritório Window 2 PT Preto',
            preco: '218,99',
            desconto: 48,
            dimensoes: {
                altura: '75 cm',
                largura: '60 cm',
                profundidade: '32 cm',
                peso: '14,550 kg'
            },
            descricao: 'Ter <strong>móveis</strong> curinga em sua <strong>casa</strong> faz a diferença na praticidade do dia a dia. Um exemplo disso é o <strong>Armário de Escritório Window</strong>: ele é ideal para guardar as suas coisas com segurança e organização sem aquela bagunça que atrapalha a produtividade. O modelo compacto conta com <strong>2 portas</strong> para acomodar documentos e outros objetos importantes. Ah, a cor preta deixa o <strong>lar-style</strong> sofisticado e você pode combiná-lo como quiser.',
            novoProduto: true
        },
        {
            id: 7,
            imgs: {
                img_1: '../vendors/img/produtos/escrivaninha-2/escrivaninha-2-img-1.jpg',
                img_2: '../vendors/img/produtos/escrivaninha-2/escrivaninha-2-img-2.jpg',
                img_3: '../vendors/img/produtos/escrivaninha-2/escrivaninha-2-img-3.jpg',
                img_4: '../vendors/img/produtos/escrivaninha-2/escrivaninha-2-img-4.jpg',
                img_5: '../vendors/img/produtos/escrivaninha-2/escrivaninha-2-img-5.jpg',
            },
            nome: 'Escrivaninha Suspensa Lilac Branca',
            preco: '206,99',
            desconto: 16,
            dimensoes: {
                altura: '105 cm',
                largura: '135 cm',
                profundidade: '40 cm',
                peso: '22,900 kg'
            },
            descricao: 'Está à procura de um móvel para acomodar o seu notebook para estudo ou trabalho? A <Strong>Escrivaninha Suspensa Lilac</Strong> pode ser o que você está procurando! Confeccionada com materiais de qualidade, ela possui nichos espaçosos para organizar livros, documentos e itens decorativos. Ah, ela ainda é fixa na parede, ajudando a ocupar menos espaço. Incrível!',
            novoProduto: true
        },
        {
            id: 8,
            imgs: {
                img_1: '../vendors/img/produtos/banqueta-1/banqueta-1-img-1.jpg',
                img_2: '../vendors/img/produtos/banqueta-1/banqueta-1-img-2.jpg',
                img_3: '../vendors/img/produtos/banqueta-1/banqueta-1-img-3.jpg',
                img_4: '../vendors/img/produtos/banqueta-1/banqueta-1-img-4.jpg'
            },
            nome: 'Banqueta Giratória Fitz Preta',
            preco: '309,99',
            desconto: 29,
            dimensoes: {
                altura: '93 cm',
                largura: '41 cm',
                profundidade: '49 cm',
                peso: '7,600 kg'
            },
            descricao: 'Estilosa, moderna e aconchegante, a <strong>Banqueta Fitz</strong> é uma ótima opção para <strong>área gourmet</strong>, principalmente se contar com <strong>balcões</strong> ou outros móveis altos. O modelo único com design revolucionário dará todo o destaque no cômodo, combinando sofisticação com um perfil elegante e inovador. É para dar aquele toque todo especial que a sua <strong>casa</strong> merece!',
            novoProduto: false
        },
        {
            id: 9,
            imgs: {
                img_1: '../vendors/img/produtos/banqueta-2/banqueta-2-img-1.jpg',
                img_2: '../vendors/img/produtos/banqueta-2/banqueta-2-img-2.jpg',
                img_3: '../vendors/img/produtos/banqueta-2/banqueta-2-img-3.jpg',
                img_4: '../vendors/img/produtos/banqueta-2/banqueta-2-img-4.jpg',
                img_5: '../vendors/img/produtos/banqueta-2/banqueta-2-img-5.jpg',
            },
            nome: 'Banqueta Giratória Marilyn Branca',
            preco: '329,99',
            desconto: 54,
            dimensoes: {
                altura: '116 cm',
                largura: '40 cm',
                profundidade: '49 cm',
                peso: '7,150 kg'
            },
            descricao: 'Uma <strong>ótima acompanhante para aquele seu balcão da área gourmet ou outros móveis altos</strong>, a <strong>Banqueta Marilyn</strong> vai <strong>aprimorar a ambientação</strong> do seu cômodo. De <strong>estrutura cromada e concha revestida na cor branca</strong>, ela possui <strong>regulagem de altura</strong>, possibilitando que você <strong>a adapte às suas necessidades</strong>. Já esse visual todo charmoso e elegante é para dar uma pitada de beleza no <em>lar-style</em>. Garantia de bom gosto e de ter sempre um espaço extra para receber os seus convidados em casa ;)',
            novoProduto: true
        },
        {
            id: 10,
            imgs: {
                img_1: '../vendors/img/produtos/mesa-1/mesa-1-img-1.jpg',
                img_2: '../vendors/img/produtos/mesa-1/mesa-1-img-2.jpg',
            },
            nome: 'Conjunto para Área Externa Monaco Marrom',
            preco: '3799,99',
            desconto: 58,
            dimensoes: {
                altura: '75 cm',
                largura: '114 cm',
                profundidade: '114 cm',
                peso: '71,000 kg'
            },
            descricao: 'Quer curtir bons momentos numa <strong>tarde ensolarada</strong>? Então olha só que incrível o <strong>Conjunto de Área Externa Monaco</strong>. Com um desenho que casa perfeitamente com o estilo tropicália, ele ajudará a reunir amigos e familiares para curtir o verão e outras estações. O que achou?',
            novoProduto: true
        },
        {
            id: 11,
            imgs: {
                img_1: '../vendors/img/produtos/cadeira-1/cadeira-1-img-1.jpg',
                img_2: '../vendors/img/produtos/cadeira-1/cadeira-1-img-2.jpg',
                img_3: '../vendors/img/produtos/cadeira-1/cadeira-1-img-3.jpg',
                img_4: '../vendors/img/produtos/cadeira-1/cadeira-1-img-4.jpg'
            },
            nome: 'Cadeira de Jardim Rio Marrom',
            preco: '159,99',
            desconto: 22,
            dimensoes: {
                altura: '95 cm',
                largura: '55 cm',
                profundidade: '75 cm',
                peso: '4,700 kg'
            },
            descricao: 'Se você quer aproveitar integralmente a sua área externa, nada melhor do que contar com <strong>móveis</strong> que tornam a experiência mais agradável, não é? E, com certeza, o seu <strong>jardim</strong> será um dos seus espaços favoritos com a presença da <strong>Cadeira Rio</strong>. Bem estruturada, ela oferece conforto e qualidade para os momentos de lazer, além de dar um charme extra para o visual do ambiente. É a oportunidade perfeita de deixar a sua <strong>casa</strong> magnífica!',
            novoProduto: false
        },
        {
            id: 12,
            imgs: {
                img_1: '../vendors/img/produtos/comoda-2/comoda-2-img-1.jpg',
                img_2: '../vendors/img/produtos/comoda-2/comoda-2-img-2.jpg',
                img_3: '../vendors/img/produtos/comoda-2/comoda-2-img-3.jpg',
                img_4: '../vendors/img/produtos/comoda-2/comoda-2-img-4.jpg',
                img_5: '../vendors/img/produtos/comoda-2/comoda-2-img-5.jpg',
            },
            nome: 'Cômoda Colors 9 GV Mel Verniz e Colorido',
            preco: '995,99',
            desconto: 8,
            dimensoes: {
                altura: '91 cm',
                largura: '93 cm',
                profundidade: '44 cm',
                peso: '30,000 kg'
            },
            descricao: 'Já imaginou um <strong>móvel</strong> como a <strong>Cômoda Colors</strong> em sua <strong>casa</strong>? Ela tem tudo para deixar o seu cantinho ainda mais bonito. A mistura de cores promove um visual descontraído ao ambiente, além de possuir <strong>9 gavetas espaçosas</strong> para acomodar todas as suas coisas. Ah, o aspecto rústico com a textura de madeira resgata a memória de produtos antigos, dando uma sensação de aconchego para o <i>lar-style</i>. E para otimizar o seu espaço disponível, dá para colocar vários itens de <strong>decoração</strong> no tampo superior da <strong>cômoda</strong>. É linda, né?',
            novoProduto: false
        },
        {
            id: 13,
            imgs: {
                img_1: '../vendors/img/produtos/sofa-2/sofa-2-img-1.jpg',
                img_2: '../vendors/img/produtos/sofa-2/sofa-2-img-2.jpg',
                img_3: '../vendors/img/produtos/sofa-2/sofa-2-img-3.jpg',
                img_4: '../vendors/img/produtos/sofa-2/sofa-2-img-4.jpg',
                img_5: '../vendors/img/produtos/sofa-2/sofa-2-img-5.jpg',
            },
            nome: 'Sofá 3 Lugares Floret Linho Azul',
            preco: '1657,99',
            desconto: 31,
            dimensoes: {
                altura: '89 cm',
                largura: '208 cm',
                profundidade: '77 cm',
                peso: '48,000 kg'
            },
            descricao: 'Um <strong>móvel de formas arredondadas e curvas delicadas</strong> que busca <strong>inspiração na suavidade das pétalas das flores</strong>: esse é o <strong>Sofá Floret</strong>! Escolha ideal para compor o seu principal ambiente de entretenimento, a <strong>sala de estar</strong>, ele promete contribuir para uma <strong>atmosfera mais relaxante</strong> sem deixar a <strong>personalidade decorativa</strong> de lado. Enquanto a <strong>estrutura interna em MDF reflorestado</strong> reforça o uso diário, os <strong>pés em madeira maciça</strong> agregam valor à peça e dão esse <strong>acabamento charmoso ao visual</strong>. Já o <strong>revestimento em linho na cor azul</strong> é perfeito para quem quer <strong>fugir do tradicional</strong> e adicionar uma tonalidade de destaque ao cômodo. Seja para descansar ou curtir um momento com a família e amigos, ele sempre será bem-vindo em seu <strong>doce lar</strong> ;)',
            novoProduto: true
        },
        {
            id: 14,
            imgs: {
                img_1: '../vendors/img/produtos/banqueta-3/banqueta-3-img-1.jpg',
                img_2: '../vendors/img/produtos/banqueta-3/banqueta-3-img-2.jpg',
                img_3: '../vendors/img/produtos/banqueta-3/banqueta-3-img-3.jpg',
                img_4: '../vendors/img/produtos/banqueta-3/banqueta-3-img-4.jpg',
                img_5: '../vendors/img/produtos/banqueta-3/banqueta-3-img-5.jpg',
            },
            nome: 'Banco Dili Amêndoa e Preto',
            preco: '139,99',
            desconto: 47,
            dimensoes: {
                altura: '43 cm',
                largura: '38 cm',
                profundidade: '30 cm',
                peso: '3,000 kg'
            },
            descricao: 'Mais do que apenas um lugar extra para sempre acomodar mais um, o <strong>banco</strong> pode ser um adereço e tanto! Um belo exemplo é o modelo <strong>Dili</strong>, principalmente se você curte uma <strong>decoração</strong> voltada para o estilo <strong>industrial</strong>. Harmonizando a <b>madeira maciça com a estrutura simples de metal</b>, ele dá um acabamento bem moderno e interessante para a sua <strong>casa</strong>. Ah, também dá para ressignificar completamente o <strong>móvel</strong> e arriscar combiná-lo com algum <strong>objeto decorativo</strong>. São muitas possibilidades, é só encontrar aquela que tem a ver com o seu <strong>lar-style</strong>! Gostou?',
            novoProduto: true
        },
        {
            id: 15,
            imgs: {
                img_1: '../vendors/img/produtos/cadeira-2/cadeira-2-img-1.jpg',
                img_2: '../vendors/img/produtos/cadeira-2/cadeira-2-img-2.jpg',
                img_3: '../vendors/img/produtos/cadeira-2/cadeira-2-img-3.jpg',
                img_4: '../vendors/img/produtos/cadeira-2/cadeira-2-img-4.jpg'
            },
            nome: 'Conjunto de 2 Cadeiras Tóquio Preto',
            preco: '420,99',
            desconto: 62,
            dimensoes: {
                altura: '83 cm',
                largura: '41 cm',
                profundidade: '53 cm',
                peso: '12,000 kg'
            },
            descricao: 'Um <strong>móvel</strong> essencial para o lar não precisa ter um visual batido e sem graça, prova disso é esse incrível <strong>Conjunto Tóquio</strong>. Composto por <strong>2 cadeiras</strong> confeccionadas com MDF e <strong>madeira eucalipto</strong>, o conjunto possui um design extremamente moderno e atraente. O encosto da cadeira é levemente curvada para que você acomode suas costas e isso também traz mais charme a peça. A cor preta ajuda a deixar o ambiente mais sóbrio. Não é demais?',
            novoProduto: false
        },
        {
            id: 16,
            imgs: {
                img_1: '../vendors/img/produtos/mesa-2/mesa-2-img-1.jpg',
                img_2: '../vendors/img/produtos/mesa-2/mesa-2-img-2.jpg',
                img_3: '../vendors/img/produtos/mesa-2/mesa-2-img-3.jpg',
                img_4: '../vendors/img/produtos/mesa-2/mesa-2-img-4.jpg'
            },
            nome: 'Mesa Gamer Omin 1 GV Grafite',
            preco: '203,99',
            desconto: 53,
            dimensoes: {
                altura: '76 cm',
                largura: '150 cm',
                profundidade: '60 cm',
                peso: '23,700 kg'
            },
            descricao: 'Sempre sonhou com uma estação prontinha para deixar os momentos de <i>upar</i> mais completos e emocionantes? Com a <strong>Mesa Para Computador Gamer</strong>&nbsp;você terá espaço suficiente para apoiar tudo o que precisa: o <i>PC</i> fica no suporte inferior - que pode ser posicionado para dentro ou para fora da caixaria -, enquanto aquele seu monitor, teclado e mouse ganham um cantinho no tampo, fora a <strong>gaveta</strong> e os outros compartimentos para armazenar seus equipamentos e jogos físicos. Ah, a <strong>cor preta</strong> garante harmonia fácil com o seu quarto e ajuda a deixar o ambiente com uma cara mais <i>high tech</i>.&nbsp;',
            novoProduto: false
        },
        {
            id: 17,
            imgs: {
                img_1: '../vendors/img/produtos/cama-1/cama-1-img-1.jpg',
                img_2: '../vendors/img/produtos/cama-1/cama-1-img-2.jpg',
                img_3: '../vendors/img/produtos/cama-1/cama-1-img-3.jpg',
                img_4: '../vendors/img/produtos/cama-1/cama-1-img-4.jpg',
                img_5: '../vendors/img/produtos/cama-1/cama-1-img-5.jpg',
            },
            nome: 'Cama Casal Bogart Mel',
            preco: '503,99',
            desconto: 17,
            dimensoes: {
                altura: '100 cm',
                largura: '148 cm',
                profundidade: '190 cm',
                peso: '26,400 kg'
            },
            descricao: '>Para você que quer dar um toque <strong>rústico</strong> e diferenciado no visual do seu <strong>quarto</strong> e, ao mesmo tempo, ter o melhor para suas noites de sono, a <strong>Cama Bogart</strong> é a escolha certa para compor o ambiente! <strong>Espaçosa</strong> e muito elegante, a cor é perfeita para harmonizar com cômodas, criados-mudos e outras peças, além de deixar a roupa de cama muito mais bonita. Combinada com o seu colchão ideal, ela vai deixar suas noites mais aconchegantes e o quarto com a decoração dos sonhos. Curtiu?',
            novoProduto: false
        },
        {
            id: 18,
            imgs: {
                img_1: '../vendors/img/produtos/cama-2/cama-2-img-1.jpg',
                img_2: '../vendors/img/produtos/cama-2/cama-2-img-2.jpg',
                img_3: '../vendors/img/produtos/cama-2/cama-2-img-3.jpg',
                img_4: '../vendors/img/produtos/cama-2/cama-2-img-4.jpg',
                img_5: '../vendors/img/produtos/cama-2/cama-2-img-5.jpg',
            },
            nome: 'Cama Casal Monaco Cumaru',
            preco: '260,99',
            desconto: 26,
            dimensoes: {
                altura: '36 cm',
                largura: '144 cm',
                profundidade: '193 cm',
                peso: '28,090 kg'
            },
            descricao: 'Nenhuma rotina começa bem sem uma <strong>noite de sono revigorante</strong> e que relaxe todas as tensões do dia anterior, portanto uma <strong>cama estruturada e firme</strong> é essencial. O <strong>modelo Monaco</strong> é perfeito para te ajudar a iniciar as manhãs com aquele gás extra enquanto o seu dormitório ganha um toque de <em>design</em> e beleza com essa peça que <strong>harmoniza com variados estilos de decoração</strong> - a combinação com os outros móveis do quarto fica por conta do seu bom gosto e criatividade! Agora é só comprar um colchão e aproveitar o seu cantinho mega aconchegante ;)',
            novoProduto: true
        },
        {
            id: 19,
            imgs: {
                img_1: '../vendors/img/produtos/guarda-roupas-2/guarda-roupas-2-img-1.jpg',
                img_2: '../vendors/img/produtos/guarda-roupas-2/guarda-roupas-2-img-2.jpg',
                img_3: '../vendors/img/produtos/guarda-roupas-2/guarda-roupas-2-img-3.jpg',
                img_4: '../vendors/img/produtos/guarda-roupas-2/guarda-roupas-2-img-4.jpg'
            },
            nome: 'Guarda-Roupa Casal Bahia Flex Color 3 PT Ipe Rustic e Off White',
            preco: '777,99',
            desconto: 36,
            dimensoes: {
                altura: '204 cm',
                largura: '190 cm',
                profundidade: '55 cm',
                peso: '111,600 kg'
            },
            descricao: 'Com muito charme e elegância, o <strong>Guarda-Roupa Bahia</strong> veio para transformar o seu espaço de uma vez por todas! De <em>design</em> clássico, ele é produzido em <strong>MDP</strong> e conta com um <strong>espaço interno</strong> perfeito para manter a organização e o visual do seu cômodo sempre em dia. Falando em visual, você vai amar a <strong>versatilidade</strong> desta peça, que é <em>flex</em> e pode ter as portas facilmente repaginadas ao seu gosto! Um quarto do jeitinho que você <em>sempre</em> quis? Nós temos o móvel certo!',
            novoProduto: true
        },
        {
            id: 20,
            imgs: {
                img_1: '../vendors/img/produtos/guarda-roupas-3/guarda-roupas-3-img-1.jpg',
                img_2: '../vendors/img/produtos/guarda-roupas-3/guarda-roupas-3-img-2.jpg',
                img_3: '../vendors/img/produtos/guarda-roupas-3/guarda-roupas-3-img-3.jpg',
                img_4: '../vendors/img/produtos/guarda-roupas-3/guarda-roupas-3-img-4.jpg',
                img_5: '../vendors/img/produtos/guarda-roupas-3/guarda-roupas-3-img-5.jpg',
            },
            nome: 'Guarda-Roupa Casal Veneza Gold 3 PT 4 GV Branco',
            preco: '1154,99',
            desconto: 57,
            dimensoes: {
                altura: '208 cm',
                largura: '188 cm',
                profundidade: '48 cm',
                peso: '150,000 kg'
            },
            descricao: 'O <strong>guarda-roupa</strong> é um <strong>móvel</strong> clássico para qualquer <strong>dormitório</strong>, então, o que acha de contar com o modelo <strong>Veneza Gold</strong> para renovar o seu ambiente? Com <strong>3 portas e 4 gavetas</strong>, ele possui o espaço ideal para você acomodar roupas e acessórios de uma forma que tudo fique bem <strong>organizado</strong> e <strong>prático</strong> para o dia a dia. Demais, não é? Ah, o item ainda tem a cor <strong>branca</strong> para dar um toque <em>clean</em> e sofisticado para a <strong>decoração</strong>. Curtiu?',
            novoProduto: true
        },
        {
            id: 21,
            imgs: {
                img_1: '../vendors/img/produtos/cama-3/cama-3-img-1.jpg',
                img_2: '../vendors/img/produtos/cama-3/cama-3-img-2.jpg',
                img_3: '../vendors/img/produtos/cama-3/cama-3-img-3.jpg',
                img_4: '../vendors/img/produtos/cama-3/cama-3-img-4.jpg'
            },
            nome: 'Cama Casal Beauty Branca',
            preco: '1298,99',
            desconto: 18,
            dimensoes: {
                altura: '48 cm',
                largura: '146 cm',
                profundidade: '199 cm',
                peso: '84,200 kg'
            },
            descricao: 'Diferente daqueles modelos clássicos, a <strong>Cama Beauty</strong> veio para oferecer mais utilidade para o seu dia a dia. Por não ter cabeceira, ela acaba ocupando menos espaço, além de contar com <strong>gavetas</strong> para que você possa guardar diversos itens que não precisam ficar à mostra. Outro detalhe legal é que ela é estruturada em <strong>madeira pinus</strong>, ou seja, qualidade e durabilidade garantidas. Depois é só fazer as melhores <strong>combinações</strong> entre estilos e cores para conquistar o <strong>quarto</strong> dos sonhos.',
            novoProduto: false
        },
        {
            id: 22,
            imgs: {
                img_1: '../vendors/img/produtos/estante-2/estante-2-img-1.jpg',
                img_2: '../vendors/img/produtos/estante-2/estante-2-img-2.jpg',
                img_3: '../vendors/img/produtos/estante-2/estante-2-img-3.jpg',
                img_4: '../vendors/img/produtos/estante-2/estante-2-img-4.jpg'
            },
            nome: 'Estante Livreiro Office Preto',
            preco: '253,99',
            desconto: 44,
            dimensoes: {
                altura: '189 cm',
                largura: '63 cm',
                profundidade: '39 cm',
                peso: '29,100 kg'
            },
            descricao: 'Quem é um verdadeiro apaixonado pelos <strong>livros</strong> sabe o quanto eles são valiosos e merecem um espaço especial, não é? E, para isso, nada melhor do que contar com a <strong>Estante Livreiro Office</strong>. O <strong>móvel</strong> possui o tamanho ideal para você dispor os seus itens e até harmonizá-los com <strong>objetos decorativos</strong>. Legal, não é? Assim eles ficam <strong>organizados</strong>, em segurança e prontos para a sua apreciação. Ah, a cor <strong>preta</strong> também é uma clássica opção para o <strong>lar-style</strong>. Fácil de <strong>combinar</strong>, é possível criar um visual desde o mais sóbrio até um todo ousado e <strong>personalizado</strong>. A escolha é toda sua!',
            novoProduto: true
        },
        {
            id: 23,
            imgs: {
                img_1: '../vendors/img/produtos/estante-3/estante-3-img-1.jpg',
                img_2: '../vendors/img/produtos/estante-3/estante-3-img-2.jpg',
                img_3: '../vendors/img/produtos/estante-3/estante-3-img-3.jpg',
            },
            nome: 'Estante Livreiro Zurich com 6 Nichos - Branco',
            preco: '172,99',
            desconto: 33,
            dimensoes: {
                altura: '85 cm',
                largura: '90 cm',
                profundidade: '30 cm',
                peso: '19,400 kg'
            },
            descricao: 'Imagina seu escritório ou sua sala organizada, onde todos os livros tenham o seu lugar específico e que ainda, enfeitam o ambiente. Esse é um desejo que pode ser realizado, com a Estante Zurich, uma peça imponente, bela, de estrutura perfeita para espaços compacto. Sua funcionalidade atende diferentes ambientes e objetivos, seja na sala de estar, no home office, escritório, clínica e até em loja, pois conta com 6 nichos para você organizar o que quiser. O acabamento é de excelente qualidade, possibilitando durabilidade do produto. Para maior qualidade e durabilidade do produto, o produto é revestido com a chapa, o Perfect One (lâmina decorativa), que conta um ótimo acabamento, tendo uma superfície lisa, tornando-se agradável ao toque e resistente aos riscos<br /><br /><b>Garantia:</b><br />90 dias – garantia de fábrica.<br /><br /><b>MDP</b><br />Painel de madeira formado por partículas de madeira de média densidade, é também o mais consumido no mundo. É produzido em prensas contínuas de última geração, sendo um dos produtos mais tecnológicos e econômicos para produção de móveis de linhas retas ou que precisam receber pinturas e revestimentos de qualquer material. Apresenta excelente resultado em móveis para dormitórios, escritórios, cozinhas, painéis para decoração, prateleiras, tampos e base superior/inferior. Com o manuseio correto e dispositivos de montagem, “pode ser montado e desmontado quantas vezes for necessário.<br /><br /><b>Características da Estante</b><br />- Branco<br />- Estrutura: MDP<br />- Acabamento: Perfect One (lâmina decorativa)<br />- 6 Nichos<br />- Peso Suportado: 20 kg<br />- Produto segue desmontado<br />- Marca: DRW<br /><br /><b>Dimensões da Estante</b><br />Peso: 19,40 kg<br />Altura: 84,5cm<br />Largura: 90 cm<br />Profundidade: 30 cm<br />Tamanho dos nichos: A: 25cm /L: 42,7cm/ P: 30cm <br /><br /><b>Outras Informações</b><br />- Montagem não inclusa.<br />- Na limpeza não utilizar produtos químicos e abrasivos, usar apenas um pano umedecido, para garantir a maior durabilidade do móvel.<br />- Os objetos que ambientam as fotos não acompanham o produto.<br />- Imagens meramente ilustrativas. Cores e tonalidades podem variar.<br />- Antes de comprar o seu produto verifique as medidas, o local onde pretende instalar e se é necessário contratar o serviço de um profissional qualificado.<br />',
            novoProduto: true
        },
        {
            id: 24,
            imgs: {
                img_1: '../vendors/img/produtos/cadeira-3/cadeira-3-img-1.jpg',
                img_2: '../vendors/img/produtos/cadeira-3/cadeira-3-img-2.jpg',
                img_3: '../vendors/img/produtos/cadeira-3/cadeira-3-img-3.jpg',
                img_4: '../vendors/img/produtos/cadeira-3/cadeira-3-img-4.jpg',
                img_5: '../vendors/img/produtos/cadeira-3/cadeira-3-img-5.jpg',
            },
            nome: 'Conjunto com 2 Cadeiras Tulipa Eiffel Preto',
            preco: '519,99',
            desconto: 26,
            dimensoes: {
                altura: '73 cm',
                largura: '49 cm',
                profundidade: '54 cm',
                peso: '8,400 kg'
            },
            descricao: 'Que tal o Conjunto com 2 Cadeiras Tulipa Eiffel?</h2><p>Está buscando por móveis mais sofisticados na sua casa? Então o que você acha de apostar no <strong>Conjunto com 2 Cadeiras Tulipa Eiffel</strong>? As peças possuem o charme necessário para transitar entre sua sala de jantar e sua sala de estar. As pernas ganham mais firmeza graças a estrutura metálica que as une. Gostou? ',
            novoProduto: false
        },
        {
            id: 25,
            imgs: {
                img_1: '../vendors/img/produtos/comoda-3/comoda-3-img-1.jpg',
                img_2: '../vendors/img/produtos/comoda-3/comoda-3-img-2.jpg',
                img_3: '../vendors/img/produtos/comoda-3/comoda-3-img-3.jpg',
                img_4: '../vendors/img/produtos/comoda-3/comoda-3-img-4.jpg'
            },
            nome: 'Cômoda Austin Premium 10 GV Preta',
            preco: '199,99',
            desconto: 35,
            dimensoes: {
                altura: '93 cm',
                largura: '124 cm',
                profundidade: '41 cm',
                peso: '43,050 kg'
            },
            descricao: 'Aliada da <strong>organização do seu dormitório</strong>, a <strong>Cômoda Austin Premium</strong> é a peça que faltava para garantir um <strong>dia a dia mais otimizado</strong> e um <strong>ambiente bem decorado</strong>. Ela pode ter o <strong>uso compartilhado com o do guarda-roupa</strong> já que as gavetas se reservam para <strong>peças menores e dobráveis</strong>, mas se o seu <strong>cômodo é pequeno</strong>, ela também vai bem como a protagonista para deixar tudo sempre à mão. Ah, além do <strong>visual charmoso</strong> que ajuda na composição do <em>lar-style</em>, a peça ainda tem um amplo tampo para você dispor cosméticos, enfeites ou outros itens pertinentes à sua rotina. Agora é só combiná-la com o restante do mobiliário e conquistar o quarto dos seus sonhos!',
            novoProduto: false
        },
        {
            id: 26,
            imgs: {
                img_1: '../vendors/img/produtos/escrivaninha-3/escrivaninha-3-img-1.jpg',
                img_2: '../vendors/img/produtos/escrivaninha-3/escrivaninha-3-img-2.jpg',
                img_3: '../vendors/img/produtos/escrivaninha-3/escrivaninha-3-img-3.jpg',
                img_4: '../vendors/img/produtos/escrivaninha-3/escrivaninha-3-img-4.jpg'
            },
            nome: 'Escrivaninha Hannover Branca',
            preco: '348,99',
            desconto: 59,
            dimensoes: {
                altura: '84 cm',
                largura: '110 cm',
                profundidade: '58 cm',
                peso: '17,950 kg'
            },
            descricao: 'Tem uma vida agitada e precisa de móveis que sejam práticos e facilitem o seu dia a dia? A <strong>Escrivaninha Hannover</strong> possui um design simples que pode te ajudar a ter noites de estudo ou dias de trabalho. A melhor parte é que as formas dela são um prato cheio para quem curte um <strong>estilo contemporâneo</strong> e um ambiente clean. Gostou?',
            novoProduto: true
        },
        {
            id: 27,
            imgs: {
                img_1: '../vendors/img/produtos/mesa-3/mesa-3-img-1.jpg',
                img_2: '../vendors/img/produtos/mesa-3/mesa-3-img-1.jpg',
                img_3: '../vendors/img/produtos/mesa-3/mesa-3-img-1.jpg',
                img_4: '../vendors/img/produtos/mesa-3/mesa-3-img-1.jpg'
            },
            nome: 'Mesa de Jantar Retangular Chaplin Marrom e Preta 136 cm',
            preco: '508,99',
            desconto: 57,
            dimensoes: {
                altura: '77 cm',
                largura: '136 cm',
                profundidade: '90 cm',
                peso: '26,000 kg'
            },
            descricao: 'Carregando todo o charme e sofisticação do <strong>estilo industrial</strong> na estrutura, a <strong>Mesa Chaplin</strong> reúne requinte e bom gosto na medida certa para a sua <strong>sala de jantar ou cozinha</strong>. O destaque da peça vai para as <strong>linhas retas</strong> que dão esse ar moderno para ela, sem contar, claro, as <strong>cores sóbrias do tampo e dos pés</strong> que ajudam na hora de <strong>combinar</strong> com outros <strong>móveis</strong> e dar o seu toque pessoal na <strong>decoração</strong>. É a oportunidade perfeita de deixar o seu ambiente de confraternização bonito, aconchegante e pronto para receber as visitas. Ah, a peça não acompanha cadeiras e você deve adquiri-las separadamente para deixar o uso completo.',
            novoProduto: false
        },
        {
            id: 28,
            imgs: {
                img_1: '../vendors/img/produtos/mesa-3/mesa-3-img-1.jpg',
                img_2: '../vendors/img/produtos/mesa-3/mesa-3-img-1.jpg',
                img_3: '../vendors/img/produtos/mesa-3/mesa-3-img-1.jpg',
                img_4: '../vendors/img/produtos/mesa-3/mesa-3-img-1.jpg'
            },
            nome: 'Mesa de Jantar Retangular Chaplin Marrom e Preta 136 cm',
            preco: '508,99',
            desconto: 57,
            dimensoes: {
                altura: '77 cm',
                largura: '136 cm',
                profundidade: '90 cm',
                peso: '26,000 kg'
            },
            descricao: 'Carregando todo o charme e sofisticação do <strong>estilo industrial</strong> na estrutura, a <strong>Mesa Chaplin</strong> reúne requinte e bom gosto na medida certa para a sua <strong>sala de jantar ou cozinha</strong>. O destaque da peça vai para as <strong>linhas retas</strong> que dão esse ar moderno para ela, sem contar, claro, as <strong>cores sóbrias do tampo e dos pés</strong> que ajudam na hora de <strong>combinar</strong> com outros <strong>móveis</strong> e dar o seu toque pessoal na <strong>decoração</strong>. É a oportunidade perfeita de deixar o seu ambiente de confraternização bonito, aconchegante e pronto para receber as visitas. Ah, a peça não acompanha cadeiras e você deve adquiri-las separadamente para deixar o uso completo.',
            novoProduto: false
        },
    ]

    return produtosData
}