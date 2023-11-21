import { IBankLogoItem } from '../IBankLogoItem';
import { banks } from '../banks';

const bankTemplate: HTMLTemplateElement = document.querySelector('#bank');

const createBankLogoElement = ({ fileName, humanName, matchedBankNames }: IBankLogoItem) => {
  const itemElement = bankTemplate.content.querySelector('.bank').cloneNode(true) as Element;
  const imageElement: HTMLImageElement = itemElement.querySelector('.bank__logo');
  imageElement.src = 'logos/' + fileName;
  imageElement.alt = fileName;

  if (!fileName) {
    itemElement.classList.add('bank--logo-empty');
  }

  itemElement.querySelector('.bank__name').textContent = humanName;
  itemElement.querySelector('.bank__alt-names').textContent = matchedBankNames.join(', ');

  return itemElement;
};

const renderBankLogos = (banks) => {
  const banksListElement = document.querySelector('.banks-list');
  banksListElement.classList.add('banks-list');
  banks.forEach((element) => {
    banksListElement.append(createBankLogoElement(element));
  });

  document.body.append(banksListElement);
};

renderBankLogos(banks);
