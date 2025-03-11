import './footer.scss';
import Vise from '../img/vise.png';
import Maestro from '../img/mastercard.png';
import Skrill from '../img/skrill.png';

let footer = document.createElement('footer');
footer.classList.add('footer');

let footerCase = document.createElement('div');
footerCase.classList.add('footer-case');

let footerNav = document.createElement('nav');
footerNav.classList.add('footer-nav');

let footerNavItems = [
    {label:'Contacts'},
    {label:'Rules'},
    {label:'FAQ'},
]

footerNavItems.map((item, index) => {
    let footerNavItem = document.createElement('a');
    footerNavItem.classList.add('footer-nav-item');
    footerNavItem.innerHTML = item.label;
    footerNav.appendChild(footerNavItem);
})

let logoFooterCase = document.createElement('div');
logoFooterCase.classList.add('footer-logo-case');

let logoFooter = [
   {label:"Vise", img: Vise}, 
   {label:"Maestro", img: Maestro}, 
   {label:"Skrill", img: Skrill}
];

logoFooter.map((item, index) => {
    let logoFooterLink = document.createElement('a');
    logoFooterLink.href = `#${item.label}`;
    
    let logoFooterItem = document.createElement('img');
    logoFooterItem.src = item.img;
    logoFooterLink.appendChild(logoFooterItem);
    logoFooterItem.classList.add('footer-logo');
    logoFooterCase.appendChild(logoFooterLink);
})

let footerCopyright = document.createElement('div');
footerCopyright.classList.add('footer-copyright');
footerCopyright.innerHTML = `Copyright 2025 vavada.com`;

footerCase.appendChild(footerNav);
footerCase.appendChild(logoFooterCase);

footer.appendChild(footerCase);
footer.appendChild(footerCopyright);

export {footer};