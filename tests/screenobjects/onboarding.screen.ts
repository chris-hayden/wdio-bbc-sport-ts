import Shared from './shared.screen.ts';
import { ChainablePromiseElement } from 'webdriverio';

class OnboardingScreen extends Shared {
        
    // Locators

    public get onboardingTitle () {
        return $('~pick your top sports');
    }
    
    public get onboardingSubTitle () {
        return $('[resource-id="subtitle_onboarding"]');
    }

}

export default new OnboardingScreen();
