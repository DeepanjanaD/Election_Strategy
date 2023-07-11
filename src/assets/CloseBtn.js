// Get the input elements
const inputElements = document.querySelectorAll('.form-control.input-box');

// Get the close buttons
const closeButtons = document.querySelectorAll('.btn-close-custom');

// Add event listeners
inputElements.forEach((inputElement, index) => {
  inputElement.addEventListener('focus', () => {
    closeButtons[index].style.display = 'block';
  });

  inputElement.addEventListener('blur', () => {
    closeButtons[index].style.display = 'none';
  });
});
