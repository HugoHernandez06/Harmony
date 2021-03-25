var userL_txt, passwL_txt, nameR_txt, emailR_txt, userR_txt, passwR_txt, confirpasswR_txt;
var contenedor = [], usuarios = [];

function initLocal(){
    usuarios = JSON.parse(localStorage.getItem("usuarios"))==null ? usuarios=[]: JSON.parse(localStorage.getItem("usuarios"));
    initRegistro();
    initLogin();
}

function initRegistro(){
    nameR_txt = document.getElementById("nameregistro");
    emailR_txt = document.getElementById("emailregistro");
    userR_txt = document.getElementById("userregistro");
    passwR_txt = document.getElementById("passwregistro");
    confirpasswR_txt = document.getElementById("confirpasswregistro");
    datosperfil = document.getElementById("datosperfil");

    btnRegistrarse.addEventListener("click",registrar);
}

function registrar(){
    if(nameR_txt.value=="" || emailR_txt.value=="" || userR_txt.value=="" || passwR_txt.value=="" || confirpasswR_txt.value==""){
        alert("Debe llenar todos los campos");
        return false;
    }

    if(passwR_txt.value != confirpasswR_txt.value){
        alert("Las contraseñas no coinciden");
        return false;
    }

    var usuario = {};
    usuario.name = nameR_txt.value;
    usuario.email = emailR_txt.value;
    usuario.user = userR_txt.value;
    usuario.passw = passwR_txt.value;

    if(!validarUsuario()){
        alert("Ya existe ese nombre de usuario");
        return false;
    }

    usuarios.push(usuario);
    localStorage.setItem("usuarios",JSON.stringify(usuarios));
    //adecuarCampos(usuario);
    irInicio();
}

function validarUsuario(){
    for(var i in usuarios){
        if(usuarios[i].user == userR_txt.value){return false;}
    }
    return true;
}



function initLogin(){
    userL_txt = document.getElementById("userlogin");
    passwL_txt = document.getElementById("passwlogin");

    btnIngresar.addEventListener("click",iniciarSesion);
}

function iniciarSesion(){
    if(userL_txt.value=="" || passwL_txt.value==""){
        alert("Ingrese usuario y contraseña");
        return false;
    }

    for(var i in usuarios){
        if(usuarios[i].user == userL_txt.value && usuarios[i].passw == passwL_txt.value){
            //adecuarCampos(usuarios[i]);
            irInicio();
            return true;
        }
    }
    alert("Usuario y/o contraseña incorrectos");
}
