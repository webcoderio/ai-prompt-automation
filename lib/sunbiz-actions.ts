import { Page } from '@playwright/test';

export class SunbizActions {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToLLCFiling() {
    await this.page.goto('/llc_file.html');
    await this.page.waitForLoadState('networkidle');
  }

  async startNewFiling() {
    await this.page.getByRole('button', { name: 'Start New Filing' }).click();
    await this.page.waitForLoadState('networkidle');
  }

  async verifyOnFilingPage() {
    await this.page.waitForURL(/.*filing/);
  }
} 