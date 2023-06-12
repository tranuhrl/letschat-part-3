// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAtyWGT5n_Uv-tkK9wXrbg-rTIXN31he_8",
  authDomain: "letschat2-28cfa.firebaseapp.com",
  databaseURL: "https://letschat2-28cfa-default-rtdb.firebaseio.com",
  projectId: "letschat2-28cfa",
  storageBucket: "letschat2-28cfa.appspot.com",
  messagingSenderId: "389017797556",
  appId: "1:389017797556:web:66489ec9375ae05c77a8e1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

username_localstorage = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = username_localstorage;

function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name",
  });
  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("room name - " + Room_names);
row =
  "<div class = 'room_name' id = " +
  Room_names +
  " onclick = 'redirectToRoomName(this.id)' >#" +
  Room_names +
  "</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
      });
   });
}
getData();



function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
