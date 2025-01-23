import {FOOTER, FOOTER_LIST} from "./dom.js";
import {FOOTER_DATA} from "/data/footerData.js";

function renderFooter() {
  if (!FOOTER || !FOOTER_LIST) return;

  FOOTER_DATA.forEach((section) => {
    const sectionDiv = document.createElement("li");
    sectionDiv.classList.add("footer_item");

    const title = document.createElement("h4");
    title.textContent = section.category;
    sectionDiv.appendChild(title);

    if (section.details) {
      section.details.forEach((detail) => {
        const p = document.createElement("p");
        p.textContent = detail;
        sectionDiv.appendChild(p);
      });
    }

    if (section.links) {
      section.links.forEach((link) => {
        const a = document.createElement("a");
        a.textContent = link.name;
        a.href = link.url;
        sectionDiv.appendChild(a);
      });
    }

    FOOTER_LIST.appendChild(sectionDiv);
  });
}

renderFooter();