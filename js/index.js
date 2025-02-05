// Functionality for the index.html
document.addEventListener("DOMContentLoaded", function () {
  console.log("Welcome to the MediCare Hub Homepage!");

  // Log available services
  console.log("Available Services:");
  console.log("Service 1: General Checkup");
  console.log("Service 2: Pediatrics");
  console.log("Service 3: Cardiology");
  console.log("Service 4: Dermatology");

  // Log activity when the "Book an Appointment" button is clicked
  const bookAppointmentButton = document.querySelector(".btn");
  bookAppointmentButton.addEventListener("click", function () {
    console.log("User clicked on the 'Book an Appointment' button.");
  });
});
