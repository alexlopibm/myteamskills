/// FOR ACCESS MANAGEMENT

var req_name="";
var req_mail="";
var req_id="";
var req_roll="";
var manager_name="";
var pass="";
var comas = "'";
var tool="";

var fileExel="";

function ap(idBoton){

    console.log('Presionaste el boton' + idBoton);
    console.log(idBoton.length);
    var db, i, len;

    db = new PouchDB('https://30c9725e-d514-4df5-b504-1dda6e7aecc1-bluemix:e1b79edf217a210f39a7c96bdb7527b80b34818440b760a85c2d97038e35e8df@30c9725e-d514-4df5-b504-1dda6e7aecc1-bluemix.cloudant.com/access_request');

    len = idBoton.length;
    req_id = document.getElementById("idRequester" + idBoton[len - 1]).innerHTML;

    console.log("AQUI VOY");
    console.log(req_id);
    str=req_id.length;


    db.find({
        selector:{
            _id:{ "$gt":0},
            req_id: req_id
        },
        fields: ['_id','req_name','req_mail','req_roll','req_id','manager_name','pass','tool'],
        sort:['_id']

    }).then(function (result) {
        console.log("res "+result);

        var i = 0;
        var len = result.docs.length;

        for (i = 0; i < len; i++) {
            req_name= result.docs[i].req_name;
            req_id=result.docs[i].req_id;
            manager_name= result.docs[i].manager_name;
            req_mail= result.docs[i].req_mail;
            req_roll= result.docs[i].req_roll;
            tool = result.docs[i].tool;

            var charPos;
            var pwChar;
            var pwLength = 10;  // Change for shorter or longer password
            var pw = "";
            // 1) You can add special characters like "@" to the following string if desired
            // 2) You can even include characters more than once to increase their likelihood of appearing!
            var availChars = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ#$!";

            for (i = 0; i < pwLength; i++) {
                charPos = Math.floor(Math.random() * availChars.length);
                pwChar = availChars.charAt(charPos);
                pw = pw + pwChar;
            }
            pass.value = pw;

            var db2 = new PouchDB('https://30c9725e-d514-4df5-b504-1dda6e7aecc1-bluemix:e1b79edf217a210f39a7c96bdb7527b80b34818440b760a85c2d97038e35e8df@30c9725e-d514-4df5-b504-1dda6e7aecc1-bluemix.cloudant.com/users');
            var new_user = {
                _id: new Date().toISOString(),
                user: req_id,
                tool: tool,
                roll: req_roll,
                password: pw,
                user_name: req_name,
                approved_by: manager_name,
                approval_date: new Date().toISOString(),
                mail: req_mail,
                phone: ""
            }

            db2.put(new_user).then(function (result) {

            }).catch(function (err) {
            console.log("err " + err);
            });

            db = new PouchDB('https://30c9725e-d514-4df5-b504-1dda6e7aecc1-bluemix:e1b79edf217a210f39a7c96bdb7527b80b34818440b760a85c2d97038e35e8df@30c9725e-d514-4df5-b504-1dda6e7aecc1-bluemix.cloudant.com/access_request');
            db.get(result.docs[0]._id).then(function(doc) {
                return db.remove(doc);
            }).then(function (result) {
                console.log('Removed request');
            }).catch(function (err) {
                console.log(err);
            });
        }
    }).catch(function (err) {
        console.log("err"+err);
    });
    alert("Approved request");
    setTimeout(function(){
        location.reload(true);
    },1000);
}


function rej(idBoton){
    console.log('Presionaste el boton' + idBoton);

    var db = new PouchDB('https://30c9725e-d514-4df5-b504-1dda6e7aecc1-bluemix:e1b79edf217a210f39a7c96bdb7527b80b34818440b760a85c2d97038e35e8df@30c9725e-d514-4df5-b504-1dda6e7aecc1-bluemix.cloudant.com/access_request');

    console.log("AQUI VOY");
    len = idBoton.length;
    console.log(idBoton);
    req_id = document.getElementById("idRequester" + idBoton[len - 1]).innerHTML;
    console.log(req_id);

    db.find({
        selector:{
            _id:{ "$gt":0},
            req_id: req_id
        },
        fields: ['_id', 'req_id'],
        sort:['_id']

    }).then(function (result) {
        console.log("res "+result);
        db.get(result.docs[0]._id).then(function(doc) {
            return db.remove(doc);
            console.log(result.docs[0]._id);
        }).then(function (result) {
            // handle result
        }).catch(function (err) {
            console.log(err);
        });

        }).catch(function (err) {
        console.log("err"+err);
        });
        alert("Deleted request");
        setTimeout(function(){
            location.reload(true);
        },1000);
}
