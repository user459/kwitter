
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
  apiKey: "AIzaSyA4BsfOEqMaCH5iOcIj1ZvWlqYdF3c0RMo",
  authDomain: "kwitter-e94e2.firebaseapp.com",
  databaseURL: "https://kwitter-e94e2-default-rtdb.firebaseio.com",
  projectId: "kwitter-e94e2",
  storageBucket: "kwitter-e94e2.appspot.com",
  messagingSenderId: "683280413942",
  appId: "1:683280413942:web:6966364c32002fbb1fe8d7",
  measurementId: "G-3RYB7B4EN7"
};
firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name' id='"+Room_names+"' onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function send(){
    //send function is add room function//
    room_name=document.getElementById("roomname").value;
    firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
    });

    console.log(room_name);
    localStorage.setItem("roomname",room_name);
    window.location="kwitter_page.html";
}

function redirectToRoomName(name){
    localStorage.setItem("roomname",name);
    window.location="kwitter_page.html";
}