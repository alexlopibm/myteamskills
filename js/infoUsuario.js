var nombre_emp="";
var codigo ="";
var nombre_manager="";
var SM="";
var CM="";

function infoUser(){
    var jsonObjResp;
    jsonObjResp=localStorage.getItem('user_log');
    document.getElementById('nombreUsuario').innerHTML="HOLA, "+jsonObjResp;
    if (jsonObjResp==null || jsonObjResp==''){
        alert("Tu sesión ha expirado por favor ingresa de nuevo.");
        window.location.replace("login.html");
    }
    
    nombre_emp = localStorage.getItem("nombre_empleado");
    codigo = localStorage.getItem("codigo_empleado");
    nombre_manager = localStorage.getItem("manager_empleado");
    CM = localStorage.getItem("code_manager");
    SM = localStorage.getItem("second_manager");

    document.getElementById('nombre').innerHTML=nombre_emp;
    document.getElementById('codeEmpleado').innerHTML=codigo;
    document.getElementById('firstManager').innerHTML=nombre_manager;
    document.getElementById('codeManager').innerHTML=CM;
    document.getElementById('secondManager').innerHTML=SM;
    
//    localStorage.removeItem("nombre_empleado");
//    localStorage.removeItem("codigo_empleado");
//    localStorage.removeItem("manager_empleado");
    
    console.log(nombre_emp);
    console.log(codigo);
    console.log(nombre_manager);
}
