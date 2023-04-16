import { When } from '@wdio/cucumber-framework';
import SignInScreen from '../screenobjects/signin.screen.ts';
import WebViewScreen from '../screenobjects/webview.screen.ts';

When(/^I tap on the Sign In button$/, async () => {
    await SignInScreen.signInBtn.click();
    await WebViewScreen.waitForWebViewIsDisplayedByXpath();
    await WebViewScreen.switchToContext('webview');
});

When(/^enter my email address as (.*) and the password as (.*)$/, async (email:string, password:string) => {
    await SignInScreen.emailField.setValue(email);
    await SignInScreen.passwordField.setValue(password);
    await SignInScreen.submitBtn.click();
});
