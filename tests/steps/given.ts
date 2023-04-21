import { Given } from '@wdio/cucumber-framework';
import SignInScreen from '../screenobjects/signin.screen.js';
import WebViewScreen from '../screenobjects/webview.screen.js';

Given('I have launched the BBC Sport App', async () => {
    await browser.waitUntil(async () => {
        return (await SignInScreen.signInTitle).isDisplayed();
    }, { timeout: 10000, timeoutMsg: 'Sign In screen did not load within 10 seconds.' });
    expect(await SignInScreen.signInBtn.isDisplayed());
    expect(await SignInScreen.registerBtn.isDisplayed());
});

Given('I log in to the BBC Sport App', async () => {
    await browser.waitUntil(async () => {
        return (await SignInScreen.signInTitle).isDisplayed();
    }, { timeout: 10000, timeoutMsg: 'Sign In screen did not load within 10 seconds.' });
    await SignInScreen.signInBtn.click();
    await WebViewScreen.waitForWebViewIsDisplayedByXpath();
    await WebViewScreen.switchToContext('webview');
    let credentials = SignInScreen.getEnvEmailPass('VALID_EMAIL', 'VALID_PASSWORD');
    await SignInScreen.emailField.setValue(credentials.email);
    await SignInScreen.passwordField.setValue(credentials.password);
    await SignInScreen.submitBtn.click();
});
