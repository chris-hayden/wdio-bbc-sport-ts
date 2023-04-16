Feature: Launch the BBC Sport App and verify the Sign In screen
    I want to verify the BBC Sport App loads successfully
    and that the Sign In screen functions as intended.

    Scenario: Launch the BBC Sport App
        Given I have launched the BBC Sport App
        When I tap on the Sign In button

    @SignIn
    Scenario Outline: Verification of BBC Sport App Launch
        And enter my email address as <email> and the password as <password>
        Then I should see <message>

        Examples:
            | email               | password        | message                      |
            | test@testemail.com  | wRoNgPaSsWoRd!  | wrong username or password |
            | test2@testemail.com | wRoNgPaSsWoRd!^ | wrong username or password |
