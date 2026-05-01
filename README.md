# Tgstore Ecommerce

Tgstore é um e-commerce moderno e responsivo, focado na melhor experiência do usuário (UX) e em código escalável. Ele simula uma loja virtual completa, com listagem de produtos, filtros em tempo real, detalhes interativos e gerenciamento de carrinho.

---

## 🚀 Tecnologias e Stack Utilizada

- **Frontend:**
  - [React](https://reactjs.org/) (v19) via [Vite](https://vitejs.dev/)
  - [React Router DOM](https://reactrouter.com/) para roteamento
  - [Styled-Components](https://styled-components.com/) para estilização e Design System
  - [Axios](https://axios-http.com/) para requisições HTTP
  - [React Toastify](https://fkhadra.github.io/react-toastify/) para notificações de feedback
- **Backend (Mock):**
  - [JSON Server](https://github.com/typicode/json-server) (v1) para API REST local
  - [My JSON Server](https://my-json-server.typicode.com/) para mock de API em produção

## ⚙️ Arquitetura e Decisões de Design

- **State Management:** O estado do carrinho de compras é gerenciado globalmente pela Context API com o pattern `useReducer`, que traz previsibilidade a ações como adicionar, remover ou alterar a quantidade dos itens.
- **Custom Hooks:** 
  - `useProducts`: centraliza e isola as lógicas de fetch, unificando tratamentos de loading, erro e paginação/filtros.
  - `useDebounce`: otimiza a performance na barra de pesquisa. Ele evita gargalos de rede disparando requisições apenas 300ms após o usuário parar de digitar.
- **Convenção de Estilização:** Ao invés da criação excessiva de pequenos styled-components (que causam poluição no JSX), foi utilizada uma abordagem baseada em CSS Nesting em torno de "Containers" principais. Isso mantém a marcação (`h1`, `span`, `p`) visualmente limpa e semântica.
- **Responsividade:** Media queries centralizadas no `theme.js` para garantir uma interface perfeitamente fluida desde 375px até desktops ultrawide.

## 🌐 Links

- **Repositório GitHub:** [https://github.com/guilopreti/tgstore](https://github.com/guilopreti/tgstore)
- **Produção (App Live):** [https://tgstore-ten.vercel.app/](https://tgstore-ten.vercel.app/)

## 💻 Como Rodar o Projeto Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/SEU_USUARIO/SEU_REPO.git
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd SEU_REPO
   ```

3. Instale as dependências:
   ```bash
   yarn
   ```

4. Inicie o servidor de desenvolvimento. Este comando subirá simultaneamente o Vite (frontend) e o JSON Server (mock backend local):
   ```bash
   yarn dev
   ```

O frontend estará acessível em `http://localhost:5173` e a API em `http://localhost:3001`.

## 📦 Notas sobre Deploy

O deploy foi pensado para a **Vercel** com o **My JSON Server**.

Para que a aplicação saiba qual URL usar no ambiente de produção:
A API em produção deve rodar sob o link gerado pelo [My JSON Server](https://my-json-server.typicode.com/), e o frontend pega essa URL a partir da variável de ambiente definida no \`.env.production\`.
