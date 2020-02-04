var _id="";
var tool="";
var roll="";
var password="";
var mail="";
var approval_date="";
var manager="";
var user_name="";
var user="";
var approved_by="";
var phone="";
var user_name_n="";
var _rev="";
var code="";
/**************************************************************/
function data_extractor(){
  this.sessionCheck();
   user=localStorage.getItem("user_log");
    var button1=document.getElementById("btn");
    var button2=document.getElementById("btn2");
     var db = new PouchDB('https://30c9725e-d514-4df5-b504-1dda6e7aecc1-bluemix:e1b79edf217a210f39a7c96bdb7527b80b34818440b760a85c2d97038e35e8df@30c9725e-d514-4df5-b504-1dda6e7aecc1-bluemix.cloudant.com/users');

    db.find({
    selector:{
    _id:{ "$gt":0},
    user_name:user,
    tool:'team_skills',
    },
    fields: ['_id', 'user','tool','roll','password','user_name','approved_by','approval_date','mail','phone','manager','code'],
    sort:['_id']
    }).then(function (result) {
    var i = 0;
    var len = result.docs.length;
    for (i = 0; i < len; i++) {
        user=result.docs[i].user
        user_name= result.docs[i].user_name
        tool= result.docs[i].tool
        roll= result.docs[i].roll
        password= result.docs[i].password
        manager= result.docs[i].manager
        approval_date=result.docs[i].approval_date
        mail = result.docs[i].mail
        user=result.docs[i].user
        phone=result.docs[i].phone
        approved_by=result.docs[i].approved_by
        _id=result.docs[i]._id
        code=result.docs[i].code;
        //esta linea pasa la info
        console.log("Aquí voy");
        if(roll=="manager_ts" || roll=="Manager" || roll=="manager"){
            document.getElementById('new_user_name_t').value= user_name;
            document.getElementById('new_tool_t').value= tool;
            document.getElementById('new_roll_t').value= "Manager";
            document.getElementById('new_pass_t').value=password;
            document.getElementById('new_user_mail_t').value= mail;
            document.getElementById('approval_date_t').innerHTML= approval_date;
            document.getElementById('new_manager_t').value=manager;
            document.getElementById('new_phone_t').value=phone;
            document.getElementById('idCodeEmploye').innerHTML=code;

            button1.style.display="inline";
            button2.style.display="none";
        }
        else if(roll=="consult_ts" || roll=="Consulta" || roll=="consulta"){
             document.getElementById('user_name_t').innerHTML= user_name;
            document.getElementById('tool_t').innerHTML= tool;
            document.getElementById('roll_t').innerHTML= "Consulta";
            document.getElementById('new_pass_t').value=password;
            document.getElementById('user_mail_t').innerHTML= mail;
            document.getElementById('approval_date_t').innerHTML= approval_date;
            document.getElementById('manager_t').innerHTML=manager;
            document.getElementById('phone_t').innerHTML=phone;
            document.getElementById('idCodeEmploye').innerHTML=code;
                button1.style.display="none";
                button2.style.display="inline";
            }

    }
    }).catch(function (err) {
    console.log("err"+err);
    });
    return roll;
}

function update_infoinfra(){
    var a = $('#new_user_name_t')[0].value;
    var b = $('#new_user_mail_t')[0].value;
    var c = $('#new_tool_t')[0].value;
    var d = $('#new_roll_t')[0].value;
    var e = $('#new_manager_t')[0].value;
    var f = $('#new_pass_t')[0].value;
    var g = $('#new_phone_t')[0].value;
  if (!a||!b||!c||!d||!e||!f||!g) {

    alert("All fields must be filled")
  }
  else {
    var db = new PouchDB('https://30c9725e-d514-4df5-b504-1dda6e7aecc1-bluemix:e1b79edf217a210f39a7c96bdb7527b80b34818440b760a85c2d97038e35e8df@30c9725e-d514-4df5-b504-1dda6e7aecc1-bluemix.cloudant.com/users');
    var id_test= _id;
    id_ant = id_test;
    console.log("OLD ID");
    console.log(id_test);

   /*Para validad información de la password*/
   var val_pass=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    user_name_n=document.getElementById('new_user_name_t').value;
        var new_tool=document.getElementById('new_tool_t').value;
        var new_roll=document.getElementById("new_roll_t").value;
        var new_mail=document.getElementById('new_user_mail_t').value;
        var new_manager=document.getElementById('new_manager_t').value;
        var new_phone=parseInt(document.getElementById('new_phone_t').value);
//        var new_code=parseInt(document.getElementById('idCodeEmploye').value);
        //=> Variable con los datos a guardar
        var new_pass =document.getElementById('new_pass_t').value;
      console.log(phone);
 if((new_tool!=tool || new_roll!=roll || new_manager!=manager|| (new_phone!=phone && new_phone.toString().length==12)||user_name_n!=user_name || new_mail!=mail)&& (new_pass.match(val_pass) && new_pass==password)){
        var todo = {
        _id: new Date().toISOString(),
        user:user,
        tool:new_tool,
        roll:new_roll,
        password: new_pass,
        user_name: user_name_n,
        manager: new_manager,
        code:code,
        approved_by:approved_by,
        approval_date:approval_date,
        mail:new_mail,
        phone:new_phone.toString(),
        };
    ///=> Elimina id anterior y crea nueva
    db.get(id_ant).then(function (doc) {
    db.remove(doc._id, doc._rev);
    return db.put(todo).then(function (result) {
    var snackbarContainer = document.querySelector('#demo-toast-example');
    var data = {
    message: 'Guardado exitosamente'
    };
    }).catch(function (err) {
    });
    });
         alert("Your new information was successfully sent")
    }
     else if((new_tool==tool ||new_roll==roll ||new_manager==manager|| (new_phone==phone && new_phone.toString().length==12) ||user_name_n==user_name || new_mail==mail)&& (new_pass.match(val_pass) && new_pass!=password)){
        var todo = {
        _id: new Date().toISOString(),
        user:user,
        tool:new_tool,
        roll:new_roll,
        password: new_pass,
        user_name: user_name_n,
        manager: new_manager,
        code:code,
        approved_by:approved_by,
        approval_date:approval_date,
        mail:new_mail,
        phone:new_phone.toString(),
        };
    ///=> Elimina id anterior y crea nueva
    db.get(id_ant).then(function (doc) {
    db.remove(doc._id, doc._rev);
    return db.put(todo).then(function (result) {
    var snackbarContainer = document.querySelector('#demo-toast-example');
    var data = {
    message: 'Guardado exitosamente'
    };
    }).catch(function (err) {
    });
    });
    alert("Your new information was successfully sent")
    }
    else if((new_tool==tool ||new_roll==roll ||new_manager==manager||(new_phone==phone && new_phone.toString().length==12) ||user_name_n==user_name || new_mail==mail)&& (new_pass.match(val_pass) && new_pass==password)){
        if(new_phone.toString().length!=12){
            alert("The phone must be 12 digits")
        }
    alert("You don't have new information to send")
    }
    else{
        alert("The password must contanin at least one capital letter and one special character and must be 8 or more characters. Also, all the field must be filled")
    }

    console.log(todo);
  }
    setTimeout(function(){
        location.reload(true);
    },500);
}

function update_infouser(){
    var f = $('#new_pass_t')[0].value;
  if (!f) {

    alert("You must write the password")
  }
  else {
    var db = new PouchDB('https://30c9725e-d514-4df5-b504-1dda6e7aecc1-bluemix:e1b79edf217a210f39a7c96bdb7527b80b34818440b760a85c2d97038e35e8df@30c9725e-d514-4df5-b504-1dda6e7aecc1-bluemix.cloudant.com/users');
    var id_test= _id;
    id_ant = id_test;
    console.log("OLD ID")
    console.log(id_test)
       console.log("hola");
      var val_pass=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      user_name_n=document.getElementById('user_name_t').textContent;
            var tool=document.getElementById('tool_t').textContent;
              var roll=document.getElementById("roll_t").textContent;
            var mail=document.getElementById('user_mail_t').textContent;
            var approval=document.getElementById('approval_date_t').textContent;
            var manager=document.getElementById('manager_t').textContent;
            var phone=document.getElementById('phone_t').textContent;
            var code=document.getElementById('idCodeEmploye').textContent;
            ///=> Variable con los datos a guardar
            var new_pass =document.getElementById('new_pass_t').value;
    if(new_pass.match(val_pass) && new_pass!=password){
        var todo = {
        _id: new Date().toISOString(),
        user:user,
        tool:tool,
        roll:roll,
        password: new_pass,
        user_name: user_name,
        manager: manager,
        code:code,
        approved_by:approved_by,
        approval_date:approval_date,
        mail:mail,
        phone:phone,
        };
    ///=> Elimina id anterior y crea nueva
    db.get(id_ant).then(function (doc) {
    db.remove(doc._id, doc._rev);
    return db.put(todo).then(function (result) {
    var snackbarContainer = document.querySelector('#demo-toast-example');
    var data = {
    message: 'Guardado exitosamente'
    };
    }).catch(function (err) {
    });
    });
         alert("Your knew information was successfuclly sent")
    }else if(new_pass.match(val_pass) && new_pass==password){
        alert("You don't have new information to send")
    }
    else{
        alert("The password must contanin at least one capital letter and one special character and must be 8 or more characters")
    }
    console.log(todo);
  }
    setTimeout(function(){
        location.reload(true);
    },500);
}
