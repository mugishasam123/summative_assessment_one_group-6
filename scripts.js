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

    //Email Validation: Valid email format
    const email = document.getElementById("email").value;
    if (!/^[^A-Z\s@]+@[^A-Z\s@]+\.[^A-Z\s@]+$/.test(email)) {
      errorMessages.push("Invalid email format - abc@gmail.com");
    }

    // Phone Number Validation: Format (123) 456-7890
    const phone = document.getElementById("phone").value;
    if (!/^\(\d{3}\) \d{3}-\d{4}$/.test(phone)) {
      errorMessages.push("Phone number must be in the format (123) 456-7890 .");
    }
    
    // Event Date Validation: Valid date in MM/DD/YYYY format
    const eventDate = document.getElementById("eventDate").value;
    if (!/^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/.test(eventDate)) {
      errorMessages.push("Event date must be in MM/DD/YYYY format.");
    }

    // Number of Tickets Validation: Number between 1 and 10
    const tickets = document.getElementById("tickets").value;
    if (!(tickets >= 1 && tickets <= 10)) {
      errorMessages.push("Number of tickets must be between 1 and 10.");
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
