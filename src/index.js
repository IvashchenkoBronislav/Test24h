import './main.scss';
import { header } from './header/header';
import { contentBlock } from './content/content';
import { footer } from './footer/footer';

document.querySelector('body').appendChild(header);
document.querySelector('body').appendChild(contentBlock);
document.querySelector('body').appendChild(footer);

console.log('Hello, world!');