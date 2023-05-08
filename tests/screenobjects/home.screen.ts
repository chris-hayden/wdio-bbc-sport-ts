import Shared from './shared.screen.js';
import Helpers from '../support/helpers.js';
import { ChainablePromiseElement } from 'webdriverio';

class HomeScreen extends Shared {

    // Locators
    public get largePromo() {
        return $('[resource-id="large_promo_container"]');
    }

    public get gridPromo() {
        return $$('[resource-id="grid_promo_container"]');
    }

    // Methods
    public async verifyLoad() {
        await browser.waitUntil(async () => {
            return (await this.largePromo).isDisplayed();
        }, { timeout: 10000, timeoutMsg: 'Home screen did not load within 10 seconds.' });
        await expect(await this.home).toHaveAttribute('selected', 'true');
    }

    public async verifyElements() {
        await expect(await this.gridPromo).toBeElementsArrayOfSize({ gte: 2 });
    }

    public async tapTab(tab: string) {
        tab = Helpers.toCamelCase(tab);
        await (await this[`${tab}`]).click();
    }
}

export default new HomeScreen();
