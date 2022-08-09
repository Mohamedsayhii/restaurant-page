import contactPage from "./contact";
import { createFooter, createHeader } from "./functions";
import homePage from "./homepage";
import menuPage from "./menu";

const loadWebsite = () => {
  const content = document.querySelector(".content");
  content.appendChild(createHeader());
  content.appendChild(homePage());
  content.appendChild(createFooter());
  const menuButton = document.querySelector("#menubutton");
  menuButton.addEventListener("click", () => {
    content.replaceChild(menuPage(), content.childNodes[1]);
  });

  const homeButton = document.querySelector("#homebutton");
  homeButton.addEventListener("click", () => {
    content.replaceChild(homePage(), content.childNodes[1]);
  });

  const contactButton = document.querySelector("#contactbutton");
  contactButton.addEventListener("click", () => {
    content.replaceChild(contactPage(), content.childNodes[1]);
  });
};

export default loadWebsite;
