Treinamento:

Desenvolver uma aplicação em React Native usando EXPO
com o intuito de testar habilidades em:
.Chamadas de API
.Criação de componentes
.Roteamento
.Passagem de parâmetros por componentes
.Passagem de parâmetros por rotas de navegação
.Renderização condicional
.Hooks de controle de estado (UseState e UseEffect)

A aplicação consiste em:
-> Um programa que pega o CEP inserido em um TextInput ;

    -> envia o valor pra API do ViaCEP ;

    -> quando a API do ViaCep responder, adiciona o objeto retornado à uma array de objetos ;

    -> lista toda a array em tela, renderizando cada objeto através
    				de um componente customizado, exibindo apenas cidade e estado ;

    -> um botão que alterna entre a lista mencionada e uma outra listagem (da mesma array), que deve
    				renderizar os mesmos objetos, mas exibindo apenas cidade e rua ;

    -> um contador em tela que é atualizado sempre que o tamanho da lista for alterado ;

    -> uma outra tela, que é ativada ao clicar em um dos objetos que foram listados em qualquer um dos
    				dois modelos de lista ;

    -> esta tela deve conter todos os dados que compõe o objeto selecionado, e esses dados devem
    				ter sido passados através do parâmetros do componente
    				(o objeto inteiro tem que ter sido passado) ;

    -> esta tela deve conter também um campo que diga em qual listagem você clicou
    				(Modelo com rua ou Modelo com estado) ;

    -> um botão que na Segunda Tela que navega para uma Terceira Tela, que contém apenas
    				um dos dados daquele objeto (qualquer campo) ;

    -> o dado que for exibido na Terceira Tela deve ter sido passado através
    				de passagem de parâmetros por rota
    				(não passar o objeto inteiro, apenas o atributo em questão) ;

    -> toda tela tem que ter um header que diz o nome da tela e um botão que volta para a tela anterior ;

    Primeira Tela:
    	.Header com o nome da tela
    	.Campo de Input de CEP
    	.Botão de "adicionar"
    	.Listagem de objetos (dois formatos diferentes) através de componentes criados
    	.Botão para alterar entre os formatos de listagem
    	.Contador

    Segunda Tela:
    	.Header com o nome da tela
    	.Botão de voltar
    	.Todos os dados contidos no objeto passado
    	.Campo que diga em qual listagem você clicou
    	.Botão que navega para a Terceira Tela

    Terceira Tela:
    	.Header com o nome da tela
    	.Botão de voltar
    	.Um dos dados do objeto

Para desenvolver a aplicação, é obrigatório se atentar aos padrões de desenvolvimento que usamos em outras aplicações na empresa e em alguns outros padrões exclusivos desta aplicação:
.Programação funcional, nada de orientação a objetos ;
.Chamadas de api usando a biblioteca Axios, nada de fetchs ;
.Navegação e Headers usando react-navigation e react-navigation/native-stack ;
.Não usar Context API nesta aplicação, Context API deve apenas ser utilizado em aplicações onde
é necessário que alguns dados sejam globais, como os dados de um Usuário ;
.Listar os objetos da Array usando .map ;
.Atualizar o contador usando UseEffect ;
.Recomendável usar Card do react-native-paper no componente que será utilizado para renderizar os objetos da array ;
