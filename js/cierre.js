function cerrar_sesion(){
    localStorage.removeItem('user_log');
    localStorage.removeItem('codeUser_log');
     setTimeout(function(){location.replace("index.html");}, 1000);
    
}