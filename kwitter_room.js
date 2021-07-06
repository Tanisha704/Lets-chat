// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDWfwC3bSoDa2hdpfiB-2mWxHoyEdJ9VzU",
      authDomain: "kwitter-f534a.firebaseapp.com",
      databaseURL: "https://kwitter-f534a-default-rtdb.firebaseio.com",
      projectId: "kwitter-f534a",
      storageBucket: "kwitter-f534a.appspot.com",
      messagingSenderId: "436263742582",
      appId: "1:436263742582:web:c48fa733508dda901fc357"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

    function addRoom(){
          room_name=document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room names-"+Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
       document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name"); 
      window.location="index.html";
}