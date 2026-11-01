// Project 1: write your form validation in this file.


// Select the mailing-list form from the HTML
const signupForm = document.querySelector("#signup-form");

// Select the name, email, and frequency fields
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const frequencyInput = document.querySelector("#frequency");

// Select the error-message areas and form submission message
const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const frequencyError = document.querySelector("#frequency-error");
const formMessage = document.querySelector("#form-message");

// Listen for the mailing-list form submission
signupForm.addEventListener("submit", function (event) {

  // Prevent the page from reloading when the form is submitted
  event.preventDefault();

  // Clear any previous success message
  formMessage.textContent = "";
  formMessage.classList.remove("success");

  // Track whether the form contains valid information
  let isValid = true;

  // Get the values entered in the form fields
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const frequency = frequencyInput.value;

  // Check whether the name field is empty
  if (name === "") {
    nameError.textContent = "Enter your name.";
    nameInput.setAttribute("aria-invalid", "true");
    isValid = false;
  } else {
    nameError.textContent = "";
    nameInput.removeAttribute("aria-invalid");
  }

  // Check whether the email field is empty
  if (email === "") {
    emailError.textContent = "Enter your email address.";
    emailInput.setAttribute("aria-invalid", "true");
    isValid = false;

  // Check whether the email address has the correct format
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailError.textContent = "Enter an email address like name@example.com.";
    emailInput.setAttribute("aria-invalid", "true");
    isValid = false;

  } else {
    emailError.textContent = "";
    emailInput.removeAttribute("aria-invalid");
  }

  // Check whether an email frequency was selected
  if (frequency === "") {
    frequencyError.textContent = "Choose how often we should email you.";
    frequencyInput.setAttribute("aria-invalid", "true");
    isValid = false;
  } else {
    frequencyError.textContent = "";
    frequencyInput.removeAttribute("aria-invalid");
  }

  // Stop if any validation errors were found
  if (!isValid) {
	
      // Focus on the first field that needs correction
      if (name === "") {
      nameInput.focus();

      } else if (email === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailInput.focus();

      } else if (frequency === "") {
      frequencyInput.focus();
      }

    return;
  }

      // Display a success message using the user's name
  formMessage.textContent = `Thank you, ${name}! You're on the mailing list.`;

  // Add the success styling to the message
  formMessage.classList.add("success");

  // Clear the form fields after successful submission
  signupForm.reset();


});