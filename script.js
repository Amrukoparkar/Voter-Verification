function submitForm(event) {
    event.preventDefault();
    var fullName = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var dob = document.getElementById("dob").value;
    var age = document.getElementById("age").value;

    var resultContainer = document.getElementById("result");
    var isEligible = checkEligibility(age);

    var userInfo = `
      <p><strong>Full Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Date of Birth:</strong> ${dob}</p>
      <p><strong>Age:</strong> ${age}</p>
      <p><strong>Eligibility:</strong> ${isEligible ? "You are eligible for voting." : "You are not eligible for voting."}</p>
    `;
    resultContainer.innerHTML = userInfo;
    resultContainer.style.display = "block";
  }

  function checkEligibility(age) {
    // Assume eligibility criteria here, e.g., age greater than or equal to 18
    return parseInt(age) >= 18;
  }