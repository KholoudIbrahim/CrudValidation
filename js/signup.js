var uNameInput=document.getElementById("userName");
var uEmailInput=document.getElementById("userEmail");
var uPasswordInput=document.getElementById("userPassword");

var allInputsAlert=document.getElementById("inputsMsg");
var emailAlert=document.getElementById("emailMsg");
var successAlert=document.getElementById("successMsg");


var userContainer=[];

if(localStorage.getItem("users")!=null){

    userContainer=JSON.parse(localStorage.getItem("users"));
}


function addUser(){


    // if(userContainer.length>0){

        for(var i=0;i<userContainer.length;i++){
    
    if(uNameInput.value==""&&uEmailInput.value==""&&uPasswordInput.value==""){
        inputsMsg.classList.add("d-none")
        emailAlert.classList.add("d-none");
        successAlert.classList.add("d-none");
    }
    
    if(validationName()==true&&validationEmail()==true&&validationPassword()==true){
        // if(userContainer[i].email.includes(uEmailInput.value)!=true){
            allInputsAlert.classList.add("d-none")
            emailAlert.classList.remove("d-none");
            successAlert.classList.add("d-none");
    
       
    // }
    }

        }
    // }
}

function createUser() {
    var user={
        name:uNameInput.value,
        email:uEmailInput.value,
        password:uPasswordInput.value

    };

    userContainer.push(user);
    localStorage.setItem("users",JSON.stringify(userContainer));

    // console.log(userContainer);

    allInputsAlert.classList.add("d-none")
    emailAlert.classList.add("d-none");
    successAlert.classList.remove("d-none");
    clearForm(); 
}


function validationName(){

    var alertMsg=document.getElementById("msgName");
    var text=uNameInput.value;
    var regexName=/^[A-Z][a-zA-Z]{2,8} [A-Z][a-zA-Z]{2,8}$/;

    if(regexName.test(text)==true){
        uNameInput.classList.remove("is-invalid");
        uNameInput.classList.add("is-valid");
        alertMsg.classList.add("d-none");
        return true;
        
    }
    else{
        uNameInput.classList.remove("is-valid");
        uNameInput.classList.add("is-invalid");
        alertMsg.classList.remove("d-none");
        return false;
    }
}


function validationEmail(){
    var alertMsg=document.getElementById("msgEmail");
    var text=uEmailInput.value;

    var regexMail=/(?:[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    if(regexMail.test(text)==true){
        uEmailInput.classList.remove("is-invalid");
        uEmailInput.classList.add("is-valid");
        alertMsg.classList.add("d-none");
        return true;
    }
    else{
        uEmailInput.classList.remove("is-valid");
        uEmailInput.classList.add("is-invalid");
        alertMsg.classList.remove("d-none");
        return false;
    }
}

function validationPassword(){
    var alertMsg=document.getElementById("msgPassword");
    var text=uPasswordInput.value;

    var regexPassword=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if(regexPassword.test(text)==true){
        uPasswordInput.classList.remove("is-invalid");
        uPasswordInput.classList.add("is-valid");
        alertMsg.classList.add("d-none");
        return true;
    }
    else{
        uPasswordInput.classList.remove("is-valid");
        uPasswordInput.classList.add("is-invalid");
        alertMsg.classList.remove("d-none");
        return false;
    }
}

function signIn(){
    window.location="/index.html";
}


function clearForm(){
    uNameInput.value="";
    uEmailInput.value="";
    uPasswordInput.value="";
}

