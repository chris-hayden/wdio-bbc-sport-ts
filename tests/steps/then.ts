import { DataTable, Then } from '@wdio/cucumber-framework';
import { OnboardingSportList } from '../support/types.js';
import OnboardingScreen from '../screenobjects/onboarding.screen.js';
import SignInScreen from '../screenobjects/signin.screen.js';
import WebViewScreen from '../screenobjects/webview.screen.js';
import HomeScreen from '../screenobjects/home.screen.js';
import MySportScreen from '../screenobjects/mysport.screen.js';
import ScoresScreen from '../screenobjects/scores.screen.js';
import GuideScreen from '../screenobjects/guide.screen.js';
import AllSportScreen from '../screenobjects/allsport.screen.js';

//
// Sign In 
Then(/^I should see (.*)$/, async (message: string) => {
    await SignInScreen.verifySignInMsg(message);
});

//
// Onboarding 
Then(/^I am on the onboarding screen, containing the most popular sports$/, async (data: DataTable) => {
    await WebViewScreen.switchToContext('native');
    await browser.waitUntil(async () => {
        return (await OnboardingScreen.onboardingTitle).isDisplayed();
    }, { timeout: 10000, timeoutMsg: 'Onboarding did not load within 10 seconds.' });
    await OnboardingScreen.verifyOnboardingScreenOne(data);
});

Then(/^I can see there are no sports selected$/, async () => {
    await OnboardingScreen.verifyNoSportsSelected();
});

Then(/^I am on the onboarding screen, with search function, for tailoring notifications$/, async () => {
    await expect(await OnboardingScreen.onboardingSubTitle).toHaveTextContaining('Tailor your notifications');
});

Then(/^the sports I had selected are indicated as `Following`$/, async (data: DataTable) => {
    await OnboardingScreen.verifyFollowedSports(data);
});

Then(/^I can see that no sports are indicated as `Following`$/, async () => {
    await OnboardingScreen.verifyFollowedSports();
});

Then(/^I can see that the notifications for all sports are (.*)$/, async (subStatus: string) => {
    await OnboardingScreen.verifySportNotifications(subStatus);
});

Then(/^I see (.*) and (.*) in the results$/, async (title: string, subtitle: string) => {
    await OnboardingScreen.verifyOnboardingSearchResults(title, subtitle);
});

//
// Shared / reusable
Then(/^I am on the (.*) screen$/, async (screen: string) => {
    screen = screen.toLowerCase();
    switch (screen) {
        case 'home':
            await HomeScreen.verifyLoad();
            await HomeScreen.verifyElements();
            break;
        case 'my sport':
            await MySportScreen.verifyLoad();
            await MySportScreen.verifyElements();
            break;
        case 'scores':
            await ScoresScreen.verifyLoad();
            await ScoresScreen.verifyElements();
            break;
        case 'guide':
            await GuideScreen.verifyLoad();
            await GuideScreen.verifyElements();
            break;
        case 'all sport':
            await AllSportScreen.verifyLoad();
            await AllSportScreen.verifyElements();
            break;
        default:
            break;
    }
});
