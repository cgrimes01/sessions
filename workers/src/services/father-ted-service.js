const axios = require('axios');

const fathertedapi = 'https://api.fatherted.irish';

const quotesConverter = (quotes) => {
  return { quotes: quotes.map(quote => quote.quote), 'text-blocks': quotes.map(quote => quote.episode) }
};

const fatherTedService = () => {
  const getFatherTedQuotes = () => {
    return axios.get(fathertedapi + '/quotes').then(response => quotesConverter(response.data));
  };

  const randomFatherTedQuote = () => {
    return axios.get(fathertedapi + '/quotes/random').then(response => response.data);
  };

  const randomCharacterQuote = (character) => {
    return axios.get(`${fathertedapi}/quotes/random?character=${character}`).then(response => response.data);
  };

  return { getFatherTedQuotes, randomFatherTedQuote, randomCharacterQuote };
}

module.exports =  fatherTedService();
