function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/.test(mail)) {
    return true;
  }
  return false;
}
const handleEmailSumbit = () => {
  const email = document.getElementById("email").value;
  if (!ValidateEmail(email)) {
    document.getElementById("warning").style.display = "block";
    console.log(document.getElementById("email"));
    document.getElementById("email").style.border = "2px solid #FF4868";
  } else {
    location.reload();
  }
};

document
  .getElementById("submit-btn")
  .addEventListener("click", handleEmailSumbit);

// document.addEventListener(
//   "click",
//   () => (document.getElementById("warning").style.display = "none")
// );
