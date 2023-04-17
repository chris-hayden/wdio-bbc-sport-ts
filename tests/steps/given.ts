import { Given } from '@wdio/cucumber-framework';
import SignInScreen from '../screenobjects/signin.screen.js';

Given('I have launched the BBC Sport App', async () => {
    await browser.waitUntil(async () => {
        return (await SignInScreen.signInTitle).isDisplayed();
    }, { timeout: 10000, timeoutMsg: 'Sign In screen did not load within 10 seconds.' });
    expect(await SignInScreen.signInBtn.isDisplayed());
    expect(await SignInScreen.registerBtn.isDisplayed());
});
