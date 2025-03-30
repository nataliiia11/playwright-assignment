import { test, expect } from '@playwright/test';
import { generateUserData } from '../../utils/testData';
import { setupSignUpPrecondition } from '../../utils/setup';
import { getSignUpLocators } from '../../utils/locators/signUpLocators';
import { allure } from 'allure-playwright';

test.beforeEach(async ({ page }) => {
  await setupSignUpPrecondition(page);
});

test('Verify that the country field is clickable and opens and "Sweden" is visible in the opened menu', async ({ page }, testInfo) => {
  testInfo.annotations.push({ type: 'TC', description: 'TC-1.1' });
  testInfo.annotations.push({ type: 'tag', description: 'regression' });
  testInfo.annotations.push({ type: 'feature', description: 'signup' });
  const l = getSignUpLocators(page);

  await test.step('Check that the Country field is visible', async () => {
    await expect(l.countryInput).toBeVisible();
  });

  await test.step('Click on the Country field to open the dropdown', async () => {
    await l.countryInput.click({ force: true });
  });

  await test.step('Verify that "Sweden" appears in the dropdown', async () => {
    await expect(l.swedenOption).toBeVisible();
  });
});

test('Verify that the Sweden can be selected from the dropdown menu', async ({ page }, testInfo) => {
  testInfo.annotations.push({ type: 'TC', description: 'TC-1.2' });
  testInfo.annotations.push({ type: 'tag', description: 'regression' });
  testInfo.annotations.push({ type: 'feature', description: 'signup' });
  const l = getSignUpLocators(page);

  await test.step('Click on the Country field', async () => {
    await l.countryInput.click();
  });

  await test.step('Select "Sweden" from the dropdown', async () => {
    await l.countryInput.fill('Sweden');
    await expect(l.swedenOption).toBeVisible();
    await l.countryInput.press('ArrowDown');
    await l.countryInput.press('Enter');
  });

  await test.step('Verify that "Sweden" is selected', async () => {
    await expect(l.countryInput).toHaveValue('Sweden');
  });
});

test('Verify that the country field could be filled manually', async ({ page }, testInfo) => {
  testInfo.annotations.push({ type: 'TC', description: 'TC-1.4' });
  const l = getSignUpLocators(page);

  await test.step('Ensure the Country field is visible', async () => {
    await expect(l.countryInput).toBeVisible();
  });

  await test.step('Manually type "Sweden" into the Country field', async () => {
    await l.countryInput.fill('');
    await l.countryInput.fill('Sweden');
    await l.countryInput.press('Enter');
  });

  await test.step('Verify that the Country field value is "Sweden"', async () => {
    await expect(l.countryInput).toHaveValue('Sweden');
  });
});

test('Select Sweden, fill other fields with valid data and confirm that the form is sent correctly', async ({ page }, testInfo) => {
  testInfo.annotations.push({ type: 'TC', description: 'TC-1.7' });
  testInfo.annotations.push({ type: 'tag', description: 'regression' });
  testInfo.annotations.push({ type: 'feature', description: 'signup' });
  allure.tag('regression');
  allure.label('feature', 'Signup');
  allure.severity('critical');

  const user = generateUserData();
  const l = getSignUpLocators(page);

  await test.step('Fill in the company name', async () => {
    await l.companyNameInput.fill(user.companyName);
  });

  await test.step('Click on the Country field', async () => {
    await l.countryInput.click();
  });

  await test.step('Select "Sweden" from the dropdown', async () => {
    await l.countryInput.fill('Sweden');
    const swedenOption = l.swedenOption;
    await swedenOption.waitFor({ state: 'visible' });
    await expect(swedenOption).toBeVisible();
    await l.companyNameInput.press('ArrowDown');
    await l.companyNameInput.press('Enter');
  });

  await test.step('Fill in the company name', async () => {
    await l.companyNameInput.fill(user.companyName);
  });

  await test.step('Select "DATEV" in "How did you hear about us?"', async () => {
    await l.referralInput.click();
    await l.referralOption('DATEV').click();
  });

  await test.step('Submit the form', async () => {
    await l.createAccountButton.click();
  });

  await test.step('Verify email confirmation screen is visible', async () => {
    await expect(l.verificationMessage).toBeVisible();
  });
});

