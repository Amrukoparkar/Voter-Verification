function submitForm(event) {
  event.preventDefault(); // Prevent form submission
  
  // Get form values
  var fullname = document.getElementById("fullname").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var address = document.getElementById("address").value;
  var dob = document.getElementById("dob").value;
  
  // Calculate age
  var today = new Date();
  var birthDate = new Date(dob);
  var age = today.getFullYear() - birthDate.getFullYear();
  var month = today.getMonth() - birthDate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  // Determine eligibility for voting
  var eligible = age >= 18;
  
  // Display result
  var resultContainer = document.getElementById("result");
  resultContainer.style.display = "block";
  resultContainer.innerHTML = "<h2>Verification Result</h2>" +
    "<p>Name: " + fullname + "</p>" +
    "<p>Email: " + email + "</p>" +
    "<p>Phone: " + phone + "</p>" +
    "<p>Address: " + address + "</p>" +
    "<p>Date of Birth: " + dob + "</p>" +
    "<p>Age: " + age + "</p>" +
    "<p>Eligible for Voting: " + (eligible ? "Yes" : "No") + "</p>";
}
