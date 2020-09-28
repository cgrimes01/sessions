const postCharacterResult = (quote) => {
  const blockQuote = document.createElement('blockquote');
  blockQuote.classList.add('blockquote');

  const p = document.createElement('p');
  p.classList.add('p-4');
  p.innerHTML= quote.quote;

  const footer = document.createElement('footer');
  footer.classList.add('blockquote-footer', 'text-right');
  footer.innerHTML= quote.characters.toString(', ');

  blockQuote.appendChild(p);
  blockQuote.appendChild(footer);

  const column = document.getElementById(`quotes`);
  column.appendChild(blockQuote);
};

const getQuote = async (e) => {
  const inputValue = document.getElementById('quote-input').value;
  const res = await fetch(`/fatherted/randomcharacterquote/${inputValue}`);
  const quote = await res.json();
  postCharacterResult(quote);
};

document.getElementById("quote-button").addEventListener("click", getQuote);
