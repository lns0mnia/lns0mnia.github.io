// Get references to HTML elements using their IDs
const durationInput = document.getElementById('duration'); // Input field for setting the duration
const startButton = document.getElementById('start'); // Button to start the timer
const timerDisplay = document.getElementById('timer'); // Element to display the timer countdown
let countdown; // A variable to store the interval ID for the countdown

// Add a click event listener to the "start" button and specify the function to run
startButton.addEventListener('click', startTimer);

// Function to start the timer when the "start" button is clicked
function startTimer() {
    // Get the duration value from the input field and parse it as an integer
    const duration = parseInt(durationInput.value);

    // Check if the duration is not a valid number or less than or equal to 0
    if (isNaN(duration) || duration <= 0) {
        alert('Please enter a valid duration.');
        return; // Exit the function if the input is invalid
    }

    // Get the current time in milliseconds
    let startTime = Date.now();

    // Calculate the end time by adding the duration in seconds to the start time
    let endTime = startTime + duration * 1000;

    // Set up an interval to update the timer every second
    countdown = setInterval(updateTimer, 1000);

    // Function to update the timer display
    function updateTimer() {
        // Get the current time
        const currentTime = Date.now();

        // Calculate the remaining time by subtracting the current time from the end time
        const remainingTime = endTime - currentTime;

        // Check if the remaining time is less than or equal to 0 (timer has reached zero)
        if (remainingTime <= 0) {
            clearInterval(countdown); // Stop the countdown interval
            timerDisplay.textContent = "Time's up!"; // Display "Time's up!"
            return; // Exit the function
        }

        // Calculate minutes and seconds from the remaining time
        const minutes = Math.floor(remainingTime / 60000);
        const seconds = Math.floor((remainingTime % 60000) / 1000);

        // Format and display the remaining time as "MM:SS"
        timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
}
