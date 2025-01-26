import { signIn_page, content_page } from '../pages/pages.js';
import index_js from './index.js';

const form = document.querySelector('form');
const button = document.querySelector('#sign');

// * Listeners

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = form.querySelector('#id').value;

    if (!check_for_accuracy(id)){
        return false;
    }

    if (id == 1) {
        document.body.innerHTML = content_page;
        index_js("content_page");
        return true;
    } else {
        alert('Invalid id');
    }
});

button.addEventListener('click', (e) => {
    e.preventDefault();
    form.classList.toggle('hide');
    setTimeout(() => {
        document.body.innerHTML = signIn_page;
        index_js("signIn_page");
    }, 1000);
});

// * Functions

function check_for_accuracy(id) {
    try{
        if(isNaN(Number(id))){
            throw new TypeError("Error type");
        }
        else if(id.length < 1){
            throw new RangeError("Error length");
        }
        return true;
    }
    catch (e){
        if(e instanceof TypeError){
            alert('Invalid id type');
            return false;
        }
        else if(e instanceof RangeError){
            alert('Invalid id length');
            return false;
        }
    }
}