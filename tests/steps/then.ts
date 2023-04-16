import { Then } from '@wdio/cucumber-framework';
import SignInScreen from '../screenobjects/signin.screen.ts';

Then(/^I should see (.*)$/, async (message: string) => {
    let formText: string = await (await SignInScreen.formMsgText).getText();
    expect(formText).toHaveTextContaining(message);
});
