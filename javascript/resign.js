const resignBtn = document.getElementById("resign-btn");



resignBtn.onclick = ()=> {
let nickname = document.getElementById("nickname").value;
let password = document.getElementById("password").value;
let birth = document.getElementById("birth").value
let region = document.getElementById("region").value;
  

    if(nickname == "" || password == "" || birth == "" || region == ""){
        console.log(nickname)
        console.log(password)
        console.log(birth)
        console.log(region) 
    }else{
      
    }
    else{    
        axios({
        url: 'https://prod-server.xquare.app/appjam', // 통신할 웹문서
        method: 'post', // 통신할 방식
        data: {
            "nickname": nickname,
            "password": password,
            "address": region,
            "birthDate": birth
        }
      });
        // location.href = "../html/login.html";
    }

}

    // location.href = "../html/login.html"

