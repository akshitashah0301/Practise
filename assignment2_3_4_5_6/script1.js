/* inqury button*/

const headerBtn = document.getElementById("headerBtn");
headerBtn.addEventListener("click", function (event) {
  console.log("Button clicked!");
  alert(
    "Thank you for your interest in Little Explorers Preschool! We will redirect you to our inquiry form shortly."
  );
});

/* admission form */

document.addEventListener("DOMContentLoaded", () => {
  const admissionForm = document.getElementById("admissionForm");

  admissionForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let isValid = true;

    const mybtn = document.getElementById("mybtn");
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const genderMale = document.getElementById("male");
    const genderFemale = document.getElementById("female");
    const applyingClass = document.getElementById("applyingClass");
    const address = document.getElementById("address");
    const email = document.getElementById("email");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const fatherName = document.getElementById("fatherName");
    const declaration = document.getElementById("declaration");
    const formSubmissionMessage = document.getElementById(
      "formSubmissionMessage"
    );

    if (firstName.value.trim() == "") {
      console.log("firstname can not empty");
      isValid = false;
    } else if (!/^[A-Za-z\s]+$/.test(firstName.value.trim())) {
      console.log("firstname contain letter and spaces");
      isValid = false;
    }

    if (lastName.value.trim() == "") {
      console.log("lastname can not empty");
      isValid = false;
    } else if (!/^[A-Za-z\s]+$/.test(lastName.value.trim())) {
      console.log("lasttname contain letter and spaces");
      isValid = false;
    }

    if (!genderMale.checked && !genderFemale.checked) {
      console.log("please select gender");
      isValid = false;
    }

    if (applyingClass.value === "") {
      console.log("please select class");
      isValid = false;
    }

    if (address.value.trim() === "") {
      console.log("address is required");
      isValid = false;
    }

    if (email.value.trim() === "") {
      console.log("Email ID can not be blank");
      isValid = false;
    } else if (!emailRegex.test(email.value.trim())) {
      console.log("Please enter valid email ID");
      isValid = false;
    }

    if (fatherName.value.trim() === "") {
      console.log("father Name is required");
      isValid = false;
    } else if (!/^[A-Za-z\s]+$/.test(fatherName.value.trim())) {
      console.log("fathername contain letter and spaces");
      isValid = false;
    }

    if (!declaration.checked) {
      console.log("please select declaration checkbox");
      isValid = false;
    }

    if (isValid) {
      console.log("Form Submitted Successfully!");
      alert("form submitted succesfully");

      admissionForm.reset();
    } else {
      console.log("Error in admission form!");
      alert("Error in admission form , pls fill proper details");
    }
  });
});
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
