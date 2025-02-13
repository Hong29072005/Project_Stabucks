var  firstname = document.getElementById('firstname');
var  lastname = document.getElementById('lastnaem');
var  email_address = document.getElementById('email_address');
var  password =  document.getElementById('password');

var  feror = document.getElementById('feror')
var  leror = document.getElementById('leror')
var  eeror = document.getElementById('eeror')
var  peror = document.getElementById('peror')
var  small_eror = document.getElementById('small_eror')
var  big_eror = document.getElementById('big_eror')
var  number_eror = document.getElementById('number_eror')
var  sign_eror = document.getElementById('sign_eror')


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
    if(firstname.value == ''){
        feror.innerHTML='* Please input First Name';
        firstname.classList.remove('valid');
        firstname.classList.add('invalid');
    }
    else{
        feror.innerHTML='';
        firstname.classList.remove('invalid');
        firstname.classList.add('valid');
    }  
    if( lastname.value == ''){
        leror.innerHTML='* Please input Last Name';
        lastname.classList.remove('valid');
        lastname.classList.add('invalid');
    }
    else{
        leror.innerHTML='';
        lastname.classList.remove('invalid');
        lastname.classList.add('valid');
    }

    if( email_address.value == ''){
        eeror.innerHTML=' * Please input Email Address';
        email_address.classList.remove('valid');
        email_address.classList.add('invalid');
    }
    else{
        eeror.innerHTML='';
        email_address.classList.remove('invalid');
        email_address.classList.add('valid');
    }

    if(password.value == ''){
        peror.innerHTML=' * Please input Passwoed';
        password.classList.remove('valid');
        password.classList.add('invalid');
    }
    else{
        if(ptex.length<8){
            peror.innerHTML=' * Password must 8 charator';
        }else{
            if(ptex.match(/[a-z]/g) && ptex.match(/[A-Z]/g) && ptex.match(/[0-9]/g) && ptex.match(/[!@#$%^&*()<>~]/g)){
                peror.innerHTML='';
                password.classList.remove('invalid');
                password.classList.add('valid')
            }
            else if(ptex.match(/[A-Z]/g) && ptex.match(/[0-9]/g) && ptex.match(/[!@#$%^&*()<>~]/g)){
                peror.innerHTML=' * Password must be Smarl charators';
                
            }
            else if(ptex.match(/[a-z]/g) && ptex.match(/[0-9]/g) && ptex.match(/[!@#$%^&*()<>~]/g)){
                peror.innerHTML=' * Password must be Big charators';
            }else if (ptex.match(/[a-z]/g) && ptex.match(/[A-Z]/g) && ptex.match(/[!@#$%^&*()<>~]/g) ){
                peror.innerHTML=' *Password must be Number';
            }
            else if(ptex.match(/[a-z]/g) && ptex.match(/[A-Z]/g) && ptex.match(/[0-9]/g)){
                peror.innerHTML='* Password must be Signs';
            }
            // else if (ptex.match(/[a-z]/g)){
            //     big_eror.innerHTML=' * Password must be Big Charators';
            //     number_eror.innerHTML=' * Password must be Number';
            //     sign_eror.innerHTML=' * Password must be sign';
            // }
            // else if (ptex.match(/[A-Z]/g)){
            //     big_eror.innerHTML=' * Password must be Small Charators';
            //     number_eror.innerHTML=' * Password must be Number';
            //     sign_eror.innerHTML=' * Password must be sign';
            // }
            // else if (ptex.match(/[0-9]/g)){
            //     big_eror.innerHTML=' * Password must be Big Charators';
            //     number_eror.innerHTML=' * Password must be Small Charators';
            //     sign_eror.innerHTML=' * Password must be sign';
            // }
            // else if (ptex.match(/[!@#$%^&*()<>~]/g)){
            //     big_eror.innerHTML=' * Password must be Big Charators';
            //     number_eror.innerHTML=' * Password must be Small Charators';
            //     sign_eror.innerHTML=' * Password must be Number';
            // }
           
                
            
            
        }
    }

}
