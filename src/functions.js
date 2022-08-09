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

export {
  createDiv,
  addElement,
  createImage,
  createLi,
  createHeader,
  createFooter,
};
