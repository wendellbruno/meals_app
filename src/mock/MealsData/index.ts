import { Cost, Complexity } from '../../models';
export const DUMMY_MEALS = [
  {
    id: 'm1',
    categories: ['c1', 'c2'],
    title: 'Espaguete com Molho de Tomate',
    cost: Cost.Barato,
    complexity: Complexity.Simples,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
    duration: 20,
    ingredients: [
      '4 tomates',
      '1 colher de sopa de azeite',
      '1 Cebola',
      '250g de espaguete',
      'Especiarias',
      'Queijo (opcional)',
    ],
    steps: [
      'Corte os tomates e a cebola em pedaços pequenos.',
      'Ferva um pouco de água - adicione sal quando ferver.',
      'Coloque o espaguete na água fervente - eles devem estar prontos em cerca de 10 a 12 minutos.',
      'Entretanto, aqueça um pouco de azeite e adicione a cebola cortada.',
      'Após 2 minutos, adicione os pedaços de tomate, sal, pimenta e outros temperos.',
      'O molho estará pronto assim que o espaguete estiver.',
      'Sinta-se à vontade para adicionar um pouco de queijo por cima do prato acabado.',
    ],
  },
  {
    id: 'm2',
    categories: ['c2'],
    title: 'Brinde Havaí',
    cost: Cost.Barato,
    complexity: Complexity.Simples,
    imageUrl:
      'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg',
    duration: 10,
    ingredients: [
      '1 Fatia de Pão Branco',
      '1 fatia de presunto',
      '1 Fatia de Abacaxi',
      '1-2 fatias de queijo',
      'Manteiga',
    ],
    steps: [
      'Unte com manteiga um lado do pão branco',
      'Coloque o presunto, o abacaxi e o queijo no pão branco',
      'Asse a torrada por cerca de 10 minutos no forno a 200°C',
    ],
  },
  {
    id: 'm3',
    categories: ['c2', 'c3'],
    title: 'Classic Hamburger',
    cost: Cost.Justo,
    complexity: Complexity.Simples,
    imageUrl:
      'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    duration: 45,
    ingredients: [
      '300g de corte de gado',
      '1 tomate',
      '1 Pepino',
      '1 Cebola',
      'Ketchup',
      '2 pães de hambúrguer',
    ],
    steps: [
      'Forma 2 hambúrgueres',
      'Frite os hambúrgueres por c. 4 minutos de cada lado',
      'Frite rapidamente os pães por c. 1 minuto de cada lado',
      'Pãezinhos bruch com ketchup',
      'Sirva hambúrguer com tomate, pepino e cebola',
    ],
  },
  {
    id: 'm4',
    categories: ['c4'],
    title: 'Schnitzel de Viena',
    cost: Cost.Caro,
    complexity: Complexity.Média,
    imageUrl:
      'https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_1280.jpg',
    duration: 60,
    ingredients: [
      'vitela',
      '4 ovos',
      '200g de pão ralado',
      '100g Farinha',
      '300ml de manteiga',
      '100g de óleo vegetal',
      'Sal',
      'Fatias de Limão',
    ],
    steps: [
      'Amacie a vitela até cerca de 2–4 mm e salgue dos dois lados.',
      'Em um prato raso, mexa os ovos rapidamente com um garfo.',
      'Cubra levemente as costeletas com farinha, depois mergulhe no ovo e, por fim, cubra com pão ralado.',
      'Numa frigideira grande aqueça a manteiga e o azeite (deixe a gordura ficar bem quente) e frite os schnitzels até dourar dos dois lados.',
      'Certifique-se de mexer a frigideira regularmente para que os schnitzels fiquem rodeados de óleo e o miolo fique fofo',
      'Retire e escorra em papel de cozinha. Frite a salsa no óleo restante e escorra.',
      'Coloque os schnitzels em um prato aquecido e sirva decorado com salsa e rodelas de limão.',
    ],
  },
  {
    id: 'm5',
    categories: ['c2', 'c5', 'c10'],
    title: 'Salada com Salmão Fumado',
    cost: Cost.Caro,
    complexity: Complexity.Simples,
    imageUrl:
      'https://cdn.pixabay.com/photo/2016/10/25/13/29/smoked-salmon-salad-1768890_1280.jpg',
    duration: 15,
    ingredients: [
      'Rúcula',
      'Alface-de-cordeiro',
      'Salsinha',
      'Funcho',
      '200g de salmão defumado',
      'Mostarda',
      'Vinagre balsâmico',
      'Azeite',
      'Sal e pimenta',
    ],
    steps: [
      'Lave e corte salada e ervas',
      'Corte o salmão em cubos',
      'Processe a mostarda, o vinagre e o azeite até formar uma sobremesa',
      'Prepare a salada',
      'Adicione cubos de salmão e molho',
    ],
  },
  {
    id: 'm6',
    categories: ['c6', 'c10'],
    title: 'Deliciosa Mousse de Laranja',
    cost: Cost.Barato,
    complexity: Complexity.Difícil,
    imageUrl:
      'https://cdn.pixabay.com/photo/2017/05/01/05/18/pastry-2274750_1280.jpg',
    duration: 240,
    ingredients: [
      '4 Folhas de Gelatina',
      '150ml de suco de laranja',
      '80g de açúcar',
      '300g Iogurte',
      '200g de creme',
      'Casca de laranja',
    ],
    steps: [
      'Dissolver a gelatina na panela',
      'Adicione suco de laranja e açúcar',
      'Tire a panela do fogão',
      'Adicione 2 colheres de sopa de iogurte',
      'Mexa a gelatina sob o iogurte restante',
      'Resfrie tudo na geladeira',
      'Bata as natas e coloque-as sob a massa de laranja',
      'Resfrie novamente por pelo menos 4 horas',
      'Sirva com casca de laranja',
    ],
  },
  {
    id: 'm7',
    categories: ['c7'],
    title: 'Panquecas',
    cost: Cost.Barato,
    complexity: Complexity.Simples,
    imageUrl:
      'https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg',
    duration: 20,
    ingredients: [
      '1 1/2 xícara de farinha multiuso',
      '3 1/2 colheres de chá de fermento em pó',
      '1 colher de chá de sal',
      '1 colher de sopa de açúcar branco',
      '1 1/4 xícara de leite',
      '1 ovo',
      '3 colheres de sopa de manteiga derretida',
    ],
    steps: [
      'Em uma tigela grande, peneire a farinha, o fermento, o sal e o açúcar.',
      'Faça um buraco no centro e despeje o leite, o ovo e a manteiga derretida; misture até ficar homogêneo.',
      'Aqueça uma frigideira ou frigideira levemente untada com óleo em fogo médio alto.',
      'Despeje ou coloque a massa na frigideira, usando aproximadamente 1/4 de xícara para cada panqueca. Marrom em ambos os lados e servir quente.',
    ],
  },
  {
    id: 'm8',
    categories: ['c8'],
    title: 'Caril Cremoso de Frango Indiano',
    cost: Cost.Justo,
    complexity: Complexity.Média,
    imageUrl:
      'https://cdn.pixabay.com/photo/2018/06/18/16/05/indian-food-3482749_1280.jpg',
    duration: 35,
    ingredients: [
      '4 peitos de frango',
      '1 Cebola',
      '2 dentes de alho',
      '1 pedaço de gengibre',
      '4 colheres de sopa de amêndoas',
      '1 colher de chá de pimenta caiena',
      '500ml de leite de coco',
    ],
    steps: [
      'Corte e frite o peito de frango',
      'Processe a cebola, o alho e o gengibre até formar uma pasta e refogue tudo',
      'Adicione temperos e frite',
      'Adicione peito de frango + 250ml de água e cozinhe tudo por 10 minutos',
      'Adicionar leite de coco',
      'Sirva com arroz',
    ],
  },
  {
    id: 'm9',
    categories: ['c9'],
    title: 'Suflê de chocolate',
    cost: Cost.Barato,
    complexity: Complexity.Difícil,
    imageUrl:
      'https://cdn.pixabay.com/photo/2014/08/07/21/07/souffle-412785_1280.jpg',
    duration: 45,
    ingredients: [
      '1 colher de chá de manteiga derretida',
      '2 colheres de sopa de açúcar branco',
      '2 onças de chocolate amargo 70%, quebrado em pedaços',
      '1 colher de sopa de manteiga',
      '1 colher de sopa de farinha multiuso',
      '4 1/3 colheres de sopa de leite frio',
      '1 pitada de sal',
      '1 pitada de pimenta caiena',
      '1 gema de ovo grande',
      '2 claras de ovo grandes',
      '1 pitada de creme de tártaro',
      '1 colher de sopa de açúcar branco',
    ],
    steps: [
      'Pré-aqueça o forno a 190°C. Forre uma assadeira com papel manteiga.',
      'Pincele levemente o fundo e as laterais de 2 ramequins com 1 colher de chá de manteiga derretida; cubra o fundo e as laterais até a borda.',
      'Adicione 1 colher de sopa de açúcar branco aos ramequins. Gire os ramequins até que o açúcar cubra todas as superfícies.',
      'Coloque os pedaços de chocolate em uma tigela de metal.',
      'Coloque a tigela sobre uma panela com cerca de 3 xícaras de água quente em fogo baixo.',
      'Derreta 1 colher de sopa de manteiga em uma frigideira em fogo Médio. Polvilhe com farinha. Bata até que a farinha seja incorporada à manteiga e a mistura engrosse.',
      'Bata o leite frio até a mistura ficar lisa e engrossar. Transfira a mistura para uma tigela com chocolate derretido.',
      'Adicione sal e pimenta caiena. Misture bem. Adicione a gema de ovo e misture bem.',
      'Deixe a tigela acima da água quente (não fervendo) para manter o chocolate quente enquanto você bate as claras.',
      'Coloque 2 claras em uma tigela; adicione o creme de tártaro. Bata até a mistura começar a engrossar e um fiozinho do batedor permanecer na superfície por cerca de 1 segundo antes de desaparecer na mistura.',
      'Adicione 1/3 de açúcar e misture. Adicione um pouco mais de açúcar por cerca de 15 segundos.',
      'Bata o resto do açúcar. Continue batendo até que a mistura fique tão espessa quanto creme de barbear e mantenha picos suaves, 3 a 5 minutos.',
      'Transfira um pouco menos da metade das claras para o chocolate.',
      'Misture até que as claras estejam bem incorporadas ao chocolate.',
      'Adicione o restante das claras; envolva delicadamente no chocolate com uma espátula, levantando do fundo e dobrando.',
      'Pare de misturar depois que a clara do ovo desaparecer. Divida a mistura entre 2 ramequins preparados. Coloque os ramequins na assadeira preparada.',
      'Asse em forno pré-aquecido até que as brigas estejam estufadas e subam acima das bordas, 12 a 15 minutos.',
    ],
  },
  {
    id: 'm10',
    categories: ['c2', 'c5', 'c10'],
    title: 'Salada de Espargos com Tomate Cereja',
    cost: Cost.Caro,
    complexity: Complexity.Simples,
    imageUrl:
      'https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg',
    duration: 30,
    ingredients: [
      'Espargos Brancos e Verdes',
      '30g de pinhões',
      '300g de tomate cereja',
      'Salada',
      'Sal, pimenta e azeite',
    ],
    steps: [
      'Lave, descasque e corte os aspargos',
      'Cozinhe em água salgada',
      'Salgue e apimente os aspargos',
      'Assar os pinhões',
      'Divida os tomates pela metade',
      'Misture com aspargos, salada e molho',
      'Sirva com baguete',
    ],
  },
];
