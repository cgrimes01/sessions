const getWebWorkerQuote = async (character) => {
  const res = await fetch(`/fatherted/randomcharacterquote/${character}`);
  const quote = await res.json();
  return quote;
};

this.addEventListener('message', function (e) {
  getWebWorkerQuote(e.data).then(res => {
    this.postMessage({
      result: res
    });
  });
});
