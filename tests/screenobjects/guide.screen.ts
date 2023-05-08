import Shared from './shared.screen.js';
import WebViewScreen from './webview.screen.js';
import { ChainablePromiseElement } from 'webdriverio';

class GuideScreen extends Shared {
    
    // Locators
    public get sportsGuideTitle() {
        return $('//android.view.View[@text="Sport Live Guide"]');
    }

    // Methods
    public async verifyLoad() {
        await WebViewScreen.waitForWebViewIsDisplayedByXpath();
        await WebViewScreen.waitForWebViewContextLoaded();
        await expect(await this.guide).toHaveAttribute('selected', 'true');
    }

    public async verifyElements() {
        await expect(await this.sportsGuideTitle).toBeDisplayed();
    }

}

export default new GuideScreen();
