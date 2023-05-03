# BBC Sport WebdriverIO TypeScript Project

This framework has been built to automate UI tests for the BBC Sport App for Android.

It is written in TypeScript and developed with [WebdriverIO](https://webdriver.io/) using [Cucumber](https://cucumber.io/) as the BDD tool driving the tests from feature files.

***

### **Apps**

The app is to be placed in an 'apps' folder created in the root of the directory. The .apk file for the app can be found in various places online. Recently, the developers made it mandatory to have a BBC account and log in, with onboarding screens added to enable the user to follow their favourite sports or teams. There are several feature files dedicated to verifying these screens and their functionality. The version used during the creation of this project is `3.0.1.12553`.

***

### **.env File**

In order to keep log in information for the app secure, the [dotenv](https://www.npmjs.com/package/dotenv) package is included in the project. This package makes use of a `.env` file which should be placed in the root of the repository. This file contains only four lines:
`VALID_EMAIL = `  
`INVALID_EMAIL = `  
`VALID_PASSWORD = `  
`INVALID_PASSWORD = `  
The VALID entries should be your log in credentials, while INVALID entries are used to verify the behaviour of entering incorrect or incorrectly formatted credentials when signing in to the app.

***

### **Setup**

Assumption is that NodeJS (version 14 or higher) is installed on your machine and Appium is installed globally. Additionally, you will need Android Studio and an emulator or a physical Android device connected to run the tests. You can set the device name and Android version in `./configs/android.conf.ts`. Then:

* Clone this repository
* Navigate to the root directory of the repository in the terminal and use the command `npm i --legacy-peer-deps` to install all dependencies. The cucumber-html-reporter requires the extra arguments.
