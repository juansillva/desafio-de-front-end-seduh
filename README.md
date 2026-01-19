# 🌤️ Weather Forecast App

Aplicação de previsão do tempo desenvolvida como desafio de front-end, com foco em **arquitetura limpa**, **experiência do usuário** e **boas práticas em React + TypeScript**.

O projeto permite selecionar cidades pré-definidas e visualizar detalhes climáticos de forma dinâmica, incluindo tema visual adaptável conforme as condições do clima.

---

## 🚀 Funcionalidades

* 📍 Seleção de cidades a partir de uma lista pré-definida
* 🌡️ Exibição de temperatura atual, mínima e máxima
* ⏰ Previsão por períodos do dia:

  * Dawn (03:00)
  * Morning (09:00)
  * Afternoon (15:00)
  * Night (21:00)
* 🎨 Tema dinâmico baseado nas condições climáticas (`clear` | `snow`)
* 🧭 Navegação entre páginas com React Router
* 🧩 Arquitetura desacoplada com hooks e configuração de tema
* 📦 Containerização com Docker

---

## 🛠️ Tecnologias Utilizadas

* **React**
* **TypeScript**
* **Vite**
* **Axios**
* **React Router DOM**
* **Sass (SCSS Modules)**
* **WeatherAPI**

---

## 🧠 Arquitetura e Organização

* **Pages**

  * `Home`: seleção da cidade
  * `Details`: exibição detalhada da previsão
* **Hooks**

  * `useDetailsForecast`: orquestra dados, tema e lógica de períodos do dia
* **Services**

  * Serviço isolado para consumo da API de clima
* **Theme Config**

  * Centraliza regras de tema, ícones e variações visuais
* **Styles**

  * Estilos globais e modulares por página

A lógica de negócio (tema, horários, decisão de ícones) foi separada da UI para manter os componentes focados apenas em renderização.

---

## 🔌 Integração com API

A aplicação consome dados da **WeatherAPI**, utilizando o endpoint de previsão:

* Previsão baseada em latitude e longitude
* Suporte a idioma (`pt`)
* Mapeamento de horários específicos do dia

> É necessário configurar a chave da API via variáveis de ambiente.

---

## ⚙️ Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_API_KEY=your_api_key_here
```

---

## ▶️ Rodando o projeto localmente

```bash
# instalar dependências
npm install

# rodar em modo desenvolvimento
npm run dev
```

---

Acesse em:
👉 `http://localhost:5173`

---

## 📌 Observações

* O projeto foi estruturado pensando em **escalabilidade e legibilidade**
* Hooks e configs foram criados para evitar lógica acoplada aos componentes
* O uso de temas permite fácil extensão para novas condições climáticas

---

## 👨‍💻 Autor

Desenvolvido por **Juan Silva**
Desafio de Front-end — SEDUH


* deixo ele mais **enxuto** (versão recruiter)
* ou ajusto pra bater exatamente com o enunciado do desafio
