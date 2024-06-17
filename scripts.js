document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let errorMessages = [];
    
    // Name Validation: Letters and spaces only
    const name = document.getElementById("name").value;
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      errorMessages.push("Name can only contain letters and spaces.");
    }

    // Display error messages or submit form if valid
    const errorMessagesContainer = document.getElementById("errorMessages");
    errorMessagesContainer.innerHTML = "";

    if (errorMessages.length > 0) {
      errorMessages.forEach(function (message) {
        const errorElement = document.createElement("p");
        errorElement.textContent = message;
        errorMessagesContainer.appendChild(errorElement);
      });
    } else {
      // If no errors, redirect to the thank you page
      window.location.href = "thankyou.html";
    }
  });
