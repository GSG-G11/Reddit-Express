/* eslint-disable no-unused-vars */
const fetchData = (data) => {
  const request = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ value: data.value }),
  };
  return fetch('/search', request);
};
