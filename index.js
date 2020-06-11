function hi() {
  var passwordName = document.getElementById("password").value;
  var password = ["MsDraperisthebest"];
  var firstName = document.getElementById("firstName").value;
  var firstNameUpperCase = firstName.charAt(0).toUpperCase();
  var firstNameLowerCase = firstName.slice(1, firstName.length).toLowerCase();
  var firstNameFull = firstNameUpperCase + firstNameLowerCase;
  if (password.includes(passwordName)) {
    alert("Hi " + firstNameFull + ", welcome to my website");
    document.querySelectorAll("form")[0].setAttribute("action", "real.html");
  } else if (firstNameFull === "Draper" && passwordName === "Iamthebest") {
    alert("Hello Ms.Draper, welcome to my website");
    document.querySelectorAll("form")[0].setAttribute("action", "real.html");
  } else if (firstNameFull === "Catherine" && passwordName === "Iamthebest") {
    alert("Hello Ms.Draper, welcome to my website");
    document.querySelectorAll("form")[0].setAttribute("action", "real.html");
  } else {
    alert(
      "Hi " + firstNameFull + ", please try again. Password is incorrect, Retry"
    );
  }
}
function previous() {
  document.getElementById("prev").style.display = "none";
  document.getElementById("next").onclick(function () {
    document.getElementById("prev").style.display = "inline-block";
  });
}
