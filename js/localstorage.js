function store(){
    var nameU = document.getElementById('nameU');
    var pw = document.getElementById('pw');
    localStorage.setItem('nameU',nameU.value);
    localStorage.setItem('pw',pw.value);
}
//checking
function check(){
    // Register-Form
    var storedName = localStorage.getItem('nameU');
    var storedPw = localStorage.getItem('pw'); 
    
    // Login-Form
    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    
    // Check
    if(userName.value == storedName && userPw.value == storedPw){
        alert('Estas logeado!!');
        btn_home.addEventListener("click",()=>{irA(home);});
    }
    else{
        alert('Error en el login');
        btn_login.addEventListener("click",()=>{irA(login);});
    }
}
