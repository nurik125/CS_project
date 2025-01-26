import { initial_page } from './pages/pages.js';
import index_js from './js/index.js';

window.onload = () => {
    document.body.innerHTML = initial_page;
    document.head.innerHTML += `<link id="module" rel="stylesheet">`;
    index_js("initial_page");
}


