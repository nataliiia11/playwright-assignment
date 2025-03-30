# 🧪 Playwright E2E Tests with Allure Reporting

This repository contains end-to-end tests built with [Playwright](https://playwright.dev/), written in TypeScript, with:

- 📊 Allure reporting
- 🤖 GitHub Actions CI/CD
- 🎯 Code quality via ESLint & Prettier

---

## 🚀 Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/nataliiia11/playwright-assignment.git
cd playwright-assignment
```

### 2. Install dependencies
```bash
npm ci
```

### 3. Install Playwright browsers
```bash
npx playwright install --with-deps
```

---

## ✅ Run tests

```bash
npm run test
```

To run only a specific test file:
```bash
npx playwright test tests/features/signUp/countryField.spec.ts
```

---

## 📊 Allure Reporting

### Generate Allure report
```bash
npm run allure:generate
```

### Open Allure report locally
```bash
npm run allure:open
```

> Allure CLI is installed automatically in CI, or can be added globally via:
> `npm install -g allure-commandline`

---

## 📦 Available Scripts

| Script                     | Description                          |
|----------------------------|--------------------------------------|
| `npm run test`             | Run all Playwright tests             |
| `npm run test:report`      | Run tests + generate + open report   |
| `npm run lint`             | Run ESLint on `.ts` files            |
| `npm run lint:fix`         | Run ESLint and auto-fix issues       |
| `npm run format`           | Format code using Prettier           |
| `npm run allure:generate`  | Generate Allure HTML report          |
| `npm run allure:open`      | Open Allure report in browser        |

---

## 🤖 CI/CD (GitHub Actions)

GitHub Actions automatically:

- Runs tests on push and PR
- Installs Allure CLI
- Generates Allure report
- Uploads report as artifact

Config: `.github/workflows/playwright.yml`

---

## 🧠 Project Structure

```
📦 root
├── tests/
│   ├── features/              # Feature-based tests
│   │   └── signUp/
│   ├── utils/
│   │   ├── locators/          # Page locators (modular)
│   │   ├── testData.ts        # Fake user data generation
│   │   ├── constants.ts       # URLs, constants, etc.
│   │   └── setup.ts           # Precondition logic
├── .github/workflows/         # GitHub Actions
├── eslint.config.mjs          # ESLint config (flat config)
├── .prettierrc.json           # Prettier rules
├── playwright.config.ts       # Playwright setup
├── package.json               # Scripts and dependencies
└── README.md
```

---

## 🔍 Linting & Formatting

- ESLint (flat config)
- Prettier with consistent rules
- Git hooks via Husky (optional)
- Can auto-fix on save (VSCode)

---

## 🧾 .gitignore

Make sure these are ignored:

```
node_modules/
dist/
test-results/
playwright-report/
allure-results/
allure-report/
.eslintcache
```

---

## 💬 Feedback

Found a bug? Want to improve the test structure or automation flow?  
Open an [issue](https://github.com/nataliiia11/playwright-assignment/issues) or PR 🙌

---

Made with ❤️ using Playwright + Allure + GitHub Actions.
