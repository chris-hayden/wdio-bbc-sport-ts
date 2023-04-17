import { Then } from '@wdio/cucumber-framework';
import onboardingScreen from '../screenobjects/onboarding.screen.ts';
import SignInScreen from '../screenobjects/signin.screen.ts';
import WebViewScreen from '../screenobjects/webview.screen.ts';

Then(/^I should see (.*)$/, async (message: string) => {
    let messageText = message.includes('password') ? await SignInScreen.formMsgText[0] : await SignInScreen.formMsgText[1];
    if (message.includes('results')) {
        await WebViewScreen.waitForFullyLoaded();
        await WebViewScreen.switchToContext('native');
        messageText = await onboardingScreen.onboardingSubTitle;
    }
    await expect(messageText).toHaveTextContaining(message);
});
