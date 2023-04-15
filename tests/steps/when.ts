import { When } from '@wdio/cucumber-framework';
import SignInScreen from '../screenobjects/signin.screen.js';

When('I tap on the Sign In button', async () => {
    (await SignInScreen.signInBtn).click();
});

When('enter my login credentials', async () => {
    await driver.switchContext('WEBVIEW_chrome');
    /* Todo: install chromedriver to interact with Webview
    expect(await SignInScreen.emailField.isDisplayed());
    expect(await SignInScreen.passwordField.isDisplayed());
    await SignInScreen.emailField.setValue('test@email.com');
    await SignInScreen.passwordField.setValue('password'); */
});
