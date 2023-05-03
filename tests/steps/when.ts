import { DataTable, When } from '@wdio/cucumber-framework';
import OnboardingScreen from '../screenobjects/onboarding.screen.js';
import SignInScreen from '../screenobjects/signin.screen.js';
import WebViewScreen from '../screenobjects/webview.screen.js';

//
// Sign In 
When(/^I tap on the Sign In button$/, async () => {
    await SignInScreen.tapSignInBtn();
    await WebViewScreen.waitForWebViewIsDisplayedByXpath();
    await WebViewScreen.switchToContext('webview');
});

When(/^enter my email address as (.*) and the password as (.*)$/, async (email:string, password:string) => {
    await SignInScreen.logIn(email, password);
});

//
// Onboarding
When(/^I tap on a sport, it is shown as selected$/, async (data: DataTable) => {
    await OnboardingScreen.tapSport(data);
});

When(/^I tap on all selected sports$/, async () => {
    await OnboardingScreen.tapAllSelectedSports();
});

When(/^I tap the (.*) button$/, async (button: string) => {
    await OnboardingScreen.tapButton(button);
});

When(/^I tap (.*) on all user added sports$/, async (btnText: string) => {
    await OnboardingScreen.tapAddedSports(btnText);
});

When(/^I tap the notification bell icon for all (.*) sports$/, async (subStatus: string) => {
    await OnboardingScreen.tapNotificationBell(subStatus);
});

When(/^I enter (.*) into the search box$/, async (searchTerm: string | number) => {
    await OnboardingScreen.searchBox.setValue(searchTerm);
});
