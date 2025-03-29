import { faker } from '@faker-js/faker';

function generatePassword(): string {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const digits = '0123456789';
  const allChars = letters + digits;

  let password = '';
  password += letters[Math.floor(Math.random() * letters.length)];
  password += digits[Math.floor(Math.random() * digits.length)];
  for (let i = 2; i < 12; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  return password.split('').sort(() => Math.random() - 0.5).join('');
}

export function generateUserData() {
  return {
    email: `user${Date.now()}@${"hello.com"}`,
    password: generatePassword(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    companyName: faker.company.name(),
  };
}