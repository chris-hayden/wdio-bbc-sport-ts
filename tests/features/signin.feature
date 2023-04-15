Feature: Launch the BBC Sport App in an Emulator
    I want to verify the BBC Sport App loads successfully in an Android Emulator
    and that the Sign In screen functions as intended.

    @SignIn
    Scenario Outline: Verification of BBC Sport App Launch
        Given I have launched the BBC Sport App
        When I tap on the Sign In button
        And enter my login credentials
