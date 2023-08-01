var userEmailInput=document.getElementById("userEmail");
var userPasswordInput=document.getElementById("userPassword");

//extraaaas to end 
var allInputsAlert=document.getElementById("inputsMessage");
var emailAlert=document.getElementById("emailMessage");
var successAlert=document.getElementById("successMessage");
var wrongAlert=document.getElementById("wrongMessage")


var userContainer=[];

if(localStorage.getItem("users")!=null){
    userContainer=JSON.parse(localStorage.getItem("users"));
}


function logIn(){

    if(userContainer.length>0){

        for(var i=0;i<userContainer.length;i++){

            if(userEmailInput.value==""&&userPasswordInput.value==""){
                allInputsAlert.classList.remove("d-none")
                emailAlert.classList.add("d-none");
                successAlert.classList.add("d-none");
                wrongAlert.classList.add("d-none");
        
            }
            else if(validationEmail()==true&&validationPassword()==true){
                if(userContainer[i].email.includes(userEmailInput.value)==true
                   &&userContainer[i].password.includes(userPasswordInput.value)==true){
                    allInputsAlert.classList.add("d-none")
                    emailAlert.classList.add("d-none");
                    successAlert.classList.remove("d-none");
                    wrongAlert.classList.add("d-none");
                    localStorage.setItem("sessionUsername",JSON.stringify(userContainer[i].name));
                    window.location="../home.html";
                    break;
                }
                else{
                    allInputsAlert.classList.add("d-none")
                    emailAlert.classList.add("d-none");
                    successAlert.classList.add("d-none");
                    wrongAlert.classList.remove("d-none");
                }    
            }
        }
    }   

}



function validationEmail(){
    var alertMessage=document.getElementById("messageEmail");
    var text=userEmailInput.value;

    var regexMail=/(?:[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    if(regexMail.test(text)==true){
        userEmailInput.classList.remove("is-invalid");
        userEmailInput.classList.add("is-valid");
        alertMessage.classList.add("d-none");
        return true;
    }
    else{
        userEmailInput.classList.remove("is-valid");
        userEmailInput.classList.add("is-invalid");
        alertMessage.classList.remove("d-none");
        return false;
    }
}

function validationPassword(){
    var alertMessage=document.getElementById("messagePassword");
    var text=userPasswordInput.value;

    var regexPassword=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if(regexPassword.test(text)==true){
        userPasswordInput.classList.remove("is-invalid");
        userPasswordInput.classList.add("is-valid");
        alertMessage.classList.add("d-none");
        return true;
    }
    else{
        userPasswordInput.classList.remove("is-valid");
        userPasswordInput.classList.add("is-invalid");
        alertMessage.classList.remove("d-none");
        return false;
    }
}