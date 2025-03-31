var userEmail= document.getElementById('userEmail')
var userPassword= document.getElementById('userPassword')
var loginBtn= document.getElementById('loginBtn')
var usersList = []
if(localStorage.getItem('users') !=null){
    usersList=JSON.parse(localStorage.getItem('users'))
}

var warningMessage = document.getElementById('warningMessage')

function logIn(){
    if(emptyInputs()){
        warningAlert('<i class="fa-solid fa-triangle-exclamation"></i> Fill all inputs')
    }
   else {
    if(validEmailAndPass()){
        location.href='home.html'
     }
     else{
        warningAlert('<i class="fa-solid fa-triangle-exclamation"></i> Email or Password is incorrect')
     }
   }
}
function validEmailAndPass(){
   var checkEmailPass=false
    for(var i=0 ; i<usersList.length; i++){
        if( usersList[i].email==userEmail.value && usersList[i].password==userPassword.value ){
                localStorage.setItem('name' , usersList[i].name)
                checkEmailPass= true
        }
    }
    return checkEmailPass
}
loginBtn.addEventListener('click' , function(){
    logIn()
})
function warningAlert(text){
    warningMessage.innerHTML=text;
    warningMessage.classList.remove('d-none')
    userEmail.classList.add('is-invalid')
    userPassword.classList.add('is-invalid')
}
function emptyInputs(){
    if(userEmail.value==""|| userPassword.value==""){
        return true
    }
    else{
        return false
    }
}