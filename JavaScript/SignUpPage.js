const signUp = document.getElementById("Signup");
const FirstName = document.getElementById("FirstName").value;
const LastName = document.getElementById("LastName").value;
const EmailAddress = document.getElementById("EmailId").value;
const password = document.getElementById("Password").value;
if (signUp) {
  signUp.addEventListener("click", function () {
    const Pass = document.getElementById("Password").value;
    const ConfirmPass = document.getElementById("ConfirmPassword").value;

    if (Pass !== ConfirmPass) {
      alert("Password does not match the confirmed password");
    }
  });
}

let DataCollect = {
  First_Name: FirstName,
  Last_Name: LastName,
  Email_Address: EmailAddress,
};
export {FirstName,LastName,EmailAddress,password};


