const firebaseConfig = {
    apiKey: "AIzaSyDYuZhIbSsI9KuCfkxKfDRmeUgaGyyYv7s",
    authDomain: "site-e8725.firebaseapp.com",
    databaseURL: "https://site-e8725-default-rtdb.firebaseio.com",
    projectId: "site-e8725",
    storageBucket: "site-e8725.appspot.com",
    messagingSenderId: "192300761128",
    appId: "1:192300761128:web:a6043c2fd4ff3092ddb51d"
  };
  
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
    userName = localStorage.getItem("userName");
  
  document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";
  
  function addRoom()
  {
    roomName = document.getElementById("roomName").value;
  
    firebase.database().ref("/").child(roomName).update({
      purpose : "adicionar nome de sala"
    });
  
      localStorage.setItem("roomName", roomName);
      
      window.location = "kwitterPage.html";
  }
  
  function getData() {  
    firebase.database().ref("/").on('value', 
    function(snapshot) { 
      document.getElementById("output").innerHTML = ""; 
      snapshot.forEach(function(childSnapshot) { 
      childKey  = childSnapshot.key;
      roomNames = childKey;
      console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
  }
  
  function logout() {
    localStorage.removeItem("userName");
    localStorage.removeItem("roomName");
    window.location = "index.html";
  }
  