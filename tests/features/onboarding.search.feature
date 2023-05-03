Feature: BBC Sport App - Verify the onboarding screens
    I want to verify the BBC Sport App onboarding screens
    function as intended after login.

    Scenario: Verify intial onboarding screen chosen sports are retained on the second onboarding screen
        Given I log in to the BBC Sport App
        When I tap on all selected sports
        And I tap on a sport, it is shown as selected
            | Sport    |
            | Football |
            | Golf     |
        And I tap the 'next' button
        Then I am on the onboarding screen, with search function, for tailoring notifications
        And the sports I had selected are indicated as `Following`
            | Sport    |
            | Football |
            | Golf     |

    Scenario Outline: Verify sports can be Followed or Unfollowed on the second onboarding screen
        When I tap 'Following' on all user added sports
        Then I can see that no sports are indicated as `Following`
        When I tap 'Follow' on all user added sports
        Then the sports I had selected are indicated as `Following`
            | Sport    |
            | Football |
            | Golf     |

    Scenario Outline: Verify the notifications button functions as expected on the second onboarding screen
        When I tap the notification bell icon for all 'subscribed' sports
        Then I can see that the notifications for all sports are 'unsubscribed'
        When I tap the notification bell icon for all 'unsubscribed' sports
        Then I can see that the notifications for all sports are 'subscribed'
