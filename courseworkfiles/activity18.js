


function handleButtonClick (event) {

  console.log(event)

  // get the value of the input box
  var firstName =
   document.getElementById("firstName").value;
  var lastName =
   document.getElementById("lastName").value;
  if (firstName === "" || lastName === ""){
    document.getElementById("content")
      .textContent = "Click the button!"
  } else{
    var message = "<h2>Hi " + firstName + " " +lastName +  "!</h2>";


    document
      .getElementById("content")
      .innerHTML = message;
  }
}

  document.getElementById("loginButton")
     .addEventListener('click', handleButtonClick)
