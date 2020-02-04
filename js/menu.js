var verificar;
var jsonObjResp;
var type="";
var nombre="";
var code_emp="";
var code_mgf="";
var first_mg="";
var second_mg= "";
var clasificadosGlobal="";
var arrayAreadeServicio=[];
var codeAreaGlobal="";
var serv_areaGlobal="";
var l2ArrayGlobal="";
var l3ArrayGlobal = "";
var l4ArrayGlobal= "";
var complexityArrayGlobal="";
var pocisionLevel2Matriz="";
var pocisionLevel3Matriz="";
var pocisionLevel4Matriz="";
var _idGlobal="";
var descriptionGlobalV="";
var tab_codeGlobal="";
var globalUpdated_by;
var bandera;

function sessionCheck(){
    jsonObjResp=localStorage.getItem('user_log');
    document.getElementById('nombreUsuario').innerHTML="HOLA, "+jsonObjResp;
    if (jsonObjResp==null || jsonObjResp==''){
        alert("Tu sesión ha expirado por favor ingresa de nuevo.");
        window.location.replace("login.html");
    }

}

function sessionCheckLogin(){
   jsonObjResp=localStorage.getItem('user_log');
   if (jsonObjResp==null || jsonObjResp==''){

   }else{
    window.location.replace("menu.html");
   }
}

function sessionCheckUsuario(){
    jsonObjResp=localStorage.getItem('user_log');
    if (jsonObjResp==null || jsonObjResp==''){
        alert("Tu sesión ha expirado por favor ingresa de nuevo.");
        window.location.replace("login.html");
    }
    
    document.getElementById('nombreUsuario').innerHTML="HOLA, "+jsonObjResp;
    bajarDatosUsuario();
    document.getElementById("btnAsignados").disabled = false;
    

}

function bajarDatosUsuario(){
    code_emp=localStorage.getItem('codigo_empleado');
    var db = new PouchDB('https://30c9725e-d514-4df5-b504-1dda6e7aecc1-bluemix:e1b79edf217a210f39a7c96bdb7527b80b34818440b760a85c2d97038e35e8df@30c9725e-d514-4df5-b504-1dda6e7aecc1-bluemix.cloudant.com/empleados_mts');
    db.find({
        selector:{
            _id:{ "$gt":0},
            code_emp: code_emp
        },
        fields: ['type','nombre','code_emp','code_mgf','first_mg','second_mg', '_id', 'clasificados','last_update',"updated_by","code_area","description","serv_area","tab_code","l2","l3","l4","complexity"],
        sort:['_id']

    }).then(function (result) {
        console.log("res "+result);
        var i = 0;
        var len = result.docs.length;
        for (i = 0; i < len; i++) {
            _idGlobal=result.docs[i]._id;
            type= result.docs[i].type;
            nombre=result.docs[i].nombre;
            code_emp = result.docs[i].code_emp;
            code_mgf= result.docs[i].code_mgf;
            first_mg= result.docs[i].first_mg;
            second_mg= result.docs[i].second_mg;
            clasificadosGlobal=result.docs[i].clasificados;
            last_update1=result.docs[i].last_update;
            updated_b1=result.docs[i].updated_by;
            code_area1=result.docs[i].code_area;
            description1=result.docs[i].description;
            serv_area1=result.docs[i].serv_area;
            tab_code1=result.docs[i].tab_code;
            l2_1=result.docs[i].l2;
            l3_1=result.docs[i].l3;
            l4_1=result.docs[i].l4;
            complexity1=result.docs[i].complexity;
            globalUpdated_by=updated_b1;
            console.log(code_area1);
            console.log(description1);
            console.log(serv_area1);
            console.log(tab_code1);
            console.log(l2_1);
            console.log(l3_1);
            console.log(l4_1);
            console.log(complexity1);
        }

        document.getElementById('nombre').innerHTML=nombre;
        document.getElementById('code_emp').innerHTML=code_emp;
        document.getElementById('code_mgf').innerHTML=code_mgf;
        document.getElementById('first_mg').innerHTML=first_mg;
        document.getElementById('second_mg').innerHTML=second_mg;
        if((last_update1=="")|| (last_update1==' ')|| (last_update1==null)|| (updated_b1=="") || (updated_b1==' ')|| (updated_b1==null) ){
            cargaDropdownAreaServicio();
        } else{
            bandera=false;
            console.log("Entra a LLenano");
            eliminaDrop('selectAreaServicio');
            eliminaDrop('selectNivel2');
            eliminaDrop('selectNivel3');
            eliminaDrop('selectNivel4');
            eliminaDrop('complexity');
            codeAreaGlobal=code_area1;
            tab_codeGlobal=tab_code1;
            descriptionGlobalV=description1;
            serv_areaGlobal=serv_area1;
            $("#selectAreaServicio").append('<option selected>'+description1+'</option>');
            $("#selectNivel2").append('<option value="l2"selected>'+l2_1+'</option>');
            $("#selectNivel3").append('<option value="l3"selected>'+l3_1+'</option>');
            $("#selectNivel4").append('<option value="l3"selected>'+l4_1+'</option>');
            $("#complexity").append('<option selected>'+complexity1+'</option>');
            cargaDropdownAreaServicio();
        }
    
    }).catch(function (err) {
            console.log("err " + err);
            });
}

function cargaDropdownAreaServicio(){
    var db = new PouchDB('https://30c9725e-d514-4df5-b504-1dda6e7aecc1-bluemix:e1b79edf217a210f39a7c96bdb7527b80b34818440b760a85c2d97038e35e8df@30c9725e-d514-4df5-b504-1dda6e7aecc1-bluemix.cloudant.com/mts');
    db.find({
        selector:{
            _id:{ "$gt":0}
        },
        fields: ['serv_area','tab_code','description',"code_area"],
        sort:['_id']

    }).then(function (result) {
        var i = 0;
        var len = result.docs.length;
        for (i = 0; i < len; i++) {
            serv_area=result.docs[i].serv_area;
            code_area=result.docs[i].code_area;
            tab_code=result.docs[i].tab_code;
            description = result.docs[i].description;
            var descriptionArray=[];
            var codeArray=[];
            descriptionArray=separarString(description,";");
            codeArray=separarString(tab_code, ";" );
            $("#selectAreaServicio").append('<optgroup id="'+code_area+'" label="'+serv_area+'">');
            for(j=0; j<descriptionArray.length; j++){
                var posicion=code_area+"-"+j;
                $("#"+code_area).append('<option id="'+posicion+'" value="'+codeArray[j]+'">'+descriptionArray[j]+'</option>');
            }
            $("#selectAreaServicio").append('</optgroup>');
        }

    }).catch(function (err) {
            console.log("err " + err);
            });
}


function selectAreaServicio(){
    if(bandera==false){
        var select = document.getElementById("selectAreaServicio");
        var length = select.options.length;
        select.options[1] = null;
    }
    bandera=true;
    var selectArea = document.getElementById("selectAreaServicio");
    var selectAreaNombre = selectArea.options[selectArea.selectedIndex].value;
    var selectPosicion= selectArea.options[selectArea.selectedIndex].id;
    serv_areaGlobal=selectArea.options[selectArea.selectedIndex].parentNode.label;
    var code_area=selectArea.options[selectArea.selectedIndex].parentNode.id;
    descriptionGlobalV=selectArea.options[selectArea.selectedIndex].innerHTML;
    codeAreaGlobal=code_area;
    tab_codeGlobal=selectAreaNombre;
    //console.log(code_area);
    //console.log(selectPosicion);
    var union=code_area+"-";
    var posicion=separarString(selectPosicion,union);
    pocisionLevel2Matriz=posicion[1];
    var db = new PouchDB('https://30c9725e-d514-4df5-b504-1dda6e7aecc1-bluemix:e1b79edf217a210f39a7c96bdb7527b80b34818440b760a85c2d97038e35e8df@30c9725e-d514-4df5-b504-1dda6e7aecc1-bluemix.cloudant.com/mts');
    db.find({
        selector:{
            _id:{ "$gt":0},
            code_area: code_area
        },
        fields: ['serv_area','tab_code','description','l2','l3','l4', 'complexity'],
        sort:['_id']
    }).then(function (result) {
        console.log("res "+result);
        var i = 0;
        var len = result.docs.length;
        for (i = 0; i < len; i++) {
            serv_area= result.docs[i].serv_area;
            tab_code=result.docs[i].tab_code;
            description = result.docs[i].description;
            l2=result.docs[i].l2;
            l3=result.docs[i].l3;
            l4=result.docs[i].l4;
            complexity= result.docs[i].complexity;
            l2ArrayGlobal=result.docs[i].l2;
            l3ArrayGlobal =result.docs[i].l3;
            l4ArrayGlobal=result.docs[i].l4;
            complexityArrayGlobal=result.docs[i].complexity;
            var l2Array=[]; 
            console.log(pocisionLevel2Matriz);
            l2Array=separarString(l2,";&&;");
            console.log(l2Array);
            l2ArrayOpcion=separarString(l2Array[pocisionLevel2Matriz], ";")
            eliminaDrop('selectNivel2');
            eliminaDrop('selectNivel3');
            eliminaDrop('selectNivel4');
            eliminaDrop('complexity');
        
            for(k=0; k<l2ArrayOpcion.length; k++){
                $("#selectNivel2").append('<option id="'+ k+'" value="l2">'+l2ArrayOpcion[k]+'</option>');
            }
        
            //l3Array=separarString(l3, ";" );
            // for(k=0; k<l3Array.length; k++){
            //     console.log(l3Array[k]);
            //     $("#selectNivel3").append('<option value="l3">'+l3Array[k]+'</option>');
            // }
            // l4Array=separarString(l4,";");
            // for(l=0; l<l4Array.length; l++){
            //     console.log(l4Array[l]);
            //     $("#selectNivel2").append('<option value="l4">'+l4Array[l]+'</option>');
            // }

            // complexityArray=separarString(complexity, ";" );
            // for(m=0; m<complexityArray.length; m++){
            //     console.log(complexityArray[m]);
            //     $("#complexity").append('<option value="complexity">'+complexityArray[m]+'</option>');
            // }
        }
    }).catch(function (err) {
            console.log("err " + err);
            });

}

function selectLevel2(){
    var selectArea = document.getElementById("selectNivel2");
    var selectAreaNombre = selectArea.options[selectArea.selectedIndex].value;
    //pocisionLevel3Matriz=selectArea.options[selectArea.selectedIndex].id;
    var l3Array=separarString(l3ArrayGlobal,";&&;");
    var l3ArrayOpcion=separarString(l3Array[pocisionLevel2Matriz], ";");
    eliminaDrop('selectNivel3');
    eliminaDrop('selectNivel4');
    eliminaDrop('complexity');
    
    for(k=0; k<l3ArrayOpcion.length; k++){
        $("#selectNivel3").append('<option id="'+ k+'" value="l3">'+l3ArrayOpcion[k]+'</option>');
    }


}

function selectLevel3(){
    eliminaDrop('selectNivel4');
    eliminaDrop('complexity');
    var selectArea = document.getElementById("selectNivel3");
    var selectAreaNombre = selectArea.options[selectArea.selectedIndex].value;
    pocisionLevel4Matriz=selectArea.options[selectArea.selectedIndex].id;
    var l4Array=separarString(l4ArrayGlobal,";&&;");
    var l4ArrayOpcion=separarString(l4Array[pocisionLevel2Matriz], ";$$;");
    var l4ArrayOpcionUnica=separarString(l4ArrayOpcion[pocisionLevel4Matriz], ";");
    console.log("Este es el array"+l4ArrayOpcionUnica);
    for(k=0; k<l4ArrayOpcionUnica.length; k++){
    $("#selectNivel4").append('<option id="'+ k+'" value="l4">'+l4ArrayOpcionUnica[k]+'</option>');
    }
}

function selectComplexity(){
    eliminaDrop('complexity');
    var selectArea = document.getElementById("selectNivel4");
    var selectAreaNombre = selectArea.options[selectArea.selectedIndex].value;
    pocisionLevel5Matriz=selectArea.options[selectArea.selectedIndex].id;
    var l5Array=separarString(complexityArrayGlobal,";&&;");
    var l5ArrayOpcion=separarString(l5Array[pocisionLevel2Matriz], ";$$;");
    var l5ArrayOpcionUnica=separarString(l5ArrayOpcion[pocisionLevel5Matriz], ";");
    for(k=0; k<l5ArrayOpcionUnica.length; k++){
        console.log(l5ArrayOpcionUnica[k]);
        $("#complexity").append('<option id="'+ k+'">'+l5ArrayOpcionUnica[k]+'</option>');
    }

}



function separarString(string, variable){
    var ResultArray;
    ResultArray=string.split(variable);
    if(ResultArray.length>1){
    return ResultArray;
    }else if(ResultArray.length<=1){
        ResultArray[0]=string;
        return ResultArray;      
    }
}



function eliminaDrop(item){
    var select = document.getElementById(item);
    var length = select.options.length;
    for (i = 1; i<=length; i++) {
        select.options[i] = null;
    }
}


function guardarDatos(){
    var nombre= document.getElementById('nombre').innerHTML;
    var code_emp=document.getElementById('code_emp').innerHTML;
    var code_mgf=document.getElementById('code_mgf').innerHTML;
    var first_mg=document.getElementById('first_mg').innerHTML;
    var second_mg=document.getElementById('second_mg').innerHTML;
    var type="empleado";
    var clasificados=clasificadosGlobal;
    var last_update=getTime();
    var updated_by=jsonObjResp;
    var code_area=codeAreaGlobal;
    var serv_area=serv_areaGlobal;
    var description=descriptionGlobalV;
    var tab_code=tab_codeGlobal;
    var l1=obtenerDatos('selectAreaServicio');
    var l2=obtenerDatos('selectNivel2');
    var l3=obtenerDatos('selectNivel3');
    var l4=obtenerDatos('selectNivel4');
    var complexity=obtenerDatos('complexity');
    console.log("nombre"+nombre);
    console.log("code_emp"+code_emp);
    // console.log("code_mgf"+code_mgf);
    // console.log("first_mg"+first_mg);
    // console.log("second_mg"+second_mg);
    // console.log("type"+type);
    // console.log("clasificados"+clasificados);
    // console.log("last_update"+last_update);
    // console.log("updated_by"+updated_by);
    // console.log("code_area"+code_area);
    // console.log("serv_area"+serv_area);
    // console.log("description"+description);
    // console.log("tab_code"+tab_code);
    // console.log("l2"+l2);
    //console.log("l3"+l3);
    //console.log("l4"+l4);
    //console.log("complexity"+complexity);
    if((l1==="Selecciona Area de Servicio") ||(l2==="Selecciona Nivel 3") || (l3==="Selecciona Nivel 3")|| (l4==="Selecciona Nivel 4") || (complexity==="Selecciona una complejidad")){
        document.getElementById("btnAsignados").disabled = false;
        window.alert("Debes seleccionar un Area de servicio y los niveles");
    } else{
        console.log("Salio");
        document.getElementById("btnAsignados").disabled = true;
        var datos = {
            _id: new Date().toISOString(),
            type:type,
            code_emp:code_emp,
            nombre:nombre,
            code_mgf:code_mgf,
            first_mg:first_mg,
            second_mg:second_mg,
            clasificados:clasificados,
            last_update:last_update,
            updated_by:updated_by,
            code_area:code_area,
            description:description,
            serv_area:serv_area,
            tab_code:tab_code,
            l2:l2,
            l3:l3,
            l4:l4,
            complexity:complexity
        };
        var db = new PouchDB('https://30c9725e-d514-4df5-b504-1dda6e7aecc1-bluemix:e1b79edf217a210f39a7c96bdb7527b80b34818440b760a85c2d97038e35e8df@30c9725e-d514-4df5-b504-1dda6e7aecc1-bluemix.cloudant.com/empleados_mts');
        db.get(_idGlobal).then(function (doc) {
        setTimeout(db.remove(doc._id, doc._rev), 10000);
        return db.put(datos).then(function (result) {
            localStorage.setItem('cod_emp',code_emp );
            location.replace("actividades.html");
        }).catch(function (err) {
            console.log("Error:"+err);
        });
        });

    }
} 
   


function getTime(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;
    return today;
}

function obtenerDatos(variable){
    var selectArea = document.getElementById(variable);
    var opcionSeleccionadaDescripcion = selectArea.options[selectArea.selectedIndex].innerHTML;
    return opcionSeleccionadaDescripcion;
}