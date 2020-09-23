"use strict"

let loginSubmitBtn = document.querySelector('#loginSubmit');
loginSubmitBtn.addEventListener('click', log)

let user = new Object({
    username: "Tom",
    password: "Lol",
    id: '5'
})

function log(evt) {
    evt.preventDefault();
    let username = document.querySelector('#loginUsername');
    let password = document.querySelector('#loginPassword');
    let currentUser = user;
    currentUser.username = username.value;
    currentUser.password = password.value;
    currentUser.id = Math.round(Math.random() * 100000000);
    console.log(currentUser);
}