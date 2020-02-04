

function iniciarPagina(){
    document.getElementById("tabla").style.visibility="hidden";
    document.getElementById("btnAsignados").style.visibility="hidden";
    document.getElementById("btnNoAsignados").style.visibility="hidden";
    var jsonObjResp;
    jsonObjResp=localStorage.getItem('user_log');
    document.getElementById('nombreUsuario').innerHTML="HOLA, "+jsonObjResp;
    if (jsonObjResp==null || jsonObjResp==''){
        alert("Tu sesión ha expirado por favor ingresa de nuevo.");
        window.location.replace("login.html");
    }

    
}

function btnAsignados(){
    document.getElementById("tabla").style.visibility="hidden";
    document.getElementById("tabla").style.visibility="visible";
}

function btnMisRecursos(){
    document.getElementById("btnAsignados").style.visibility="visible";
    document.getElementById("btnNoAsignados").style.visibility="visible";
}

function info(){
    window.location.href = 'infoUsuario.html';
}

