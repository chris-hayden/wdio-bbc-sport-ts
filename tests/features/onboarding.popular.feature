Feature: BBC Sport App - Verify the onboarding screens
    I want to verify the BBC Sport App onboarding screens
    function as intended after login.

    Scenario: Verify onboarding screen allows choosing from popular sports
        Given I log in to the BBC Sport App
        Then I am on the onboarding screen, containing the most popular sports
            | Sport             |
            | Football          |
            | Cricket           |
            | Formula 1         |
            | Rugby Union       |
            | Rugby League      |
            | Tennis            |
            | Boxing            |
            | Golf              |
            | Athletics         |
            | American Football |
            | Cycling           |
            | MMA               |
        When I tap on a sport, it is shown as selected
            | Sport    |
            | Football |
            | Golf     |
            | Tennis   |
            | Boxing   |
        And I tap on all selected sports
        Then I can see there are no sports selected
