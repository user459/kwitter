
//ADD YOUR FIREBASE LINKS
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
firebase.analytics();
function shi(){
    username=document.getElementById("shinobu").value;
    firebase.database().ref("/").child(username).update({
        city:"japan",
        surname:"kocho",
        job:"demon slayer"
    });
    firebase.database().ref("/").child(username).update({
        purpose:"adding room name"
    });
}