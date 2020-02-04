var comas = "'";
var contador;
var code_emp="";
var codigo="";
var nombre_usuario="";
var manager_usuario="";
var contador=0;
var codeGerente="";


function iniciarPagina(){
//    document.getElementById("tabla").style.visibility="hidden";
    document.getElementById("btnAsignados").style.visibility="hidden";
    document.getElementById("btnNoAsignados").style.visibility="hidden";
    document.getElementById('myTable_clasificados').style.display = "none";
    document.getElementById('myTable_noclasificados').style.display = "none";

    var jsonObjResp;
    jsonObjResp=localStorage.getItem('user_log');
    codeGerente=localStorage.getItem('codeUser_log');
    //user_log=localStorage.getItem('user_log');
    document.getElementById('nombreUsuario').innerHTML="HOLA, "+jsonObjResp;
    if (jsonObjResp==null || jsonObjResp==''){
        alert("Tu sesión ha expirado por favor ingresa de nuevo.");
        window.location.replace("login.html");
    }


var db;

db = new PouchDB('https://30c9725e-d514-4df5-b504-1dda6e7aecc1-bluemix:e1b79edf217a210f39a7c96bdb7527b80b34818440b760a85c2d97038e35e8df@30c9725e-d514-4df5-b504-1dda6e7aecc1-bluemix.cloudant.com/empleados_mts');
db.find({
selector: {
_id: {
"$gt": 0
},code_mgf:codeGerente,
},
fields: ['_id', 'code_emp', 'nombre','code_mgf','first_mg','second_mg', 'clasificados'],
sort: ['_id']

}).then(function (result) {
console.log(result);
var i = 0;
var len = result.docs.length;

if (len == 0) {
    'use strict';
}

/*CLASIFICADOS*/
$("table#lista_generalclasificados").empty();
$("table#lista_generalclasificados").append('<thead><tr style="background-color: #35495e; font-family: ' + comas + 'sans-serif' + comas + ', Bold; font-size: 14px; color: white; "><th style="color:white; text-align: center; ">ID</th><th style="color:white; text-align: center;">Nombre</th><th style="color:white; text-align: center;">Codigo Manager</th><th style="color:white; text-align: center;">First Manager</th><th style="color:white; text-align: center;">Second Manager</th><th style="color:white; text-align: center;">Status</th><th style="color:white; text-align: center;">SELECT</th></tr></thead>');


    /*CLASIFICADOS*/
$("table#lista_generalnoclasificados").empty();
$("table#lista_generalnoclasificados").append('<thead><tr style="background-color: #35495e; font-family: ' + comas + 'sans-serif' + comas + ', Bold; font-size: 14px; color: white; "><th style="color:white; text-align: center; ">ID</th><th style="color:white; text-align: center;">Nombre</th><th style="color:white; text-align: center;">Codigo Manager</th><th style="color:white; text-align: center;">First Manager</th><th style="color:white; text-align: center;">Second Manager</th><th style="color:white; text-align: center;">Status</th><th style="color:white; text-align: center;">SELECT</th></tr></thead>');


for(contador = 0; contador < len; contador++) {

    _id= result.docs[contador]._id;
    code_emp= result.docs[contador].code_emp;
    nombre= result.docs[contador].nombre;
    code_mgf= result.docs[contador].code_mgf;
    first_mg= result.docs[contador].first_mg;
    second_mg= result.docs[contador].second_mg;
    clasificados=result.docs[contador].clasificados;




    if(clasificados == "si" || clasificados=="SI"){
        //<td style="text-align: left; font-family:' + comas + 'sans-serif' + comas + ';">' + User + '</td> RUTINA PARA AGREGAR NUEVA COLUMNA DE INFO
        $("table#lista_generalclasificados").append('<tr><td style="text-align: left; color:black; font-family:' + comas + 'sans-serif' + comas + ';">' + code_emp.toUpperCase() + '</td><td id=idRequester' + contador + ' style="text-align: left; color:black; font-family:' + comas + 'sans-serif' + comas + ';text-align: left;">' + nombre.toUpperCase()  +'</td><td style="text-align: left; color:black; font-family:' + comas + 'sans-serif' + comas + ';text-align: left;">' +  code_mgf.toUpperCase() + '</td><td style="text-align: left; color:black; font-family:' + comas + 'sans-serif' + comas + ';text-align: left;">' + first_mg.toUpperCase()  + '</td><td style="text-align: left; color:black; font-family:' + comas + 'sans-serif' + comas + ';text-align: left;">' +  second_mg.toUpperCase() +  '</td><td style="text-align: left; color:black; font-family:' + comas + 'sans-serif' + comas + ';text-align: left;">' + clasificados.toUpperCase() + '</td><td style="text-align:center;"><button id="' +contador+code_emp + '"name="idcode" onclick="classify(this.id);" style="width:30px; height:30px;"><i class=" material-icons" style="color: black; font-size:14px;">&#x1f50e;</i></button></td></tr>');
    }



    else if(clasificados == "no" || clasificados == "NO"){
        //<td style="text-align: left; font-family:' + comas + 'sans-serif' + comas + ';">' + User + '</td> RUTINA PARA AGREGAR NUEVA COLUMNA DE INFO
        $("table#lista_generalnoclasificados").append('<tr><td style="text-align: left; color:black; font-family:' + comas + 'sans-serif' + comas + ';">' + code_emp.toUpperCase() + '</td><td id=idRequester' + contador + ' style="text-align: left; color:black; font-family:' + comas + 'sans-serif' + comas + ';text-align: left;">' + nombre.toUpperCase()  +'</td><td style="text-align: left; color:black; font-family:' + comas + 'sans-serif' + comas + ';text-align: left;">' +  code_mgf.toUpperCase() + '</td><td style="text-align: left; color:black; font-family:' + comas + 'sans-serif' + comas + ';text-align: left;">' + first_mg.toUpperCase()  + '</td><td style="text-align: left; color:black; font-family:' + comas + 'sans-serif' + comas + ';text-align: left;">' +  second_mg +  '</td><td style="text-align: left; color:black; font-family:' + comas + 'sans-serif' + comas + ';text-align: left;">' + clasificados.toUpperCase()+ '</td><td style="text-align:center;"><button id="' +"d"+code_emp+ '"name="idcode" onclick="classify(this.id);" style="width:30px; height:30px;"><i class=" material-icons" style="color: black; font-size:14px;">&#x1f50e;</i></button></td></tr>');
    }
}


}).catch(function (err) {
console.log(err);
});
}



function btnAsignados(){
    document.getElementById("myTable_clasificados").style.display="block";
    document.getElementById("myTable_noclasificados").style.display="none";
    document.getElementById('myTable_clasificados').style.display = "block";
    document.getElementById('myTable_noclasificados').style.display = "none";

}

function btnNoAsignados(){
    document.getElementById('myTable_clasificados').style.display = "none";
    document.getElementById('myTable_noclasificados').style.display = "block";
    document.getElementById("myTable_clasificados").style.display="none";
    document.getElementById("myTable_noclasificados").style.display="block";


}

function btnMisRecursos(){
    document.getElementById("btnAsignados").style.visibility="visible";
    document.getElementById("btnNoAsignados").style.visibility="visible";
}


function classify(idBoton){
    console.log(idBoton);
    button_name=idBoton
    var i, len;
    len = idBoton.length;
    var new_code="";

    if(idBoton.length==7){ //para la altura de 10
            new_code=idBoton.slice(1,7)
            console.log(new_code);
    }

    else if(idBoton.length==9){ //para a la altura de 100
        new_code=idBoton.slice(1,9)
        console.log(new_code);
    }

    else if(idBoton.length==10){ //para a la altura de 100
        new_code=idBoton.slice(0,10)
        console.log(new_code);
    }

    var db;

    db = new PouchDB('https://30c9725e-d514-4df5-b504-1dda6e7aecc1-bluemix:e1b79edf217a210f39a7c96bdb7527b80b34818440b760a85c2d97038e35e8df@30c9725e-d514-4df5-b504-1dda6e7aecc1-bluemix.cloudant.com/empleados_mts');
    db.find({
    selector: {_id: {"$gt": 0},code_emp:new_code,},
    fields: ['_id', 'code_emp', 'nombre','code_mgf','first_mg','second_mg'],
    sort: ['_id']

    }).then(function (result) {
    console.log(result);
    var i = 0;
    var len = result.docs.length;


    for(contador = 0; contador < len; contador++) {

        localStorage.setItem('nombre_empleado',result.docs[contador].nombre);
        localStorage.setItem('codigo_empleado',result.docs[contador].code_emp);
        localStorage.setItem('manager_empleado',result.docs[contador].first_mg);
        localStorage.setItem('code_manager',result.docs[contador].code_mgf);
        localStorage.setItem('second_manager',result.docs[contador].second_mg);


    }



    }).catch(function (err) {
        console.log(err);
        });

     setTimeout(function(){ location.replace("infoUsuario.html")}, 2000);


}
