Feature: BBC Sport App - Verify the home screen
    I want to verify the BBC Sport App home screen
    loads and has the expected elements.

    Scenario: Log in to BBC Sport App and navigate to home screen
        Given I log in to the BBC Sport App
        When I tap on all selected sports
        And I tap the 'next' button
        And I tap the 'done' button
        Then I am on the 'home' screen