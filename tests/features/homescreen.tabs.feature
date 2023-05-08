Feature: BBC Sport App - Verify the home screen and content tabs
    I want to verify the BBC Sport App home screen
    loads and has the expected elements, and that each
    navigation tab loads the correct content screen and
    that each screen loads the expected elements.

    Scenario: Log in to BBC Sport App and navigate to home screen
        Given I log in to the BBC Sport App
        When I tap on all selected sports
        And I tap the 'next' button
        And I tap the 'done' button
        Then I am on the 'home' screen

    Scenario Outline: Verification content tabs load the correct screens and elements
        When I tap on the <tab> tab
        Then I am on the <tab> screen

        Examples:
            | tab       |
            | My Sport  |
            | Scores    |
            | Guide     |
            | All Sport |
