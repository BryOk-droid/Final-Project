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


