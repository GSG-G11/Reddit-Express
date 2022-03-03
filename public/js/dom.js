/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
const querySelector = (selector) => document.querySelector(selector);

const createElement = (tagName, className, parent) => {
  const element = document.createElement(tagName);
  element.className = className;
  parent.appendChild(element);
  return element;
};
const searchBtn = querySelector('#searchBtn');
const searchInput = querySelector('#searchInput');
const notFound = querySelector('.notfound-img');
const newsSection = querySelector('.news-section');

searchBtn.addEventListener('click', () => {
  if (searchInput.value !== '') {
    fetchData(searchInput)
      .then((response) => response.json())
      .then(handleNews);
  } else{
    newsSection.textContent = '';
    const aNotFou = document.createElement('p');
    aNotFou.classList.add('notFound');
    aNotFou.textContent = "Please enter a valid input";
    newsSection.appendChild(aNotFou);
    notFound.style.display = 'block';
  }
});

const handleNews = (res) => {
  newsSection.textContent = '';
  if (res.error === 404) {
    newsSection.textContent = '';
    const aNotFou = document.createElement('p');
    aNotFou.classList.add('notFound');
    aNotFou.textContent = "Sorry, we didn't find any Subs!";
    newsSection.appendChild(aNotFou);
    notFound.style.display = 'block';
  }else if( res.data.children.length === 0){
    console.log(res);
    newsSection.textContent = '';
    const aNotFou = document.createElement('p');
    aNotFou.classList.add('notFound');
    aNotFou.textContent = "Sorry, we didn't find any Posts!";
    newsSection.appendChild(aNotFou);
    notFound.style.display = 'block';
  }
  else {
    for (let i = 0; i < res.data.children.length; i += 1) {
      const card = createElement('div', 'news-card', newsSection);
      const newsImg = createElement('img', 'news-img', card);
      const len = res.data.children[i];
      const { thumbnail } = len.data;
      if (
        thumbnail === 'self' ||
        thumbnail === 'default' ||
        thumbnail === '' ||
        thumbnail === undefined
      ) {
        newsImg.src = '../assets/Header.svg';
      } else {
        newsImg.src = thumbnail;
      }
      const details = createElement('div', 'news-details', card);
      const newsCategory = createElement('p', 'news-category', details);
      newsCategory.textContent = len.data.subreddit;
      const newsTitle = createElement('a', 'news-title', details);
      newsTitle.href = len.data.url_overridden_by_dest;
      newsTitle.textContent = len.data.title;
      const newsDesc = createElement('a', 'news-desc', details);
      newsDesc.textContent = len.data.selftext;
    }
  }
};
searchInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    searchBtn.click();
  }})