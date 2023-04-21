import { Then } from '@wdio/cucumber-framework';
import OnboardingScreen from '../screenobjects/onboarding.screen.js';
import SignInScreen from '../screenobjects/signin.screen.js';
import WebViewScreen from '../screenobjects/webview.screen.js';

Then(/^I should see (.*)$/, async (message: string) => {
    let messageText = message.includes('password') ? await SignInScreen.formMsgText[0] : await SignInScreen.formMsgText[1];
    if (message.includes('results')) {
        await WebViewScreen.waitForFullyLoaded();
        await WebViewScreen.switchToContext('native');
        messageText = await OnboardingScreen.onboardingSubTitle;
    }
    await expect(messageText).toHaveTextContaining(message);
});

Then(/^I am on the onboarding screen, containing the most popular sports$/, async (data) => {
    await WebViewScreen.waitForFullyLoaded();
    await WebViewScreen.switchToContext('native');
    let dataTable: Array<Object> = data.hashes();
    for (let each of dataTable) {
        await expect(await OnboardingScreen.topicTitle(each.Sport)).toBeDisplayed();
    }
});

Then(/^I can see there are no sports selected$/, async () => {
    let selectedSportsLocators: ElementArrayType = await OnboardingScreen.allSelectedTopics;
    expect(selectedSportsLocators.length).toEqual(0);
});
