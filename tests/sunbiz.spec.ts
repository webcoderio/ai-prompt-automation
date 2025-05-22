import { test } from '@playwright/test';
import { CommandHandler } from '../lib/command-handler';

test('Sunbiz LLC filing process', async ({ page }) => {
  const commandHandler = new CommandHandler(page);
  await commandHandler.ask('Navigate to Sunbiz LLC filing page and start new filing');
}); 