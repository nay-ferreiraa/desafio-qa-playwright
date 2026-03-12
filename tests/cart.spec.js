const { test, expect } = require('@playwright/test');

test('Adicionar produto ao carrinho', async ({ page }) => {

  await page.goto('https://www.saucedemo.com');

  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');

  await page.click('[data-test="login-button"]');

  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');

  await page.click('[data-test="shopping-cart-link"]');

  await expect(page.locator('.inventory_item_name')).toContainText('Sauce Labs Backpack');

});
