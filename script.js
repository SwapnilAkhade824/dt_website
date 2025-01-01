// Function to open the popup
function openPopup(message) {
    const popupText = document.getElementById("popupText"); // Get the popup text element
    popupText.textContent = message; // Set the content of the popup
    const popupOverlay = document.getElementById("popupOverlay"); // Get the popup overlay element
    popupOverlay.style.display = "flex"; // Show the popup
}

// Function to close the popup
function closePopup() {
    const popupOverlay = document.getElementById("popupOverlay"); // Get the popup overlay element
    popupOverlay.style.display = "none"; // Hide the popup
}

// Event listeners for buttons
document.getElementById("searchButton").addEventListener("click", function () {
    openPopup("Search for food products and learn about their safety!");
});

document.getElementById("shareButton").addEventListener("click", function () {
    openPopup("Share your solutions for combating food adulteration!");
});

// Close the popup if the user clicks outside of the popup content
document.getElementById("popupOverlay").addEventListener("click", function (event) {
    // Check if the click is outside of the popup content
    if (event.target === this) {
        closePopup();
    }
});
