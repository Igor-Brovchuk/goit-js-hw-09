const formData = {
  email: '',
  message: '',
};

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

document.addEventListener('DOMContentLoaded', e => {
  const zip = localStorage.getItem(STORAGE_KEY);
  if (!zip) return;
  const parseData = JSON.parse(zip);
  formData.email = parseData.email || '';
  formData.message = parseData.message || '';
  form.elements.email.value = parseData.email;
  form.elements.message.value = parseData.message;
});

form.addEventListener('input', e => {
  const name = e.target.name;
  const value = e.target.value;
  formData[name] = value.trim();
  const zip = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, zip);
});

form.addEventListener('submit', e => {
  e.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';
  form.reset();
});
