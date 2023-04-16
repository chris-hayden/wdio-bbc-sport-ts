import { ChainablePromiseElement } from 'webdriverio';

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
        return $('[class="form-message__text"]');
    }

    // Methods

    
}

export default new SignInScreen();
