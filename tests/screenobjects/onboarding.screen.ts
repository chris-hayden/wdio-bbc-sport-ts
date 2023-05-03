import Shared from './shared.screen.js';
import { ChainablePromiseElement } from 'webdriverio';
import { OnboardingSportList } from '../support/types.js';

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

    public get searchBox() {
        return $('[resource-id="search_box_text"]');
    }

    public get searchResultTitle() {
        return $('[resource-id="search_result_title"]');
    }

    public get searchResultSubtitle() {
        return $('[resource-id="search_result_subtitle"]');
    }

    public get searchResultEmpty() {
        return $('[resource-id="search_results_empty_text"]');
    }

    // Methods

    public async tapAllSelectedSports() {
        if (await this.selectedTopic.isDisplayed()) {
            let selectedSportsLocators: ElementArrayType = await this.allSelectedTopics;
            for (let each of selectedSportsLocators) {
                await this.topicTitle(await each.getText()).click();
            }
        }
    }

    public async tapAddedSports(btnText: string) {
        btnText = btnText.toLowerCase();
        if (btnText.includes('following')) {
            let allFollowing: ElementArrayType = await this.allFollowedTopics;
            for (let each of allFollowing) {
                await (await each).click();
            }
        } else {
            let allUnfollowed: ElementArrayType = await this.allUnFollowedTopics;
            for (let each of allUnfollowed) {
                await (await each).click();
            }
        }
    }

    public async tapButton(button: string) {
        let buttonName: string = (button.replaceAll("'", '') + 'Btn');
        await (await this[`${buttonName}`]).click();
    }

    public async tapNotificationBell(subStatus: string) {
        let subBtn: string = (subStatus.replaceAll("'", '') + 'Notifications');
        let sportNotifications: ElementArrayType = await this[`${subBtn}`];
        for (let each of sportNotifications) {
            let notificationTopic = await each.getAttribute('content-desc');
            if (!notificationTopic.includes('Top Stories')) {
                await each.click();
            }
        }
    }

    public async tapSport(data) {
        let dataTable: Array<OnboardingSportList> = data.hashes();
        for (let each of dataTable) {
            if (!await this.topicTitleSelected(each.Sport).isDisplayed()) {
                await this.topicTitle(each.Sport).click();
            };
        }
    }

    public async verifyOnboardingScreenOne(data) {
        let dataTable: Array<OnboardingSportList> = data.hashes();
        for (let each of dataTable) {
            await expect(await this.topicTitle(each.Sport)).toBeDisplayed();
        }
    }

    public async verifyOnboardingSearchResults(title: string, subtitle: string) {
        if (title.includes('Sorry')) {
            await expect(await this.searchResultEmpty).toBeDisplayed();
        } else if (subtitle === 'none') {
            await expect(await this.searchResultTitle).toHaveTextContaining(title)
            await expect(await this.searchResultSubtitle).not.toBeDisplayed();
        } else {
            await expect(await this.searchResultTitle).toHaveTextContaining(title);
            await expect(await this.searchResultSubtitle).toHaveTextContaining(subtitle);
        }
    }

    public async verifyFollowedSports(data?) {
        if (data) {
            let dataTable: Array<OnboardingSportList> = data.hashes();
            for (let each of dataTable) {
                await expect(await this.followedTopic(each.Sport)).toBeDisplayed();
            }
        } else {
            let followedSports: ElementArrayType = await this.allFollowedTopics;
            expect(followedSports.length).toEqual(0);
        }
    }

    public async verifyNoSportsSelected() {
        let selectedSportsLocators: ElementArrayType = await this.allSelectedTopics;
        expect(selectedSportsLocators.length).toEqual(0);
    }

    public async verifySportNotifications(subStatus: string) {
        let subBtn: string = (subStatus.replaceAll("'", '') + 'Notifications');
        let sportNotifications: ElementArrayType = await this[`${subBtn}`];
        let topicTitles: ElementArrayType = await this.allTopicTitles;
        if (subBtn.includes('unsubscribed')) {
            if (await this.subscribedNotificationBtn('Top Stories').isDisplayed()) {
                expect(sportNotifications.length).toEqual(topicTitles.length - 1);
            } else {
                expect(sportNotifications.length).toEqual(topicTitles.length);
            }
        } else {
            if (await this.subscribedNotificationBtn('Top Stories').isDisplayed()) {
                expect(sportNotifications.length).toEqual(topicTitles.length);
            } else {
                expect(sportNotifications.length).toEqual(topicTitles.length - 1);
            }
        }
    }
}

export default new OnboardingScreen();
