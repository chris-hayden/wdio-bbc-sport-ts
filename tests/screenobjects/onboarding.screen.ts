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

    public get nextBtn() {
        return $('[resource-id="next_navigation_button"]');
    }

    public get doneBtn() {
        return $('[resource-id="onboarding_done_button"]');
    }

    public topicTitle(sport: String) {
        return $(`[resource-id="topic_title"][text="${sport}"]`);
    }

    public topicTitleSelected(sport: String) {
        return $(`[content-desc="${sport}, selected"]`);
    }

    public get selectedTopic() {
        return $('//*[contains(@content-desc, ", selected")]');
    }

    public get allSelectedTopics() {
        return $$('//*[contains(@content-desc, ", selected")]');
    }

    public followedTopic(sport: String) {
        return $(`//*[contains(@content-desc, 'Following ${sport}')]`);
    }

    public get allFollowedTopics() {
        return $$('//*[contains(@content-desc, "Following ")]');
    }

    public unFollowedTopic(sport: String) {
        return $(`//*[contains(@content-desc, 'Follow ${sport}')]`);
    }
    
    public get allUnFollowedTopics() {
        return $$('//*[contains(@content-desc, "Follow ")]');
    }

    public subscribedNotificationBtn(sport: String) {
        return $(`~Subscribed to ${sport} notifications`);
    }

    public get subscribedNotifications() {
        return $$('//*[contains(@content-desc, "Subscribed to ")]');
    }

    public subscribeToNotificationBtn(sport: String) {
        return $(`~Subscribe to ${sport} notifications`);
    }

    public get unsubscribedNotifications() {
        return $$('//*[contains(@content-desc, "Subscribe to ")]');
    }

    public get allTopicTitles() {
        return $$('[resource-id="topic_title"]');
    }
}

export default new OnboardingScreen();
