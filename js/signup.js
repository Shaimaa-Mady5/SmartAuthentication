
var userName = document.getElementById('userName')
var userEmail = document.getElementById('userEmail')
var userPassword = document.getElementById('userPassword')
var btnSignup = document.getElementById('btnSignup')
var usersList=[]
if(localStorage.getItem('users')!=null){
    usersList=JSON.parse(localStorage.getItem('users'))
}

var warningEmptyInputs= document.getElementById('warningEmptyInputs')
var successData = document.getElementById('successData')
var warningExistedEmail =document.getElementById('warningExistedEmail')



function signUp() {
    var user = {
        name:userName.value,
        email:userEmail.value,
        password:userPassword.value,
    }
    if(userName.value=="" || userEmail.value=="" || userPassword.value==""){
        warningEmptyInputs.classList.remove('d-none')
     }
    else {
        if(validationName() && validationEmail() && validationPassword() ){
            if(existEmail()){
                successData.classList.add('d-none')
                warningExistedEmail.classList.remove('d-none')
                userEmail.classList.replace('is-valid' , 'is-invalid') 
            }
            else{
                usersList.push(user);
                localStorage.setItem('users' , JSON.stringify(usersList))
                // localStorage.setItem('name' , user.name)
                // location.href='home.html'
                // clearForm()
                successData.classList.remove('d-none')
                warningEmptyInputs.classList.add('d-none')
                warningExistedEmail.classList.add('d-none')
            }    
        }           
    }
}
            
btnSignup.addEventListener ('click' , function(){
    signUp()
})

function existEmail() {
    var checkEmail=false
    for( var i =0; i<usersList.length; i++){
        if(usersList[i].email.toLowerCase() == userEmail.value.toLowerCase()){
            checkEmail = true 
        }
    }
    return checkEmail
}

function clearForm(){
    userName.value=""
    userEmail.value=""
    userPassword.value=""
}
function validationName() {
    var text = userName.value;
    var regex = /^[A-Z][a-z]{3,10}\s?([a-z]{4,10})?$/
    if( preventStartInputAlert(userName)){
        document.getElementById('alertName').classList.add('d-none')
    }
    else{
        if( regex.test(text)){
            userName.classList.add('is-valid')
            userName.classList.remove('is-invalid')
            document.getElementById('alertName').classList.add('d-none')
            return true;
        }
        else {
            userName.classList.add('is-invalid')
            userName.classList.remove('is-valid')
            document.getElementById('alertName').classList.remove('d-none')
            return false;
        }
    }
}
userName.addEventListener('input' , function(){
    validationName()
    
})

function validationEmail() {
    var email = userEmail.value;
    var regex = /^[a-z]{1,8}\d{1,3}\@(yahoo|gmail)\.com$/
    if( preventStartInputAlert(userEmail)){
        document.getElementById('alertEmail').classList.add('d-none')
    }
    else{
        if( regex.test(email)){
            userEmail.classList.add('is-valid')
            userEmail.classList.remove('is-invalid')
            document.getElementById('alertEmail').classList.add('d-none')
            return true;
        }
        else {
            userEmail.classList.add('is-invalid')
            userEmail.classList.remove('is-valid')
            document.getElementById('alertEmail').classList.remove('d-none')
            return false;
        }
    }
}
userEmail.addEventListener('input' , function(){
    validationEmail()
})


function validationPassword() {
    var password = userPassword.value;
    var regex = /^[A-Z][a-z]{3,5}\d{1,4}(#|@)$/
    if( preventStartInputAlert(userPassword)){
        document.getElementById('alertPassword').classList.add('d-none')
    }
    else{
        if( regex.test(password)){
            userPassword.classList.add('is-valid')
            userPassword.classList.remove('is-invalid')
            document.getElementById('alertPassword').classList.add('d-none')
            return true;
        }
        else {
            userPassword.classList.add('is-invalid')
            userPassword.classList.remove('is-valid')
            document.getElementById('alertPassword').classList.remove('d-none')
            return false;
        }
    }
}
userPassword.addEventListener('input' , function(){
    validationPassword()
})

function preventStartInputAlert(item) {
    if(item.value==""){
        item.classList.remove('is-invalid')
        return true
    }
    else{
        return false
    }
}