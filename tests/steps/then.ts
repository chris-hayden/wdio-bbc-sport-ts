import { Then } from '@wdio/cucumber-framework';
import { OnboardingSportList } from '../support/types.js';
import OnboardingScreen from '../screenobjects/onboarding.screen.js';
import SignInScreen from '../screenobjects/signin.screen.js';
import WebViewScreen from '../screenobjects/webview.screen.js';

//
// Sign In 
Then(/^I should see (.*)$/, async (message: string) => {
    let messageText = message.includes('password') ? await SignInScreen.formMsgText[0] : await SignInScreen.formMsgText[1];
    if (message.includes('results')) {
        await WebViewScreen.waitForFullyLoaded();
        await WebViewScreen.switchToContext('native');
        messageText = await OnboardingScreen.onboardingSubTitle;
    }
    await expect(messageText).toHaveTextContaining(message);
});

//
// Onboarding 
Then(/^I am on the onboarding screen, containing the most popular sports$/, async (data) => {
    await WebViewScreen.switchToContext('native');
    await browser.waitUntil(async () => {
        return (await OnboardingScreen.onboardingTitle).isDisplayed();
    }, { timeout: 10000, timeoutMsg: 'Onboarding did not load within 10 seconds.' });
    let dataTable: Array<OnboardingSportList> = data.hashes();
    for (let each of dataTable) {
        await expect(await OnboardingScreen.topicTitle(each.Sport)).toBeDisplayed();
    }
});

Then(/^I can see there are no sports selected$/, async () => {
    let selectedSportsLocators: ElementArrayType = await OnboardingScreen.allSelectedTopics;
    expect(selectedSportsLocators.length).toEqual(0);
});

Then(/^I am on the onboarding screen, with search function, for tailoring notifications$/, async () => {
    await expect(await OnboardingScreen.onboardingSubTitle).toHaveTextContaining('Tailor your notifications');
});

Then(/^the sports I had selected are indicated as `Following`$/, async (data) => {
    let dataTable: Array<OnboardingSportList> = data.hashes();
    for (let each of dataTable) {
        await expect(await OnboardingScreen.followedTopic(each.Sport)).toBeDisplayed();
    }
});

Then(/^I can see that no sports are indicated as `Following`$/, async () => {
    let followedSports: ElementArrayType = await OnboardingScreen.allFollowedTopics;
    expect(followedSports.length).toEqual(0);
});

Then(/^I can see that the notifications for all sports are (.*)$/, async (subStatus: string) => {
    let subBtn: string = (subStatus.replaceAll("'", '') + 'Notifications');
    let sportNotifications: ElementArrayType = await OnboardingScreen[`${subBtn}`];
    let topicTitles: ElementArrayType = await OnboardingScreen.allTopicTitles;
    if (subBtn.includes('unsubscribed')) {
        if (await OnboardingScreen.subscribedNotificationBtn('Top Stories').isDisplayed()) {
            expect(sportNotifications.length).toEqual(topicTitles.length - 1);
        } else {
            expect(sportNotifications.length).toEqual(topicTitles.length);
        }
    } else {
        if (await OnboardingScreen.subscribedNotificationBtn('Top Stories').isDisplayed()) {
            expect(sportNotifications.length).toEqual(topicTitles.length);
        } else {
            expect(sportNotifications.length).toEqual(topicTitles.length - 1);
        }
    }
});

Then(/^I see (.*) and (.*) in the results$/, async (title: string, subtitle: string) => {
    if (title.includes('Sorry')) {
        await expect(await OnboardingScreen.searchResultEmpty).toBeDisplayed();
    } else if (subtitle === 'none') {
        await expect(await OnboardingScreen.searchResultTitle).toHaveTextContaining(title)
        await expect(await OnboardingScreen.searchResultSubtitle).not.toBeDisplayed();
    } else {
        await expect(await OnboardingScreen.searchResultTitle).toHaveTextContaining(title);
        await expect(await OnboardingScreen.searchResultSubtitle).toHaveTextContaining(subtitle);
    }
});
