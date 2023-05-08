import Shared from './shared.screen.js';
import { ChainablePromiseElement } from 'webdriverio';

class AllSportScreen extends Shared {
    
    // Locators
    public get allSportPager() {
        return $('[resource-id="all_sport_view_pager"]');
    }

    public get aToZBtn() {
        return $('[content-desc="A to Z"]');
    }

    public get searchBtn() {
        return $('[content-desc="Search"]');
    }

    // Methods
    public async verifyLoad() {
        await browser.waitUntil(async () => {
            return (await this.allSportPager).isDisplayed();
        }, { timeout: 10000, timeoutMsg: 'All Sport screen did not load within 10 seconds.' });
        await expect(await this.allSport).toHaveAttribute('selected', 'true');
    }

    public async verifyElements() {
        await expect(await this.aToZBtn).toBeDisplayed();
        await expect(await this.searchBtn).toBeDisplayed();
    }

}

export default new AllSportScreen();
