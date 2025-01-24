import { NAVIGATION, NAVIGATION_LIST } from "./dom.js";
import { NAV_DATA } from "/data/navData.js";

function renderNav() {
    if (!NAVIGATION || !NAVIGATION_LIST) return;

    NAV_DATA.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.classList.add("navigation_item");

        const a = document.createElement("a");
        a.textContent = item.name;
        a.href = item.url;
        listItem.appendChild(a);
        NAVIGATION_LIST.appendChild(listItem);
    });
}

renderNav();
