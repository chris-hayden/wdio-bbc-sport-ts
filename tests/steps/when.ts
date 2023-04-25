import { When } from '@wdio/cucumber-framework';
import { OnboardingSportList } from '../support/types.js';
import OnboardingScreen from '../screenobjects/onboarding.screen.js';
import SignInScreen from '../screenobjects/signin.screen.js';
import WebViewScreen from '../screenobjects/webview.screen.js';

//
// Sign In 
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

//
// Onboarding
When(/^I tap on a sport, it is shown as selected$/, async (data) => {
    let dataTable: Array<OnboardingSportList> = data.hashes();
    for (let each of dataTable) {
        if (!await OnboardingScreen.topicTitleSelected(each.Sport).isDisplayed()) {
            await OnboardingScreen.topicTitle(each.Sport).click();
        };
    }
});

When(/^I tap on all selected sports$/, async () => {
    if (await OnboardingScreen.selectedTopic.isDisplayed()) {
        let selectedSportsLocators: ElementArrayType = await OnboardingScreen.allSelectedTopics;
        for (let each of selectedSportsLocators) {
            await OnboardingScreen.topicTitle(await each.getText()).click();
        }
    }
});

When(/^I tap the (.*) button$/, async (button: String) => {
    let buttonName: String = (button.replaceAll("'", '') + 'Btn');
    await (await OnboardingScreen[`${buttonName}`]).click();
});

When(/^I tap (.*) on all user added sports$/, async (btnText: String) => {
    btnText = btnText.toLowerCase();
    if (btnText.includes('following')) {
        let allFollowing:ElementArrayType = await OnboardingScreen.allFollowedTopics;
        for (let each of allFollowing) {
            await (await each).click();
        }
    } else {
        let allUnfollowed:ElementArrayType = await OnboardingScreen.allUnFollowedTopics;
        for (let each of allUnfollowed) {
            await (await each).click();
        }
    }
});
