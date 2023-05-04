import Shared from './shared.screen.js';
import { ChainablePromiseElement } from 'webdriverio';

class HomeScreen extends Shared {

    // Locators
    public get largePromo() {
        return $('[resource-id="large_promo_container"]')
    }
    // Methods
    public async verifyLoad() {
        await browser.waitUntil(async () => {
            return (await this.largePromo).isDisplayed();
        }, { timeout: 10000, timeoutMsg: 'Home screen did not load within 10 seconds.' });
        await expect(await this.bbcLogo).toBeDisplayed();
        await expect(await this.hamburgerMenuOpen).toBeDisplayed();
        await expect(await this.home).toBeDisplayed();
        await expect(await this.mySport).toBeDisplayed();
        await expect(await this.scores).toBeDisplayed();
        await expect(await this.guide).toBeDisplayed();
        await expect(await this.allSport).toBeDisplayed();
    }
}

export default new HomeScreen();
