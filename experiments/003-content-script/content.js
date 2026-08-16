console.log("Chrome2PDF EX-003 content script loaded.");
console.log("Page title:", document.title);
console.log("Page URL:", window.location.href);
document.body.style.outline = "5px solid red";

const banner = document.createElement("div");
banner.textContent = "Chrome2PDF EX-003: Content Script Active";
banner.style.position = "fixed";
banner.style.bottom = "10px";
banner.style.right = "10px";
banner.style.zIndex = "999999";
banner.style.padding = "10px";
banner.style.background = "red";
banner.style.color = "white";
banner.style.fontFamily = "Arial, sans-serif";

document.body.appendChild(banner);