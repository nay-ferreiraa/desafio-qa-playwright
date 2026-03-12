const { test, expect } = require('@playwright/test');

test('Login com sucesso', async ({ page }) => {

  await page.goto('https://www.saucedemo.com');

  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');

  await page.click('[data-test="login-button"]');

  await expect(page).toHaveURL(/inventory/);

});

test('Login inválido', async ({ page }) => {

  await page.goto('https://www.saucedemo.com');

  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'senha_errada');

  await page.click('[data-test="login-button"]');

  await expect(page.locator('[data-test="error"]')).toBeVisible();

});
