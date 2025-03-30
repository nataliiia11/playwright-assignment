import { Page } from '@playwright/test';
import { generateUserData } from './testData';
import { SIGN_UP_URL } from './constants';
import { getSignUpLocators } from './locators/signUpLocators';

export async function setupSignUpPrecondition(page: Page) {
  const user = generateUserData();
  const l = getSignUpLocators(page);

  await page.goto(SIGN_UP_URL);
  await page.getByRole('button', { name: 'Accept All' }).click();

  await l.emailInput.fill(user.email);
  await l.passwordInput.fill(user.password);
  await l.termsCheckboxIcon.click({ force: true });
  await l.tryForFreeButton.click();

  await l.firstNameInput.fill(user.firstName);
  await l.lastNameInput.fill(user.lastName);
  await l.nextStepButton.click();

  return user;
}
