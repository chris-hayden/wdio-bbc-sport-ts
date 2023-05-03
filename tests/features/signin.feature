Feature: BBC Sport App - Verify the sign in screen
    I want to verify the BBC Sport App loads successfully
    and that the Sign In screen functions as intended.

    Scenario: Launch the BBC Sport App
        Given I have launched the BBC Sport App
        When I tap on the Sign In button

    @SignIn
    Scenario Outline: Verification of BBC Sport App sign in screen functionality
        And enter my email address as <email> and the password as <password>
        Then I should see <message>

        Examples:
            | email         | password         | message                           |
            | invalid_email | valid_password   | Usernames can only include...     |
            | valid_email   | invalid_password | Sorry, that password isn't valid. |
            | valid_email   | valid_password   | Get the news, reports and results |
