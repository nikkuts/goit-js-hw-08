import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";
const formRef = document.querySelector('.feedback-form');
const emailRef = formRef.querySelector('input');
const messageRef = formRef.querySelector('textarea');

formRef.addEventListener("input", throttle(onFeedbackInput, 500));
formRef.addEventListener('submit', onFeedbackSubmit);

populateForm();

function onFeedbackInput (event) {
    const item = {
        email: emailRef.value,
        message: messageRef.value,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(item));
};

function onFeedbackSubmit (event) {
   event.preventDefault();
   console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
   event.currentTarget.reset();
   localStorage.removeItem(STORAGE_KEY);
};

function populateForm () {
    const savedItem = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedItem) {
        emailRef.value = savedItem.email;
        messageRef.value = savedItem.message;
    };
};