import { ChainablePromiseElement } from 'webdriverio';
import { join } from "path";
import * as dotenv from 'dotenv';
dotenv.config({ path: (join(process.cwd(), '.env')) });

class SignInScreen {
    
    // Locators

    public get signInTitle () {
        return $('~Build your BBC Sport');
    }

    public get signInBtn () {
        return $('[resource-id="signin_button"]');
    }

    public get registerBtn () {
        return $('[resource-id="register_button"]');
    }

    // Webview elements
    public get emailField () {
        return $('[id="user-identifier-input"]');
    }

    public get passwordField () {
        return $('[id="password-input"]');
    }

    public get submitBtn () {
        return $('[id="submit-button"]');
    }

    public get formMsgText () {
        return $$('[class="form-message__text"]');
    }

    // Methods

    public getEnvEmailPass(email, password) {
        email = process.env[`${email.toUpperCase()}`];
        password = process.env[`${password.toUpperCase()}`];
        return { email, password };
    }
}

export default new SignInScreen();
