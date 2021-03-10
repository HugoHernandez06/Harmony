
var splash, register, login , home, agendarcita, citaagendada, procedimientos;
//, buscarcita, paneladmin, adminempleados, adminproce, empleadospass, adminpass;
var btn_iniciar_Sesion, btn_register, btn_login, btn_home, btns_volver, btn_agendarcita, btn_procedimientos, btn_citaagendada;
// btns_volverAdmin, btn_buscarcita, btn_paneladmin, btn_adminempleados, btn_adminproce, btn_empleadospass, btn_adminpass;
var secciones;

//window.onload = init;
window.onload = ()=>{
  
  crearReferencias();
  agregarEventos();
  setTimeout(()=>{irA(login);},1500);
}

/*
function init()
{
  abrir.addEventListener("click",abrirVentana);
  cerrar.addEventListener("click",cerrarVentana);
}

function abrirVentana(){  
  ventana.className = "ligthbox animated fadeIn";
}

function cerrarVentana(){
  ventana.className = "ligthbox hidden";
}

*/
function crearReferencias(){ //Saco el id de la seccion y del boton
  
  splash = document.getElementById("splash");

  login = document.getElementById("login");
  register = document.getElementById("register");
  
  home = document.getElementById("home");
  //Home
  agendarcita = document.getElementById("agendarcita");
  citaagendada = document.getElementById("citaagendada");
  // buscarcita = document.getElementById("buscarcita");
  procedimientos = document.getElementById("procedimientos");
 /*
  paneladmin = document.getElementById("paneladmin");
  //Panel andmin
  adminproce = document.getElementById("adminproce");
  adminempleados = document.getElementById("adminempleados");
  adminpass = document.getElementById("adminpass");
  empleadospass = document.getElementById("empleadospass");
  */
  secciones = [splash, register, login , home, agendarcita, citaagendada, procedimientos];//, buscarcita, paneladmin, adminproce, adminempleados, empleadospass, adminpass];
  
  //Botones de volver
  //btns_volver = document.getElementById("btn_volver"); //Volver al home
  btns_volver = document.querySelectorAll(".volver"); //Volver al home
 // btns_volverAgendar = document.querySelectorAll(".volverAgendar"); //Volver al panel admin
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
/*
  //Botones del panel Admin
  btn_adminempleados = document.getElementById("btn_adminempleados");
  btn_adminproce = document.getElementById("btn_adminproce");
  btn_empleadospass = document.getElementById("btn_empleadospass");
  btn_adminpass = document.getElementById("btn_adminpass");
*/
}

function agregarEventos() //Redireccion el destino al dar clic al boton
{
  //btns_volver.addEventListener("click",()=>{irA(home);});
  //btns_volverAdmin.addEventListener("click",()=>{irA(paneladmin);});
  
  btn_register.addEventListener("click",()=>{irA(register);});
  btn_iniciar_Sesion.addEventListener("click",()=>{irA(login);});
  btn_login.addEventListener("click",()=>{irA(login);});
  btn_home.addEventListener("click",()=>{irA(home);});
  btn_agendarcita.addEventListener("click",()=>{irA(agendarcita);});
  btn_citaagendada.addEventListener("click",()=>{irA(citaagendada);});
  //btn_buscarcita.addEventListener("click",()=>{irA(buscarcita);});
  btn_procedimientos.addEventListener("click",()=>{irA(procedimientos);});
  //btn_paneladmin.addEventListener("click",()=>{irA(paneladmin);});
  //btn_adminempleados.addEventListener("click",()=>{irA(adminempleados);});
  //btn_adminproce.addEventListener("click",()=>{irA(adminproce);});
  //btn_empleadospass.addEventListener("click",()=>{irA(empleadospass);});
  //btn_adminpass.addEventListener("click",()=>{irA(adminpass);});
  
  for(var i=0;i<=2;i++)
  {
      btns_volver[i].addEventListener("click",()=>{irA(home);});
      //btn_login[i].addEventListener("click",()=>{irA(login);});
     // btns_volverAgendar[i].addEventListener("click",()=>{irA(agendarcita);});
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
  //splash.classList.add("ocultar"); //Classlist le agrega la clase ocultar al splash
  seccion.classList.remove("ocultar");
}


