/* eslint-disable no-undef */
const querySelector = (selector) => document.querySelector(selector);

const createElement = (tagName, className, parent) => {
  const element = document.createElement(tagName);
  element.className = className;
  parent.appendChild(element);
  return element;
};

const searchBtn = querySelector('#searchBtn');
const searchInput = querySelector('#searchInput');

const handleNews = (res) => {
  const newsSection = querySelector('.news-section');
  newsSection.textContent = '';
  for (let i = 0; i <= 20; i += 1) {
    const card = createElement('div', 'news-card', newsSection);
    const newsImg = createElement('img', 'news-img', card);
    const { thumbnail } = res.data.children[i].data;
    if (thumbnail === 'self' || thumbnail === 'default' || thumbnail === '') {
      newsImg.src = '../assets/Header.svg';
    } else {
      newsImg.src = thumbnail;
    }
    const details = createElement('div', 'news-details', card);
    const newsCategory = createElement('p', 'news-category', details);
    newsCategory.textContent = res.data.children[i].data.subreddit;
    const newsTitle = createElement('a', 'news-title', details);
    newsTitle.href = res.data.children[i].data.url_overridden_by_dest;
    newsTitle.textContent = res.data.children[i].data.title;
    const newsDesc = createElement('a', 'news-desc', details);
    newsDesc.textContent = res.data.children[i].data.selftext;
  }
};

searchBtn.addEventListener('click', () => {
  if (searchInput.value !== '') {
    fetchData(searchInput)
      .then((response) => response.json())
      .then(handleNews);
  }
});
