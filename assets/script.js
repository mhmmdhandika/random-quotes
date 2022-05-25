const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const quoteAPI = async () => {
  const response = await fetch('https://type.fit/api/quotes');
  const response_1 = await response.json();
  return response_1;
};

setInterval(async () => {
  const dataQuote = await quoteAPI();
  const randomNum = Math.floor(Math.random() * dataQuote.length);
  quoteElement.innerText = dataQuote[randomNum].text;
  authorElement.innerText = dataQuote[randomNum].author;
  console.log(`${dataQuote[randomNum].text}\n${dataQuote[randomNum].author}`);
}, 3000);
