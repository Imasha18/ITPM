# ITPM
Assignment 1
Install requirements (beginner mode) 

We will do ONLY this part now:
 Install Node.js
 Check node and npm

Nothing else yet.

 WHAT IS NODE.JS? (Very short, no theory)

Playwright depends on node.js.

The Node.js is also installed with npm through which Playwright is installed.

Assessment of Node.js - assignment cannot be done in the case of their absence.
Step1: Launch Terminal / Command Prompt.

Open VS Code terminal/system terminal.
Ensure you are in your project folder:

bash
cd path/to/your/project

Step 2: Install Dependencies

Ensure that your project contains a package.json (Playwright needs this).
To install all the necessary packages, Run the following command:

bash
npm install

This installs Playwright and any other dependencies that your project requires.

Install the browsers Chromium, Firefox, WebKit used by Playwright:

bash
npx playwright install

 All the dependencies and browsers were installed now.

Step 3: Run All Tests

You would run all Playwright tests in your project by typing:

bash
npx playwright test

 This shall run all test scripts in the tests folder (or wherever your .spec.js files are).
 Results will be seen in the terminal.

Step 4: Run a Specific Test File

To run one test file type:

bash
npx playwright test tests/example.spec.js.

substitute example.spec.js with test file name.

Step 5: View Test Reports

A detailed HTML report can be displayed by Playwright after running tests:

bash
npx playwright show-report

 This will give us a browser with a graphical report on which tests were passed and which ones failed.

Step 6: Optional Commands

 In order to execute tests in headed mode (to see the browser):

bash
npx playwright test --headed

 To run tests with debugging*:

bash
npx playwright test --debug
 

