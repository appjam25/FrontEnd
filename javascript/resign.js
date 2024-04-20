const resignBtn = document.getElementById("resign-btn");
const doubleCheck = document.getElementById("input_button")
let nickname = document.getElementById("nickname");
let password = document.getElementById("password");
let birth = document.getElementById("birth");
let region = document.getElementById("region");
  
doubleCheck.onclick = function(){
    doubleCheck.style.backgroundColor = '#F38E8E';
}


resignBtn.onclick = ()=> {
    if(nickname == "" || password == "" || birth == "" || region == ""){
      
    }
    else{    
        // let formatter = new SimpleDateFormat("yyyy-MM-dd");

        const birthDate = new Date(birth.value);


        console.log(nickname.value, password.value, region.value, birthDate);
        axios({
        url: 'https://prod-server.xquare.app/appjam/auth/signup', 
        method: 'post',
        data: {
            "nickname": nickname.value,
            "password": password.value,
            "address": region.value,
            "birthDate": birthDate
        }
      }).then(function(response){
        console.log('status:', response.status)
      }).catch(function(error) {
        
        console.error('Error:', error);
    });;
        // location.href = "../html/login.html";
    }

}

    // location.href = "../html/login.html"

