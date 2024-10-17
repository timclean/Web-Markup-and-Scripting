
// Travis McLean
// 10/09/2024
// Week 8 

// JavaScript code for form validation
document.addEventListener("DOMContentLoaded", function() {
  // Retrieve the input field element
  const form = document.getElementById('myForm');
  const inputField = document.getElementById('inputField');
  const errorMessage = document.getElementById('errorMessage');

  // Regular expression pattern for alphanumeric input
  const alphanumericPattern = /^[a-zA-Z0-9]+$/;

  form.addEventListener('submit', function(event) {
      // Prevent form from submitting
      event.preventDefault();

      // Retrieve the input field value
      const inputValue = inputField.value.trim();

      // Validate the input value using a regular expression
      if (alphanumericPattern.test(inputValue)) {
          // Valid input: display confirmation message
          errorMessage.textContent = "Valid input! Form submitted.";
          errorMessage.style.color = "green";

          // Optionally, submit the form here if needed
          // form.submit();
      } else {
          // Invalid input: display error message
          errorMessage.textContent = "Please enter only alphanumeric characters.";
          errorMessage.style.color = "red";
      }
  });
});
