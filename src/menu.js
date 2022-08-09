import { createDiv, createImage } from "./functions";

const menuPage = () => {
  const menuItem = (imageSource, itemTitle) => {
    const menuItem = createDiv("div", "menu-item", "", "", menu);
    createDiv("h3", "item-title", "", itemTitle, menuItem);
    const image = createImage(imageSource);
    menuItem.appendChild(image);
    return menuItem;
  };

  const mainContent = createDiv("main", "", "", "", "");

  createDiv("h1", "title", "", "Travel With Us", mainContent);
  const menu = createDiv("div", "menu", "", "", mainContent);

  const menucategory1 = createDiv("div", "menu-category", "", "", menu);

  menucategory1.appendChild(menuItem("images/menu/appetizer1.jpg", "Sushi"));
  menucategory1.appendChild(
    menuItem("images/menu/appetizer2.jpg", "Onion-Cheese")
  );
  menucategory1.appendChild(
    menuItem("images/menu/appetizer3.jpg", "Mini-Sandwich")
  );

  const menucategory2 = createDiv("div", "menu-category", "", "", menu);
  menucategory2.appendChild(
    menuItem("images/menu/maindish1.jpg", "Smoked Saumon")
  );
  menucategory2.appendChild(
    menuItem("images/menu/maindish2.jpg", "White Pasta")
  );
  menucategory2.appendChild(
    menuItem("images/menu/maindish3.jpg", "Cheesy Lobster")
  );

  const menucategory3 = createDiv("div", "menu-category", "", "", menu);
  menucategory3.appendChild(menuItem("images/menu/dessert1.jpg", "Diabetes 1"));
  menucategory3.appendChild(menuItem("images/menu/dessert2.jpg", "Diabetes 2"));
  menucategory3.appendChild(menuItem("images/menu/dessert2.jpg", "Diabetes 3"));

  createDiv("h1", "title", "", "And More...", mainContent);
  return mainContent;
};

export default menuPage;
