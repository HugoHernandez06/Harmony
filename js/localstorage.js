
function store(){

    var name = document.getElementById('username');
    var pw = document.getElementById('pw');
    var numbers = /[0-9]/g;

    if(name.value.length == 0){
      //  alert('Por favor ingrese un email');

    }else if(pw.value.length == 0){
        //alert('Por favor ingrese una contraseña');
    }
    else if(name.value.length == 0 && pw.value.length == 0){
      //  alert('Por favor ingrese un email & una contraseña');

    }
    else if(!pw.value.match(numbers)){
       // alert('please add 1 number');

    }
    else{
        localStorage.setItem('username', name.value);
        localStorage.setItem('pw', pw.value);
        //alert('Cuenta creada!!');
    }
}

//checking
function check(){
    var storedName = localStorage.getItem('username');
    var storedPw = localStorage.getItem('pw'); 
    
    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    
    if(userName.value == storedName && userPw.value == storedPw){
        btn_home.addEventListener("click",()=>{irA(login);});
       // alert('Estas logeado!!');
    }
    else{
        //btn_home.addEventListener("click",()=>{irA(login);});
        //alert('Error en el login');
    }
}
