import contactPage from "./contact";
import homePage, { createDiv, createLi } from "./homepage";
import menuPage from "./menu";

const createHeader = () => {
  const ul = createDiv("ul", "header", "", "", "");
  ul.appendChild(createLi("Home", "homebutton"));
  ul.appendChild(createLi("Menu", "menubutton"));
  ul.appendChild(createLi("Contact", "contactbutton"));
  return ul;
};

const createFooter = () => {
  const footer = createDiv("footer", "", "", "Realised by Mohamedsayhii", "");
  const githubLink = document.createElement("a");
  githubLink.href = "https://github.com/mohamedsayhii";
  const githubIcon = document.createElement("i");
  githubIcon.classList.add("fab");
  githubIcon.classList.add("fa-github");
  githubLink.appendChild(githubIcon);
  footer.appendChild(githubLink);

  return footer;
};

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

loadWebsite();
