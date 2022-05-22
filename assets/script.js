const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');

// TODO: refactor the fetch
setInterval(() => {
  const randomNum = Math.floor(Math.random() * 101);
  fetch('https://type.fit/api/quotes')
    .then(response => response.json())
    .then(response => {
      console.log(response[randomNum]);
      quoteElement.innerText = response[randomNum].text;
      authorElement.innerText = response[randomNum].author;
    });
}, 2500);
