
function validation(){

    var email = document.getElementById("email").value
    var password = document.getElementById("password").value

    firebase.auth().signInWithEmailAndPassword(email, password).then(
        function(){
            window.location = "http://localhost:3000/dashboard.html"
        }
    ).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code
        var errorMessage = error.message

        document.getElementById("errorLogin").innerHTML = errorMessage
      });
}


function userRegister(){
    var email = document.getElementById("emailRegister").value
    var password = document.getElementById("passwordRegister").value

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        document.getElementById("errorSignUp").innerHTML = errorMessage
      });
}