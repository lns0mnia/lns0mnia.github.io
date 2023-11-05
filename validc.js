// Wait for the HTML document to be fully loaded and parsed before executing the JavaScript code
document.addEventListener("DOMContentLoaded", function () {
    // Get references to form and input elements
    const form = document.querySelector(".forms"); // The entire form element
    const fname = document.getElementById("fname"); // First name input
    const lname = document.getElementById("lname"); // Last name input
    const login = document.getElementById("login"); // Login input
    const password = document.getElementById("password"); // Password input

    // Add a submit event listener to the form
    form.addEventListener("submit", function (event) {
        let valid = true; // A flag to track the overall form validity

        // Validate the first name input
        if (fname.value.trim() === "") {
            showError(fname, "First name is required"); // Display an error message
            valid = false; // Mark the form as invalid
        } else {
            removeError(fname); // Remove any previous error message
        }

        // Validate the last name input
        if (lname.value.trim() === "") {
            showError(lname, "Last name is required");
            valid = false;
        } else {
            removeError(lname);
        }

        // Validate the login input
        if (login.value.trim() === "") {
            showError(login, "Login is required");
            valid = false;
        } else {
            removeError(login);
        }

        // Validate the password input
        if (password.value.trim() === "") {
            showError(password, "Password is required");
            valid = false;
        } else {
            removeError(password);
        }

        // If there are validation errors, prevent the form from being submitted
        if (!valid) {
            event.preventDefault(); // Prevent form submission if there are validation errors
        }
    });

    // Function to display an error message for a specific input
    function showError(input, message) {
        const errorDiv = document.createElement("div"); // Create a new error message div
        errorDiv.className = "error"; // Apply a CSS class for styling
        errorDiv.textContent = message; // Set the error message text
        input.parentNode.appendChild(errorDiv); // Append the error message to the input's parent element
    }

    // Function to remove an existing error message for a specific input
    function removeError(input) {
        const errorDiv = input.parentNode.querySelector(".error"); // Find the error message element
        if (errorDiv) {
            input.parentNode.removeChild(errorDiv); // Remove the error message if it exists
        }
    }
});



const form = document.getElementById('registration-form');
    const successSound = document.getElementById('success-sound');

    form.addEventListener('submit', function (e) {
        
        e.preventDefault(); // Prevent the form from actually submitting

        const firstName = document.getElementById('fname').value;
        const lastName = document.getElementById('lname').value;
        // Play the success sound
        
        // Display the welcome message
        alert(`Welcome, ${firstName} ${lastName}! You have successfully registered!`);

        successSound.play();
    });



  const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
    const notificationSound = document.getElementById('notification-sound');
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
    notificationSound.play();
  })
}