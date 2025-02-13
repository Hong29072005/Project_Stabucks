var  username = document.getElementById('username');
var  password =  document.getElementById('password');
var  ueror = document.getElementById('ueror')
var  peror = document.getElementById('peror')

function showpassword(){
    if(password.type === 'password'){
        password.type ='text';
    }
    else{
        password.type ='password';
    }
}
const check=()=>{
    let ptex = password.value.trim();
    if(username.value == ''){
        ueror.innerHTML='Please input Username';
        username.classList.remove('valid');
        username.classList.add('invalid');
    }
    else{
        ueror.innerHTML='';
        username.classList.remove('invalid');
        username.classList.add('valid');
    }

    if(password.value == ''){
        peror.innerHTML='Please input Passwoed';
        password.classList.remove('valid');
        password.classList.add('invalid');
    }
    else{
        if(ptex.length<8){
            peror.innerHTML='Password must 8 charator';
        }else{
            peror.innerHTML='';
            password.classList.remove('invalid');
            password.classList.add('valid')
        }
    }
}