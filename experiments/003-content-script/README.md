# EX-003 - Content Script

# Q. Can scripts inside an extension execute inside a normal webpage? What can they access?

## Objective
Demonstrate execution of Javascript scripts loaded into the execution onto the normal webpage.

## Structure
```text
003-content-script/
|--manifest.json
|--popup.html
|--popup.js
|--content.js
|--README.md
```

## Procedure
in manifest.json, we explicitly do not allow for any permissions. In action, we follow the structure of the previous 2 experiments and have popup.html show up as the default_popup.

However, a new property is added, called "content_scripts". in it we have an object [{"matches": [URLS], "js":[SCRIPT]}]

For the set of URLS within the matches property, the corresponding SCRIPT is executed.

popup.html has little to do, except function as a placeholder for when the extension is clicked.

popup.js is linked to popup.html and opening its DevTools, we can see its' execution under the Console segment. popup.html and popup.js are currently mostly irrelevant to the Objective of this experiment, however they have been included to maintain consistency in style and structure with the experiments concluded so far.

in content.js, Javascript code is written to log a string, the page's Title and URL. It additionally creates a div and assigns it properties such as position, zIndex, background, font color and family, before appending as a Child to the body element of the page. 


## Observations
- content.js executes independently of popup.html
- content.js can access the webpage DOM for read and write access.
- The script can create and insert DOM elements, with its own independent styling and positioning.
- Existing page CSS manipulation behaves differently across webpages. attempting modification of body's outline did not give expected results across different webpages (such as google.com, youtube.com, chatgpt.com, etc.)

## Results
1. Achieved modification of webpage DOM.
2. Demonstrated script execution via extension, in unpacked mode.

## Interpretation
- Extensions are capable of modifying existing webpages.
This basically functions as a "plugin" for the webpage, allowing the extension to modify elements.

- Content scripts connect webpage and extension functionality.
They access webpage and can perform analysis tasks while other scripts can be developed for other processing requirements.

- Malicious/compromised extensions can modify webpages
However, MV3 is designed to prevent continued access by extensions as well as place checks once extensions are modified, before being loaded on a client's browser.
These security features are not currently apparent due to the use of developer mode and loading extensions unpacked.

## Further Questions
...
