const quoteOrText = () => {
  return fetch('js/boring-text-examples.json')
    .then(response => response.json());
}

const randomQuoteOrText = (obj) => {
  const showQuote = Math.random() >= 0.5;

  if(showQuote) {
    return retrunRandomItemFromArray(obj.quotes);
  } else {
    return retrunRandomItemFromArray(obj['text-blocks']);
  }
}

const retrunRandomItemFromArray = (array) => {
  const randomIndex = randomNumber(0, array.length - 1);
  return array[randomIndex];
}

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const getSomeRandomBoringText = async (number) => {
  const textExamples = await quoteOrText();
  const textOutput = [];
  for(let i = 0; i < number; i++) {
    textOutput[i] = randomQuoteOrText(textExamples);
  }

  return textOutput;
};
