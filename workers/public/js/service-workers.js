import { getSomeRandomBoringText } from './boring-text-service.js';

const numberOfTextElements = 10;

const populateTextPlaceholders = async () => {
  const el = document.getElementById('text-placeholders');

  const textItems = await getSomeRandomBoringText(numberOfTextElements);

  for(let i = 0; i < numberOfTextElements; i++) {
    const p = document.createElement('p');
    p.innerText = textItems[i];
    el.appendChild(p);
  }
} 

populateTextPlaceholders();
