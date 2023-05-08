import Shared from './shared.screen.js';
import WebViewScreen from './webview.screen.js';
import { ChainablePromiseElement } from 'webdriverio';

class ScoresScreen extends Shared {
    
    // Locators
    public get selectedScoresNavItem() {
        return $('//android.view.View/following-sibling::android.view.MenuItem');
    }

    public scoresNavItem(item: string) {
        return $(`//android.view.MenuItem[@text="${item}"]`);
    }

    // Methods
    public async verifyLoad() {
        await WebViewScreen.waitForWebViewIsDisplayedByXpath();
        await WebViewScreen.waitForWebViewContextLoaded();
        await expect(await this.scores).toHaveAttribute('selected', 'true');
    }

    public async verifyElements() {
        await expect(await this.selectedScoresNavItem).toHaveTextContaining('Scores & Fixtures');
    }

    public async clickNav(item: string) {
        await (await this.scoresNavItem(item)).click();
    }
}

export default new ScoresScreen();
