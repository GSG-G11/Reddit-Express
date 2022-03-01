const querySelector = (selector) => {
  return document.querySelector(selector);
};

const createElement = (tagName, className, parent) => {
  let element = document.createElement(tagName);
  element.className = className;
  parent.appendChild(element);
  return element;
};
const handleNews = () => {
  const newsSection = querySelector('.news-section');
  const card = createElement('div', 'news-card', newsSection);
  const newsImg = createElement('img', 'news-img', card);
  newsImg.src = '../assets/Header.svg';
  const details = createElement('div', 'news-details', card);
  const newsCategory = createElement('p', 'news-category', details);
  newsCategory.textContent = 'Palestine';
  const newsTitle = createElement('a', 'news-title', details);
  newsTitle.textContent =
    'Live from the Israeli Embassy - Solidarity with Paletine protest';
  const newsDesc = createElement('a', 'news-desc', details);
  newsDesc.textContent =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quae delectus maxime, quasi incidunt voluptatum.';
};

handleNews();
