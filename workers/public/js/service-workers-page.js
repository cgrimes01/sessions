import { getSomeRandomBoringText } from './boring-text-service.js';

const numberOfTextElements = 10;

const populateTextPlaceholders = async () =>  {
  const el = document.getElementById('text-placeholders');

  const textItems = await getSomeRandomBoringText(numberOfTextElements);

  for(let i = 0; i < numberOfTextElements; i++) {
    let p = el.children.item(i);
    if(!p) {
      p = document.createElement('p');
      el.appendChild(p);
    }
    p.innerText = textItems[i];
  }
} 

document.getElementById("popBtn").addEventListener("click", populateTextPlaceholders);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
