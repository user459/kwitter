function user(){
    username1=document.getElementById("username").value;
    localStorage.setItem("username",username1);
    window.location="kwitter_room.html";
}