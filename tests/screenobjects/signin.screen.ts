import { ChainablePromiseElement } from 'webdriverio';
import { join } from "path";
import WebViewScreen from '../screenobjects/webview.screen.js';
import OnboardingScreen from '../screenobjects/onboarding.screen.js';
import * as dotenv from 'dotenv';
dotenv.config({ path: (join(process.cwd(), '.env')) });

class SignInScreen {

    // Locators

    public get signInTitle() {
        return $('~Build your BBC Sport');
    }

    public get signInBtn() {
        return $('[resource-id="signin_button"]');
    }

    public get registerBtn() {
        return $('[resource-id="register_button"]');
    }

    // Webview elements
    public get emailField() {
        return $('[id="user-identifier-input"]');
    }

    public get passwordField() {
        return $('[id="password-input"]');
    }

    public get submitBtn() {
        return $('[id="submit-button"]');
    }

    public get formMsgText() {
        return $$('[class="form-message__text"]');
    }

    // Methods

    public async tapSignInBtn() {
        await this.signInBtn.click();
    }

    public async logIn(email: string, password: string) {
        let credentials = this.getEnvEmailPass(email, password);
        await this.emailField.setValue(credentials.email);
        await this.passwordField.setValue(credentials.password);
        await this.submitBtn.click();
    }

    public getEnvEmailPass(email: string, password: string) {
        email = process.env[`${email.toUpperCase()}`];
        password = process.env[`${password.toUpperCase()}`];
        return { email, password };
    }

    public async verifySignInMsg(message: string) {
        let messageText = message.includes('password') ? await this.formMsgText[0] : await this.formMsgText[1];
        if (message.includes('results')) {
            await WebViewScreen.waitForFullyLoaded();
            await WebViewScreen.switchToContext('native');
            messageText = await OnboardingScreen.onboardingSubTitle;
        }
        await expect(messageText).toHaveTextContaining(message);
    }
}

export default new SignInScreen();
