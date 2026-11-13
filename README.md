
# 📚 App Books

Aplicação front-end desenvolvida em **React** para pesquisa, visualização e gerenciamento de livros. O projeto conta com navegação entre rotas, componentização de interface e integração com serviços externos (API).

---

## 🚀 Funcionalidades

- [x] Listagem e exibição de catálogo de livros
- [x] Barra de pesquisa para filtrar obras por título/autor *(ajuste conforme o seu código)*
- [x] Navegação entre páginas utilizando roteamento dinâmico
- [x] Integração com API REST para consumo e envio de dados *(ex: favoritos, estante)*

---

## 🛠️ Tecnologias Utilizadas

* **[React](https://react.dev)** — Biblioteca principal para construção da interface
* **[React Router](https://reactrouter.com)** — Gerenciamento de rotas da aplicação *(verifique se usou `react-router-dom`)*
* **[Axios](https://axios-http.com) / Fetch API** — Consumo de dados na camada de serviços *(deixe apenas o que você usou)*
* **CSS3 / Styled Components** — Estilização dos componentes *(ajuste conforme sua escolha)*
* **JavaScript (ES6+)**

---

## 📂 Estrutura de Pastas

A arquitetura dentro de `src/` está organizada da seguinte forma:

```text
src/
├── componentes/   # Componentes reutilizáveis da interface (Header, Pesquisa, Cards, etc.)
├── imagens/       # Ativos visuais, ícones e capas utilizados no projeto
├── rotas/         # Páginas principais e configuração de navegação
├── servicos/      # Comunicação e requisições com a API
├── index.js       # Ponto de entrada da aplicação React
└── App.test.js    # Testes automatizados
```

---

## ⚙️ Como Executar o Projeto Localmente

Siga os passos abaixo para rodar a aplicação na sua máquina:

### Pré-requisitos
Certifique-se de ter o **[Node.js](https://nodejs.org)** e o **npm** (ou **yarn**) instalados.

### Passo a passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd app-books
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm start
   ```

5. Abra o navegador e acesse `http://localhost:3000`.

> **Nota:** Se este projeto depender de uma API back-end rodando localmente (como um servidor Node/Express), lembre-se de iniciá-la antes ou configurar a URL base na pasta `src/servicos/`.

## 👨‍💻 Autor

Desenvolvido por **Sárvio Alves**.

[![GitHub](https://shields.io)](https://github.com/sarvioalves)
