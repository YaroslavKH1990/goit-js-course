import menuItem from '../template/menu-item.hbs';
import menuJson from '../menu.json';

const menuRef = document.querySelector('ul.js-menu');
menuRef.insertAdjacentHTML('beforeend', menuItem(menuJson));
