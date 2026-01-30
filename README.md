STEP 1: Prerequisite Installation - Node.js.

1.1 Determine whether or not Node.js is present.

Open Command Prompt

    Windows keypress -cmdpressEnter.
Type:

bash
node -v

In case it is installed as version (v18 / v20)- Node.js - proceed to Step 2.
In case you make a mistake - proceed to Step 1.2.

1.2 Install Node.js (LTS)

Go to: https://nodejs.org
Click LTS (Recommended)
   [?][?] Do NOT click "Current"
Download the .msi file
Double-click and install

    Click Next - Next - Finish
    Keep all default settings

1.3 Verify Node.js and npm

Close Command Prompt
Open it again
Type:

bash
node -v
npm -v

 In case both version numbers - Node.js and npm are up to date.

STEP 2: Open Project Folder

Open VS Code or Command Prompt
Browse to your Playwright project folder:

bash
cd path/to/your/project

[?][?] This is a directory which should include package.json.

STEP 3: Add Dependencies to the Project.

Install the necessary dependencies:

bash
npm install

Install Playwright browsers:

bash
npx playwright install

 Installation of dependencies and browsers has been complete.

STEP 4: Run Playwright Tests

4.1 Run all tests

bash
npx playwright test

 Runs all .spec.js files
 Results shown in terminal

4.2 Enter a special test file (not mandatory)

bash
npx playwright test tests/example.spec.js

STEP 5: View Test Report

After tests finish:

bash
npx playwright show-report

 Opens a browser report that is in HTML format.
Passed test cases / failed test cases.
