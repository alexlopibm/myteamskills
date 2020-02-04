
var req_name="";
var req_id="";
var req_mail="";
var manager_name="";
var manager_mail="";
var req_just="";
var req_date="";
var req_role="";
var current_count;
var greq_id;
var roll="";
var request_tool="";
var code_employe="";

function send_notif (message) {
 var url =
   "https://hooks.slack.com/services/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";
 $.ajax({
   data: JSON.stringify({
     text: message
   }),
   dataType: "json",
   processData: false,
   type: "POST",
   url: url
 });
 console.log("Data send");
};

function req_access() { //////=>  Salva documento
var db = new PouchDB('https://30c9725e-d514-4df5-b504-1dda6e7aecc1-bluemix:e1b79edf217a210f39a7c96bdb7527b80b34818440b760a85c2d97038e35e8df@30c9725e-d514-4df5-b504-1dda6e7aecc1-bluemix.cloudant.com/access_request');
//    var db = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/access_request');

   var new_req_name=document.getElementById('req_name').value;
   var new_req_id=document.getElementById('req_id').value;
   var new_req_mail=document.getElementById('req_mail').value;
   var new_manager_name=document.getElementById('manager_name').value;
   var new_manager_mail=document.getElementById('manager_mail').value;
   var new_req_just=document.getElementById('req_just').value;
   var new_req_roll = document.getElementById('req_roll').value;
   var new_code_employee = document.getElementById('code_employe').value;
   console.log("WRITER");
   console.log(new_req_roll);

   if(new_req_name!="" && new_req_id!="" && new_req_mail!="" && new_manager_mail!="" && new_manager_name!="" && new_req_just!="" && new_req_roll!="" && new_code_employee!=""){
       var todo = {
           _id: new Date().toISOString(),
           req_name:new_req_name,
           req_id:new_req_id,
           req_mail:new_req_mail,
           manager_name:new_manager_name,
           manager_mail:new_manager_mail,
           req_just:new_req_just,
           req_roll:new_req_roll,
           tool: request_tool,
           code:new_code_employee,
           req_date: new Date().toISOString(),
       };

       db.put(todo).then(function (result) {
       }).catch(function (err) {
           console.log("err " + err);
       });
       alert("New Registry have been saved")
       var elements = $('.mdl-textfield__input');
           for(var i =0; i< elements.length; i++){
               elements[i].value='';
               roll_request();
           }
       var new_message='User: '+ new_req_name+' has requested an access to the tool '+ request_tool;
       send_notif(new_message);
   }
   else{
       alert("All the fields must be filled");
   }
}

function hide(){
   document.getElementById('table_info').style.visibility="hidden";
   document.getElementById("carac").style.visibility="hidden";
   document.getElementById("select_roll").style.visibility="hidden";
   document.getElementById("roll_select").style.visibility="hidden";
   document.getElementById('send').style.visibility="hidden";


}

function roll_request(){
  document.getElementById("carac").style.visibility="inherit";
  var select = document.getElementById("req_roll").value;
   if(select=="ARQ"){
       document.getElementById('font').style.display="block";
       document.getElementById('res').style.display="block";
       document.getElementById('cons').style.display="block";
       document.getElementById('apro').style.display="block";
       document.getElementById('ga').style.display="none";
       document.getElementById('mm').style.display="none";
       document.getElementById('am').style.display="none";
       document.getElementById('gm').style.display="none";
       document.getElementById('aorc').style.display="none";

   }

   else if(select=="PM"){
       document.getElementById('font').style.display="block";
       document.getElementById('res').style.display="block";
       document.getElementById('cons').style.display="block";
       document.getElementById('apro').style.display="none";
       document.getElementById('ga').style.display="none";
       document.getElementById('mm').style.display="none";
       document.getElementById('am').style.display="none";
       document.getElementById('gm').style.display="none";
       document.getElementById('aorc').style.display="none";
   }

   else if(select=="infra_admin"){
       document.getElementById('font').style.display="block";
       document.getElementById('res').style.display="block";
       document.getElementById('cons').style.display="block";
       document.getElementById('apro').style.display="block";
       document.getElementById('ga').style.display="block";
       document.getElementById('mm').style.display="block";
       document.getElementById('am').style.display="block";
       document.getElementById('gm').style.display="none";
       document.getElementById('aorc').style.display="none";
   }

   else if(select == "consult"){
       document.getElementById('font').style.display="block";
       document.getElementById('res').style.display="none";
       document.getElementById('cons').style.display="block";
       document.getElementById('apro').style.display="none";
       document.getElementById('ga').style.display="none";
       document.getElementById('mm').style.display="none";
       document.getElementById('am').style.display="none";
       document.getElementById('gm').style.display="none";
       document.getElementById('aorc').style.display="none";
   }

   else if(select == "uploader"){
       document.getElementById("font").style.visibility="hidden";
       document.getElementById("res").style.visibility="hidden";
       document.getElementById("cons").style.visibility="hidden";
       document.getElementById("apro").style.visibility="hidden";
       document.getElementById("ga").style.visibility="hidden";
       document.getElementById("mm").style.visibility="hidden";
       document.getElementById("am").style.visibility="hidden";
       document.getElementById("gm").style.visibility="hidden";
       document.getElementById("aorc").style.visibility="hidden";
   }

   else if(select == "manager"){
       document.getElementById('font').style.display="block";
       document.getElementById('res').style.display="none";
       document.getElementById('cons').style.display="block";
       document.getElementById('apro').style.display="none";
       document.getElementById('ga').style.display="none";
       document.getElementById('mm').style.display="none";
       document.getElementById('am').style.display="none";
       document.getElementById('gm').style.display="block";
       document.getElementById('aorc').style.display="block";
   }

   else if(select == "claim_admin"){
       document.getElementById('font').style.display="block";
       document.getElementById('res').style.display="none";
       document.getElementById('cons').style.display="block";
       document.getElementById('apro').style.display="none";
       document.getElementById('ga').style.display="none";
       document.getElementById('mm').style.display="none";
       document.getElementById('am').style.display="none";
       document.getElementById('gm').style.display="block";
       document.getElementById('aorc').style.display="block";
   }

   else if(select == "dpe"){
       document.getElementById('font').style.display="block";
       document.getElementById('res').style.display="none";
       document.getElementById('cons').style.display="block";
       document.getElementById('apro').style.display="none";
       document.getElementById('ga').style.display="none";
       document.getElementById('mm').style.display="none";
       document.getElementById('am').style.display="none";
       document.getElementById('gm').style.display="block";
       document.getElementById('aorc').style.display="block";
   }


   else if(select == "wfm"){
       document.getElementById('font').style.display="block";
       document.getElementById('res').style.display="none";
       document.getElementById('cons').style.display="block";
       document.getElementById('apro').style.display="none";
       document.getElementById('ga').style.display="none";
       document.getElementById('mm').style.display="none";
       document.getElementById('am').style.display="none";
       document.getElementById('gm').style.display="none";
       document.getElementById('aorc').style.display="none";
   }

   else if(select == "manager_ts"){
       document.getElementById('font').style.display="block";
       document.getElementById('res').style.display="none";
       document.getElementById('cons').style.display="none";
       document.getElementById('apro').style.display="none";
       document.getElementById('ga').style.display="none";
       document.getElementById('mm').style.display="none";
       document.getElementById('am').style.display="none";
       document.getElementById('gm').style.display="none";
       document.getElementById('aorc').style.display="none";
       document.getElementById('asr').style.display="block";
       document.getElementById('eds').style.display="block";
       document.getElementById('dr').style.display="block";
   }

   else if(select == "consulta_ts"){
       document.getElementById('font').style.display="block";
       document.getElementById('res').style.display="none";
       document.getElementById('cons').style.display="block";
       document.getElementById('apro').style.display="none";
       document.getElementById('ga').style.display="none";
       document.getElementById('mm').style.display="none";
       document.getElementById('am').style.display="none";
       document.getElementById('gm').style.display="none";
       document.getElementById('aorc').style.display="none";
       document.getElementById('asr').style.display="none";
       document.getElementById('eds').style.display="none";
       document.getElementById('dr').style.display="none";
   }
}


function svpm_information(){
   document.getElementById('table_info').style.visibility="inherit";
   document.getElementById("carac").style.visibility="hidden";
   document.getElementById("select_roll").style.visibility="inherit";
   document.getElementById("roll_select").style.visibility="inherit";
   document.getElementById('send').style.visibility="inherit";
   document.getElementById('ARQ').style.display="block";
   document.getElementById('PM').style.display="block";
   document.getElementById('infra_admin').style.display="block";
   document.getElementById('consult').style.display="block";
   document.getElementById('claim_admin').style.display="none";
   document.getElementById('manager').style.display="none";
   document.getElementById('wfm').style.display="none";
   document.getElementById('dpe').style.display="none";
   document.getElementById('manager_ts').style.display="none";
   document.getElementById('consulta_ts').style.display="none";
   request_tool="svpm";
}

function htmx_information(){
   document.getElementById('table_info').style.visibility="inherit";
   document.getElementById("carac").style.visibility="hidden";
   document.getElementById("roll_select").style.visibility="inherit";
   document.getElementById("select_roll").style.visibility="inherit";
   document.getElementById('send').style.visibility="inherit";
   document.getElementById('ARQ').style.display="none";
   document.getElementById('PM').style.display="none";
   document.getElementById('infra_admin').style.display="none";
   document.getElementById('consult').style.display="block";
   document.getElementById('claim_admin').style.display="none";
   document.getElementById('manager').style.display="none";
   document.getElementById('wfm').style.display="none";
   document.getElementById('dpe').style.display="none";
   document.getElementById('manager_ts').style.display="none";
   document.getElementById('consulta_ts').style.display="none";
   request_tool="htmx";

}

function sf_information(){
   document.getElementById('table_info').style.visibility="inherit";
   document.getElementById("carac").style.visibility="hidden";
   document.getElementById("roll_select").style.visibility="hidden";
   document.getElementById("select_roll").style.visibility="hidden";
   document.getElementById('send').style.visibility="inherit";
   document.getElementById('ARQ').style.display="none";
   document.getElementById('PM').style.display="none";
   document.getElementById('infra_admin').style.display="none";
   document.getElementById('consult').style.display="none";
   document.getElementById('claim_admin').style.display="none";
   document.getElementById('manager').style.display="none";
   document.getElementById('wfm').style.display="none";
   document.getElementById('dpe').style.display="none";
   document.getElementById('manager_ts').style.display="none";
   document.getElementById('consulta_ts').style.display="none";
   request_tool="software_factory";

}

function claim_information(){
   document.getElementById('table_info').style.visibility="inherit";
   document.getElementById("carac").style.visibility="hidden";
   document.getElementById("roll_select").style.visibility="inherit";
   document.getElementById("select_roll").style.visibility="inherit";
   document.getElementById('send').style.visibility="inherit";
   document.getElementById('ARQ').style.display="none";
   document.getElementById('PM').style.display="none";
   document.getElementById('infra_admin').style.display="none";
   document.getElementById('consult').style.display="none";
   document.getElementById('claim_admin').style.display="block";
   document.getElementById('manager').style.display="block";
   document.getElementById('wfm').style.display="block";
   document.getElementById('dpe').style.display="block";
   document.getElementById('manager_ts').style.display="none";
   document.getElementById('consulta_ts').style.display="none";
   request_tool="claimManager";

}


function teamSkills_information(){
   document.getElementById('table_info').style.visibility="inherit";
   document.getElementById("carac").style.visibility="hidden";
   document.getElementById("roll_select").style.visibility="inherit";
   document.getElementById("select_roll").style.visibility="inherit";
   document.getElementById('send').style.visibility="inherit";
   document.getElementById('ARQ').style.display="none";
   document.getElementById('PM').style.display="none";
   document.getElementById('infra_admin').style.display="none";
   document.getElementById('consult').style.display="none";
   document.getElementById('claim_admin').style.display="none";
   document.getElementById('manager').style.display="none";
   document.getElementById('wfm').style.display="none";
   document.getElementById('dpe').style.display="none";
   document.getElementById('manager_ts').style.display="block";
   document.getElementById('consulta_ts').style.display="block";
   request_tool="team_skills";

}
function help(){
   alert("Please, contact Alexis Ivan Lopez");
}
