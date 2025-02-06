// Functionality for the index.html
document.addEventListener("DOMContentLoaded", function () {
  console.log("Welcome to the MediCare Hub Homepage!");

  // Log available services
  console.log("Available Services:");
  console.log("1. General Checkup");
  console.log("2. Pediatrics");
  console.log("3. Cardiology");
  console.log("4. Dermatology");
  console.log("4. Orthopedics");
  console.log("4. Neurology");

  // Log activity when the "Book an Appointment" button is clicked
  const bookAppointmentButton = document.querySelector(".btn");
  bookAppointmentButton.addEventListener("click", function () {
    console.log("User clicked on the 'Book an Appointment' button.");
  });

  // Log activity for "Why Choose Us" section
  console.log("Why Choose Us section contains key benefits for patients.");

  // Log activity for "FAQ" section
  console.log("FAQ section contains answers to common questions.");
});
