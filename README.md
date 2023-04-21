# BBC Sport WebdriverIO TypeScript Project

This framework has been built to automate UI tests for the BBC Sport Apps for Android.

It is written in TypeScript and developed with [WebdriverIO](https://webdriver.io/) using [Cucumber](https://cucumber.io/) as the BDD tool driving the tests from feature files.

***

### **Apps**

The app is to be placed in an 'apps' folder in the root of the directory.

***

### **Setup**

Assumption is that NodeJS (version 14 or higher) is installed on your machine and Appium is installed globally. Additionally, you will Android Studio and an emulator OR a physical Android device connected to run the tests. Then:

* Clone this repository
* Navigate to the root directory of the repository in the terminal and use the command `npm i --legacy-peer-deps` to install all dependencies. The cucumber-html-reporter requires the extra arguments.
