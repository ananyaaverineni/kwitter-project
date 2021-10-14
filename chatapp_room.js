// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDfC51_kz4qyCejDaome2pClaLKPn40p8Q",
      authDomain: "chat-app-63d39.firebaseapp.com",
      databaseURL: "https://chat-app-63d39-default-rtdb.firebaseio.com",
      projectId: "chat-app-63d39",
      storageBucket: "chat-app-63d39.appspot.com",
      messagingSenderId: "847721008720",
      appId: "1:847721008720:web:275c280568c0ff62af0b55"
    }; var firebaseConfig = {
      apiKey: "AIzaSyDfC51_kz4qyCejDaome2pClaLKPn40p8Q",
      authDomain: "chat-app-63d39.firebaseapp.com",
      databaseURL: "https://chat-app-63d39-default-rtdb.firebaseio.com",
      projectId: "chat-app-63d39",
      storageBucket: "chat-app-63d39.appspot.com",
      messagingSenderId: "847721008720",
      appId: "1:847721008720:web:275c280568c0ff62af0b55"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
ser_name=localStorage.getItem("user_name");
console.log("user_name="+user_name )
document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";
  function addroom ()
  {
    room_name=document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"});
     localStorage.setItem("room_name",room_name);
     window.location="kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
      getData();
      function logout(){
       localStorage.removeItem("user_name")
       localStorage.removeItem("room_name")
       window.location="index.html"
      }
