var logOutBtn = document.getElementById('logOutBtn')
var caption = document.getElementById('caption')
var userList = []
if(localStorage.getItem('users')!=null){
    userList=JSON.parse(localStorage.getItem('users'))
}
var WelcomeName=''
addCaption()

function logOut(){
    location.replace('index.html')
    localStorage.removeItem('name')
}
logOutBtn.addEventListener('click' , logOut)


function addCaption(){
    WelcomeName =localStorage.getItem('name')
    caption.innerHTML= 'Welcome '+ WelcomeName
   /*  caption.style.cssText=`
    font-size: 50px;
    color: #2b2963;
    font-weight: 700;
    ` */
}