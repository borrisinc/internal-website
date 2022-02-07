// IMPORTANT: This is a JS-for-fun - and a BAD example how to secure your content:
var password = "demo"; // because ANYONE CAN SEE THIS IN VIEW SOURCE!


// Repeatedly prompt for user password until success:
(function promptPass() {

  var psw = prompt("Enter your Password");

  while (psw !== password) {
    alert("Incorrect Password");
    return promptPass();
  }

}());


alert('WELCOME');
window.location = "https://borrisinc.github.io/internal-website/k.html";
// or show you page content
