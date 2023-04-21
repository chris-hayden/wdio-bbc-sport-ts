import { When } from '@wdio/cucumber-framework';
import { SportList } from '../support/types.js';
import OnboardingScreen from '../screenobjects/onboarding.screen.js';
import SignInScreen from '../screenobjects/signin.screen.js';
import WebViewScreen from '../screenobjects/webview.screen.js';

When(/^I tap on the Sign In button$/, async () => {
    await SignInScreen.signInBtn.click();
    await WebViewScreen.waitForWebViewIsDisplayedByXpath();
    await WebViewScreen.switchToContext('webview');
});

When(/^enter my email address as (.*) and the password as (.*)$/, async (email:string, password:string) => {
    let credentials = SignInScreen.getEnvEmailPass(email, password);
    await SignInScreen.emailField.setValue(credentials.email);
    await SignInScreen.passwordField.setValue(credentials.password);
    await SignInScreen.submitBtn.click();
});

When(/^I tap on a sport, it is shown as selected$/, async (data) => {
    let dataTable: Array<SportList> = data.hashes();
    for (let each of dataTable) {
        if (!await OnboardingScreen.topicTitleSelected(each.Sport).isDisplayed()) {
            await OnboardingScreen.topicTitle(each.Sport).click();
        };
    }
});

When(/^I tap on all selected sports$/, async () => {
    let selectedSportsLocators: ElementArrayType = await OnboardingScreen.allSelectedTopics;
    for (let each of selectedSportsLocators) {
        console.log(typeof(each));
        await OnboardingScreen.topicTitle(await each.getText()).click();
    }
});
