//Global variables
const addElement = (container, element) => {
  container.appendChild(element);
};

const createLi = (textContent, id) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.textContent = textContent;
  a.id = id;
  addElement(li, a);
  return li;
};

const createImage = (source) => {
  const img = document.createElement("img");
  img.src = source;
  return img;
};

const createDiv = (divType, className, id, textContent, container) => {
  const div = document.createElement(divType);
  className != "" ? div.classList.add(className) : 0;
  id == "" ? 0 : (div.id = id);
  div.textContent = textContent;
  container != "" ? addElement(container, div) : 0;
  return div;
};

const homePage = () => {
  const mainContent = createDiv("main", "", "", "", "");
  //Functions

  const createChoice = (choiceImage, header, paragraph, price) => {
    const choice = createDiv("div", "choice", "", "", choices);
    addElement(choice, choiceImage);

    const choiceDescription = createDiv(
      "div",
      "choice-description",
      "",
      "",
      choice
    );
    createDiv("h4", "", "", header, choiceDescription);
    createDiv("hr", "", "", "", choiceDescription);
    createDiv("p", "", "", paragraph, choiceDescription);
    createDiv("p", "prices", "", price, choiceDescription);

    return choice;
  };

  createDiv("h1", "title", "", "Dar Fadhel", mainContent);

  const homePageMain = createDiv("div", "", "homepage-main", "", mainContent);
  const homePageMainImage = createImage(`images/image-3016877051.jpg`);
  addElement(homePageMain, homePageMainImage);
  const description = `A tight-knit, fun-loving, devoted team of local cooks spreading the
  gospel of good times and good food in Gassrine. We offer limited
  capacity onsite events in our restaurant kitchen space. And worry not,
  our krewe will travel to your destination of choice – from hotel
  ballrooms to private kitchens – to entertain groups of all sizes. We
  cook, we tell stories, we deliver informative culinary demonstrations
  and lectures, but most of all … we treat every event like you’re a
  guest at our dinner table. Join us!`;
  createDiv("h4", "description", "", description, homePageMain);

  createDiv("h1", "title", "", "Explore Our Kitchen", mainContent);

  const choices = createDiv("div", "choices", "", "", mainContent);

  createChoice(
    createImage(`images/32f69957b831df81eab5d34ef6c4e9e4_phpHdt9nr.jpeg`),
    "DAR FADHEL CLASSIC",
    'Tasting menu composed of creations that have become "classics" of the house.',
    "250D"
  );

  createChoice(
    createImage(`images/1399a06919c6e99ba668335b08fa2f68_phpWdMx7t.jpeg`),
    "DAR FADHEL FESTIVAL",
    "Menu composed mainly of elaborations created during the current season.",
    "180D"
  );

  createChoice(
    createImage(`images/94f6e0e7724fb24f6c38e712446a0e4d_phpTf4fIb.jpg`),
    "DAR FADHEL WINE PAIRING",
    "Selection of the most suitable wines to accompany the tasting menus, both Classic and Festival.",
    "100D"
  );

  createChoice(
    createImage(`images/0344dd638cb1d3734eed3b58e0e33e39_php7SdCwl.jpg`),
    "DAR FADHEL ALCOHOL-FREE",
    " For those customers who want to live an experience with a different wine pairing with a very low percentage of alcohol.",
    "50D"
  );

  return mainContent;
};

export default homePage;
export { createDiv, addElement, createImage, createLi };
