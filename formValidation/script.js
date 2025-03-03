
const submit = document.querySelector(".submit");
const email = document.querySelector("#email");


function emailValidation(){
    const email = document.querySelector("#email");
    const validityState = email.validity;
    if(validityState.typeMismatch){
        email.setCustomValidity("Email should be of form : xyz@abc.com");
    }
    else{
        email.setCustomValidity(" ");
    }
    email.reportValidity();
}

email.addEventListener("input" , emailValidation);