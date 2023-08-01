var userName;

if(localStorage.getItem("sessionUsername")!=null){

    userName=JSON.parse(localStorage.getItem("sessionUsername"));
}

var cartona=
`
<h1 class="text-center ">Wecome ${userName}</h1>
`

document.getElementById("welcome").innerHTML=cartona;


function smartLogin(){

    window.location="../home.html";
}

function logOut(){
    window.location="../index.html";
    localStorage.removeItem("sessionUsername");

}