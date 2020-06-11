function hi() {
  var passwordName = document.getElementById("password").value;
  var firstName = document.getElementById("firstName").value;
  var firstNameUpperCase = firstName.charAt(0).toUpperCase();
  var firstNameLowerCase = firstName.slice(1, firstName.length).toLowerCase();
  var firstNameFull = firstNameUpperCase + firstNameLowerCase;
  if (passwordName === "MsDraperisthebest") {
    alert("Hi " + firstNameFull + ", welcome to my website");
    document.querySelectorAll("a")[0].setAttribute("href", "real.html");
  } else if (firstNameFull === "Draper" && passwordName === "Iamthebest") {
    alert("Hello Ms.Draper, welcome to my website");
    document.querySelectorAll("a")[0].setAttribute("href", "real.html");
  } else if (firstNameFull === "Catherine" && passwordName === "Iamthebest") {
    alert("Hello Ms.Draper, welcome to my website");
    document.querySelectorAll("a")[0].setAttribute("href", "real.html");
  } else {
    alert(
      "Hi " + firstNameFull + ", please try again. Password is incorrect, Retry"
    );
  }
}
