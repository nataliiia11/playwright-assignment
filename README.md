# 🧪 Playwright E2E Tests with Allure Reporting

This repository contains E2E tests written using [Playwright](https://playwright.dev/) with integrated [Allure](https://docs.qameta.io/allure/) reporting and GitHub Actions for CI.

---

## 🚀 Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
```

### 2. Install dependencies
```bash
npm ci
```

### 3. Install Playwright browsers
```bash
npx playwright install --with-deps
```

### 4. Run tests
```bash
npm run test
```

### 5. Generate Allure report
```bash
npm run allure:generate
```

### 6. Open Allure report in browser
```bash
npm run allure:open
```

---

## 📦 Available Scripts

| Script              | Description                          |
|---------------------|--------------------------------------|
| `npm run test`      | Run all Playwright tests             |
| `npm run allure:generate` | Generate Allure HTML report   |
| `npm run allure:open`     | Open Allure report locally     |
| `npm run test:report`     | Run tests + generate + open report |

---

## ⚙️ Tech Stack

- [Playwright](https://playwright.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Allure Playwright](https://docs.qameta.io/allure/)
- [GitHub Actions](https://github.com/features/actions)

---

## 🤖 CI/CD

This project uses **GitHub Actions** to:

- Run tests on every push and PR
- Generate Allure report
- Upload report as downloadable artifact

Workflow config: `.github/workflows/playwright.yml`

---

## 📁 Project Structure

```
📦 project-root
├── tests/               # All feature-based test files
│   └── features/
├── utils/               # Data generators, locators, setup
├── .github/workflows/   # GitHub Actions workflow
├── playwright.config.ts # Playwright config
├── package.json         # Project scripts and dependencies
└── tsconfig.json        # TypeScript config
```

---

## 📄 .gitignore

Make sure you ignore the following folders:
```
node_modules/
playwright-report/
test-results/
allure-results/
allure-report/
```

---

## 💬 Feedback

Feel free to open an issue or PR if you find bugs or have suggestions 🙌

