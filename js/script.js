function validarLogin() {
    let resp;
    resp=validarPassword();
    if (resp==false) {
        return false;
    }

    resp=validarCorreo();
    if (resp==false) {
        return false;
    }

    return true;
    
}


function validarPassword() {
    let pass1=document.getElementById("pwdPass").value;
    let pass2=document.getElementById("pwdConfirmPass").value;
    if (pass1==pass2) {
        return true;
    } else {
        //alert('Password Incorrecta');
        alert('Password Incorrecta');
        return false;
    }   
}

function validarCorreo() {
    let correo = document.getElementById("txtEmail").value;

    if (validarCorreo(correo)) {
        return true;
    } else {
        alert('Email Incorrecto');
        return false;
    }
}