# EX-002 - Current Tab

# Q. What does an extension know about the currently active browser tab and how?

## Objective
Demonstrate an extension with access to the currently active browser tab

## Structure
```text
002-current-tab
|--manifest.json
|--popup.html
|--popup.js
```

## Procedure
1. Create an extension folder with the requisite files
2. in the manifest, add permissions property and pass tabs in it.
3. in the popup.html file, structure the body with h1 and a pre tag, link with popup.js
4. popup.js handles acquiring and reading of currently active browser tab.

## Observations
- Clicking on extension opens the popup panel containing header and tab details.
- Tab properties are shown such as active, index, pinned, selected, status, title, id, url, etc.
- Different windows can have the same extension open at the same time, however the same window can not have the extension open on multiple tabs.
- using loop and removing condition active:true, we can obtain all tabs from current window.
- By passing an empty {} in chrome.tabs.query, we are able to obtain all tabs, from all windows.
- By passing {currentWindow: true}, we obtain all tabs from the current window.
- By passing {active: true, currentWindow: true}, we obtain the currently focused tab from the current window. 

## Results
1. Retrieved information related to browser tabs into extension.
2. Displayed information to extension user.

## Further Questions
Can this data be sent away from the user, towards a different end-point?

***

|[Ahmed Hakeem 2026 🄯](https://ahmedhakeem.in/)|
|:---:|