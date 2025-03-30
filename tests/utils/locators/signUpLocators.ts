import { Page } from '@playwright/test';

export function getSignUpLocators(page: Page) {
  return {
    emailInput: page.locator('input[name="email"]'),
    passwordInput: page.locator('input[name="password"]'),
    termsCheckboxIcon: page.locator('label:has-text("I agree to the") div[class*="sc-94818dec-1"]'),
    tryForFreeButton: page.getByRole('button', { name: 'Try for free' }),
    firstNameInput: page.locator('input[name="firstname"]'),
    lastNameInput: page.locator('input[name="lastname"]'),
    nextStepButton: page.getByRole('button', { name: 'Next step' }),
    countryInput: page.locator('input[name="country"]'),
    companyNameInput: page.locator('input[name="organizationName"]'),
    referralInput: page.locator('input[name="hdyhau"]'),
    referralOption: (name: string) => page.getByRole('menuitemradio', { name }),
    swedenOption: page.getByRole('option', { name: 'Sweden' }),
    createAccountButton: page.getByRole('button', { name: 'Create an account' }),
    verificationMessage: page.locator('text=Great! Now please verify your email'),
  };
}
