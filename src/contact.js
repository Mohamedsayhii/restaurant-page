import { createDiv, createImage } from "./functions";

const contactPage = () => {
  const mainContent = createDiv("main", "contact-main", "", "", "");

  createDiv("h2", "title", "", "Address", mainContent);
  mainContent.appendChild(createImage("images/address.png"));
  createDiv(
    "h2",
    "",
    "",
    "13 rue Frachich Ahom Ahom, Gasserine 1200, Tunisia",
    mainContent
  );
  createDiv("h2", "title", "", "Call us to Reserve!", mainContent);
  createDiv("h3", "", "", "+21694574123", mainContent);

  return mainContent;
};

export default contactPage;
