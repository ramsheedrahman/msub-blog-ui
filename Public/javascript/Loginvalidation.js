let names=document.getElementById('name')
let email=document.getElementById('email')
let errmessage=''
let passstrength=document.getElementById('password-strength')
let alertbox=document.getElementById('alertt')


function LoginemailValidate(){
    let emailpattern= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(email.value.length==0){
        errmessage='email canotbe null'
        alertbox.innerHTML=errmessage
        alertbox.style.display='block'
        return false
    }
    if(!email.value.match(emailpattern)){
        errmessage='pls enter a valid email'
        alertbox.innerHTML=errmessage
        alertbox.style.display='block'
        return false
    }
    else{
        alertbox.innerHTML=''
        alertbox.style.display='none'
        return true
    }
}
function LoginpasswordValidate(){
    passstrongpattern=/[^a-zA-Z0-9]/
     if(password.value.length<5){
        errmessage='password lengthcanot be less than 8'
        alertbox.innerHTML=errmessage
        alertbox.style.display='block'
        return false
     }
     if(password.value.length<8){
        passstrength.style.display='block'
        passstrength.innerHTML='password is weak'
        passstrength.style.color='red'
        return true
     }
   
    if(password.value.match(/[A-Z]/i) && password.value.match(/[0-9]/)){
        passstrength.style.display='block'
        passstrength.innerHTML='password is strong'
        passstrength.style.color='green'
        return true
    }
    if(password.value.length>=8){
        passstrength.style.display='block'
        passstrength.innerHTML='password is medium'
        passstrength.style.color='yellow'
        return true
    }
    else{
        alertbox.innerHTML=''
        alertbox.style.display='none'
        return true
     }
   
 
}
function LoginsubmitHandler(){
    if( !emailValidate() || !passwordValidate()){
        return false
    }
    else{
        return true
    }
}