'use strict';

const id = document.getElementById('id'),
    psword = document.getElementById('psword'),
    loginBtn = document.getElementById('btnLogin');

loginBtn.addEventListener('click', login);

function login() {
    const req = {
        id: id.value,
        psword: psword.value,
    };

    console.log(req);
}
