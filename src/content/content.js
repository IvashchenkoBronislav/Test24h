import './content.scss';

let contentBlock = document.createElement('div');
contentBlock.classList.add('content');

let contentCase = document.createElement('div');
contentCase.classList.add('content_case');


let contentTitle = document.createElement('h1');
contentTitle.classList.add('content-title');
contentTitle.innerHTML = ' Vavada Casino';

let contentTextUp = document.createElement('p');
contentTextUp.classList.add('content-text-up');
contentTextUp.innerHTML = 'Vavada Casino is a popular online casino that offers a wide range of games, including slots, table games, and live dealer games. The casino is known for its generous bonuses and promotions, as well as its excellent customer service.';

let contentTextDown = document.createElement('p');
contentTextDown.classList.add('content-text-down');
contentTextDown.innerHTML = 'Vavada Casino is a popular online casino that offers a wide range of games, including slots, table games, and live dealer games. The casino is known for its generous bonuses and promotions, as well as its excellent customer service.';

let banerBox = document.createElement('div');
banerBox.classList.add('baner-box');

let textBanerCase = document.createElement('div');
textBanerCase.classList.add('text-baner-case');

let textBanerBonus = document.createElement('span');
textBanerBonus.classList.add('text-baner');
textBanerBonus.innerHTML = `Free bonus`;

let buttonBanerBonus = document.createElement('button');
buttonBanerBonus.classList.add('button-baner');
buttonBanerBonus.innerHTML = `<a href="#bonus">Get Bonus</a>`;

textBanerCase.appendChild(textBanerBonus);
banerBox.appendChild(textBanerCase);
banerBox.appendChild(buttonBanerBonus);


contentCase.appendChild(contentTitle);
contentCase.appendChild(contentTextUp);
contentCase.appendChild(banerBox);
contentCase.appendChild(contentTextDown);

contentBlock.appendChild(contentCase);

export {contentBlock};