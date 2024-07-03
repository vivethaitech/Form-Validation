const form =document.getElementById("form");
const username =document.getElementById("username");
const email =document.getElementById("email");
const password =document.getElementById("password");
const cpassword =document.getElementById("cpassword");


form.addEventListener("submit", (e)=>{
  e.preventDefault();
  validateInputs();
})

function validateInputs(){
    const usernameVal=username.value.trim();
    const emailVal=email.value.trim();
    const passwordVal=password.value.trim();
    const cpasswordVal=cpassword.value.trim();
    let success = true

    if(usernameVal===''){
        success=false;
        setError(username,"username is required")
    }
    else{
    setSuccess(username)
    }

    if(emailVal===''){
        success=false;
        setError(email,'email is required')
    }
    else if(!validateEmail(emailVal)){
        setError(email,'please enter a valid email')  
    }
    else{
        setSuccess(email)
    }

    if(passwordVal===''){
        success=false;
        setError(password,'password is required')
    }
    else if(passwordVal.length<8)
        {
            setError(password,'password must be atleast 8 characters')
        }
        else{
            setSuccess(password)
        }

        if(cpasswordVal===''){
            success=false;
            setError(cpassword,'confirm password is required')
        }
        else if(cpasswordVal!==passwordVal){
            setError(cpassword,'password does not match')
        }
        else{
            setSuccess(cpassword)
        }
        return success;

    }
function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.add('success');
}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
    errorElement.innerText = ' ';
    inputGroup.classList.add('success');
    inputGroup.classList.add('error');
}

const validateEmail=(email)=>{
    return String(email)
    .toLowerCase()
    .match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
}