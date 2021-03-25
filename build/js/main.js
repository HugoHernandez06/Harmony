
var splash, registro, login , inicio, agendarcita, citaagendada, procedimientos;
var btn_iniciar_Sesion, btn_register, btnsInicio, btn_login, btn_home, btns_volver, btn_agendarcita, btn_procedimientos, btn_citaagendada;
var secciones;

window.onload = ()=>{
  
  crearReferencias();
  setTimeout(irLogin,1500);
  agregarEventos();
  initLocal();
  
}
function crearReferencias(){ //Saco el id de la seccion y del boton
  
  splash = document.getElementById("splash");
  login = document.getElementById("login");
  registro = document.getElementById("registro");
  inicio = document.getElementById("inicio");
  //Home
  agendarcita = document.getElementById("agendarcita");
  citaagendada = document.getElementById("citaagendada");
  procedimientos = document.getElementById("procedimientos");

  secciones = [splash, registro, login , inicio, agendarcita, citaagendada, procedimientos];//, buscarcita, paneladmin, adminproce, adminempleados, empleadospass, adminpass];
  
  //Botones de volver
    btnIngresar = document.getElementById("btnIngresar");
    btnRegistrar = document.getElementById("btnRegistrar");
    btnContraseña = document.getElementById("btnContraseña");
    btnRegistrarse = document.getElementById("btnRegistrarse");



  //btns_volver = document.getElementById("btn_volver"); //Volver al home
  btns_volver = document.querySelectorAll(".volver"); //Volver al home
  btns_volverAgendar = document.querySelectorAll(".volverAgendar"); //Volver al panel admin
  
  btnsInicio = document.querySelectorAll(".btnInicio");
  btnsLogin = document.querySelectorAll(".btnLogin");

  //btns_volverAdmin = document.querySelectorAll(".volverAdmin"); //Volver al panel admin
  btn_register = document.getElementById("btn_register");
  btn_login = document.getElementById("btn_login");
  btn_iniciar_Sesion = document.getElementById("btn_iniciar_Sesion");  
  //Boton de entrar despues de logearse
  btn_home = document.getElementById("btn_home");
  //Botones del HOME
  btn_agendarcita = document.getElementById("btn_agendarcita");
  btn_citaagendada = document.getElementById("btn_citaagendada");
  //btn_buscarcita = document.getElementById("btn_buscarcita");
  btn_procedimientos = document.getElementById("btn_procedimientos");
 // btn_paneladmin = document.getElementById("btn_paneladmin");
}
function agregarEventos() //Redireccion el destino al dar clic al boton
{
  btnRegistrar.addEventListener("click",irRegistro);
  //btn_iniciar_Sesion.addEventListener("click",()=>{irA(login);});
  //btn_login.addEventListener("click",()=>{irA(login);});
  //btn_home.addEventListener("click",()=>{irA(inicio);});
  btn_agendarcita.addEventListener("click",()=>{irA(agendarcita);});
  btn_citaagendada.addEventListener("click",()=>{irA(citaagendada);});
  btn_procedimientos.addEventListener("click",()=>{irA(procedimientos);});
  
  for(var i=0;i<=2;i++)
  {
      btns_volver[i].addEventListener("click",irInicio);
      //btn_login[i].addEventListener("click",()=>{irA(login);});
      //btns_volverAgendar[i].addEventListener("click",()=>{irA(agendarcita);});
  }
  for(var i=0; i<=4; i++){
     //btnsInicio[i].addEventListener("click",irInicio);
}
for(var i=0; i<=1; i++){
    //btnsLogin[i].addEventListener("click",irLogin);
}
}
function ocultarSecciones(){
  for(i in secciones)
  {
    secciones[i].classList.add("ocultar");  
  }
}
function irA(seccion){
  ocultarSecciones();
  seccion.classList.remove("ocultar");
}

function irLogin(){
  ocultarSecciones();
  login.classList.remove("ocultar");
}

function irInicio(event){
  ocultarSecciones();
  inicio.classList.remove("ocultar");
}

function irRegistro(event){
  event.preventDefault()
  ocultarSecciones();
  registro.classList.remove("ocultar");
}
