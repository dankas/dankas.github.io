---
title: Introdução a APIs RESTful e aplicações em IOT.
key: 20220601
tags: 
  - notes
  - aulas
  - saee
  - engenharia 
categories: IOT REST

article_header:
  type: cover
  image:
    src: /assets/images/blog/RESTful.png


---

# Material do curso

Esse é o material do minicurso de introdução a APIs RESTful e aplicações em IOT que foi ministrado na edição semana acadêmica da engenharia elétrica (SAEE) do IFSul Campus Pelotas.  Junto a cada vídeo eu deixei um complemento dos assuntos abordados no vídeo e no final algumas dicas importantes do que continuar estudando (ORM, segurança, organização do código...) após esta introdução ao assunto de APIs REST. Bom estudo.

### Ambiente e programas necessários

- [ ]  NODEjs - [https://nodejs.org/en](https://nodejs.org/en/)
- [ ]  VSCode - [https://code.visualstudio.com/](https://code.visualstudio.com/)
- [ ]  XAMPP - [https://www.apachefriends.org/pt_br/index.html](https://www.apachefriends.org/pt_br/index.html)
- [ ]  POSTMAN - [https://www.postman.com/downloads/](https://www.postman.com/downloads/)

---

## PRIMEIRA AULA - INTRODUÇÃO

<iframe width="560" height="315" src="https://www.youtube.com/embed/gtmWZeLjLig" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### O que é: HTTP
HTTP surgiu em 1989 e passou a ser usado em 1990 nos primórdios da WWW, a rede de computadores(criada no **CERN- Organização Europeia para a Investigação Nuclear**) que foi o inicio da internet.    O HyperText Transfer Protocol, http, é um protocolo de comunicação entre o servidor e os clientes, uma abstração responsável por padronizar os métodos de transferência de informação entre eles. Por exemplo, um browser (que é o cliente) submete uma mensagem de requisição HTTP para o servidor do google.com. O servidor, que fornece os recursos (como arquivos HTML e outros conteúdos) retorna uma mensagem resposta para o cliente e o recurso ou função requisitado.  No caso seria o retorno do código 200 (deu tudo cert) e a pagina html e seus elementos (css, javascript, imagens...).

![Meu nome é **HTTP**, moro na camada de aplicação do modelo OSI e estou a duas semanas sem dar erro 404.](/assets/images/blog/osi.png)

Meu nome é **HTTP**, moro na camada de aplicação do modelo OSI e estou a duas semanas sem dar erro 404.

### Códigos de status/erros HTTP

Lista de códigos de status e/ou erros mais comuns do protocolo http.

**2xx** OK

Esta classe de códigos de status indica a ação solicitada pelo cliente foi recebida, compreendida, aceita e processada com êxito.

- **200** - *Sucesso*
- **201** - *Criado*

**4xx** Erro de Cliente

A classe 4xx de código de status é destinado para os casos em que o cliente parece ter cometido um erro

- **400** *Requisição inválida*
- **401** *Não autorizado*
- **403** *Proibido*
- **404** *Não encontrado*

**5xx** outros erros

Os erros desta classe estão relacionados a erros no servidor.

- **500** *Erro interno do servidor (Internal Server Error)* - Indica um erro do servidor ao processar a solicitação

### O que é: IOT

Internet of Things (IOT), ou em bom português *internet dos bagulhos*, é o conceito de interligar através da internet equipamentos, sensores e objetos que possuem capacidade embarcada de acessar rede.    Desta maneira cria-se um rede de coleta de dados e controle remoto, possibilitando uma integração completa e permitindo o uso em aplicações, ou simplificando processos, que anteriormente ao desenvolvimento da tecnologia não possuíam uma maneira prática para esta integração.

Imagine que certos objetos entre outras coisas como livros, termostatos, refrigeradores, lâmpadas, remédios, autopeças, fossem equipados com dispositivos de identificação e conectados à Internet, não haveria a possibilidade de faltarem produtos como alguns remédios, pois saberíamos exatamente onde os encontrar e quantos estariam disponíveis. Ou então sensores em uma plantação, que manteriam informações detalhadas de umidade no solo, insolação, níveis de nutrientes, tudo isso permitindo correções automáticas deste fatores- o quanto não aumentaria a eficiência da produção desta fazenda?   Essa é a ideia central do IOT, aumentar a eficiência de processos de produção e serviços.

    

---

## SEGUNDA AULA - CONFIGURAÇÃO DO BANCO DE DADOS.

<iframe width="560" height="315" src="https://www.youtube.com/embed/OD512Jfjk_c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### O que é: Banco de Dados e SQL

Bancos de dados são coleções organizadas de dados que se relacionam de forma a criar algum sentido (Informação) e dar mais eficiência durante uma pesquisa ou estudo cientifico. São gerenciados e operados pelos Sistemas Gerenciadores de Bancos de Dados (**SGBD**).  Nós usaremos o MySQL no curso.

Já o SQL é uma linguagem de programação usada para consultar, manipular ou definir dados e fornecer controle de acesso. O SQL foi desenvolvido pela primeira vez na IBM nos anos 1970, através dessa linguagem que interagimos com os bancos de dados relacionais- que é tipo que usaremos no nosso projeto.

---

## TERCEIRA AULA - PROGRAMAÇÃO DA API 1

<iframe width="560" height="315" src="https://www.youtube.com/embed/0JUlX_UBkQ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### O que é: NODEjs.

O NODEjs é uma runtime (maquina de execução de uma linguagem interpretada, isto é, não compilada) que executa a linguagem Javascript.   Tá, mas o que é o javascript?  É a linguagem padrão de manipulação de páginas HTML, criada em 1995. Anteriormente, foi usada para o desenvolvimento client side- sabe, aquelas janelas pop-ups ou como no gmail onde a caixa atualizava sem precisar recarregar a pagina.   Em 2009 criou-se a ideia de usar essa linguagem também do lado do servidor, pois isso permitiria que a equipe de programação usassem somente javascript durante todo o desenvolvimento, não precisando contratar programadores de outras linguagens (PHP por exemplo) para fazer o "core" dos programas- a parte responsável pela lógica e pelas regras de negócios.  Pessoal do javascript normalmente só trabalhava na parte da visualização, nas telas do programa. 

Nasceu assim o node, ele é basicamente a maquina de interpretação javascript usada no google chrome, a V8, que foi separada do navegador e encapsulada num executavel do sistema operacional.  Imagina o node como um browser web em que ao invés de mostrar paginas HTML/CSS, roda somente o javascript.

### O que é: Orientação a Objetos

É um paradigma de programação.  Nele representamos conceitos do mundo real dentro do programa, os objetos, através de uma abstração de suas funções.  Por exemplo, imagine que "queremos" um carro dentro do programa.   Carros tem funções e característica, carros tem cores, quantidade de portas, potencia do motor, tipo do motor e carros executam ações- carros acedem os faróis ou andam quando acelerados. 

Dentro do programa construirmos a classe carro, uma estrutura de dados onde centralizamos suas características como atributos do objeto e suas ações, ações e funções, como métodos.   Depois que essa estrutura foi definida nós podemos declarar um objeto, por exemplo um fiat uno, dom todas as informações dele e acessar facilmente. quer saber a cor? acessa o atributo fiat-uno.cor(), quer fazer ele andar para frente a 20km/h? usa o método andar do objeto: fiat-uno.andar(frente,20km/h).

![... esse fusca ta meio quadrado...](/assets/images/blog/class-analogy.png)

... esse fusca ta meio quadrado...

Código do index.js da primeira parte:

<script src="https://gist.github.com/dankas/c968a223729caacc0c2eb2df32bd1c79.js"></script>

Repositório do GITHUB:

[dankas/curso_apirest](https://github.com/dankas/curso_apirest/tree/master/api_iot)

---

## QUARTA AULA - PROGRAMAÇÃO DA API 2 (POST,PUT E DELETE)

<iframe width="560" height="315" src="https://www.youtube.com/embed/rL78FkxzRhw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Instruções SLQ

Os bancos de dados possuem uma linguagem propria para acesso dos  dados que estão guardados  neles a SQL (Structured Query Language).  As principais instruções são:

**Apagar valor da tabela:**

**DELETE FROM** *nome_da_tabela ***WHERE** *condição*;

**Buscar valor da tabela:**

**SELECT** campos **FROM** *nome_da_tabela* **WHERE** *condição;*

**Atualizar o valor de uma tabela:**

**UPDATE** *tabela* **SET** *campo1,campo2...* **WHERE** *condição*;

Código do index.js da segunda parte:

<script src="https://gist.github.com/dankas/1d218d61e9e0a5ccd79f83e7039def6e.js"></script>

Repositório do GITHUB:

[dankas/curso_apirest](https://github.com/dankas/curso_apirest/tree/master/api_iot%5Bpost-put%5D)

---

## Dicas Finais

Nossa API é experimental, ela possui uma série de "problemas" do ponto de vista de organização do código, boas práticas de programação e principalmente de segurança!  Claro, foi uma decisão minha fazer ela da maneira que foi porquê queria concentrar na ideia geral da api, não nos detalhes de implantar a API.   É um minicurso de introdução, a partir deles vocês podem continuar a estudar e ai sim se preocupar com os detalhes e sim, esses detalhes são importantes! Então vou deixar aqui os assuntos que julgo ser importante de vocês estudarem para criarem APIs realmente funcionais e fáceis  de dar manutenção.

### ORM (Object Relational Mapper)

Primeira coisa é o ORM.  O ORM (Object Relational Mapper) é uma técnica de mapeamento objeto relacional que permite fazer uma relação dos objetos com os dados que os mesmos representam, nela nos concentramos na "matemática" de lidar com as informações armazenada no banco de dados.   Na nossa API nós fizemos as queries SQL no código, nós tivemos que "pensar" nos comandos sql que precisávamos, mas o que realmente é importante para nossa lógica é quais informações buscar, quais atualizar, quais apagar... A forma de unir as informações disponíveis no banco de dados (inner join) ou como fazer os campos no banco de dados pouco importava para a lógica da API.

Com um ORM nós declaramos a forma dos dados que seriam guardados, por exemplo nós faríamos o modelo dos nossos equipamentos com seus campos (nome, local, descrição...) e o módulo orm fica responsável por criar as tabelas no banco de dados e por fazer as queries.  Dessa forma trabalharíamos com objetos e métodos diretamente, algo do tipo um objeto equipamentos onde teríamos o método "***findAll()***" para retornar todos os equipamentos no banco de dados.  Esses métodos já estão todos prontos no ORM, simplificando nossa vida. 

Um ORM muito usado, mas não o único, em aplicações **NODEjs** é o **sequelize** 

[Sequelize](https://sequelize.org/master/)

### JWT e segurança

Na nossa API o que impede que qualquer pessoa com acesso a ela crie novos equipamentos ou registros de monitoramento?  Nada! não tem nenhum gerenciamento de acesso e consumo da nossa API, mas obviamente essa é a parte mais importante de um sistema que ficará disponível na internet.    Existe um ´padrão para segurança de aplicações web: o **Json Web Tokens.**   Conhecido pelo acrônimo **jwt** como é conhecido determina como criar "**tokens**" para autorização e conferencia das informações trocadas pelas APIs.   

Um módulo para NODEjs que é muito usado é o PASSPORTjs ([http://www.passportjs.org/](http://www.passportjs.org/)).  Com esse módulo nos usaremos os JWT para autenticar usuarios na nossa API.  Funciona assim: antes de fazer um acesso a API, nós fazemos um "**post**" na api com usuario e senha e recebemos um **token** com uma certa validade de tempo, esse token será enviado junto com a nossa interação e será chegado sempre que formos usar a API.

Aqui, na documentação do PASSPORTjs tem exemplos de como é implementado: 

[Documentation](http://www.passportjs.org/docs/downloads/html/)

### MCR (model-controller-routes)

Por fim o que eu acho o mais importante, organização do código!  Nós implantamos a API em nosso minicurso sem nenhuma, o quase nenhuma, preocupação em organização e boas práticas de programação.  Da maneira como nosso código está é difícil a manutenção ou compreensão por outra pessoa da nossa lógica.   Para evitar isso existe um padrão de projeto (design pattern) que é o MCR, no caso das APIs, ou MVC em outras aplicações.

O MCR (model-controller-routes)  consiste em separar as responsabilidades de cada parte do código em arquivos separados e dessa forma evitar a bagunça na programação!  Na nossa API usaríamos o **sequelize** para ORM e com isso já teríamos os MODELS, que a abstração dos nossos objetos reais (equipamentos, monitoramento...), criaríamos um novo arquivo js chamado de **controller** onde escreveríamos a lógica (pegar os dados, consultar o banco, escrever resposta para o cliente...) e um outro arquivo chamado de **routes** para gerenciar as rotas (pegar a rota "/monitoramento/equipamento/1" por exemplo) e determinar se for um ***GET*** chama o **controller** de listagem- se for ***POST*** chama o **controller** responsável por salvar a informação... Deixamos assim o index.js somente para gerenciar a conexão do banco de dados e importar os módulos.


