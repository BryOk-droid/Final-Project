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

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;

    if (name && email && phone && date) {
      confirmationMessage.innerText = `Thank you, ${name}! Your appointment is booked for ${date}. We will contact you at ${email}.`;
      console.log(
        `Appointment Booked: Name: ${name}, Email: ${email}, Phone: ${phone}, Date: ${date}`
      );
      appointmentForm.reset();
    } else {
      confirmationMessage.innerText = "Please fill out all required fields.";
      console.log("Form submission failed: Missing required fields.");
    }
  });
});
