import { ChainablePromiseElement } from 'webdriverio';

class SignInScreen {
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
        return $('[resource-id="user-identifier-input"]');
    }

    public get passwordField () {
        return $('[resource-id="password-input"]');
    }
}

export default new SignInScreen();
