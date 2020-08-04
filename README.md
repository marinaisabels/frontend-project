## ![alt text](https://miro.medium.com/fit/c/128/128/2*pq7dg0Y11VmKBSy6qiJdtQ.png "Logo Title Text 1")Labenu Web Full-Stack Bootcamp
> Desenvolvimento de aplicações completas, incluindo frontend Web com React e backend com node.js.
______

## Projeto Frontend desenvolvido por Marina Isabel
- [Linkedin](https://www.linkedin.com/in/marinaisabel/)

status do projeto: Em andamento ⌛ 
______

### Projeto Spotenu 

  O *Spotenu* é um projeto que visa facilitar o acesso a músicas pelo mundo. Para isso, vamos dar suporte para dois tipos de usuários: as bandas (ou músicos) e os ouvintes (usuários que consomem as músicas). Além disso, nós vamos montar uma operação com funcionários próprios que precisam gerenciar os dados que circulam no nosso sistema. Eles serão os nossos administradores.
  - **1. Tela de cadastro de usuário ouvinte**

    Um usuário ouvinte tem que fornecer o nome, o email, o nickname uma senha para se cadastrar

- **2. Tela de cadastro de usuários administradores**

    Os administradores também se cadastram com nome, email, nickname e senha. Aqui, a senha tem que possuir, no mínimo, 10 carácteres. Somente um usuário administrador pode adicionar outro (ou seja, algum usuário admin deve estar logado para fazer essa funcionalidade

- **3. Tela de cadastro de usuários bandas**

    A banda precisa informar o seu nome, o nickname, o email, a sua descrição e uma senha, com, no mínimo 6 caracteres. 

- **4. Tela de aprovação de bandas**

    Deve possuir uma lista com todas as bandas e um botão que permita aprovar cada uma delas

- **5. Tela de Login**

    Todos os usuários (ouvintes, administradores ou bandas) devem se logar pelo mesma tela. Eles podem fornecer o email ou o nickname e a senha correta. 

- **6. Tela de home**

    A tela de home pode ser acessada por todos os usuários. Ela deve possuir um menu que permita navegar pelas funcionalidades de cada um deles. 
    Por exemplo, para o usuário administrador, deve haver as possibilidades de: aprovar bandas, gerenciar gêneros musicais e adicionar administradores

- **7. Tela de ver e adicionar gêneos**

    Um administrador deve ser capaz de ver todos os gêneros musicais e adicionar quantos gêneros quiser passando as informações básica (no caso, só o nome).

- **8. Tela de criação de álbuns**

    Essa funcionalidade é para banda criarem álbuns próprios. Para isso, ela deve passar um nome e selecionar os gêneros apropriados. 

- **9. Tela de criação de músicas**

    Aqui é o onde as bandas criam músicas Para isso, devem fornecer o nome e o selecionar um álbum que já tenham criado.

### Começando
  Para executar o projeto, será necessário instalar os seguintes programas:
  - [React Redux](https://medium.com/reactbrasil/iniciando-com-redux-c14ca7b7dcf)
  - [Axios](https://medium.com/@eptaccio/construindo-um-service-para-requisi%C3%A7%C3%B5es-http-em-um-app-javascript-e93f653cb0ff)
  - [Material-UI](https://material-ui.com/)
  - [Styled-Components](https://styled-components.com/docs/basics/)
  
### Desenvolvimento
  Para iniciar o desenvolvimento, é necessário clonar o projeto do GitHub num diretório de sua preferência:
  
  ``cd "Pasta do arquivo"
    git clone https://github.com/marinaisabels/frontend-project.git
    ``
### Configuração
  Para configurar o arquivo, é preciso instalar as depêndencias
  - React
    ` npx create-react-app`
  - React- Redux 
  ` react-redux
    redux
    redux-thunk`
  - Axios 
    `npm install axios`
  - Styled-components 
    `npm install styled-components`
  - Material - UI 
    `npm install @material-ui`
    
Esse é um projeto de Frontend Web feito utilizando ReactJS, HTML e CSS; 
E como gerenciador de pacotes do NodeJS o npm. Sobre a divisão dos arquivos, há dois grandes setores. Os `components` são os componentes em si do meu projeto (balão de fala, botão de enviar, inputs dos usuários e outros). Já os `Containers` são as páginas em si e podem ser pensadas como a união dos componentes para se mostrar na tela. 

## Instruções para rodar
Por ser um projeto com ReactJS, há a necessidade do NodeJS. Com ele em 
sua máquina, basta abrir o terminal e navegar até o repositório clonado e 
rodar:

1. `npm install` para instalar todas as dependências;
1. `npm run start` para rodar localmente o projeto
1. `npm run build` para gerar uma versão estática do projeto 
(que ficará na pasta `build`)

    
