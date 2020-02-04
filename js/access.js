/// FOR ACCESS MANAGEMENT

var req_name="";
var req_mail="";
var req_id="";
var manager_name="";
var pass="";
var comas = "'";

var fileExel="";

function ap(idBoton){

    console.log('Presionaste el boton' + idBoton);

    var db, i, len;
    db = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/access_request');

    len = idBoton.length;
    req_id = document.getElementById("idRequester" + idBoton[len - 1]).innerHTML;

    console.log("AQUI VOY");

    db.find({
        selector:{
            _id:{ "$gt":0},
            req_id: req_id
        },
        fields: ['_id','req_name','req_mail','req_roll','req_id','manager_name','pass'],
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
            console.log(req_name);
            console.log(manager_name);
            console.log(req_id);
            console.log(req_mail);
            console.log("PASSWORD");
            console.log(pw);

            var db2 = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/users');
            var new_user = { 
                _id: new Date().toISOString(),
                user: req_id,
                tool: "svpm",
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

            db = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/access_request');
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
    },500);
}


function rej(idBoton){
    console.log('Presionaste el boton' + idBoton);
    var db = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/access_request');

    console.log("AQUI VOY");
    len = idBoton.length;
    console.log(idBoton);
    console.log(idBoton[len - 1]);
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
        },500);
}

