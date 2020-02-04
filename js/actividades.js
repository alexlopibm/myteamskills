var _idGlobal="";
var type="";
var code_emp="";
var nombre="";
var code_mgf="";
var first_mg="";
var second_mg="";
var clasificados="";
var code_area ="";
var description="";
var serv_area="";
var tab_code="";
var l2="";
var l3 = "";
var l4="";
var complexity= "";
var last_update="";
var updated_by="";

//PARA LAS ACTIVIDADES
var activities=[];
var subactividades=[];
function sessionCheckUsuario(){
    jsonObjResp=localStorage.getItem('user_log');
    if (jsonObjResp==null || jsonObjResp==''){
        alert("Tu sesión ha expirado por favor ingresa de nuevo.");
        window.location.replace("login.html");
    }

    document.getElementById('nombreUsuario').innerHTML="HOLA, "+jsonObjResp;
    bajarDatosUsuario();



}

function bajarDatosUsuario(){
    code_emp=localStorage.getItem('codigo_empleado');
    var db = new PouchDB('https://30c9725e-d514-4df5-b504-1dda6e7aecc1-bluemix:e1b79edf217a210f39a7c96bdb7527b80b34818440b760a85c2d97038e35e8df@30c9725e-d514-4df5-b504-1dda6e7aecc1-bluemix.cloudant.com/empleados_mts');
    db.find({
        selector:{
            _id:{ "$gt":0},
            code_emp: code_emp
        },
        fields: ['type','nombre','code_emp','code_mgf','first_mg','second_mg', '_id', 'clasificados', 'code_area','description','serv_area','tab_code','l2','l3','l4','complexity','last_update','updated_by'],
        sort:['_id']

    }).then(function (result) {
        var i = 0;
        var len = result.docs.length;
        for (i = 0; i < len; i++) {
            _idGlobal=result.docs[i]._id;
            type= result.docs[i].type;
            code_emp = result.docs[i].code_emp;
            nombre=result.docs[i].nombre;
            code_mgf= result.docs[i].code_mgf;
            first_mg= result.docs[i].first_mg;
            second_mg= result.docs[i].second_mg;
            clasificados=result.docs[i].clasificados;
            code_area = result.docs[i].code_area;
            description= result.docs[i].description;
            serv_area= result.docs[i].serv_area;
            tab_code= result.docs[i].tab_code;
            l2=result.docs[i].l2;
            l3 = result.docs[i].l3;
            l4= result.docs[i].l4;
            complexity= result.docs[i].complexity;
            last_update= result.docs[i].last_update;
            updated_by= result.docs[i].updated_by;
        }

        document.getElementById('nombre').innerHTML=nombre;
        document.getElementById('code_emp').innerHTML=code_emp;
        document.getElementById('code_mgf').innerHTML=code_mgf;
        document.getElementById('first_mg').innerHTML=first_mg;
        document.getElementById('second_mg').innerHTML=second_mg;
        document.getElementById('area_servicio').innerHTML=serv_area;
        document.getElementById('code_area').innerHTML=code_area;
        document.getElementById('description').innerHTML=description;
        document.getElementById('tab_code').innerHTML=tab_code;
        document.getElementById('level2').innerHTML=l2;
        document.getElementById('level3').innerHTML=l3;
        document.getElementById('level4').innerHTML=l4;
        document.getElementById('complexity').innerHTML=complexity;
        document.getElementById('last_update').innerHTML=last_update;
        document.getElementById('updated_by').innerHTML=updated_by;

 //************************************************************************************************************************************************************//
    var db = new PouchDB('https://30c9725e-d514-4df5-b504-1dda6e7aecc1-bluemix:e1b79edf217a210f39a7c96bdb7527b80b34818440b760a85c2d97038e35e8df@30c9725e-d514-4df5-b504-1dda6e7aecc1-bluemix.cloudant.com/mts_backup');

    db.find({
        selector:{
            _id:{ "$gt":0},
            type:"cat_act",code:tab_code,level2:l2,level3:l3,level4:l4
        },
        fields: ['actividad','subactividad'],
        sort:['_id']

    }).then(function (result) {
        console.log(result)
        var i = 0;
        var len = result.docs.length;
        for (i = 0; i < len; i++) {
            activities.push(result.docs[i].actividad);
            subactividades.push(result.docs[i].subactividad);
            $("#bodyTable").append('<tr id="'+i+'"><td><div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="customCheck'+i+'" value="'+i+'_'+result.docs[i].actividad+'"checked><label class="custom-control-label" for="customCheck'+i+'">'+i+'</label></div></td><td>'+result.docs[i].actividad+'</td><td><div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="customCheckS'+i+'" value="'+i+'_'+result.docs[i].subactividad+'"checked><label class="custom-control-label" for="customCheckS'+i+'">"'+i+'"</label></div></td><td>'+result.docs[i].subactividad+'</td></tr>');
        }



    }).catch(function (err) {

            console.log("err " + err);

    });


    //************************************************************************************************************************************************************//

    }).catch(function (err) {
            console.log("err " + err);
    });

}

function actividades(){
    var classifyA="";
    var classifyS="";
    var act=[];
    var subact=[];
    for(var i =0; i < activities.length;i++){
        if(document.getElementById("customCheck"+i).checked == true){
           classifyA =document.getElementById("customCheck"+i).value.split("_")
//                 console.log(document.getElementById("customCheck"+i).value);
            act.push(classifyA[1])
           }

        if(document.getElementById("customCheckS"+i).checked == true){
           classifyS=document.getElementById("customCheckS"+i).value.split("_")
           subact.push(classifyS[1])
           }
    }

    var db = new PouchDB('https://30c9725e-d514-4df5-b504-1dda6e7aecc1-bluemix:e1b79edf217a210f39a7c96bdb7527b80b34818440b760a85c2d97038e35e8df@30c9725e-d514-4df5-b504-1dda6e7aecc1-bluemix.cloudant.com/empleados_mts');
    db.find({
        selector:{
            _id:{ "$gt":0},
            code_emp: code_emp
        },
        fields: ['type','nombre','code_emp','code_mgf','first_mg','second_mg', '_id', 'clasificados', 'code_area','description','serv_area','tab_code','l2','l3','l4','complexity','last_update','updated_by'  ],
        sort:['_id']

    }).then(function (result) {

        var data={
            _id: new Date().toISOString(),
            type:type,
            code_emp:code_emp,
            nombre:nombre,
            code_mgf:code_mgf,
            first_mg:first_mg,
            second_mg:second_mg,
            code_area:code_area,
            description:description,
            serv_area:serv_area,
            tab_code:tab_code,
            l2:l2,
            l3:l3,
            l4:l4,
            complexity:complexity,
            last_update:getTime(),
            updated_by:updated_by,
            activities:act,
            sub_activities:subact,
            clasificados:"si",
        }
            console.log(data)
            db.get(_idGlobal).then(function (doc) {
                db.remove(doc._id, doc._rev)             
                return db.put(data).then(function (result) {
                    window.alert("Se ha actualizado la información");
                    location.replace("misRecursos.html")
            }).catch(function (err) {
                console.log("Error:"+err);
            });
        });

    });

    //setTimeout(function(){location.replace("misRecursos.html")}, 1000);
    


}

function getTime(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;
    return today;
}


function regresarInfo(){
    window.location.replace("infoUsuario.html");
}