var user_db="";
var pass_db="";
var pass_encrypt="";
var user="";
var tool_db="";
var pass="";
var tool="";
var user_name="";
var roll_db="";
var codeUsuario="";
function get_cred(){
    /*GET VALUES FROM LOGIN*/
    user = document.getElementById('user').value.toUpperCase();
    pass = document.getElementById('password').value;
    tool = "team_skills";
    
    if(user == "" && pass == ""){
        alert("All the fields must be filled")
    }else{
    
        /*BASE CONNECTION*/
        var db = new PouchDB('https://30c9725e-d514-4df5-b504-1dda6e7aecc1-bluemix:e1b79edf217a210f39a7c96bdb7527b80b34818440b760a85c2d97038e35e8df@30c9725e-d514-4df5-b504-1dda6e7aecc1-bluemix.cloudant.com/users');
        /*OBTAIN THE VALUES FROM THE DATA BASE*/
        db.find({selector: {_id:{$gt:0},
            user:user, tool:"team_skills"
            },
            fields: ['_id','user','tool','password','user_name','roll','code'],
            sort : ['_id']
        }).then(function(result){
            var len = result.docs.length;
            if( len ==0 ){
                alert("The user does not exist. Request access in this page or contact the administrator");
            }
            for(var i =0; i < len ; i++){
                /*VALUES FROM DATA_BASE*/
                user_db = result.docs[i].user;
                pass_db = result.docs[i].password;
                tool_db = result.docs[i].tool;
                user_name = result.docs[i].user_name;
                roll_db = result.docs[i].roll;
                codeUsuario = result.docs[i].code;
                if(user_db == user && pass_db == pass && tool_db==tool){
                    localStorage.setItem('user_log',user_name);
                    localStorage.setItem('codeUser_log',codeUsuario);
                    //location.replace("menu.html");
                    location.replace("menu.html");
                }
                else if((user_db != user) || (pass_db !=pass) || (tool_db != tool) || (roll_db != 'Manager')){
                    alert("Wrong Credential. Request access in this page or contact the administrator");
                }
            }
        }).catch(function (err) {
            console.log("err"+err);
        });
    }
}


function help() {
    alert("Please, send an email to: jessica.lissette.estrada.robreno1@ibm.com");
  }

