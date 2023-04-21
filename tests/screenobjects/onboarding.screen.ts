import Shared from './shared.screen.js';
import { ChainablePromiseElement } from 'webdriverio';

class OnboardingScreen extends Shared {

    // Locators

    public get onboardingTitle() {
        return $('~pick your top sports');
    }

    public get onboardingSubTitle() {
        return $('[resource-id="subtitle_onboarding"]');
    }

    public topicTitle(sport: String) {
        return $(`[resource-id="topic_title"][text="${sport}"]`);
    }

    public topicTitleSelected(sport: String) {
        return $(`[content-desc="${sport}, selected"]`);
    }

    public get allSelectedTopics() {
        return $$('//*[contains(@content-desc, ", selected")]');
    }

}

export default new OnboardingScreen();
