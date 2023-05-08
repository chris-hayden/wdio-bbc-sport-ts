import Shared from './shared.screen.js';
import { ChainablePromiseElement } from 'webdriverio';

class MySportScreen extends Shared {
    
    // Locators
    public get mySportTitle() {
        return $('[resource-id="title"]');
    }

    public get mySportSubTitle() {
        return $('[resource-id="subtitle"]');
    }

    public get getStartedBtn() {
        return $('[resource-id="get_started_button"]');
    }

    public get mySportInfo() {
        return $('[resource-id="my_sport_info"]');
    }

    // Methods
    public async verifyLoad() {
        // If no sports are followed
        try {
            await browser.waitUntil(async () => {
                return (await this.mySportTitle).isDisplayed();
            }, { timeout: 10000, timeoutMsg: 'My Sport screen did not load within 10 seconds.' });
            await expect(await this.mySportTitle).toHaveText('Follow the sports and teams you love');
        }
        // If any sports are followed
        catch (e) {
            console.log(e);
        }
    }

    public async verifyElements() {
        // If no sports are followed
        try {
            await expect(await this.mySportSubTitle).toHaveText('Create your own personal BBC Sport page');
            await expect(await this.getStartedBtn).toBeDisplayed();
            await expect(await this.mySportInfo).toHaveText('What is My Sport?');
        }
        // If any sports are followed
        catch (e) {
            console.log(e);
        }
        await expect(await this.mySport).toHaveAttribute('selected', 'true');
    }
}

export default new MySportScreen();
