// Functionality for the appointment page
document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to the MediCare Hub Appointment Page!");

  const appointmentForm = document.getElementById("appointmentForm");
  const confirmationMessage = document.getElementById("confirmationMessage");

  // Add a blur event listener to log the value when the user moves out of the field
  const formFields = appointmentForm.querySelectorAll("input, textarea");
  formFields.forEach((field) => {
    field.addEventListener("blur", (event) => {
      const fieldId = event.target.id;
      const currentValue = event.target.value;

      // Log the value once when the user finishes typing and leaves the field
      console.log(`${fieldId} updated: ${currentValue}`);
    });
  });

  // Log form submissions
  appointmentForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const date = document.getElementById("date").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && phone && date) {
      confirmationMessage.innerText = `Thank you, ${name}! Your appointment is booked for ${date}. We will contact you at ${email}.`;
      confirmationMessage.style.color = "#28a745"; // Green for success
      confirmationMessage.style.display = "block";

      console.log(
        `Appointment Booked: Name: ${name}, Email: ${email}, Phone: ${phone}, Date: ${date}, Message: ${
          message || "No additional message provided"
        }`
      );

      // Reset the form after successful submission
      appointmentForm.reset();
    } else {
      confirmationMessage.innerText = "Please fill out all required fields.";
      confirmationMessage.style.color = "red"; // Red for error
      confirmationMessage.style.display = "block";

      console.log("Form submission failed: Missing required fields.");
    }
  });
});
