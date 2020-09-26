const axios = require('axios');

const quotesURL = 'https://api.fatherted.irish/quotes';

const quotesConverter = (quotes) => {
  return { quotes: quotes.map(quote => quote.quote), 'text-blocks': quotes.map(quote => quote.episode) }
};

const fatherTedService = () => {
  const getFatherTedQuotes = () => {
    return axios.get(quotesURL).then(response => quotesConverter(response.data));
  };

  return { getFatherTedQuotes };
}

module.exports =  fatherTedService();
