
const signInForm = document.querySelector('.scale-100');
const signUpForm = document.querySelector('.scale-0');

const signUpLink = document.querySelector('.signUpBtn-link');
const signInLink = document.querySelector('.signInBtn-link');

signUpLink.addEventListener('click', () => {
  signInForm.classList.remove('scale-100');
  signInForm.classList.add('scale-0');

  signUpForm.classList.remove('scale-0');
  signUpForm.classList.add('scale-100');
});

signInLink.addEventListener('click', () => {
  signUpForm.classList.remove('scale-100');
  signUpForm.classList.add('scale-0');

  signInForm.classList.remove('scale-0');
  signInForm.classList.add('scale-100');
});
