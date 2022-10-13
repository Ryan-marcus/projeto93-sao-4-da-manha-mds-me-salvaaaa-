const firebaseConfig = {
    apiKey: "AIzaSyDYuZhIbSsI9KuCfkxKfDRmeUgaGyyYv7s",
    authDomain: "site-e8725.firebaseapp.com",
    databaseURL: "https://site-e8725-default-rtdb.firebaseio.com",
    projectId: "site-e8725",
    storageBucket: "site-e8725.appspot.com",
    messagingSenderId: "192300761128",
    appId: "1:192300761128:web:a6043c2fd4ff3092ddb51d"
  };
  
    firebase.initializeApp(firebaseConfig);
  
    userName = localStorage.getItem("userName");
  
    document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";
  
  
  function addUser() {
  
    userName = document.getElementById("userName").value;
  
    localStorage.setItem("userName", userName);
    
    window.location = "kwitterRoom.html";
  }