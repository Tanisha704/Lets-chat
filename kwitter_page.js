//YOUR FIREBASE LINKS
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
    room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);

name=message_data['name'];
message=message_data['message'];
like=message_data['like'];

name_withTag="<h4>"+name+"<img  class='user_tick' src='tick.png'></h4> ";
message_withTag="<h4 class='message_h4'>"+message+"</h4>";
like_withTag="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='update_like(this.id)'>";
span_withTag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span> </button> <hr>";
row=name_withTag+message_withTag+like_withTag+span_withTag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      }); 
      document.getElementById("msg").value="";
}

function update_like(firebase_message_id){
console.log("clicked on like button-"+firebase_message_id);
button_id=firebase_message_id;
likes=document.getElementById(button_id).value;
updated_likes=Number(likes)+1;
console.log(updated_likes);

firebase.database().ref(room_name).child(firebase_message_id).update({
      like:updated_likes
});
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name"); 
      window.location="index.html";
}