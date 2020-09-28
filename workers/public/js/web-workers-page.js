let worker = new Worker('js/worker.js');

worker.addEventListener('message', function (e) {
  postCharacterResult(e.data.result, 'web-worker');
});

const postCharacterResult = (quote, type) => {
  const p = document.createElement('p');
  p.innerHTML=`"${quote.quote}" - ${quote.characters.toString()}`;

  const column = document.getElementById(`${type}-column`);
  column.appendChild(p);
};

const getNormalQuote = async (character) => {
  const res = await fetch(`/fatherted/randomcharacterquote/${character}`);
  const quote = await res.json();
  postCharacterResult(quote, 'normal');
};

const getWebWorkerQuote = (character) => {
  worker.postMessage(character);
};

const getQuote = (e) => {
  const elementId = e.srcElement.id;
  const quoteType = elementId.substring(0, elementId.length - 7);

  const inputValue = document.getElementById(`${quoteType}-input`).value;

  if(quoteType === 'normal') {
    getNormalQuote(inputValue);
  } else {
    getWebWorkerQuote(inputValue);
  }
};

document.getElementById("normal-button").addEventListener("click", getQuote);
document.getElementById("web-worker-button").addEventListener("click", getQuote);
