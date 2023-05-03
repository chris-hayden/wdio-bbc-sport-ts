Feature: BBC Sport App - Verify the onboarding search functionality
    I want to verify the BBC Sport App onboarding screens
    search feature function as intended after login.

    Scenario: Log in to BBC Sport App and navigate to second onboarding screen
        Given I log in to the BBC Sport App
        When I tap on all selected sports
        And I tap the 'next' button
        Then I am on the onboarding screen, with search function, for tailoring notifications

    Scenario Outline: Verification that the search box returns the expected results
        When I enter <searchterm> into the search box
        Then I see <title> and <subtitle> in the results

        Examples:
            | searchterm    | title               | subtitle         |
            | newcastle fal | Newcastle Falcons   | Rugby Union Team |
            | short tra     | Short Track Skating | none             |
            | liverp        | Liverpool           | Football Team    |
            | unfindable    | Sorry, there are... | none             |
