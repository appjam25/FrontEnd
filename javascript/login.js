const loginButton = document.getElementById('login_button')
let nickname = document.getElementById("nickname")
let password = document.getElementById("password")

loginButton.onclick = () => {

    axios({
        url: 'https://prod-server.xquare.app/appjam/auth/login', // 통신할 웹문서
        method: 'post', // 통신할 방식
        data: {
            "nickname": nickname.value,
            "password": password.value
        }
    }).then(function(response){
        console.log('status:', response.status)
        location.href = "../html/join.html"
    }).catch(function(error) {
        console.error('Error:', error);
    });;


}