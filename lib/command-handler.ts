import { Page } from '@playwright/test';
import { SunbizActions } from './sunbiz-actions';

export class CommandHandler {
  private actions: SunbizActions;

  constructor(page: Page) {
    this.actions = new SunbizActions(page);
  }

  async ask(command: string) {
    switch (command.toLowerCase()) {
      case 'navigate to sunbiz llc filing page and start new filing':
        await this.actions.navigateToLLCFiling();
        await this.actions.startNewFiling();
        await this.actions.verifyOnFilingPage();
        break;
      // Add more commands here as needed
      default:
        throw new Error(`Unknown command: ${command}`);
    }
  }
} 