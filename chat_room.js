
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCydkjjy9Zj4VqpCqLxkL0N7jdAhxr6NtE",
      authDomain: "kwitter-c8a33.firebaseapp.com",
      databaseURL: "https://kwitter-c8a33-default-rtdb.firebaseio.com",
      projectId: "kwitter-c8a33",
      storageBucket: "kwitter-c8a33.appspot.com",
      messagingSenderId: "886363591433",
      appId: "1:886363591433:web:5322a57d85355f12bd39d8"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      });});}
getData();

function logout(){
window.location=("index.html");
}
     //End code