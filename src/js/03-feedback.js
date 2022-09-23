const throttle = require('lodash.throttle');
const FORM_STORAGE_KEY = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');
let formData = {};

(() => {
  formEl.addEventListener('input', throttle(onFormInp, 500));
  formEl.addEventListener('submit', onFormSubmit);

  formFieldRequired();
  readFormDataFromStorage();
  fillFormData();
})();

function onFormInp(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log(formData);
  clearFormData();
}

function clearFormData() {
  formEl.reset();
  Object.keys(formData).forEach(key => (formData[key] = ''));
  localStorage.removeItem(FORM_STORAGE_KEY);
}

function readFormDataFromStorage() {
  formData = JSON.parse(localStorage.getItem(FORM_STORAGE_KEY));
  formData = formData ? formData : {};
}

function fillFormData() {
  Object.keys(formData).forEach(key =>
    formData[key] ? (formEl.elements[key].value = formData[key]) : null
  );
}

function formFieldRequired() {
  [...formEl.elements].forEach(value => {
    value.setAttribute('required', '');
  });
}
