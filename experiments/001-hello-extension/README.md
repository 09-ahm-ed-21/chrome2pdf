# EX-001 - Hello Chrome

# Q. How does Chrome load and execute Mv3 Extension?

## Objective
Demonstrate a functioning Chrome extension loaded locally in Developer Mode of Browser [Brave/Chrome]

## Structure 
```text
001-hello-extension/
--manifest.json
--popup.html
--popup.js
--README.md
```

## Observations 
- Chrome uses unpacked extensions to load extensions under development.
- manifest.json defines the metadata for the extension.
- The "action" property creates the toolbar interaction [what happens when extension icon is clicked]
- default_popup property opens popup.html
- popup.html executes the popup.js script
- popup has it's own DOM and JavaScript execution context
- popup is Inspect-able using Chrome DevTools

## Results
1. Extension created according to Mv3.
2. Extension loaded and accessible in browser.
3. Extension behaviour according to programmed features.

### Further Questions
- Where does the extension itself execute?
- What APIs can the popup extension access?
- Can the popup access the current webpage? How?
- What happens when the popup is closed?
- How does the extension communicate with the webpage?

***

|[Ahmed Hakeem 2026 🄯](https://ahmedhakeem.in/)|
|:---:|