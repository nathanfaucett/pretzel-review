import { test, expect } from '@playwright/test';
import path from 'path';

test('homepage and signin redirect behavior', async ({ page }) => {
  // Home should load
  await page.goto('/');
  await expect(page).toHaveTitle(/Pretzel/i);

  // Visiting /new should redirect to signin (server-side redirect expected)
  const resp = await page.goto('/new');
  // Should show Sign in page (server redirect or SSR-rendered signin)
  await expect(page.locator('h1')).toHaveText(/Sign in/i);
});
