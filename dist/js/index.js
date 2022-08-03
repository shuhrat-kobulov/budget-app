"use strict";
// form
const elForm = document.getElementById('form');
// inputs
const type = document.getElementById('#type');
const toFrom = document.getElementById('#toFrom');
const details = document.getElementById('#details');
const amount = document.getElementById('#amount');
const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('submit');
};
elForm.addEventListener('submit', handleSubmit);
