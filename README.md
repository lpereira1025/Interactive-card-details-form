<h1>Card Form App</h1>
<h2>Este projeto é uma aplicação de formulário de cartão de crédito desenvolvida em React. A aplicação permite que os usuários insiram e confirmem seus detalhes de cartão de crédito, e exibe uma mensagem de agradecimento ao final do processo.</h2>

<h2>Funcionalidades</h2>
<li>Formulário de entrada para o nome do titular do cartão, número do cartão, data de validade e código CVC.</li>
<li>Validação para garantir que o número do cartão e o código CVC sejam formatados corretamente e aceitem apenas números.</li>
<li>Exibição de uma mensagem de agradecimento após a confirmação dos detalhes do cartão.</li>
<li>Redefinição dos campos do formulário ao clicar no botão "Continue" na mensagem de agradecimento.</li>
<li>Estrutura do Projeto</li>
<li>O projeto é dividido em componentes e hooks para uma melhor organização e manutenção do código.</li>

<h2>Componentes</h2>
<li>App: Componente principal que gerencia o estado do formulário e controla a exibição dos componentes CardForm e ThankYou.</li>
<li>CardForm: Componente que exibe o formulário de entrada e o cartão de crédito com os detalhes inseridos.</li>
<li>ThankYou: Componente que exibe a mensagem de agradecimento após a confirmação do cartão.</li>
<ul>Hooks</ul>
<li>useFormState: Hook customizado que gerencia o estado do formulário e fornece funções para lidar com mudanças e redefinir os campos.</li>
<li>useConfirm: Hook customizado que gerencia o estado de confirmação do formulário e valida os dados inseridos.</li>

<h2>Instalação</h2>

<h3>Clone o repositório:</h3>
git clone https://github.com/seu-usuario/card-form-app.git
  
<h3>Navegue até o diretório do projeto:</h3>
cd card-form-app
  
<h3>Instale as dependências:</h3>
npm install
  
<h3>Inicie o servidor de desenvolvimento:</h3>
npm start
O aplicativo estará disponível em http://localhost:3000.

<h2>Uso</h2>
<ul>Preencha os campos do formulário com as informações do cartão de crédito:</ul>

<li>Nome do titular</li>
<li>Número do cartão</li>
<li>Data de validade</li>
<li>Código CVC</li>
<li>Clique no botão "Confirm" para confirmar os detalhes do cartão.</li>
<br/>
Após a confirmação, você verá uma mensagem de agradecimento. Clique em "Continue" para limpar os campos e retornar ao formulário inicial.

<h2>Tecnologias Utilizadas
<h3>Front-end</h3>
<li>React: Biblioteca JavaScript para construção de interfaces de usuário.
<li>Tailwind CSS: Framework de utilitários CSS para estilização rápida e responsiva.
<li>date-fns: Biblioteca para manipulação e formatação de datas em JavaScript.
<h3>Ferramentas de Desenvolvimento</h3>
<li>npm: Gerenciador de pacotes para instalação e gerenciamento das dependências do projeto.
<li>ESLint: Ferramenta para análise estática de código JavaScript, utilizada para identificar e corrigir problemas.
<li>Prettier: Ferramenta para formatação automática de código.
<h3>Imagens</h3>
<li>SVG: Utilização de imagens SVG para logotipos e ícones, proporcionando gráficos vetoriais escaláveis.
