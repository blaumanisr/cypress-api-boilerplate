[![Cypress](https://img.shields.io/badge/tested%20with-Cypress-17202C.svg?logo=cypress)](https://www.cypress.io/)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

# 🧪 Cypress API Boilerplate

A minimal boilerplate project for testing REST APIs using [Cypress](https://www.cypress.io/) and the [Fake Store API](https://fakestoreapi.com/). This boilerplate includes practical examples, best practices, and plugin integration for enhanced API visibility.

## 🚀 Features

- ✅ Clean project structure with dedicated `/api` test folder
- ✅ Usage of `cy.api()` from [`cypress-plugin-api`](https://github.com/filiphric/cypress-plugin-api) for enhanced test runner UI
- ✅ Authentication flow with token reuse across tests
- ✅ API assertions (status, body, headers, performance)
- ✅ Negative scenario testing (401 errors, invalid input)
- ✅ Data-driven testing using Cypress fixtures
- ✅ Chained requests (e.g., GET → GET by ID)

## 📂 Project Structure

```
cypress-api-boilerplate/
├── cypress/
│ ├── e2e/
│ │ └── api/
│ │ ├── products.cy.js
│ │ └── users.cy.js
│ ├── fixtures/
│ │ └── newUser.json
│ └── support/
│ └── e2e.js
├── cypress.config.js
├── package.json
├── README.md
└── node_modules/
```

## 📦 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/blaumanisr/cypress-api-boilerplate.git
cd cypress-api-boilerplate
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the tests

Open Cypress Test Runner:

```bash
npx cypress open
```

Or run tests in headless mode:

```bash
npx cypress run --spec "cypress/e2e/api/*.cy.js"
```

## 🧠 Author

Maintained by @blaumanisr — blog article available at [`TestDevLab Blog`](https://www.testdevlab.com/blog/api-testing-with-cypress-2025)

## 📄 License

MIT – free to use and modify for personal or commercial projects.
