 console.log("Connected");
// VARIABLES
var new_rfs = '';
var entidad = '';
var roll = '';
var vcpu = '';
// var storage = '';
// var tier = ''
var storage_tier0 = '';
var storage_tier1 = '';
var storage_tier15 = '';
var storage_tier2 = '';
var storage_tier3 = '';
var data_center = '';
var fecha_inicio = '';
var fecha_sign;
var fecha_final = '';
var roll_login='';
var count = 1;
var count2 = 1;
open_cores="0";
open_cores2="0";
open_cores3="0";
open_cores4="0";
var rfsVar="";
var dbStorageArray=[];

//FUNctions
function pouch_data() {
db = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/reserve_request');
var user2 = window.onload = localStorage.getItem("user_log");

//RFS,ENTITY,ROLL, DATA CENTER, DATES
var rfs = document.getElementById("rfs").value;
var new_entidad = document.getElementById("entidad").value;
var new_roll = document.getElementById("roll").value;
if (document.getElementById("Guadalajara").checked==true) {
  data_center= "GDL";
}
if (document.getElementById("Queretaro").checked==true) {
  data_center= "QRO";
}
if (document.getElementById("NPE").checked==true) {
  data_center= "QRO";
}

new_fecha_sign = document.getElementById("Fecha_Firma_Servicio").value;
new_fecha_inicio= document.getElementById("Fecha_Inicio_Servicio").value;
new_fecha_final= document.getElementById("Fecha_Final_Servicio").value;

//REQUEST 1
if (document.getElementById("storage").checked==true) {
  new_storage_tier0 =document.getElementById("vcpu").value;
  new_storage_tier1 =document.getElementById("tier111").value;
  new_storage_tier15 =document.getElementById("tier151").value;
  new_storage_tier2 =document.getElementById("tier222").value;
  new_storage_tier3 = document.getElementById("tier333").value;
  if (document.getElementById("platform_open").checked==true) {
    technology= "STORAGE_OPEN";
    open_cores = document.getElementById("open_request_1").value;
  }
  if (document.getElementById("platform_iseries").checked==true) {
    technology= "STORAGE_ISERIES";
  }
  if (document.getElementById("platform_other").checked==true) {
    technology= "STORAGE_POWER";
  }
}
if (document.getElementById("power").checked==true) {
  technology= "POWER";
  vcpu = document.getElementById("memory2").value;
  memory =  document.getElementById("memory").value;
}
if (document.getElementById("open").checked==true) {
  technology= "OPEN";
  vcpu = document.getElementById("memory2").value;
  memory =  document.getElementById("memory").value;
}
if (document.getElementById("iseries").checked==true) {
  technology= "ISERIES";
  vcpu = document.getElementById("memory2").value;
  memory =  document.getElementById("memory").value;
}
//SERVER1
if (document.getElementById("physical").checked==true) {
  var phy_or_vir = "VIRTUAL";
}
if (document.getElementById("virtual").checked==true) {
  var phy_or_vir = "PHYSICAL";
}
if ((document.getElementById("virtual").checked==true)||(document.getElementById("virtual").checked==true)) {
  var server_name = document.getElementById("new_server_name").value;
}
if (document.getElementById("existingserver").checked==true) {
  if (document.getElementById("myInput").value!="") {
    server_name=document.getElementById("myInput").value;
  }
  if (document.getElementById("myInput2").value!="") {
    server_name=document.getElementById("myInput2").value;
  }
  if (document.getElementById("myInput3").value!="") {
    server_name=document.getElementById("myInput3").value;
  }
  if (document.getElementById("myInput4").value!="") {
    server_name=document.getElementById("myInput4").value;
  }
  if (document.getElementById("myInput5").value!="") {
    server_name=document.getElementById("myInput5").value;
  }
  if (document.getElementById("myInput6").value!="") {
    server_name=document.getElementById("myInput6").value;
  }
}
//REQUEST 2
if (document.getElementById("storage2").checked==true) {
  new_storage_tier0_2 =document.getElementById("vcpu0").value;
  new_storage_tier1_2 =document.getElementById("tier_1111").value;
  new_storage_tier15_2 =document.getElementById("tier_151").value;
  new_storage_tier2_2 =document.getElementById("tier_222").value;
  new_storage_tier3_2 = document.getElementById("tier_333").value;
  if (document.getElementById("platform_open2").checked==true) {
    technology_2= "STORAGE_OPEN";
    open_cores2 = document.getElementById("open_request_2").value;

  }
  if (document.getElementById("platform_iseries2").checked==true) {
    technology_2= "STORAGE_ISERIES";
  }
  if (document.getElementById("platform_other2").checked==true) {
    technology_2= "STORAGE_POWER";
  }
}
if (document.getElementById("power2").checked==true) {
  technology_2= "POWER";
  vcpu_2 = document.getElementById("memory_2").value;
  memory_2 =  document.getElementById("memory_").value;
}
if (document.getElementById("open2").checked==true) {
  technology_2= "OPEN";
  vcpu_2 = document.getElementById("memory_2").value;
  memory_2 =  document.getElementById("memory_").value;
}
if (document.getElementById("iseries2").checked==true) {
  technology_2= "ISERIES";
  vcpu_2 = document.getElementById("memory_2").value;
  memory_2 =  document.getElementById("memory_").value;
}

//SERVER2
if (document.getElementById("physical2").checked==true) {
  var phy_or_vir_2 = "VIRTUAL";
}
if (document.getElementById("virtual2").checked==true) {
  var phy_or_vir_2 = "PHYSICAL";
}
if ((document.getElementById("virtual2").checked==true)||(document.getElementById("virtual2").checked==true)) {
  var server_name_2 = document.getElementById("new_server_name0").value;
}
if (document.getElementById("existingserver0").checked==true) {
  if (document.getElementById("myInput_open_request2").value!="") {
    server_name_2=document.getElementById("myInput_open_request2").value;
  }
  if (document.getElementById("myInput2_power_request2").value!="") {
    server_name_2=document.getElementById("myInput2_power_request2").value;
  }
  if (document.getElementById("myInput3_iseries_request2").value!="") {
    server_name_2=document.getElementById("myInput3_iseries_request2").value;
  }
  if (document.getElementById("myInput4_storage_iseries_request2").value!="") {
    server_name_2=document.getElementById("myInput4_storage_iseries_request2").value;
  }
  if (document.getElementById("myInput5_storage_open_request2").value!="") {
    server_name_2=document.getElementById("myInput5_storage_open_request2").value;
  }
  if (document.getElementById("myInput6_storage_power_request2").value!="") {
    server_name_2=document.getElementById("myInput6_storage_power_request2").value;
  }
}

//REQUEST 3
if (document.getElementById("storage3").checked==true) {
  new_storage_tier0_3 =document.getElementById("vcpu__").value;
  new_storage_tier1_3 =document.getElementById("tier__111").value;
  new_storage_tier15_3 =document.getElementById("tier__151").value;
  new_storage_tier2_3 =document.getElementById("tier__222").value;
  new_storage_tier3_3 = document.getElementById("tier__333").value;
  if (document.getElementById("platform_open3").checked==true) {
    technology_3= "STORAGE_OPEN";
    open_cores3 = document.getElementById("open_request_3").value;

  }
  if (document.getElementById("platform_iseries3").checked==true) {
    technology_3= "STORAGE_ISERIES";
  }
  if (document.getElementById("platform_other3").checked==true) {
    technology_3= "STORAGE_POWER";
  }
}

if (document.getElementById("power3").checked==true) {
  technology_3= "POWER";
  vcpu_3 = document.getElementById("memory__2").value;
  memory_3 =  document.getElementById("memory__").value;
}
if (document.getElementById("open3").checked==true) {
  technology_3= "OPEN";
  vcpu_3 = document.getElementById("memory__2").value;
  memory_3 =  document.getElementById("memory__").value;
}
if (document.getElementById("iseries3").checked==true) {
  technology_3= "ISERIES";
  vcpu_3 = document.getElementById("memory__2").value;
  memory_3 =  document.getElementById("memory__").value;
}

//SERVER3
if (document.getElementById("physical3").checked==true) {
  var phy_or_vir_3 = "VIRTUAL";
}
if (document.getElementById("virtual3").checked==true) {
  var phy_or_vir_3 = "PHYSICAL";
}
if ((document.getElementById("virtual3").checked==true)||(document.getElementById("virtual3").checked==true)) {
  var server_name_3 = document.getElementById("new_server_name00").value;
}
if (document.getElementById("existingserver00").checked==true) {
  if (document.getElementById("myInput_open_request3").value!="") {
    server_name_3=document.getElementById("myInput_open_request3").value;
  }
  if (document.getElementById("myInput2_power_request3").value!="") {
    server_name_3=document.getElementById("myInput2_power_request3").value;
  }
  if (document.getElementById("myInput3_iseries_request3").value!="") {
    server_name_3=document.getElementById("myInput3_iseries_request3").value;
  }
  if (document.getElementById("myInput4_storage_iseries_request3").value!="") {
    server_name_3=document.getElementById("myInput4_storage_iseries_request3").value;
  }
  if (document.getElementById("myInput5_storage_open_request3").value!="") {
    server_name_3=document.getElementById("myInput5_storage_open_request3").value;
  }
  if (document.getElementById("myInput6_storage_power_request3").value!="") {
    server_name_3=document.getElementById("myInput6_storage_power_request3").value;
  }
}

//REQUEST 4
if (document.getElementById("storage4").checked==true) {
  new_storage_tier0_4 =document.getElementById("vcpu___").value;
  new_storage_tier1_4 =document.getElementById("tier___111").value;
  new_storage_tier15_4 =document.getElementById("tier___151").value;
  new_storage_tier2_4 =document.getElementById("tier___222").value;
  new_storage_tier3_4 = document.getElementById("tier___333").value;
  if (document.getElementById("platform_open4").checked==true) {
    technology_4= "STORAGE_OPEN";
    open_cores4 = document.getElementById("open_request_4").value;

  }
  if (document.getElementById("platform_iseries4").checked==true) {
    technology_4= "STORAGE_ISERIES";
  }
  if (document.getElementById("platform_other4").checked==true) {
    technology_4= "STORAGE_POWER";
  }
}

if (document.getElementById("power4").checked==true) {
  technology_4= "POWER";
  vcpu_4 = document.getElementById("memory____2").value;
  memory_4 =  document.getElementById("memory____").value;
}
if (document.getElementById("open4").checked==true) {
  technology_4= "OPEN";
  vcpu_4 = document.getElementById("memory____2").value;
  memory_4 =  document.getElementById("memory____").value;
}
if (document.getElementById("iseries4").checked==true) {
  technology_4= "ISERIES";
  vcpu_4 = document.getElementById("memory____2").value;
  memory_4 =  document.getElementById("memory____").value;
}

//SERVER4
if (document.getElementById("physical4").checked==true) {
  var phy_or_vir_4 = "VIRTUAL";
}
if (document.getElementById("virtual4").checked==true) {
  var phy_or_vir_4 = "PHYSICAL";
}
if ((document.getElementById("virtual4").checked==true)||(document.getElementById("virtual4").checked==true)) {
  var server_name_4 = document.getElementById("new_server_name000").value;
}
if (document.getElementById("existingserver000").checked==true) {
  if (document.getElementById("myInput_open_request4").value!="") {
    server_name_4=document.getElementById("myInput_open_request4").value;
  }
  if (document.getElementById("myInput2_power_request4").value!="") {
    server_name_4=document.getElementById("myInput2_power_request4").value;
  }
  if (document.getElementById("myInput3_iseries_request4").value!="") {
    server_name_4=document.getElementById("myInput3_iseries_request4").value;
  }
  if (document.getElementById("myInput4_storage_iseries_request4").value!="") {
    server_name_4=document.getElementById("myInput4_storage_iseries_request4").value;
  }
  if (document.getElementById("myInput5_storage_open_request4").value!="") {
    server_name_4=document.getElementById("myInput5_storage_open_request4").value;
  }
  if (document.getElementById("myInput6_storage_power_request4").value!="") {
    server_name_4=document.getElementById("myInput6_storage_power_request4").value;
  }
}

//Calculo diferencia fecha
var date1 = new Date(new_fecha_inicio);
var date2 = new Date(new_fecha_sign);
var timeDiff = Math.abs(date2.getTime() - date1.getTime());
var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
var jSON = {}
////////////////////////////////////////////POUCH DATA TO STORAGE/////////////////////////////////////////////////////


if (document.getElementById("platform_open").checked==true) {

  jSON={
    _id: new Date().toISOString(),
    user:user2,
    rfs: rfs.toUpperCase(),
    request:"REQUEST 1",
    entidad: new_entidad.toUpperCase(),
    roll: new_roll.toUpperCase(),
    data_center: data_center.toUpperCase(),
    technology: technology.toUpperCase(),
    server_type:phy_or_vir.toUpperCase(),
    server_name:server_name,
    open_cores:open_cores,
     fecha_firma: new_fecha_sign,
     fecha_inicio: new_fecha_inicio,
     fecha_final: new_fecha_final,
   }
 }

else if (document.getElementById("storage").checked==true) {
  jSON={
    _id: new Date().toISOString(),
    user:user2,
    rfs: rfs.toUpperCase(),
    request:"REQUEST 1",
    entidad: new_entidad.toUpperCase(),
    roll: new_roll.toUpperCase(),
    data_center: data_center.toUpperCase(),
    technology: technology.toUpperCase(),
    server_type:phy_or_vir.toUpperCase(),
    server_name:server_name,
     storage_tier0: new_storage_tier0,
     storage_tier1: new_storage_tier1,
     storage_tier15: new_storage_tier15,
     storage_tier2: new_storage_tier2,
     storage_tier3: new_storage_tier3,
     fecha_firma: new_fecha_sign,
     fecha_inicio: new_fecha_inicio,
     fecha_final: new_fecha_final,
   }
  }
  ///////////////////////////////////////////POUCH DATA TO OTHER TECHNOLOGIES/////////////////////////////////////////////////////

else{
  jSON={
  user:user2,
  _id: new Date().toISOString(),
  rfs: rfs.toUpperCase(),
  request:"REQUEST 1",
  entidad: new_entidad.toUpperCase(),
  roll: new_roll.toUpperCase(),
  data_center: data_center.toUpperCase(),
  technology: technology.toUpperCase(),
  server_type: phy_or_vir.toUpperCase(),
  server_name:server_name,
  memory: memory,
  vcpu: vcpu,
  fecha_firma: new_fecha_sign,
  fecha_inicio: new_fecha_inicio,
  fecha_final: new_fecha_final,

  }
}

if (document.getElementById("platform_open2").checked==true) {

  jSON2={
    _id: new Date().toISOString(),
    user:user2,
    rfs: rfs.toUpperCase(),
    request:"REQUEST 2",
    entidad: new_entidad.toUpperCase(),
    roll: new_roll.toUpperCase(),
    data_center: data_center.toUpperCase(),
    technology: technology.toUpperCase(),
    server_type:phy_or_vir.toUpperCase(),
    server_name:server_name,
    open_cores:open_cores2,
     fecha_firma: new_fecha_sign,
     fecha_inicio: new_fecha_inicio,
     fecha_final: new_fecha_final,
   }}

else if (document.getElementById("storage2").checked==true) {
 str=(new Date().toISOString()+"2");
  jSON2={
    _id: str,
    user:user2,
    rfs: rfs.toUpperCase(),
    request:"REQUEST 2",
    entidad: new_entidad.toUpperCase(),
    roll: new_roll.toUpperCase(),
    data_center: data_center.toUpperCase(),
    technology: technology_2.toUpperCase(),
    server_type:phy_or_vir_2.toUpperCase(),
    server_name:server_name_2,
     storage_tier0: new_storage_tier0_2,
     storage_tier1: new_storage_tier1_2,
     storage_tier15: new_storage_tier15_2,
     storage_tier2: new_storage_tier2_2,
     storage_tier3: new_storage_tier3_2,
     fecha_firma: new_fecha_sign,
     fecha_inicio: new_fecha_inicio,
     fecha_final: new_fecha_final,
   }
  }
  ///////////////////////////////////////////POUCH DATA TO OTHER TECHNOLOGIES/////////////////////////////////////////////////////

else if((document.getElementById("open2").checked==true)||(document.getElementById("iseries2").checked==true)||(document.getElementById("power2").checked==true)){
  str=(new Date().toISOString()+"2");
  jSON2={
  _id: str,
  user:user2,
  rfs: rfs.toUpperCase(),
  request:"REQUEST 2",
  entidad: new_entidad.toUpperCase(),
  roll: new_roll.toUpperCase(),
  data_center: data_center.toUpperCase(),
  technology: technology_2.toUpperCase(),
  server_type: phy_or_vir_2.toUpperCase(),
  server_name:server_name_2,
  memory: memory_2,
  vcpu: vcpu_2,
  fecha_firma: new_fecha_sign,
  fecha_inicio: new_fecha_inicio,
  fecha_final: new_fecha_final,

  }
}
if (document.getElementById("platform_open3").checked==true) {

  jSON3={
    _id: new Date().toISOString(),
    user:user2,
    rfs: rfs.toUpperCase(),
    request:"REQUEST 3",
    entidad: new_entidad.toUpperCase(),
    roll: new_roll.toUpperCase(),
    data_center: data_center.toUpperCase(),
    technology: technology.toUpperCase(),
    server_type:phy_or_vir.toUpperCase(),
    server_name:server_name,
    open_cores:open_cores3,
     fecha_firma: new_fecha_sign,
     fecha_inicio: new_fecha_inicio,
     fecha_final: new_fecha_final,
   }
}
else if (document.getElementById("storage3").checked==true) {
 str3=(new Date().toISOString()+"3");
  jSON3={
    _id: str3,
    user:user2,
    rfs: rfs.toUpperCase(),
    request:"REQUEST 3",
    entidad: new_entidad.toUpperCase(),
    roll: new_roll.toUpperCase(),
    data_center: data_center.toUpperCase(),
    technology: technology_3.toUpperCase(),
    server_type:phy_or_vir_3.toUpperCase(),
    server_name:server_name_3,
     storage_tier0: new_storage_tier0_3,
     storage_tier1: new_storage_tier1_3,
     storage_tier15: new_storage_tier15_3,
     storage_tier2: new_storage_tier2_3,
     storage_tier3: new_storage_tier3_3,
     fecha_firma: new_fecha_sign,
     fecha_inicio: new_fecha_inicio,
     fecha_final: new_fecha_final,
   }
  }
  ///////////////////////////////////////////POUCH DATA TO OTHER TECHNOLOGIES/////////////////////////////////////////////////////

  else if((document.getElementById("open3").checked==true)||(document.getElementById("iseries3").checked==true)||(document.getElementById("power3").checked==true)){
  str3=(new Date().toISOString()+"3");
  jSON3={
  _id: str3,
  user:user2,
  rfs: rfs.toUpperCase(),
  request:"REQUEST 3",
  entidad: new_entidad.toUpperCase(),
  roll: new_roll.toUpperCase(),
  data_center: data_center.toUpperCase(),
  technology: technology_3.toUpperCase(),
  server_type: phy_or_vir_3.toUpperCase(),
  server_name:server_name_3,
  memory: memory_3,
  vcpu: vcpu_3,
  fecha_firma: new_fecha_sign,
  fecha_inicio: new_fecha_inicio,
  fecha_final: new_fecha_final,

  }
}

if (document.getElementById("platform_open4").checked==true) {

  jSON4={
    _id: new Date().toISOString(),
    user:user2,
    rfs: rfs.toUpperCase(),
    request:"REQUEST 4",
    entidad: new_entidad.toUpperCase(),
    roll: new_roll.toUpperCase(),
    data_center: data_center.toUpperCase(),
    technology: technology.toUpperCase(),
    server_type:phy_or_vir.toUpperCase(),
    server_name:server_name,
    open_cores:open_cores3,
     fecha_firma: new_fecha_sign,
     fecha_inicio: new_fecha_inicio,
     fecha_final: new_fecha_final,
   }
}
else if (document.getElementById("storage4").checked==true) {
 str4=(new Date().toISOString()+"4");
  jSON4={
    _id: str4,
    user:user2,
    rfs: rfs.toUpperCase(),
    request:"REQUEST 4",
    entidad: new_entidad.toUpperCase(),
    roll: new_roll.toUpperCase(),
    data_center: data_center.toUpperCase(),
    technology: technology_4.toUpperCase(),
    server_type:phy_or_vir_4.toUpperCase(),
    server_name:server_name_4,
     storage_tier0: new_storage_tier0_4,
     storage_tier1: new_storage_tier1_4,
     storage_tier15: new_storage_tier15_4,
     storage_tier2: new_storage_tier2_4,
     storage_tier3: new_storage_tier3_4,
     fecha_firma: new_fecha_sign,
     fecha_inicio: new_fecha_inicio,
     fecha_final: new_fecha_final,
   }
  }
  ///////////////////////////////////////////POUCH DATA TO OTHER TECHNOLOGIES/////////////////////////////////////////////////////

  else if((document.getElementById("open4").checked==true)||(document.getElementById("iseries4").checked==true)||(document.getElementById("power4").checked==true)){
  str4=(new Date().toISOString()+"4");
  jSON4={
  _id: str4,
  user:user2,
  rfs: rfs.toUpperCase(),
  request:"REQUEST 4",
  entidad: new_entidad.toUpperCase(),
  roll: new_roll.toUpperCase(),
  data_center: data_center.toUpperCase(),
  technology: technology_4.toUpperCase(),
  server_type: phy_or_vir_4.toUpperCase(),
  server_name:server_name_4,
  memory: memory_4,
  vcpu: vcpu_4,
  fecha_firma: new_fecha_sign,
  fecha_inicio: new_fecha_inicio,
  fecha_final: new_fecha_final,

  }
}


if ((parseFloat(document.getElementById("memory2").value)>parseFloat(document.getElementById("count_vcpu").innerHTML))||(parseFloat(document.getElementById("memory").value)>parseFloat(document.getElementById("count_memory").innerHTML))) {
  alert("Exceeded reservation");
  return;
}

if (diffDays>120) {

  alert("Date Service Signature and Date Service Start can not be greater than 120 days")

}
else {
  //REQUEST 1
  db.put(jSON).then(function (result) {

  }).catch(function (err) {
  //  ("err " + err);

  });
  //REQUEST 2
  if ((document.getElementById("platform_open2").checked==true)||(document.getElementById("storage2").checked==true)||(document.getElementById("open2").checked==true)||(document.getElementById("iseries2").checked==true)||(document.getElementById("power2").checked==true)) {
  db.put(jSON2).then(function (result2) {
    console.log("REQUEST 2");
  }).catch(function (err2) {
  //  ("err " + err);

  });
    }
  //REQUEST 3
  if ((document.getElementById("platform_open3").checked==true)||(document.getElementById("storage3").checked==true)||(document.getElementById("open3").checked==true)||(document.getElementById("iseries3").checked==true)||(document.getElementById("power3").checked==true)) {
  db.put(jSON3).then(function (result3) {
  }).catch(function (err2) {
  //  ("err " + err);
  });
}
  //REQUEST 4
  if ((document.getElementById("platform_open4").checked==true)||(document.getElementById("storage4").checked==true)||(document.getElementById("open4").checked==true)||(document.getElementById("iseries4").checked==true)||(document.getElementById("power4").checked==true)) {
  db.put(jSON4).then(function (result4) {
  }).catch(function (err2) {
  //  ("err " + err);
  });
}
  if (document.getElementById("storage").checked) {
    list=["Confirm reservation:\n",
    "Reservation : ", "Reservation 1",
    "User:",user2,
    "RFS: ",rfs.toUpperCase(),
    "Entidad: ", new_entidad.toUpperCase(),
    "Roll :", new_roll.toUpperCase(),
    "Data Center: ", data_center.toUpperCase(),
    "Technology: ", technology.toUpperCase(),
    "Server_type: ", phy_or_vir.toUpperCase(),
    "Server_name : ",server_name,
    "open_cores :",open_cores,
     "Storage_tier0 : ", new_storage_tier0,
     "Storage_tier1 : ",new_storage_tier1,
     "Storage_tier15 : ", new_storage_tier15,
     "Storage_tier2 : ", new_storage_tier2,
     "Storage_tier3 : ", new_storage_tier3,
     "Signature date : ", new_fecha_sign,
     "Initial Date:  ", new_fecha_inicio,
     "Final Date: ", new_fecha_final];
  }

  else {
    list=["Confirm reservation:\n",
    "Reservation: ", "Reservation 1",
    "User:",user2,
    "RFS: ",rfs.toUpperCase(),
    "Entidad: ", new_entidad.toUpperCase(),
    "Roll: ", new_roll.toUpperCase(),
    "Data Center: ", data_center.toUpperCase(),
    "Technology: ", technology.toUpperCase(),
    "Server_type: ", phy_or_vir.toUpperCase(),
    "Server_name: ",server_name,
    "Memory: ", memory,
    "Vcpu: ", vcpu,
     "Signature date: ", new_fecha_sign,
     "Initial Date: ", new_fecha_inicio,
     "Final Date: ", new_fecha_final];
  }

  if (document.getElementById("storage2").checked) {
    list2=["Confirm reservation:\n",
    "Reservation: ", "Reservation 2",
    "User:",user2,
    "RFS: ",rfs.toUpperCase(),
    "Entidad: ", new_entidad.toUpperCase(),
    "Roll :", new_roll.toUpperCase(),
    "Data Center: ", data_center.toUpperCase(),
    "Technology: ", technology_2.toUpperCase(),
    "Server_type: ", phy_or_vir_2.toUpperCase(),
    "Server_name : ",server_name_2,
    "open_cores : ",open_cores2,
     "Storage_tier0 : ", new_storage_tier0_2,
     "Storage_tier1 : ",new_storage_tier1_2,
     "Storage_tier15 : ", new_storage_tier15_2,
     "Storage_tier2 : ", new_storage_tier2_2,
     "Storage_tier3 : ", new_storage_tier3_2,
     "Signature date : ", new_fecha_sign,
     "Initial Date:  ", new_fecha_inicio,
     "Final Date: ", new_fecha_final];
  }

  else if((document.getElementById("open2").checked==true)||(document.getElementById("iseries2").checked==true)||(document.getElementById("power2").checked==true)){
    list2=["Confirm reservation:\n",
    "Reservation: ", "Reservation 2",
    "User:",user2,
    "RFS: ",rfs.toUpperCase(),
    "Entidad: ", new_entidad.toUpperCase(),
    "Roll: ", new_roll.toUpperCase(),
    "Data Center: ", data_center.toUpperCase(),
    "Technology: ", technology_2.toUpperCase(),
    "Server_type: ", phy_or_vir_2.toUpperCase(),
    "Server_name: ",server_name_2,
    "Memory: ", memory_2,
    "Vcpu: ", vcpu_2,
     "Signature date: ", new_fecha_sign,
     "Initial Date: ", new_fecha_inicio,
     "Final Date: ", new_fecha_final];
  }

  if (document.getElementById("storage3").checked) {
    list3=["Confirm reservation:\n",
    "Reservation: ", "Reservation 3",
    "User:",user2,
    "RFS: ",rfs.toUpperCase(),
    "Entidad: ", new_entidad.toUpperCase(),
    "Roll :", new_roll.toUpperCase(),
    "Data Center: ", data_center.toUpperCase(),
    "Technology: ", technology_3.toUpperCase(),
    "Server_type: ", phy_or_vir_3.toUpperCase(),
    "Server_name : ",server_name_3,
    "open_cores : ",open_cores3,
     "Storage_tier0 : ", new_storage_tier0_3,
     "Storage_tier1 : ",new_storage_tier1_3,
     "Storage_tier15 : ", new_storage_tier15_3,
     "Storage_tier2 : ", new_storage_tier2_3,
     "Storage_tier3 : ", new_storage_tier3_3,
     "Signature date : ", new_fecha_sign,
     "Initial Date:  ", new_fecha_inicio,
     "Final Date: ", new_fecha_final];
  }

  else if((document.getElementById("open3").checked==true)||(document.getElementById("iseries3").checked==true)||(document.getElementById("power3").checked==true)){
    list3=["Confirm reservation:\n",
    "Reservation: ", "Reservation 3",
    "User:",user2,
    "RFS: ",rfs.toUpperCase(),
    "Entidad: ", new_entidad.toUpperCase(),
    "Roll: ", new_roll.toUpperCase(),
    "Data Center: ", data_center.toUpperCase(),
    "Technology: ", technology_3.toUpperCase(),
    "Server_type: ", phy_or_vir_3.toUpperCase(),
    "Server_name: ",server_name_3,
    "Memory: ", memory_3,
    "Vcpu: ", vcpu_3,
     "Signature date: ", new_fecha_sign,
     "Initial Date: ", new_fecha_inicio,
     "Final Date: ", new_fecha_final];
  }

  if (document.getElementById("storage4").checked) {
    list4=["Confirm reservation:\n",
    "Reservation: ", "Reservation 4",
    "User:",user2,
    "RFS: ",rfs.toUpperCase(),
    "Entidad: ", new_entidad.toUpperCase(),
    "Roll :", new_roll.toUpperCase(),
    "Data Center: ", data_center.toUpperCase(),
    "Technology: ", technology_4.toUpperCase(),
    "Server_type: ", phy_or_vir_4.toUpperCase(),
    "Server_name : ",server_name_4,
    "open_cores : ",open_cores4,
     "Storage_tier0 : ", new_storage_tier0_4,
     "Storage_tier1 : ",new_storage_tier1_4,
     "Storage_tier15 : ", new_storage_tier15_4,
     "Storage_tier2 : ", new_storage_tier2_4,
     "Storage_tier3 : ", new_storage_tier3_4,
     "Signature date : ", new_fecha_sign,
     "Initial Date:  ", new_fecha_inicio,
     "Final Date: ", new_fecha_final];
  }

  else if((document.getElementById("open4").checked==true)||(document.getElementById("iseries4").checked==true)||(document.getElementById("power4").checked==true)){
    list4=["Confirm reservation:\n",
    "Reservation: ", "Reservation 4",
    "User:",user2,
    "RFS: ",rfs.toUpperCase(),
    "Entidad: ", new_entidad.toUpperCase(),
    "Roll: ", new_roll.toUpperCase(),
    "Data Center: ", data_center.toUpperCase(),
    "Technology: ", technology_4.toUpperCase(),
    "Server_type: ", phy_or_vir_4.toUpperCase(),
    "Server_name: ",server_name_4,
    "Memory: ", memory_4,
    "Vcpu: ", vcpu_4,
     "Signature date: ", new_fecha_sign,
     "Initial Date: ", new_fecha_inicio,
     "Final Date: ", new_fecha_final];
  }

    alert(list.join('\n'));
    if ((document.getElementById("storage2").checked==true)||(document.getElementById("open2").checked==true)||(document.getElementById("power2").checked==true)||(document.getElementById("iseries2").checked==true)) {
      alert(list2.join('\n'));
    }

    if ((document.getElementById("storage3").checked==true)||(document.getElementById("open3").checked==true)||(document.getElementById("power3").checked==true)||(document.getElementById("iseries3").checked==true)) {
      alert(list3.join('\n'));
    }

    if ((document.getElementById("storage4").checked==true)||(document.getElementById("open4").checked==true)||(document.getElementById("power4").checked==true)||(document.getElementById("iseries4").checked==true)) {
      alert(list4.join('\n'));
    }

    if (confirm("Confirm reserve:")) {

    } else {
      alert("Reservation cancelled");
      return
    }

  alert("New Registry have been saved")
  document.getElementById("myForm").reset();
  document.getElementById("slis2").hidden=true;
  document.getElementById("add_tech").hidden=true;
  document.getElementById("add_tech_2").hidden=true;
  document.getElementById("add_tech_3").hidden=true;
  document.getElementById("add_tech_4").hidden=true;
  document.getElementById("slis3").hidden=true;
  document.getElementById("AUTOFILL").hidden=true;
  document.getElementById("AUTOFILL2").hidden=true;
  document.getElementById("AUTOFILL3").hidden=true;
  document.getElementById("AUTOFILL4").hidden=true;
  document.getElementById("slis").hidden=true;
  document.getElementById("slis2").hidden=true;
  document.getElementById("slis22").hidden=true;
  document.getElementById("slis222").hidden=true;
  document.getElementById("slis33").hidden=true;
  document.getElementById("slis333").hidden=true;
  document.getElementById("slis44").hidden=true;
  document.getElementById("slis444").hidden=true;
  document.getElementById("new_physical_server").hidden=true;
  document.getElementById("slis_open_request_3").hidden = true;
  document.getElementById("platform3").hidden=true;
  document.getElementById("platform4").hidden=true;
  document.getElementById("server2").hidden=true;
  document.getElementById("server3").hidden=true;
  document.getElementById("server4").hidden=true;

  // document.getElementById("gdl_storage_list").hidden=true;
  // document.getElementById("gdl_power_list").hidden=true;
  // document.getElementById("gdl_open_list").hidden=true;
  // document.getElementById("gdl_iseries_list").hidden=true;
  // document.getElementById("qro_storage_list").hidden=true;
  // document.getElementById("qro_power_list").hidden=true;
  // document.getElementById("qro_open_list").hidden=true;
  // document.getElementById("qro_iseries_list").hidden=true;
  document.getElementById("newserver").hidden=true;
  document.getElementById("newserver2").hidden=true;
  document.getElementById("existingserver").hidden=true;
  document.getElementById("existingserver2").hidden=true;
  document.getElementById("platform").hidden=true;
  document.getElementById("slis_open_request_1").hidden=true;
  document.getElementById("slis_open_request_2").hidden=true;
  document.getElementById("slis_open_request_3").hidden=true;
  document.getElementById("slis_open_request_4").hidden=true;


}

}
function reserve_manager_control(){

  if(document.getElementById("storage").checked==true){
    // document.getElementById("storage_servers").hidden=false;
    // document.getElementById("power_servers").hidden=true;
    // document.getElementById("iseries_servers").hidden=true;
    // document.getElementById("open_servers").hidden=true;
    document.getElementById("body1").hidden = false;
    document.getElementById("body2").hidden = true;
    setTimeout('document.getElementById("input_rfs").value="";document.getElementById("data_center").value="";document.getElementById("entidad").value="";document.getElementById("roll").value="";document.getElementById("tier0").value="";document.getElementById("tier1").value="";document.getElementById("tier1.5").value="";document.getElementById("tier2").value="";document.getElementById("tier3").value="";document.getElementById("vcpu").value="";document.getElementById("memory").value="";document.getElementById("user").value="";document.getElementById("server_type").value="";document.getElementById("server_name").value="";document.getElementById("Fecha_Firma_Servicio").value="";document.getElementById("Fecha_Inicio_Servicio").value="";document.getElementById("Fecha_Final_Servicio").value="";', 500);

    // document.getElementById("body3").hidden = false;
    // document.getElementById("body4").hidden = true;

  }

  else {
    document.getElementById("body1").hidden = true;
    document.getElementById("body2").hidden = false;
    // document.getElementById("body3").hidden = true;
    // document.getElementById("body4").hidden = false;
    if (document.getElementById("power").checked==true) {
      // document.getElementById("storage_servers").hidden=true;
      // document.getElementById("power_servers").hidden=false;
      // document.getElementById("iseries_servers").hidden=true;
      // document.getElementById("open_servers").hidden=true;
        setTimeout('document.getElementById("input_rfs").value="";document.getElementById("data_center").value="";document.getElementById("entidad").value="";document.getElementById("roll").value="";document.getElementById("tier0").value="";document.getElementById("tier1").value="";document.getElementById("tier1.5").value="";document.getElementById("tier2").value="";document.getElementById("tier3").value="";document.getElementById("vcpu").value="";document.getElementById("memory").value="";document.getElementById("user").value="";document.getElementById("server_type").value="";document.getElementById("server_name").value="";document.getElementById("Fecha_Firma_Servicio").value="";document.getElementById("Fecha_Inicio_Servicio").value="";document.getElementById("Fecha_Final_Servicio").value="";', 500);

    }
    if (document.getElementById("iseries").checked==true) {
      // document.getElementById("storage_servers").hidden=true;
      // document.getElementById("power_servers").hidden=true;
      // document.getElementById("iseries_servers").hidden=false;
      // document.getElementById("open_servers").hidden=true;
          setTimeout('document.getElementById("input_rfs").value="";document.getElementById("data_center").value="";document.getElementById("entidad").value="";document.getElementById("roll").value="";document.getElementById("tier0").value="";document.getElementById("tier1").value="";document.getElementById("tier1.5").value="";document.getElementById("tier2").value="";document.getElementById("tier3").value="";document.getElementById("vcpu").value="";document.getElementById("memory").value="";document.getElementById("user").value="";document.getElementById("server_type").value="";document.getElementById("server_name").value="";document.getElementById("Fecha_Firma_Servicio").value="";document.getElementById("Fecha_Inicio_Servicio").value="";document.getElementById("Fecha_Final_Servicio").value="";', 500);

    }
    if (document.getElementById("open").checked==true) {
      // document.getElementById("storage_servers").hidden=true;
      // document.getElementById("power_servers").hidden=true;
      // document.getElementById("iseries_servers").hidden=true;
      // document.getElementById("open_servers").hidden=false;
        setTimeout('document.getElementById("input_rfs").value="";document.getElementById("data_center").value="";document.getElementById("entidad").value="";document.getElementById("roll").value="";document.getElementById("tier0").value="";document.getElementById("tier1").value="";document.getElementById("tier1.5").value="";document.getElementById("tier2").value="";document.getElementById("tier3").value="";document.getElementById("vcpu").value="";document.getElementById("memory").value="";document.getElementById("user").value="";document.getElementById("server_type").value="";document.getElementById("server_name").value="";document.getElementById("Fecha_Firma_Servicio").value="";document.getElementById("Fecha_Inicio_Servicio").value="";document.getElementById("Fecha_Final_Servicio").value="";', 500);

    }
  }
}
function getSelectValue3(){
var svpn = document.getElementById("list2").value;
 (svpn);
}
function approve(){
db = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/reserve_request');
db2 = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/lallama');
//QRO STORORAGE
db3 = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/storage_qro');
//GDL SORAGE
db4 = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/storage_gdl');
//POWER
db5 = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/power');
//ISERIES
db10 = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/iseries_lpar_resume_db');
//ACCEPTED RESERVES
db22 = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/reserves_status');
var user2 =document.getElementById("user").value;

jSON22={
  _id:new Date().toISOString(),
  rfs: document.getElementById("input_rfs").value,
  status:"accepted",
  user:user2
};
  db22.put(jSON22).then(function (result) {

  }).catch(function (err) {
  //  ("err " + err);

  });


var delte = document.getElementById("input_rfs").value;
db.find({
  selector: {_id: {$gt:0}},
  sort: ['_id']
}).then(function (result) {
  /////////////////////////////////////////////
  r=result["docs"];
   ('kjnbnjko',r);
  for (var i = 0; i < r.length; i++) {
    if (r[i]["rfs"]==delte) {
      id = r[i]["_id"];
      rev = r[i]["_rev"];
      db.remove(id, rev, function(err) {
         if (err) {
            return  ('error is ',err);
         } else {
             ("Document deleted successfully");
         }
      });

    }
  }
  /////////////////////////////////////////////
});


jSON= {};
var tier0_write = 0;
var tier1_write = 0;
var tier15_write = 0;
var tier2_write = 0;
var tier3_write = 0;
// var delte = document.getElementById("input_rfs").value;
//  ("oskrin",delte);
// db.find({
//   selector: {_id: {$gt:0}},
//   sort: ['_id']
// }).then(function (result) {
//   /////////////////////////////////////////////
//   r=result["docs"];
//    ('kjnbnjko',r);
//   // document.getElementById("input_rfs").value = _this.innerHTML;
//   /////////////////////////////////////////////
// });
////////////////////////////////////////////////////////////////////UPDATING DB´S////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////STORAGE////////////////////////////////////////////////////////////////////
if (document.getElementById("storage").checked==true) {
   tier0_write = parseFloat(document.getElementById("tier0").value);
   tier1_write = parseFloat(document.getElementById("tier1").value);
   tier15_write = parseFloat(document.getElementById("tier1.5").value);
   tier2_write = parseFloat(document.getElementById("tier2").value);
   tier3_write = parseFloat(document.getElementById("tier3").value);
   if (document.getElementById("data_center").value == "GDL") {
     db2.find({
       selector: {_id: {$gt:0}},
       sort: ['_id']
     }).then(function (result) {
       /////////////////////////////////////////////
       r=result["docs"];
       // document.getElementById("input_rfs").value = _this.innerHTML;
       /////////////////////////////////////////////
     });
   }
   if ((document.getElementById("data_center").value=="QRO") || (document.getElementById("data_center").value=="QUERETARO")) {
      ("QRO STORAGE");

     db3.find({
       selector: {_id: {$gt:0}},
       sort: ['_id']
     }).then(function (result) {
       /////////////////////////////////////////////
       r=result["docs"];
       //tier0
       r0_tot_space = parseFloat(r[0]["tot_space"]);
       r0_used_space = parseFloat(r[0]["used_space"]);
       r0_res_space= tier0_write;
       r0_av_space = r0_tot_space-r0_used_space-r0_res_space;
        ("Tier 0");
        (r0_tot_space,r0_used_space,r0_res_space,r0_av_space);
       json_tier0={
           _id: "7966ebf1a06a45b2d53f06684703672a",
           _rev: "1-d76e17b3a9f765a8d49fb69d92219639",
           data_center: "QRO",
           tier: "0",
           tot_space: r0_tot_space,
           av_space: r0_av_space,
           used_space: r0_used_space,
           res_space: r0_res_space
                            };
       //tier1
       r1_tot_space = parseFloat(r[1]["tot_space"]);
       r1_used_space = parseFloat(r[1]["used_space"]);
       r1_res_space= tier1_write;
       r1_av_space = r1_tot_space-r1_used_space-r1_res_space;
        ("Tier 1");
        (r1_tot_space,r1_used_space,r1_res_space,r1_av_space);
       json_tier1 = {
         _id: "7966ebf1a06a45b2d53f066847037242",
         _rev: "1-c60871ab09ecccb4e9d2960c854cfb47",
         data_center: "QRO",
         tier: "1",
         tot_space: r1_tot_space,
         av_space: r1_av_space,
         used_space: r1_used_space,
         res_space: r1_res_space,
       };

       //tier1.5
       r15_tot_space = parseFloat(r[2]["tot_space"]);
       r15_used_space = parseFloat(r[2]["used_space"]);
       r15_res_space= tier15_write;
       r15_av_space = r15_tot_space-r15_used_space-r15_res_space;
        ("Tier 1.5");
        (r15_tot_space,r15_used_space,r15_res_space,r15_av_space);
       json_tier15={
         _id: "7966ebf1a06a45b2d53f0668470373ed",
         _rev: "1-83f6520d0c4386476b75c7b48947fafe",
         data_center: "QRO",
         tier: "1.5",
         tot_space: r15_tot_space,
         av_space: r15_av_space,
         used_space: r15_used_space,
         res_space: r15_res_space,
       };
       //tier2
       r2_tot_space = parseFloat(r[3]["tot_space"]);
       r2_used_space = parseFloat(r[3]["used_space"]);
       r2_res_space= tier2_write;
       r2_av_space = r2_tot_space-r2_used_space-r2_res_space;
        ("Tier 2");
        (r2_tot_space,r2_used_space,r2_res_space,r2_av_space);
       json_tier2={
         _id: "7966ebf1a06a45b2d53f066847037888",
         _rev: "1-f45a4632791cd2f4f6546e74af34c8c0",
         data_center: "QRO",
         tier: "2",
         tot_space: r2_tot_space,
         av_space: r2_av_space,
         used_space: r2_used_space,
         res_space: r2_res_space
       };
       //tier3
       r3_tot_space = parseFloat(r[4]["tot_space"]);
       r3_used_space = parseFloat(r[4]["used_space"]);
       r3_res_space= tier3_write;
       r3_av_space = r3_tot_space-r3_used_space-r3_res_space;
        ("Tier 3");
        (r3_tot_space,r3_used_space,r3_res_space,r3_av_space);
       json_tier3={
         _id: "7966ebf1a06a45b2d53f066847037d91",
         _rev: "1-86c4470389f946b62928d8c29d710415",
         data_center: "QRO",
         tier: "3",
         tot_space: r3_tot_space,
         av_space: r3_av_space,
         used_space: r3_used_space,
         res_space: r3_res_space
       };
       //////////////////UPDATING TIER 0 IN CLOUDANT/////////////////////////////////////
       if (document.getElementById("tier0").value!="0") {
         // fetch mittens
         db3.get('7966ebf1a06a45b2d53f06684703672a').then(function (json_tier0) {
           // update their age
           json_tier0.tot_space =r0_tot_space;
           json_tier0.av_space = r0_av_space;
           json_tier0.used_space = r0_used_space;
           json_tier0.res_space = r0_res_space;
           // put them back
           return db3.put(json_tier0);
         }).then(function () {
           // fetch mittens again
           return db3.get('7966ebf1a06a45b2d53f06684703672a');
         }).then(function (json_tier0) {
            (json_tier0);
         });
       }
       //////////////////UPDATING TIER 1 IN CLOUDANT/////////////////////////////////////
       if (document.getElementById("tier1").value!="0") {
         // fetch mittens
         db3.get('7966ebf1a06a45b2d53f066847037242').then(function (json_tier1) {
           // update their age
           json_tier1.tot_space =r1_tot_space;
           json_tier1.av_space = r1_av_space;
           json_tier1.used_space = r1_used_space;
           json_tier1.res_space = r1_res_space;
           // put them back
           return db3.put(json_tier1);
         }).then(function () {
           // fetch mittens again
           return db3.get('7966ebf1a06a45b2d53f066847037242');
         }).then(function (json_tier1) {
            (json_tier1);
         });
       }
       //////////////////UPDATING TIER 1.5 IN CLOUDANT/////////////////////////////////////
       if (document.getElementById("tier1.5").value!="0") {
         // fetch mittens
         db3.get('7966ebf1a06a45b2d53f0668470373ed').then(function (json_tier15) {
           // update their age
           json_tier15.tot_space =r15_tot_space;
           json_tier15.av_space = r15_av_space;
           json_tier15.used_space = r15_used_space;
           json_tier15.res_space = r15_res_space;
           // put them back
           return db3.put(json_tier15);
         }).then(function () {
           // fetch mittens again
           return db3.get('7966ebf1a06a45b2d53f0668470373ed');
         }).then(function (json_tier15) {
            (json_tier15);
         });
       }
       //////////////////UPDATING TIER 2 IN CLOUDANT/////////////////////////////////////
       if (document.getElementById("tier2").value!="0") {
         // fetch mittens
         db3.get('7966ebf1a06a45b2d53f066847037888').then(function (json_tier2) {
           // update their age
           json_tier2.tot_space =r2_tot_space;
           json_tier2.av_space = r2_av_space;
           json_tier2.used_space = r2_used_space;
           json_tier2.res_space = r2_res_space;
           // put them back
           return db3.put(json_tier2);
         }).then(function () {
           // fetch mittens again
           return db3.get('7966ebf1a06a45b2d53f066847037888');
         }).then(function (json_tier2) {
            (json_tier2);
         });
         //////////////////UPDATING TIER 3 IN CLOUDANT/////////////////////////////////////
       }
       if (document.getElementById("tier3").value!="0") {
         // fetch mittens
         db3.get('7966ebf1a06a45b2d53f066847037d91').then(function (json_tier3) {
           // update their age
           json_tier3.tot_space =r3_tot_space;
           json_tier3.av_space = r3_av_space;
           json_tier3.used_space = r3_used_space;
           json_tier3.res_space = r3_res_space;
           // put them back
           return db3.put(json_tier3);
         }).then(function () {
           // fetch mittens again
           return db3.get('7966ebf1a06a45b2d53f066847037d91');
         }).then(function (json_tier3) {
            (json_tier3);
         });
       }

       /////////////////////////////////////////////
     });
   }

   if ((document.getElementById("data_center").value=="GDL") || (document.getElementById("data_center").value=="GUADALAJARA")) {
      ("GDL STORAGE");

     db4.find({
       selector: {_id: {$gt:0}},
       sort: ['_id']
     }).then(function (result) {
       /////////////////////////////////////////////
       r=result["docs"];
       //tier0
       r0_tot_space = parseFloat(r[0]["tot_space"]);
       r0_used_space = parseFloat(r[0]["used_space"]);
       r0_res_space= tier0_write;
       r0_av_space = r0_tot_space-r0_used_space-r0_res_space;
        ("Tier 0");
        (r0_tot_space,r0_used_space,r0_res_space,r0_av_space);
       json_tier0={
           _id: "7966ebf1a06a45b2d53f06684703672a",
           _rev: "1-d76e17b3a9f765a8d49fb69d92219639",
           data_center: "QRO",
           tier: "0",
           tot_space: r0_tot_space,
           av_space: r0_av_space,
           used_space: r0_used_space,
           res_space: r0_res_space,
                            };
       //tier1
       r1_tot_space = parseFloat(r[1]["tot_space"]);
       r1_used_space = parseFloat(r[1]["used_space"]);
       r1_res_space= tier1_write;
       r1_av_space = r1_tot_space-r1_used_space-r1_res_space;
        ("Tier 1");
        (r1_tot_space,r1_used_space,r1_res_space,r1_av_space);
       json_tier1 = {
         _id: "7966ebf1a06a45b2d53f066847037242",
         _rev: "1-c60871ab09ecccb4e9d2960c854cfb47",
         data_center: "QRO",
         tier: "1",
         tot_space: r1_tot_space,
         av_space: r1_av_space,
         used_space: r1_used_space,
         res_space: r1_res_space,
       };

       //tier1.5
       r15_tot_space = parseFloat(r[2]["tot_space"]);
       r15_used_space = parseFloat(r[2]["used_space"]);
       r15_res_space= tier15_write;
       r15_av_space = r15_tot_space-r15_used_space-r15_res_space;
        ("Tier 1.5");
        (r15_tot_space,r15_used_space,r15_res_space,r15_av_space);
       json_tier15={
         _id: "7966ebf1a06a45b2d53f0668470373ed",
         _rev: "1-83f6520d0c4386476b75c7b48947fafe",
         data_center: "QRO",
         tier: "1.5",
         tot_space: r15_tot_space,
         av_space: r15_av_space,
         used_space: r15_used_space,
         res_space: r15_res_space,
       };
       //tier2
       r2_tot_space = parseFloat(r[3]["tot_space"]);
       r2_used_space = parseFloat(r[3]["used_space"]);
       r2_res_space= tier2_write;
       r2_av_space = r2_tot_space-r2_used_space-r2_res_space;
        ("Tier 2");
        (r2_tot_space,r2_used_space,r2_res_space,r2_av_space);
       json_tier2={
         _id: "7966ebf1a06a45b2d53f066847037888",
         _rev: "1-f45a4632791cd2f4f6546e74af34c8c0",
         data_center: "QRO",
         tier: "2",
         tot_space: r2_tot_space,
         av_space: r2_av_space,
         used_space: r2_used_space,
         res_space: r2_res_space
       };
       //tier3
       r3_tot_space = parseFloat(r[4]["tot_space"]);
       r3_used_space = parseFloat(r[4]["used_space"]);
       r3_res_space= tier3_write;
       r3_av_space = r3_tot_space-r3_used_space-r3_res_space;
        ("Tier 3");
        (r3_tot_space,r3_used_space,r3_res_space,r3_av_space);
       json_tier3={
         _id: "7966ebf1a06a45b2d53f066847037d91",
         _rev: "1-86c4470389f946b62928d8c29d710415",
         data_center: "QRO",
         tier: "3",
         tot_space: r3_tot_space,
         av_space: r3_av_space,
         used_space: r3_used_space,
         res_space: r3_res_space
       };
       //////////////////UPDATING TIER 0 IN CLOUDANT/////////////////////////////////////
       if (document.getElementById("tier0").value!="0") {
         // fetch mittens
         db4.get('fde4190c1ecda1b6c4677401be506286').then(function (json_tier0) {
           // update their age
           json_tier0.tot_space =r0_tot_space;
           json_tier0.av_space = r0_av_space;
           json_tier0.used_space = r0_used_space;
           json_tier0.res_space = r0_res_space;
           // put them back
           return db4.put(json_tier0);
         }).then(function () {
           // fetch mittens again
           return db4.get('fde4190c1ecda1b6c4677401be506286');
         }).then(function (json_tier0) {
            (json_tier0);
         });
       }
       //////////////////UPDATING TIER 1 IN CLOUDANT/////////////////////////////////////
       if (document.getElementById("tier1").value!="0") {
         // fetch mittens
         db4.get('fde4190c1ecda1b6c4677401be50699e').then(function (json_tier1) {
           // update their age
           json_tier1.tot_space =r1_tot_space;
           json_tier1.av_space = r1_av_space;
           json_tier1.used_space = r1_used_space;
           json_tier1.res_space = r1_res_space;
           // put them back
           return db4.put(json_tier1);
         }).then(function () {
           // fetch mittens again
           return db4.get('fde4190c1ecda1b6c4677401be50699e');
         }).then(function (json_tier1) {
            (json_tier1);
         });
       }
       //////////////////UPDATING TIER 1.5 IN CLOUDANT/////////////////////////////////////
       if (document.getElementById("tier1.5").value!="0") {
         // fetch mittens
         db4.get('fde4190c1ecda1b6c4677401be5075c5').then(function (json_tier15) {
           // update their age
           json_tier15.tot_space =r15_tot_space;
           json_tier15.av_space = r15_av_space;
           json_tier15.used_space = r15_used_space;
           json_tier15.res_space = r15_res_space;
           // put them back
           return db4.put(json_tier15);
         }).then(function () {
           // fetch mittens again
           return db4.get('fde4190c1ecda1b6c4677401be5075c5');
         }).then(function (json_tier15) {
            (json_tier15);
         });
       }
       //////////////////UPDATING TIER 2 IN CLOUDANT/////////////////////////////////////
       if (document.getElementById("tier2").value!="0") {
         // fetch mittens
         db4.get('fde4190c1ecda1b6c4677401be507f54').then(function (json_tier2) {
           // update their age
           json_tier2.tot_space =r2_tot_space;
           json_tier2.av_space = r2_av_space;
           json_tier2.used_space = r2_used_space;
           json_tier2.res_space = r2_res_space;
           // put them back
           return db4.put(json_tier2);
         }).then(function () {
           // fetch mittens again
           return db4.get('fde4190c1ecda1b6c4677401be507f54');
         }).then(function (json_tier2) {
            (json_tier2);
         });
         //////////////////UPDATING TIER 3 IN CLOUDANT/////////////////////////////////////
       }
       if (document.getElementById("tier3").value!="0") {
         // fetch mittens
         db4.get('fde4190c1ecda1b6c4677401be507fcc').then(function (json_tier3) {
           // update their age
           json_tier3.tot_space =r3_tot_space;
           json_tier3.av_space = r3_av_space;
           json_tier3.used_space = r3_used_space;
           json_tier3.res_space = r3_res_space;
           // put them back
           return db4.put(json_tier3);
         }).then(function () {
           // fetch mittens again
           return db4.get('fde4190c1ecda1b6c4677401be507fcc');
         }).then(function (json_tier3) {
            (json_tier3);
         });
       }

       /////////////////////////////////////////////
     });
   }

  jSON={
    _id: new Date().toISOString(),
    rfs:document.getElementById("input_rfs").value,
    technology: "STORAGE",
    approved_tier0_GB:document.getElementById("tier0").value,
    approved_tier1_GB:document.getElementById("tier1").value,
    approved_tier1_5_GB:document.getElementById("tier1.5").value,
    approved_tier2_GB:document.getElementById("tier2").value,
    approved_tier3_GB:document.getElementById("tier3").value,

  };
}
////////////////////////////////////////////////////////////////////POWER////////////////////////////////////////////////////////////////////
if (document.getElementById("power").checked==true) {
jSON={
    _id: new Date().toISOString(),
    rfs:document.getElementById("input_rfs").value,
    technology: "POWER",
    approved_vcpu_cores:document.getElementById("memory").value,
    approved_memory_GB:document.getElementById("vcpu").value,
  };
  memo= parseFloat(document.getElementById("memory").value);
  vcp=parseFloat(document.getElementById("vcpu").value);
///////////////////////READING THE DATABASE///////////////////////
db5.find({
  selector: {_id: {$gt:0}},
  sort: ['_id']
}).then(function (result) {
  /////////////////////////////////////////////
  ro=result["docs"];
  ////////////////////////WRITING IN DATABSE/////////////////////
   ('ro',ro)
   (ro[0]["dc_power"]);
  ///////////////////////////GDL///////////////////////////
  if ((document.getElementById("data_center").value=="GDL") || (document.getElementById("data_center").value=="GUADALAJARA")) {

  //////////////////UPDATING MEMORY   IN CLOUDANT/////////////////////////////////////
  if (document.getElementById("memory").value!="0") {
    json_mem_gdl = {
    _id: "2dd1dc21be057755b1e2182c4dc01766",
    _rev: "48-fb1502653ecc77650cef96df62e9c4bf",
    tot_mem: ro[0]["tot_mem"],
    used_mem: ro[0]["used_mem"],
    res_mem: memo,
    av_mem: ro[0]["tot_mem"]-ro[0]["used_mem"]-memo,
  };
    db5.put(json_mem_gdl);

    // fetch mittens
    db5.get('2dd1dc21be057755b1e2182c4dc01766').then(function (json_mem_gdl) {
      // update their age
      json_mem_gdl.tot_mem = ro[0]["tot_mem"];
      json_mem_gdl.used_mem = ro[0]["used_mem"];
      json_mem_gdl.res_mem = memo;
      json_mem_gdl.av_mem = ro[0]["tot_mem"]-ro[0]["used_mem"]-memo;
      // put them back
      return db5.put(json_mem_gdl);
    }).then(function () {
      // fetch mittens again
      return db5.get('2dd1dc21be057755b1e2182c4dc01766');
    }).then(function (json_mem_gdl) {
       (json_mem_gdl);
    });
  }
  //////////////////UPDATING   VCPU  IN CLOUDANT/////////////////////////////////////
  if (document.getElementById("vcpu").value!="0") {
    json_vcpu_gdl = {
    _id: "2dd1dc21be057755b1e2182c4dc01766",
    _rev: "48-fb1502653ecc77650cef96df62e9c4bf",
    tot_cores: ro[0]["tot_cores"],
    used_cores: ro[0]["used_cores"],
    res_cores: vcp,
    av_cores: ro[0]["tot_cores"]-ro[0]["used_cores"]-vcp,
  };
    db5.put(json_vcpu_gdl);

    // fetch mittens
    db5.get('2dd1dc21be057755b1e2182c4dc01766').then(function (json_vcpu_gdl) {
      // update their age
       ("mittens");
      json_vcpu_gdl.tot_cores = ro[0]["tot_cores"];
      json_vcpu_gdl.used_cores = ro[0]["used_cores"];
      json_vcpu_gdl.res_cores = vcp;
      json_vcpu_gdl.av_cores = ro[0]["tot_cores"]-ro[0]["used_cores"]-vcp;
      // put them back
      return db5.put(json_vcpu_gdl);
    }).then(function () {
       ("mittens2");
      // fetch mittens again
      return db5.get('2dd1dc21be057755b1e2182c4dc01766');
    }).then(function (json_vcpu_gdl) {
       ("mittens3");
       (json_vcpu_gdl);
    });
  }
}
///////////////////////////QRO///////////////////////////
if ((document.getElementById("data_center").value=="QRO") || (document.getElementById("data_center").value=="QUERETARO")){
  ///////////////////////////QRO///////////////////////////
 (ro[1]["dc_power"]);
 (ro[1]);
//////////////////UPDATING MEMORY  IN CLOUDANT/////////////////////////////////////
if (document.getElementById("memory").value!="0") {
  json_mem_gdl = {
  _id: "2dd1dc21be057755b1e2182c4dc0222c",
  _rev: "32-04010746b4f9738e4b5ab4a40567e364",
  tot_mem: ro[1]["tot_mem"],
  used_mem: ro[1]["used_mem"],
  res_mem: memo,
  av_mem: ro[1]["tot_mem"]-ro[1]["used_mem"]-memo,
};
db5.put(json_mem_gdl);
  // fetch mittens
  db5.get('2dd1dc21be057755b1e2182c4dc0222c').then(function (json_mem_gdl) {
    // update their age
    json_mem_gdl.tot_mem = ro[1]["tot_mem"];
    json_mem_gdl.used_mem = ro[1]["used_mem"];
    json_mem_gdl.res_mem = memo;
    json_mem_gdl.av_mem = ro[1]["tot_mem"]-ro[1]["used_mem"]-memo;
    // put them back
    return db5.put(json_mem_gdl);
  }).then(function () {
    // fetch mittens again
    return db5.get('2dd1dc21be057755b1e2182c4dc0222c');
  }).then(function (json_mem_gdl) {
     ("RRRAAAA");
     (json_mem_gdl);
  });
}
//////////////////UPDATING VCPU IN CLOUDANT/////////////////////////////////////
if (document.getElementById("vcpu").value!="0") {
 ("popo2");
json_vcpu_gdl = {
_id: "2dd1dc21be057755b1e2182c4dc0222c",
_rev: "32-04010746b4f9738e4b5ab4a40567e364",
tot_cores: ro[1]["tot_cores"],
used_cores: ro[1]["used_cores"],
res_cores: vcp,
av_cores: ro[1]["tot_cores"]-ro[1]["used_cores"]-vcp,
};
db5.put(json_vcpu_gdl);
// fetch mittens
db5.get('2dd1dc21be057755b1e2182c4dc0222c').then(function (json_vcpu_gdl) {
  // update their age
   ("mittens");
  json_vcpu_gdl.tot_cores = ro[1]["tot_cores"];
  json_vcpu_gdl.used_cores = ro[1]["used_cores"];
  json_vcpu_gdl.res_cores = vcp;
  json_vcpu_gdl.av_cores = ro[1]["tot_cores"]-ro[1]["used_cores"]-vcp;
  // put them back
  return db5.put(json_vcpu_gdl);
}).then(function () {
   ("mittens2");

  // fetch mittens again
  return db5.get('2dd1dc21be057755b1e2182c4dc0222c');
}).then(function (json_vcpu_gdl) {
   ("mittens3");

   (json_vcpu_gdl);
});
}
  }
});
}
////////////////////////////////////////////////////////////////////OPEN////////////////////////////////////////////////////////////////////
if (document.getElementById("open").checked==true) {

}
////////////////////////////////////////////////////////////////////ISERIES////////////////////////////////////////////////////////////////////
if (document.getElementById("iseries").checked==true) {
  jSON={
    _id: new Date().toISOString(),
    rfs:document.getElementById("input_rfs").value,
    technology: "ISERIES",
    approved_vcpu_cores:document.getElementById("memory").value,
    approved_memory_GB:document.getElementById("vcpu").value,
  };
//importing revs


//importing all the data from CLOUDANT
 ("que pedo mis burs0!?");
db10.find({
  selector: {_id: {$gt:0}},
  sort: ['_id']
}).then(function (result) {
  /////////////////////////////////////////////
  r=result["docs"];
   ("brus134",r);
  //revs&ids
  qro_vcpu_rev = r[0]["_rev"];
  qro_memory_rev =r[1]["_rev"];
  qro_vcpu_id = r[0]["_id"];
  qro_memory_id =r[1]["_id"];
  gdl_vcpu_rev = r[2]["_rev"];
  gdl_memory_rev =r[3]["_rev"];
  gdl_vcpu_id = r[2]["_id"];
  gdl_memory_id =r[3]["_id"];
  //QRO CPU
  total_cpu_qro=r[0]["tot_gb"];
  used_cpu_qro=[0]["used_gb"];
  res = document.getElementById("vcpu").value;
  av_cpu_qro = total_cpu_qro-used_cpu_qro-res;
  //QRO MEM
  total_mem_qro=r[1]["tot_gb"] ;
  used_mem_qro=r[1]["used_gb"];
  res2 = document.getElementById("memory").value;
  av_mem_qro= total_mem_qro-used_mem_qro-res2;
  //GDL CPU
  total_cpu_gdl=r[2]["tot_gb"] ;
  used_cpu_gdl=r[2]["used_gb"];
  res3 = document.getElementById("vcpu").value;
  av_cpu_gdl = total_cpu_gdl-used_cpu_gdl-res3;
  //GDL MEM
  total_mem_gdl=r[3]["tot_gb"];
  used_mem_gdl=r[3]["used_gb"];
  res4 = document.getElementById("memory").value;
  av_mem_gdl= total_mem_gdl-used_mem_gdl-res4;
  //WRITING GDL
   ("frontera1");
  if ((document.getElementById("data_center").value=="GDL")) {
     ("frontera11");
     ("que pedo mis burs1!?");

    if (document.getElementById("vcpu").value!="0") {
       ("que pedo mis burs2!?");

      //GDL VCPU ISERIES
      jSON1={
  _id: gdl_vcpu_id,
  _rev:gdl_vcpu_rev,
  dc: "GDL",
  type: "vcpu",
  tot_gb:total_cpu_gdl ,
  used_gb: used_cpu_gdl,
  av_gb: av_cpu_gdl,
  min_gb: "86",
  res: res3,
  offset: "0"
};
      db10.put(jSON1);
       ("que pedo mis burs3!?");
    }
    if (document.getElementById("memory").value!="0") {
       ("que pedo mis burs4!?");

      //GDL MEMORY ISERIES¡
      jSON2={
        _id: gdl_memory_id,
        _rev:gdl_memory_rev,
        dc: "GDL",
        type: "memory",
        tot_gb:total_mem_gdl ,
        used_gb: used_mem_gdl,
        av_gb: av_mem_gdl,
        min_gb: "86",
        res: res4,
        offset: "0"
      };
      db10.put(jSON2);
       ("que pedo mis burs5!?");

    }
  }

  //WRITING QRO
   ("frontera2");
  if ((document.getElementById("data_center").value=="QRO")||(document.getElementById("data_center").value=="QUERETARO")) {
     ("frontera22");
     ("que pedo mis burs6!?");
    if (document.getElementById("vcpu").value!="0") {
       ("que pedo mis burs7!?");

      //QRO VCPU ISERIES
      jSON1={
  _id: qro_vcpu_id,
  _rev:qro_vcpu_rev,
  dc: "QRO",
  type: "vcpu",
  tot_gb:total_cpu_qro,
  used_gb: used_cpu_qro,
  av_gb: av_cpu_qro,
  min_gb: "86",
  res: res,
  offset: "0"
};
      db10.put(jSON1);
       ("que pedo mis burs8!?");
    }
    if (document.getElementById("memory").value!="0") {
      //QRO MEMORY ISERIES¡
      jSON2={
        _id: qro_memory_id,
        _rev:qro_memory_rev,
        dc: "QRO",
        type: "memory",
        tot_gb:total_mem_qro ,
        used_gb: used_mem_qro,
        av_gb: av_mem_qro,
        min_gb: "86",
        res: res2,
        offset: "0"
      };
      db10.put(jSON2);
       ("que pedo mis burs9!?");

    }
  }

  /////////////////////////////////////////////
});


}
////////////////////////////////////////////////////////////////////SOLARIS////////////////////////////////////////////////////////////////////
if (document.getElementById("solari").checked==true) {
  jSON={
    _id: new Date().toISOString(),
    rfs:document.getElementById("input_rfs").value,
    technology: "SOLARIS",
    approved_vcpu_cores:document.getElementById("mem").value,
    approved_memory_GB:document.getElementById("vc").value,
  };
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  alert("Storage approved!");



// document.getElementById("input_rfs").value="";
// document.getElementById("data_center").value="";
// document.getElementById("entidad").value="";
// document.getElementById("roll").value="";
// document.getElementById("tier0").value="";
// document.getElementById("tier1").value="";
// document.getElementById("tier1.5").value="";
// document.getElementById("tier2").value="";
// document.getElementById("tier3").value="";
// document.getElementById("vcpu").value="";
// document.getElementById("memory").value="";
// document.getElementById("user").value="";
// document.getElementById("server_type").value="";
// document.getElementById("server_name").value="";
// document.getElementById("Fecha_Firma_Servicio").value="";
// document.getElementById("Fecha_Inicio_Servicio").value="";
// document.getElementById("Fecha_Final_Servicio").value="";
// document.getElementById("storage").checked=false;
// document.getElementById("power").checked=false;
// document.getElementById("open").checked=false;
// document.getElementById("iseries").checked=false;


setTimeout('document.getElementById("input_rfs").value="";document.getElementById("data_center").value="";document.getElementById("entidad").value="";document.getElementById("roll").value="";document.getElementById("tier0").value="";document.getElementById("tier1").value="";document.getElementById("tier1.5").value="";document.getElementById("tier2").value="";document.getElementById("tier3").value="";document.getElementById("vcpu").value="";document.getElementById("memory").value="";document.getElementById("user").value="";document.getElementById("server_type").value="";document.getElementById("server_name").value="";document.getElementById("Fecha_Firma_Servicio").value="";document.getElementById("Fecha_Inicio_Servicio").value="";document.getElementById("Fecha_Final_Servicio").value="";document.getElementById("storage").checked=false;document.getElementById("power").checked=false;document.getElementById("open").checked=false;document.getElementById("iseries").checked=false;', 2500);




}
function actualizaStatus(rfsPar,statusPar,reasonP,userPar){
	db = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/reserves_status');
  if(reasonP==="0"){
    var json = {
      _id: new Date().toISOString(),
      rfs:rfsPar,
      status:statusPar,
      user:userPar

    };
  }else{
    var json = {
      _id: new Date().toISOString(),
      rfs:rfsPar,
      status:statusPar,
      reason:reasonP,
      user:userPar
    };

  }
  console.log(json);
  db.put(json).then(function (response) {
    // handle response
  }).catch(function (err) {
    console.log(err);
  });

	}
function deleteRequest(idAnt){
    db = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/reserve_request');
    db.get(idAnt).then(function(doc) {
      return db.remove(doc);
    }).then(function (result) {
      console.log("Se elimino correctamente"+idAnt);
    }).catch(function (err) {
      console.log(err);
    });
  }
function actualizarDatos(parametro, reason){
  db = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/reserve_request');
  db.find({
    selector: {_id: {$gt:0}},
    sort: ['_id']
  }).then(function (result) {
    /////////////////////////////////////////////
    r=result["docs"];
    for (var i = 0; i < r.length; i++) {
      if (r[i]["rfs"]==rfsVar || r[i]["rfs"]==rfsVar && r[i]["technology"]==="POWER" ) {
        this.deleteRequest(r[i]["_id"]);
      } else if (r[i]["rfs"]==rfsVar && r[i]["technology"]==="ISERIES" ) {
        this.deleteRequest(r[i]["_id"]);
      }else if (r[i]["rfs"]==rfsVar && r[i]["technology"]==="STORAGE_POWER" ) {
        this.deleteRequest(r[i]["_id"]);
      }else if (r[i]["rfs"]==rfsVar && r[i]["technology"]==="STORAGE_ISERIES" ) {
        this.deleteRequest(r[i]["_id"]);
      }else if (r[i]["rfs"]==rfsVar && r[i]["technology"]==="STORAGE_OPEN" ) {
        this.deleteRequest(r[i]["_id"]);
      }
    }
  });
  if(parametro===0){
  	var userP=document.getElementById('user').value;
  	this.actualizaStatus(rfsVar, "accepted","",userP);
  }else if(parametro===1){
  	var userP=document.getElementById('user').value;
  	this.actualizaStatus(rfsVar, "declined",reason,userP);
  }
  alert("Reserve approved")
  setTimeout('document.getElementById("input_rfs").value="";document.getElementById("data_center").value="";document.getElementById("entidad").value="";document.getElementById("roll").value="";document.getElementById("tier0").value="";document.getElementById("tier1").value="";document.getElementById("tier1.5").value="";document.getElementById("tier2").value="";document.getElementById("tier3").value="";document.getElementById("vcpu").value="";document.getElementById("memory").value="";document.getElementById("user").value="";document.getElementById("server_type").value="";document.getElementById("server_name").value="";document.getElementById("Fecha_Firma_Servicio").value="";document.getElementById("Fecha_Inicio_Servicio").value="";document.getElementById("Fecha_Final_Servicio").value="";document.getElementById("storage").checked=false;document.getElementById("power").checked=false;document.getElementById("open").checked=false;document.getElementById("iseries").checked=false;document.getElementById("R2").hidden=true;document.getElementById("R3").hidden=true;document.getElementById("R4").hidden=true;document.getElementById("tech_req_1_str_opn").value="";document.getElementById("R1_STORAGE_OPEN").hidden=true;document.getElementById("req1_str_opn").hidden = true;document.getElementById("req1_str_pwr").hidden = true;document.getElementById("req1_str_iseries").hidden = true;document.getElementById("req1_opn").hidden = true;document.getElementById("req1_pwr").hidden = true;document.getElementById("req1_iseries").hidden = true;document.getElementById("req2_str_opn").hidden = true;document.getElementById("req2_str_pwr").hidden = true;document.getElementById("req2_str_iseries").hidden = true;document.getElementById("req2_opn").hidden = true;document.getElementById("req2_pwr").hidden = true;document.getElementById("req2_iseries").hidden = true;document.getElementById("req3_str_opn").hidden = true;document.getElementById("req3_str_pwr").hidden = true;document.getElementById("req3_str_iseries").hidden = true;document.getElementById("req3_opn").hidden = true;document.getElementById("req3_pwr").hidden = true;document.getElementById("req3_iseries").hidden = true;document.getElementById("req4_str_opn").hidden = true;document.getElementById("req4_str_pwr").hidden = true;document.getElementById("req4_str_iseries").hidden = true;document.getElementById("req4_opn").hidden = true;document.getElementById("req4_pwr").hidden = true;document.getElementById("req4_iseries").hidden = true;', 500);


  $(':input').val('');



}
function decline(){
  alert("Storage declined!\nCheck request");
  var user2 =document.getElementById("user").value;
  var z = prompt("Reason for declining:");
  this.actualizarDatos(1, z);
  document.getElementById("input_rfs").value="";
  document.getElementById("data_center").value="";
  document.getElementById("entidad").value="";
  document.getElementById("roll").value="";
  document.getElementById("tier0").value="";
  document.getElementById("tier1").value="";
  document.getElementById("tier1.5").value="";
  document.getElementById("tier2").value="";
  document.getElementById("tier3").value="";
  document.getElementById("vcpu").value="";
  document.getElementById("memory").value="";
  document.getElementById("user").value="";
  document.getElementById("server_type").value="";
  document.getElementById("server_name").value="";
  document.getElementById("Fecha_Firma_Servicio").value="";
  document.getElementById("Fecha_Inicio_Servicio").value="";
  document.getElementById("Fecha_Final_Servicio").value="";
  document.getElementById("storage").checked=false;
  document.getElementById("power").checked=false;
  document.getElementById("open").checked=false;
  document.getElementById("iseries").checked=false;

  setTimeout('document.getElementById("input_rfs").value="";document.getElementById("data_center").value="";document.getElementById("entidad").value="";document.getElementById("roll").value="";document.getElementById("tier0").value="";document.getElementById("tier1").value="";document.getElementById("tier1.5").value="";document.getElementById("tier2").value="";document.getElementById("tier3").value="";document.getElementById("vcpu").value="";document.getElementById("memory").value="";document.getElementById("user").value="";document.getElementById("server_type").value="";document.getElementById("server_name").value="";document.getElementById("Fecha_Firma_Servicio").value="";document.getElementById("Fecha_Inicio_Servicio").value="";document.getElementById("Fecha_Final_Servicio").value="";document.getElementById("storage").checked=false;document.getElementById("power").checked=false;document.getElementById("open").checked=false;document.getElementById("iseries").checked=false;document.getElementById("R2").hidden=true;document.getElementById("R3").hidden=true;document.getElementById("R4").hidden=true;document.getElementById("tech_req_1_str_opn").value="";document.getElementById("R1_STORAGE_OPEN").hidden=true;document.getElementById("req1_str_opn").hidden = true;document.getElementById("req1_str_pwr").hidden = true;document.getElementById("req1_str_iseries").hidden = true;document.getElementById("req1_opn").hidden = true;document.getElementById("req1_pwr").hidden = true;document.getElementById("req1_iseries").hidden = true;document.getElementById("req2_str_opn").hidden = true;document.getElementById("req2_str_pwr").hidden = true;document.getElementById("req2_str_iseries").hidden = true;document.getElementById("req2_opn").hidden = true;document.getElementById("req2_pwr").hidden = true;document.getElementById("req2_iseries").hidden = true;document.getElementById("req3_str_opn").hidden = true;document.getElementById("req3_str_pwr").hidden = true;document.getElementById("req3_str_iseries").hidden = true;document.getElementById("req3_opn").hidden = true;document.getElementById("req3_pwr").hidden = true;document.getElementById("req3_iseries").hidden = true;document.getElementById("req4_str_opn").hidden = true;document.getElementById("req4_str_pwr").hidden = true;document.getElementById("req4_str_iseries").hidden = true;document.getElementById("req4_opn").hidden = true;document.getElementById("req4_pwr").hidden = true;document.getElementById("req4_iseries").hidden = true;', 500);
  $(':input').val('');

}
function login(){
db = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/users');
 ('Login function activated');
flag = false;
db.find({
  selector: {_id: {$gt:0}},
  sort: ['_id']
}).then(function (result) {
  // list of people shown here
  r=result["docs"];
  var n;
  for (var i = 0; i < r.length; i++) {
    var x = document.getElementById('user').value.toUpperCase();
    var y = document.getElementById('password').value;
    r2 = r[i];
    if ((r2['user']==x) && (r2['password'])==y) {
      var z = document.getElementById('incorrect');
       (z);
      z.hidden = true;
      user_login=(r2["user"]);
      roll_login=(r2['roll']);
       (roll_login);
      localStorage.setItem("roll_log",roll_login)
      localStorage.setItem("user_log",user_login)
      window.location.replace("maindashv1.html");
      break;
    }
    else {
      flag = true;
    }
if (flag = true) {
    var z = document.getElementById('incorrect');
     (z);
    z.hidden = false;
}
  }
});

}

//function checarLogueo(){
//   var roll_log, user_log;
//   roll_log=localStorage.getItem("roll_log");
//   user_log=localStorage.getItem("user_log");
//   console.log("Roll es"+roll_log);
//   console.log("User es"+user_log);
//   if (user_log=='' || user_log==null){
//     alert("Your session has expired, please login again");
//     window.location.replace("index.html");
//   }
// }

// function return_login(){
//   console.log("return login");
// var roll2 = window.onload = localStorage.getItem("roll_log");
// // alert(roll2);
// if ((roll2=="PM")) {
//   document.getElementById("reserve_link").hidden = false;
//   document.getElementById("reserve_manager_link").hidden = true;
//   document.getElementById("mult_link").hidden = true;

// if ((roll2=="ARQ")||(roll2=="MNG")) {
//   document.getElementById("mult_link").hidden = true;
// }

// }
// if ((roll2=="ARQ") || (roll2=="infra_admin")) {
//   document.getElementById("reserve_link").hidden = false;

// }
// if ((roll2=="MNG")|| (roll2=="ARQ")|| (roll2=="infra_admin")) {
//   document.getElementById("reserve_manager_link").hidden = false;
// }
// if ((roll2=="PO") || (roll2=="infra_admin"))  {
//   document.getElementById("acces_administration_link").hidden = false;
//   document.getElementById("mult_link").hidden = false;

// }

function views(){
  var x = 0;
  if (document.getElementById('SO').value=="STORAGE") {
      x = 2;

  }
  if (document.getElementById('SO').value!="STORAGE") {
      x = 3;
  }
  if (x%2 == 0) {
     ('po');
    document.getElementById("vcpu2").hidden = true;
  }
}
function replica(){
  var x = document.getElementById('replica');
  x.value = y= parseInt(x.value)+1;
if (y%2 == 0) {
  document.getElementById("primary").hidden = true;

}
 if (y%2 != 0) {
  document.getElementById("primary").hidden = false;

}
}
function show_storage(){
db2 = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/storage_gdl');
db3 = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/storage_qro');
db30 = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/storage');




if ((document.getElementById("storage").checked==true)){
  document.getElementById("platform").hidden=false;
  document.getElementById("confirm_server_1").hidden = true;


}
  else {
    document.getElementById("platform").hidden=true;
    document.getElementById("confirm_server_1").hidden = false;
  }


///////////////////////////////////////////////////TIER 0//////////////////////////////////////////
if (document.getElementById("tier00").checked==true) {
  document.getElementById("tier0").hidden = false;
}
else if (document.getElementById("tier00").checked==false) {
  document.getElementById("tier0").hidden = true;
}
///////////////TIER 0 REQUEST 2//////////////////////////
if (document.getElementById("tier000").checked==true) {
  document.getElementById("tier_00").hidden = false;
}
else if (document.getElementById("tier00").checked==false) {
  document.getElementById("tier_00").hidden = true;
}
///////////////TIER 0 REQUEST 3//////////////////////////
if (document.getElementById("tier__00").checked==true) {
  document.getElementById("tier__0").hidden = false;
}
else if (document.getElementById("tier__00").checked==false) {
  document.getElementById("tier__0").hidden = true;
}
///////////////////////////////////////////////////TIER 0 REQUEST 4//////////////////////////////////////////
if (document.getElementById("tier___00").checked==true) {
  document.getElementById("tier___0").hidden = false;
}
else if (document.getElementById("tier___00").checked==false) {
  document.getElementById("tier___0").hidden = true;
}
///////////////////////////////////////////////////TIER 1//////////////////////////////////////////
if (document.getElementById("tier11").checked==true) {
document.getElementById("tier1").hidden = false;
}
else if (document.getElementById("tier11").checked==false) {
  document.getElementById("tier1").hidden = true;
}
///////////////TIER 1 REQUEST 2//////////////////////////
if (document.getElementById("tier_111").checked==true) {
document.getElementById("tier_11").hidden = false;
}
else if (document.getElementById("tier_111").checked==false) {
  document.getElementById("tier_11").hidden = true;
}
///////////////////////////////////////////////////TIER 1 REQUEST 3//////////////////////////////////////////
if (document.getElementById("tier__11").checked==true) {
document.getElementById("tier__1").hidden = false;
}
else if (document.getElementById("tier__11").checked==false) {
  document.getElementById("tier__1").hidden = true;
}
///////////////////////////////////////////////////TIER 1 REQUEST 4//////////////////////////////////////////
if (document.getElementById("tier___11").checked==true) {
document.getElementById("tier___1").hidden = false;
}
else if (document.getElementById("tier___11").checked==false) {
  document.getElementById("tier___1").hidden = true;
}
/////////////////////////////////////////////////TIER 1.5//////////////////////////////////////////
if (document.getElementById("tier15").checked==true) {
document.getElementById("tier1.5").hidden = false;
}
else if (document.getElementById("tier15").checked==false) {
  document.getElementById("tier1.5").hidden = true;
}
/////////////////////////////////////////////////TIER 1.5 REQUEST 2//////////////////////////////////////////
if (document.getElementById("tier_15").checked==true) {
document.getElementById("tier_1.5").hidden = false;
}
else if (document.getElementById("tier_15").checked==false) {
  document.getElementById("tier_1.5").hidden = true;
}
/////////////////////////////////////////////////TIER 1.5  REQUEST 3//////////////////////////////////////////
if (document.getElementById("tier__15").checked==true) {
document.getElementById("tier__1.5").hidden = false;
}
else if (document.getElementById("tier__15").checked==false) {
  document.getElementById("tier__1.5").hidden = true;
}
/////////////////////////////////////////////////TIER 1.5  REQUEST 4//////////////////////////////////////////
if (document.getElementById("tier___15").checked==true) {
document.getElementById("tier___1.5").hidden = false;
}
else if (document.getElementById("tier___15").checked==false) {
  document.getElementById("tier___1.5").hidden = true;
}
///////////////////////////////////////////////////TIER 2//////////////////////////////////////////
if (document.getElementById("tier22").checked==true) {
document.getElementById("tier2").hidden = false;
}
else if (document.getElementById("tier22").checked==false) {
  document.getElementById("tier2").hidden = true;
}

///////////////////////////////////////////////////TIER 2 REQUEST 2//////////////////////////////////////////
if (document.getElementById("tier_22").checked==true) {
document.getElementById("tier_2").hidden = false;
}
else if (document.getElementById("tier_22").checked==false) {
  document.getElementById("tier_2").hidden = true;
}

///////////////////////////////////////////////////TIER 2 REQUEST 3//////////////////////////////////////////
if (document.getElementById("tier__22").checked==true) {
document.getElementById("tier__2").hidden = false;
}
else if (document.getElementById("tier__22").checked==false) {
  document.getElementById("tier__2").hidden = true;
}
///////////////////////////////////////////////////TIER 2  REQUEST 4//////////////////////////////////////////
if (document.getElementById("tier___22").checked==true) {
document.getElementById("tier___2").hidden = false;
}
else if (document.getElementById("tier___22").checked==false) {
  document.getElementById("tier___2").hidden = true;
}
///////////////////////////////////////////////////TIER 3//////////////////////////////////////////
if (document.getElementById("tier33").checked==true) {
document.getElementById("tier3").hidden = false;
}
else if (document.getElementById("tier33").checked==false) {
  document.getElementById("tier3").hidden = true;
}

///////////////////////////////////////////////////TIER 3 REQUEST2//////////////////////////////////////////
if (document.getElementById("tier_33").checked==true) {
document.getElementById("tier_3").hidden = false;
}
else if (document.getElementById("tier_33").checked==false) {
  document.getElementById("tier_3").hidden = true;
}
///////////////////////////////////////////////////TIER 3  REQUEST 3//////////////////////////////////////////
if (document.getElementById("tier__33").checked==true) {
document.getElementById("tier__3").hidden = false;
}
else if (document.getElementById("tier__33").checked==false) {
  document.getElementById("tier__3").hidden = true;
}
///////////////////////////////////////////////////TIER 3 REQUEST 4//////////////////////////////////////////
if (document.getElementById("tier___33").checked==true) {
document.getElementById("tier___3").hidden = false;
}
else if (document.getElementById("tier___33").checked==false) {
  document.getElementById("tier___3").hidden = true;
}

/////////////////////////////////////////////////////////// STORAGE  //////////////////////////////////////////////////////////////////////////////////////////////////
  var x = document.getElementById('storage');
  if (x.checked==true) {
// document.getElementById('slis').hidden=true;
// document.getElementById('slis2').hidden=false;
// document.getElementById('slis3').hidden=false;
document.getElementById('slis').hidden=true;
document.getElementById('slis2').hidden=true;
document.getElementById('slis3').hidden=true;


// GDL
if (document.getElementById("Guadalajara").checked==true) {
  db30.find({
    selector: {_id: {$gt:0}},
    sort: ['_id']
  }).then(function (result2) {
    r=result2["docs"];
    for (var i = 0; i < r.length; i++) {
      if (r[i]["dc"]=="GDL") {
        if (r[i]["sys_name"]=="T0 total") {
          tier00 = r[i]["av_cores"]
        }
        if (r[i]["sys_name"]=="T1 total") {
          tier01 = r[i]["av_cores"]

        }
        if (r[i]["sys_name"]=="T1.5 total") {
          tier015 = r[i]["av_cores"]

        }
        if (r[i]["sys_name"]=="T2 total") {
          tier02 = r[i]["av_cores"]

        }
        if (r[i]["sys_name"]=="T3 total") {
          tier03 = r[i]["av_cores"]

        }
      }
    }

    document.getElementById("vcpu").attributes.max.value = tier00;
    document.getElementById("tier111").attributes.max.value = tier01;
    document.getElementById("tier151").attributes.max.value = tier015;
    document.getElementById("tier222").attributes.max.value = tier02;
    document.getElementById("tier333").attributes.max.value = tier03;
  });
}
// QRO
if (document.getElementById("Queretaro").checked==true) {
   ("QUERETARO AND STORAGE REGISTERED");
  db30.find({
    selector: {_id: {$gt:0}},
    sort: ['_id']
  }).then(function (result2) {
    r=result2["docs"];
    for (var i = 0; i < r.length; i++) {
      if (r[i]["dc"]=="QRO") {
        if (r[i]["sys_name"]=="T0 total") {
          tier00 = r[i]["av_cores"]
        }
        if (r[i]["sys_name"]=="T1 total") {
          tier01 = r[i]["av_cores"]

        }
        if (r[i]["sys_name"]=="T1.5 total") {
          tier015 = r[i]["av_cores"]

        }
        if (r[i]["sys_name"]=="T2 total") {
          tier02 = r[i]["av_cores"]

        }
        if (r[i]["sys_name"]=="T3 total") {
          tier03 = r[i]["av_cores"]

        }
      }
    }

    document.getElementById("vcpu").attributes.max.value = tier00;
    document.getElementById("tier111").attributes.max.value = tier01;
    document.getElementById("tier151").attributes.max.value = tier015;
    document.getElementById("tier222").attributes.max.value = tier02;
    document.getElementById("tier333").attributes.max.value = tier03;
  });
}
}
if (x.checked==false) {
  document.getElementById('slis').hidden=false;
  document.getElementById('slis2').hidden=true;
  document.getElementById('slis3').hidden=true;

  // POWER
  if (document.getElementById("power").checked == true) {
    db4 = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/power');
    db4.find({
      selector: {_id: {$gt:0}},
      sort: ['_id']
    }).then(function (result) {
      r=result["docs"];
      gdl_total_mem_power=r[0]["tot_mem"];
      qro_total_mem_power=r[1]["tot_mem"];
      gdl_total_cor_power=r[0]["tot_cores"];
      qro_total_cor_power=r[1]["tot_cores"];
      if (document.getElementById("Guadalajara").checked == true) {
        document.getElementById("count_vcpu").innerHTML = gdl_total_cor_power;
        document.getElementById("count_memory").innerHTML = gdl_total_mem_power;
      }
      if (document.getElementById("Queretaro").checked == true) {
        document.getElementById("count_vcpu").innerHTML = qro_total_cor_power;
        document.getElementById("count_memory").innerHTML = qro_total_mem_power;
      }
    });
  }
  // OPEN
  if (document.getElementById("open").checked == true) {
    db5 = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/open');
    db5.find({
      selector: {_id: {$gt:0}},
      sort: ['_id']
    }).then(function (result) {
      r=result["docs"];
      gdl_total_mem_power=r[0]["tot_mem"];
      qro_total_mem_power=r[1]["tot_mem"];
      gdl_total_cor_power=r[0]["tot_cores"];
      qro_total_cor_power=r[1]["tot_cores"];
      if (document.getElementById("Guadalajara").checked == true) {
        document.getElementById("count_vcpu").innerHTML = gdl_total_cor_power;
        document.getElementById("count_memory").innerHTML = gdl_total_mem_power;
      }
      if (document.getElementById("Queretaro").checked == true) {
        document.getElementById("count_vcpu").innerHTML = qro_total_cor_power;
        document.getElementById("count_memory").innerHTML = qro_total_mem_power;
      }
    });
  }
  // ISERIES
  if (document.getElementById("iseries").checked == true) {
    db6 = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/iseries_lpar_resume_db');
    db6.find({
      selector: {_id: {$gt:0}},
      sort: ['_id']
    }).then(function (result) {
      r=result["docs"];
      gdl_total_mem_power=r[3]["tot_gb"];
      qro_total_mem_power=r[1]["tot_gb"];
      gdl_total_cor_power=r[2]["tot_gb"];
      qro_total_cor_power=r[0]["tot_gb"];
      if (document.getElementById("Guadalajara").checked == true) {
        document.getElementById("count_vcpu").innerHTML = gdl_total_cor_power;
        document.getElementById("count_memory").innerHTML = gdl_total_mem_power;
      }
      if (document.getElementById("Queretaro").checked == true) {
        document.getElementById("count_vcpu").innerHTML = qro_total_cor_power;
        document.getElementById("count_memory").innerHTML = qro_total_mem_power;
      }
    });
  }

  // SOLARI
}
// if (document.getElementById('physical').checked==true) {
//   if (document.getElementById('newserver').checked==true) {
//     document.getElementById("new_physical_server").hidden=false;
//     document.getElementById("gdl_storage_list").hidden=true;
//     document.getElementById("gdl_power_list").hidden=true;
//     document.getElementById("gdl_open_list").hidden=true;
//     document.getElementById("gdl_iseries_list").hidden=true;
//     document.getElementById("qro_storage_list").hidden=true;
//     document.getElementById("qro_power_list").hidden=true;
//     document.getElementById("qro_open_list").hidden=true;
//     document.getElementById("qro_iseries_list").hidden=true;
//   }
//   if (document.getElementById('existingserver').checked==true) {
//   if (document.getElementById("Guadalajara").checked) {
//     if (document.getElementById("storage").checked) {
//       document.getElementById("new_physical_server").hidden=true;
//       document.getElementById("gdl_storage_list").hidden=false;
//       document.getElementById("gdl_power_list").hidden=true;
//       document.getElementById("gdl_open_list").hidden=true;
//       document.getElementById("gdl_iseries_list").hidden=true;
//       document.getElementById("qro_storage_list").hidden=true;
//       document.getElementById("qro_power_list").hidden=true;
//       document.getElementById("qro_open_list").hidden=true;
//       document.getElementById("qro_iseries_list").hidden=true;
//     }
//     if (document.getElementById("power").checked) {
//       document.getElementById("new_physical_server").hidden=true;
//       document.getElementById("gdl_storage_list").hidden=true;
//       document.getElementById("gdl_power_list").hidden=false;
//       document.getElementById("gdl_open_list").hidden=true;
//       document.getElementById("gdl_iseries_list").hidden=true;
//       document.getElementById("qro_storage_list").hidden=true;
//       document.getElementById("qro_power_list").hidden=true;
//       document.getElementById("qro_open_list").hidden=true;
//       document.getElementById("qro_iseries_list").hidden=true;
//      }
//     if (document.getElementById("open").checked) {
//       document.getElementById("new_physical_server").hidden=true;
//       document.getElementById("gdl_storage_list").hidden=true;
//       document.getElementById("gdl_power_list").hidden=true;
//       document.getElementById("gdl_open_list").hidden=false;
//       document.getElementById("gdl_iseries_list").hidden=true;
//       document.getElementById("qro_storage_list").hidden=true;
//       document.getElementById("qro_power_list").hidden=true;
//       document.getElementById("qro_open_list").hidden=true;
//       document.getElementById("qro_iseries_list").hidden=true;
//
//     }
//     if (document.getElementById("iseries").checked) {
//       document.getElementById("new_physical_server").hidden=true;
//       document.getElementById("gdl_storage_list").hidden=true;
//       document.getElementById("gdl_power_list").hidden=true;
//       document.getElementById("gdl_open_list").hidden=true;
//       document.getElementById("gdl_iseries_list").hidden=false;
//       document.getElementById("qro_storage_list").hidden=true;
//       document.getElementById("qro_power_list").hidden=true;
//       document.getElementById("qro_open_list").hidden=true;
//       document.getElementById("qro_iseries_list").hidden=true;      }
//   }
//   if (document.getElementById("Queretaro").checked) {
//     if (document.getElementById("storage").checked) {
//       document.getElementById("new_physical_server").hidden=true;
//       document.getElementById("gdl_storage_list").hidden=true;
//       document.getElementById("gdl_power_list").hidden=true;
//       document.getElementById("gdl_open_list").hidden=true;
//       document.getElementById("gdl_iseries_list").hidden=true;
//       document.getElementById("qro_storage_list").hidden=false;
//       document.getElementById("qro_power_list").hidden=true;
//       document.getElementById("qro_open_list").hidden=true;
//       document.getElementById("qro_iseries_list").hidden=true;
//     }
//     if (document.getElementById("power").checked) {
//       document.getElementById("new_physical_server").hidden=true;
//       document.getElementById("gdl_storage_list").hidden=true;
//       document.getElementById("gdl_power_list").hidden=true;
//       document.getElementById("gdl_open_list").hidden=true;
//       document.getElementById("gdl_iseries_list").hidden=true;
//       document.getElementById("qro_storage_list").hidden=true;
//       document.getElementById("qro_power_list").hidden=false;
//       document.getElementById("qro_open_list").hidden=true;
//       document.getElementById("qro_iseries_list").hidden=true;
//      }
//     if (document.getElementById("open").checked) {
//       document.getElementById("new_physical_server").hidden=true;
//       document.getElementById("gdl_storage_list").hidden=true;
//       document.getElementById("gdl_power_list").hidden=true;
//       document.getElementById("gdl_open_list").hidden=true;
//       document.getElementById("gdl_iseries_list").hidden=true;
//       document.getElementById("qro_storage_list").hidden=true;
//       document.getElementById("qro_power_list").hidden=true;
//       document.getElementById("qro_open_list").hidden=false;
//       document.getElementById("qro_iseries_list").hidden=true;
//
//     }
//     if (document.getElementById("iseries").checked) {
//       document.getElementById("new_physical_server").hidden=true;
//       document.getElementById("gdl_storage_list").hidden=true;
//       document.getElementById("gdl_power_list").hidden=true;
//       document.getElementById("gdl_open_list").hidden=true;
//       document.getElementById("gdl_iseries_list").hidden=true;
//       document.getElementById("qro_storage_list").hidden=true;
//       document.getElementById("qro_power_list").hidden=true;
//       document.getElementById("qro_open_list").hidden=true;
//       document.getElementById("qro_iseries_list").hidden=false;      }
//   }
// }
// }
// if (document.getElementById('virtual').checked==true) {
//   document.getElementById("new_physical_server").hidden=false;
//   document.getElementById("gdl_storage_list").hidden=true;
//   document.getElementById("gdl_power_list").hidden=true;
//   document.getElementById("gdl_open_list").hidden=true;
//   document.getElementById("gdl_iseries_list").hidden=true;
//   document.getElementById("qro_storage_list").hidden=true;
//   document.getElementById("qro_power_list").hidden=true;
//   document.getElementById("qro_open_list").hidden=true;
//   document.getElementById("qro_iseries_list").hidden=true;
//
// }
if (document.getElementById("newserver").checked==true) {
  document.getElementById("AUTOFILL").hidden = true;
  document.getElementById("new_physical_server").hidden = false;

}
if (document.getElementById('existingserver').checked==true) {
document.getElementById("AUTOFILL").hidden = false;
document.getElementById("new_physical_server").hidden=true;
if (document.getElementById("storage").checked==true) {
if (document.getElementById("platform_open").checked==true) {
  document.getElementById("storage_servers_iseries").hidden=true;
  document.getElementById("storage_servers_open").hidden=false;
  document.getElementById("storage_servers_power").hidden=true;
}
if (document.getElementById("platform_iseries").checked==true) {
  document.getElementById("storage_servers_iseries").hidden=false;
  document.getElementById("storage_servers_open").hidden=true;
  document.getElementById("storage_servers_power").hidden=true;
}
if (document.getElementById("platform_other").checked==true) {
  document.getElementById("storage_servers_iseries").hidden=true;
  document.getElementById("storage_servers_open").hidden=true;
  document.getElementById("storage_servers_power").hidden=false;
}
  document.getElementById("open_servers").hidden=true;
  document.getElementById("storage_servers_iseries").hidden=false;
  document.getElementById("storage_servers_open").hidden=false;
  document.getElementById("storage_servers_power").hidden=false;
  document.getElementById("iseries_servers").hidden=true;
  document.getElementById("power_servers").hidden=true;

  if (document.getElementById("platform_open").checked==true) {
    document.getElementById("storage_servers_iseries").hidden=true;
    document.getElementById("storage_servers_open").hidden=false;
    document.getElementById("storage_servers_power").hidden=true;
  }
  if (document.getElementById("platform_iseries").checked==true) {
    document.getElementById("storage_servers_iseries").hidden=false;
    document.getElementById("storage_servers_open").hidden=true;
    document.getElementById("storage_servers_power").hidden=true;
  }
  if (document.getElementById("platform_other").checked==true) {
    document.getElementById("storage_servers_iseries").hidden=true;
    document.getElementById("storage_servers_open").hidden=true;
    document.getElementById("storage_servers_power").hidden=false;
  }
}
if (document.getElementById("power").checked==true) {
  document.getElementById("open_servers").hidden=true;
  document.getElementById("storage_servers_iseries").hidden=true;
  document.getElementById("storage_servers_open").hidden=true;
  document.getElementById("storage_servers_power").hidden=true;
  document.getElementById("iseries_servers").hidden=true;
  document.getElementById("power_servers").hidden=false;
}
if (document.getElementById("open").checked==true) {
  document.getElementById("open_servers").hidden=false;
  document.getElementById("storage_servers_iseries").hidden=true;
  document.getElementById("storage_servers_open").hidden=true;
  document.getElementById("storage_servers_power").hidden=true;
  document.getElementById("iseries_servers").hidden=true;
  document.getElementById("power_servers").hidden=true;

}
if (document.getElementById("iseries").checked==true) {
  document.getElementById("open_servers").hidden=true;
  document.getElementById("storage_servers_iseries").hidden=true;
  document.getElementById("storage_servers_open").hidden=true;
  document.getElementById("storage_servers_power").hidden=true;
  document.getElementById("iseries_servers").hidden=false;
  document.getElementById("power_servers").hidden=true;
}
}
document.getElementById("add_tech").hidden = false;
if ((document.getElementById("storage4").checked==true)||(document.getElementById("power4").checked==true)||(document.getElementById("open4").checked==true)||(document.getElementById("iseries4").checked==true)) {
  document.getElementById("add_tech").hidden = true;
}



db3000 = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/storage_platforms');
var st_platforms_gdl_open = [];
var st_platforms_gdl_iseries_t0 = [];
var st_platforms_gdl_iseries_t1 = [];
var st_platforms_gdl_iseries_t15 = [];
var st_platforms_gdl_iseries_t2= [];
var st_platforms_gdl_iseries_t3 = [];
var st_platforms_gdl_power_t0 = [];
var st_platforms_gdl_power_t1 = [];
var st_platforms_gdl_power_t15 = [];
var st_platforms_gdl_power_t2 = [];
var st_platforms_gdl_power_t3 = [];
var st_platforms_qro_open = [];
var st_platforms_qro_iseries_t0 = [];
var st_platforms_qro_iseries_t1 = [];
var st_platforms_qro_iseries_t15 = [];
var st_platforms_qro_iseries_t2 = [];
var st_platforms_qro_iseries_t3 = [];
var st_platforms_qro_power_t0 = [];
var st_platforms_qro_power_t1 = [];
var st_platforms_qro_power_t15 = [];
var st_platforms_qro_power_t2 = [];
var st_platforms_qro_power_t3 = [];


// db3000.find({
//   selector: {_id: {$gt:0}},
//   sort: ['_id']
// }).then(function (result) {
//   /////////////////////////////////////////////
//   r=result["docs"];
//   // document.getElementById("input_rfs").value = _this.innerHTML;
//   for (var i = 0; i < r.length; i++) {
//     tot_cores="tot_cores"
//     if ((r[i]["sys_name"]=="all")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="Open")) {
//       st_platforms_gdl_open.push(r[i]["tot_cores"])
//     }
//     if ((r[i]["sys_name"]=="T0 total")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="iSeries")) {
//       st_platforms_gdl_iseries_t0 = r[i][tot_cores];
//     }
//     if ((r[i]["sys_name"]=="T1 total")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="iSeries")) {
//       st_platforms_gdl_iseries_t1 = r[i][tot_cores];
//     }
//     if ((r[i]["sys_name"]=="T1.5 total")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="iSeries")) {
//       st_platforms_gdl_iseries_t15 = r[i][tot_cores];
//     }
//     if((r[i]["sys_name"]=="T2 total")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="iSeries")) {
//       st_platforms_gdl_iseries_t2 = r[i][tot_cores];
//     }
//     if ((r[i]["sys_name"]=="T3 total")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="iSeries")) {
//       st_platforms_gdl_iseries_t3 = r[i][tot_cores];
//     }
//     /////////////////
//     if ((r[i]["sys_name"]=="T0 total")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="Other")) {
//       st_platforms_gdl_power_t0 = r[i][tot_cores];
//     }
//     if ((r[i]["sys_name"]=="T1 total")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="Other")) {
//       st_platforms_gdl_power_t1 = r[i][tot_cores];
//     }
//     if ((r[i]["sys_name"]=="T1.5 total")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="Other")) {
//       st_platforms_gdl_power_t15 = r[i][tot_cores];
//     }
//     if((r[i]["sys_name"]=="T2 total")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="Other")) {
//       st_platforms_gdl_power_t2 = r[i][tot_cores];
//     }
//     if ((r[i]["sys_name"]=="T3 total")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="Other")) {
//       st_platforms_gdl_power_t3 = r[i][tot_cores];
//     }
//     if ((r[i]["sys_name"]=="T0 total")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="Other")) {
//       st_platforms_qro_power_t0 = r[i][tot_cores];
//     }
//     if ((r[i]["sys_name"]=="T1 total")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="Other")) {
//       st_platforms_qro_power_t1 = r[i][tot_cores];
//     }
//     if ((r[i]["sys_name"]=="T1.5 total")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="Other")) {
//       st_platforms_qro_power_t15 = r[i][tot_cores];
//     }
//     if ((r[i]["sys_name"]=="T2 total")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="Other")) {
//       st_platforms_qro_power_t2 = r[i][tot_cores];
//     }
//     if ((r[i]["sys_name"]=="T3 total")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="Other")) {
//       st_platforms_qro_power_t3 = r[i][tot_cores];
//     }
//
//     if ((r[i]["sys_name"]=="all")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="Open")) {
//       st_platforms_qro_open.push(r[i]["tot_cores"])
//     }
//     ///////////////
//     if ((r[i]["sys_name"]=="T0 total")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="iSeries")) {
//       st_platforms_qro_iseries_t0 = r[i][tot_cores];
//     }
//     if ((r[i]["sys_name"]=="T1 total")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="iSeries")) {
//       st_platforms_qro_iseries_t1 = r[i][tot_cores];
//     }
//     if ((r[i]["sys_name"]=="T1.5 total")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="iSeries")) {
//       st_platforms_qro_iseries_t15 = r[i][tot_cores];
//     }
//     if((r[i]["sys_name"]=="T2 total")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="iSeries")) {
//       st_platforms_qro_iseries_t2 = r[i][tot_cores];
//     }
//     if ((r[i]["sys_name"]=="T3 total")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="iSeries")) {
//       st_platforms_qro_iseries_t3 = r[i][tot_cores];
//     }
//
//   }
//   ///////////////////////////////////////////////
//   if (document.getElementById("Guadalajara").checked==true) {
//     document.getElementById("count_open_cores").innerHTML = st_platforms_gdl_open;
//     if (document.getElementById("platform_other").checked==true) {
//       document.getElementById("vcpu").max = st_platforms_gdl_power_t0;
//       document.getElementById("tier111").max = st_platforms_gdl_power_t1;
//       document.getElementById("tier151").max = st_platforms_gdl_power_t15;
//       document.getElementById("tier222").max = st_platforms_gdl_power_t2;
//       document.getElementById("tier333").max = st_platforms_gdl_power_t3;
//     }
//     if (document.getElementById("platform_iseries").checked==true) {
//       document.getElementById("vcpu").max = st_platforms_gdl_iseries_t0;
//       document.getElementById("tier111").max = st_platforms_gdl_iseries_t1;
//       document.getElementById("tier151").max = st_platforms_gdl_iseries_t15;
//       document.getElementById("tier222").max  = st_platforms_gdl_iseries_t2;
//       document.getElementById("tier333").max= st_platforms_gdl_iseries_t3;
//     }
//
//
//   }
//   if (document.getElementById("Queretaro").checked==true) {
//     document.getElementById("count_open_cores").innerHTML = st_platforms_qro_open;
//     if (document.getElementById("platform_other").checked==true) {
//       document.getElementById("vcpu").max = st_platforms_qro_power_t0;
//       document.getElementById("tier111").max = st_platforms_qro_power_t1;
//       document.getElementById("tier151").max = st_platforms_qro_power_t15;
//       document.getElementById("tier222").max  = st_platforms_qro_power_t2;
//       document.getElementById("tier333").max= st_platforms_qro_power_t3;
//     }
//     if (document.getElementById("platform_iseries").checked==true) {
//       document.getElementById("vcpu").max = st_platforms_qro_iseries_t0;
//       document.getElementById("tier111").max = st_platforms_qro_iseries_t1;
//       document.getElementById("tier151").max = st_platforms_qro_iseries_t15;
//       document.getElementById("tier222").max  = st_platforms_qro_iseries_t2;
//       document.getElementById("tier333").max = st_platforms_qro_iseries_t3;
//     }
// }
//
//   /////////////////////////////////////////////
// });
if (document.getElementById("platform_open").checked==true) {
  //tiers
  document.getElementById("slis2").hidden=true;
  //OTHER
  document.getElementById("slis").hidden=true;
  //OPEN
  document.getElementById("slis_open_request_1").hidden=false;
}
if ((document.getElementById("platform_iseries").checked==true)||(document.getElementById("platform_other").checked==true)) {
  //tiers
  document.getElementById("slis2").hidden=false;
  //OTHER
  document.getElementById("slis").hidden=true;
  //OPEN
  document.getElementById("slis_open_request_1").hidden=true;
}
if ((document.getElementById("power").checked==true)||(document.getElementById("open").checked==true)||(document.getElementById("iseries").checked==true)) {
  //tiers
  document.getElementById("slis2").hidden=true;
  //OTHER
  document.getElementById("slis").hidden=false;
  //OPEN
  document.getElementById("slis_open_request_1").hidden=true;
}
}
function show_server(){
  var person = '';
  if (document.getElementById('physical').checked==true) {

      document.getElementById("newserver").hidden = false;
      document.getElementById("newserver2").hidden = false;
      document.getElementById("existingserver").hidden = false;
      document.getElementById("existingserver2").hidden = false;
  }
  if (document.getElementById('virtual').checked==true) {
     alert("Requieres MNG/ARQ Authorization ");
      document.getElementById("newserver").hidden = true;
      document.getElementById("newserver2").hidden = false;
      document.getElementById("existingserver").hidden = true;
      document.getElementById("existingserver2").hidden = true;
      document.getElementById('new_physical_server').hidden = false;
  //     document.getElementById("phserver").hidden = false;
  }
  if (document.getElementById('newserver').checked==true) {
    document.getElementById("new_physical_server0").hidden=false;
  }
if (document.getElementById('physical2').checked==true) {

    document.getElementById("newserver").hidden = false;
    document.getElementById("newserver2").hidden = false;
    document.getElementById("existingserver").hidden = false;
    document.getElementById("existingserver2").hidden = false;
}
if (document.getElementById('virtual2').checked==true) {
   alert("Requieres MNG/ARQ Authorization ");
    document.getElementById("newserver").hidden = true;
    document.getElementById("newserver2").hidden = false;
    document.getElementById("existingserver").hidden = true;
    document.getElementById("existingserver2").hidden = true;
//     document.getElementById('new_physical_server').hidden = false;
//     document.getElementById("phserver").hidden = false;
}
}
function show_server2(){
  if (document.getElementById('virtual').checked==true) {
    if (document.getElementById('newserver').checked==true) {
      document.getElementById("new_physical_server").hidden=false;
      document.getElementById("gdl_storage_list").hidden=true;
      document.getElementById("gdl_power_list").hidden=true;
      document.getElementById("gdl_open_list").hidden=true;
      document.getElementById("gdl_iseries_list").hidden=true;
      document.getElementById("qro_storage_list").hidden=true;
      document.getElementById("qro_power_list").hidden=true;
      document.getElementById("qro_open_list").hidden=true;
      document.getElementById("qro_iseries_list").hidden=true;
    }
    if (document.getElementById('existingserver').checked==true) {
    if (document.getElementById("Guadalajara").checked) {
      if (document.getElementById("storage").checked) {
        document.getElementById("new_physical_server").hidden=true;
        document.getElementById("gdl_storage_list").hidden=false;
        document.getElementById("gdl_power_list").hidden=true;
        document.getElementById("gdl_open_list").hidden=true;
        document.getElementById("gdl_iseries_list").hidden=true;
        document.getElementById("qro_storage_list").hidden=true;
        document.getElementById("qro_power_list").hidden=true;
        document.getElementById("qro_open_list").hidden=true;
        document.getElementById("qro_iseries_list").hidden=true;
      }
      if (document.getElementById("power").checked) {
        document.getElementById("new_physical_server").hidden=true;
        document.getElementById("gdl_storage_list").hidden=true;
        document.getElementById("gdl_power_list").hidden=false;
        document.getElementById("gdl_open_list").hidden=true;
        document.getElementById("gdl_iseries_list").hidden=true;
        document.getElementById("qro_storage_list").hidden=true;
        document.getElementById("qro_power_list").hidden=true;
        document.getElementById("qro_open_list").hidden=true;
        document.getElementById("qro_iseries_list").hidden=true;
       }
      if (document.getElementById("open").checked) {
        document.getElementById("new_physical_server").hidden=true;
        document.getElementById("gdl_storage_list").hidden=true;
        document.getElementById("gdl_power_list").hidden=true;
        document.getElementById("gdl_open_list").hidden=false;
        document.getElementById("gdl_iseries_list").hidden=true;
        document.getElementById("qro_storage_list").hidden=true;
        document.getElementById("qro_power_list").hidden=true;
        document.getElementById("qro_open_list").hidden=true;
        document.getElementById("qro_iseries_list").hidden=true;

      }
      if (document.getElementById("iseries").checked) {
        document.getElementById("new_physical_server").hidden=true;
        document.getElementById("gdl_storage_list").hidden=true;
        document.getElementById("gdl_power_list").hidden=true;
        document.getElementById("gdl_open_list").hidden=true;
        document.getElementById("gdl_iseries_list").hidden=false;
        document.getElementById("qro_storage_list").hidden=true;
        document.getElementById("qro_power_list").hidden=true;
        document.getElementById("qro_open_list").hidden=true;
        document.getElementById("qro_iseries_list").hidden=true;      }
    }
    if (document.getElementById("Queretaro").checked) {
      if (document.getElementById("storage").checked) {
        document.getElementById("new_physical_server").hidden=true;
        document.getElementById("gdl_storage_list").hidden=true;
        document.getElementById("gdl_power_list").hidden=true;
        document.getElementById("gdl_open_list").hidden=true;
        document.getElementById("gdl_iseries_list").hidden=true;
        document.getElementById("qro_storage_list").hidden=false;
        document.getElementById("qro_power_list").hidden=true;
        document.getElementById("qro_open_list").hidden=true;
        document.getElementById("qro_iseries_list").hidden=true;
      }
      if (document.getElementById("power").checked) {
        document.getElementById("new_physical_server").hidden=true;
        document.getElementById("gdl_storage_list").hidden=true;
        document.getElementById("gdl_power_list").hidden=true;
        document.getElementById("gdl_open_list").hidden=true;
        document.getElementById("gdl_iseries_list").hidden=true;
        document.getElementById("qro_storage_list").hidden=true;
        document.getElementById("qro_power_list").hidden=false;
        document.getElementById("qro_open_list").hidden=true;
        document.getElementById("qro_iseries_list").hidden=true;
       }
      if (document.getElementById("open").checked) {
        document.getElementById("new_physical_server").hidden=true;
        document.getElementById("gdl_storage_list").hidden=true;
        document.getElementById("gdl_power_list").hidden=true;
        document.getElementById("gdl_open_list").hidden=true;
        document.getElementById("gdl_iseries_list").hidden=true;
        document.getElementById("qro_storage_list").hidden=true;
        document.getElementById("qro_power_list").hidden=true;
        document.getElementById("qro_open_list").hidden=false;
        document.getElementById("qro_iseries_list").hidden=true;

      }
      if (document.getElementById("iseries").checked) {
        document.getElementById("new_physical_server").hidden=true;
        document.getElementById("gdl_storage_list").hidden=true;
        document.getElementById("gdl_power_list").hidden=true;
        document.getElementById("gdl_open_list").hidden=true;
        document.getElementById("gdl_iseries_list").hidden=true;
        document.getElementById("qro_storage_list").hidden=true;
        document.getElementById("qro_power_list").hidden=true;
        document.getElementById("qro_open_list").hidden=true;
        document.getElementById("qro_iseries_list").hidden=false;      }
    }
  }
  }
  if (document.getElementById('virtual').checked==true) {
    document.getElementById("new_physical_server").hidden=false;
    document.getElementById("gdl_storage_list").hidden=true;
    document.getElementById("gdl_power_list").hidden=true;
    document.getElementById("gdl_open_list").hidden=true;
    document.getElementById("gdl_iseries_list").hidden=true;
    document.getElementById("qro_storage_list").hidden=true;
    document.getElementById("qro_power_list").hidden=true;
    document.getElementById("qro_open_list").hidden=true;
    document.getElementById("qro_iseries_list").hidden=true;

}

}
function show_server22(){

  if (document.getElementById('physical2').checked==true) {
      document.getElementById("newserver0").hidden = false;
      document.getElementById("newserver02").hidden = false;
      document.getElementById("existingserver0").hidden = false;
      document.getElementById("existingserver02").hidden = false;
      document.getElementById("new_physical_server0").hidden=true;

  }
  if ((document.getElementById('virtual2').checked==true)) {
     alert("Requieres MNG/ARQ Authorization ");
      document.getElementById("newserver0").hidden = true;
      document.getElementById("newserver02").hidden = false;
      document.getElementById("existingserver0").hidden = true;
      document.getElementById("existingserver02").hidden = true;
      document.getElementById("new_physical_server0").hidden=false;
      document.getElementById("storage_servers_iseries2").hidden=true;
      document.getElementById("storage_servers_open2").hidden=true;
      document.getElementById("storage_servers_power2").hidden=true;
      document.getElementById("iseries_servers2").hidden=true;
      document.getElementById("power_servers2").hidden=true;
      document.getElementById("open_servers2").hidden=true;
  }
  if (document.getElementById('newserver').checked==true) {
    document.getElementById("new_physical_server0").hidden=false;
  }
}
function show_server222(){
db2 = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/storage_gdl');
db3 = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/storage_qro');
db30 = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/storage');
if ((document.getElementById("storage2").checked==true)){
  document.getElementById("platform2").hidden=false;
  document.getElementById("confirm_server_2").hidden = true;

if (document.getElementById("platform_open2").checked==true) {
  document.getElementById("slis_open_request_2").hidden = false;
  document.getElementById("slis222").hidden = true;
}
if ( (document.getElementById("platform_iseries2").checked==true) || (document.getElementById("platform_other2").checked==true) ) {
  document.getElementById("slis_open_request_2").hidden = true;
  document.getElementById("slis222").hidden = false;
}
}

if (storage2.checked==true) {
  // document.getElementById("slis222").hidden=false;
  document.getElementById("slis22").hidden = true;
  document.getElementById("platform2").hidden = false;

}
else {
  // document.getElementById("slis222").hidden=true;
  document.getElementById("slis22").hidden = false;
  document.getElementById("platform2").hidden = true;

}


  if ((document.getElementById('virtual2').checked==true)|| (document.getElementById("newserver0").checked==true)) {
     alert("Requieres MNG/ARQ Authorization2 ");
     document.getElementById("newserver0").hidden = false;
     document.getElementById("newserver02").hidden = false;
     document.getElementById("existingserver0").hidden = false;
     document.getElementById("existingserver02").hidden = false;
      document.getElementById("new_physical_server0").hidden=false;
      document.getElementById("storage_servers_iseries2").hidden=true;
      document.getElementById("storage_servers_open2").hidden=true;
      document.getElementById("storage_servers_power2").hidden=true;
      document.getElementById("iseries_servers2").hidden=true;
      document.getElementById("power_servers2").hidden=true;
      document.getElementById("open_servers2").hidden=true;
  }
    if (document.getElementById("storage2").checked==true) {
    document.getElementById("platform2").hidden=false;
      }
      else{
        document.getElementById("platform2").hidden=true;
      }



  //OPEN
  if (document.getElementById('existingserver0').checked==true) {
  document.getElementById("AUTOFILL2").hidden = false;
  document.getElementById("new_physical_server0").hidden=true;
  if (document.getElementById("storage2").checked==true) {
    document.getElementById("platform2").hidden=false;
  if (document.getElementById("platform_open2").checked==true) {
    document.getElementById("storage_servers_iseries2").hidden=true;
    document.getElementById("storage_servers_open2").hidden=false;
    document.getElementById("storage_servers_power2").hidden=true;
  }
  if (document.getElementById("platform_iseries2").checked==true) {
    document.getElementById("storage_servers_iseries2").hidden=false;
    document.getElementById("storage_servers_open2").hidden=true;
    document.getElementById("storage_servers_power2").hidden=true;
  }
  if (document.getElementById("platform_other2").checked==true) {
    document.getElementById("storage_servers_iseries2").hidden=true;
    document.getElementById("storage_servers_open2").hidden=true;
    document.getElementById("storage_servers_power2").hidden=false;
  }
    document.getElementById("open_servers2").hidden=true;
    document.getElementById("storage_servers_iseries2").hidden=false;
    document.getElementById("storage_servers_open2").hidden=false;
    document.getElementById("storage_servers_power2").hidden=false;
    document.getElementById("iseries_servers2").hidden=true;
    document.getElementById("power_servers2").hidden=true;

    if (document.getElementById("platform_open2").checked==true) {
      document.getElementById("storage_servers_iseries2").hidden=true;
      document.getElementById("storage_servers_open2").hidden=false;
      document.getElementById("storage_servers_power2").hidden=true;
    }
    if (document.getElementById("platform_iseries2").checked==true) {
      document.getElementById("storage_servers_iseries2").hidden=false;
      document.getElementById("storage_servers_open2").hidden=true;
      document.getElementById("storage_servers_power2").hidden=true;
    }
    if (document.getElementById("platform_other2").checked==true) {
      document.getElementById("storage_servers_iseries2").hidden=true;
      document.getElementById("storage_servers_open2").hidden=true;
      document.getElementById("storage_servers_power2").hidden=false;
    }
  }
  if (document.getElementById("power2").checked==true) {
    document.getElementById("open_servers2").hidden=true;
    document.getElementById("storage_servers_iseries2").hidden=true;
    document.getElementById("storage_servers_open2").hidden=true;
    document.getElementById("storage_servers_power2").hidden=true;
    document.getElementById("iseries_servers2").hidden=true;
    document.getElementById("power_servers2").hidden=false;
  }
  if (document.getElementById("open2").checked==true) {
    document.getElementById("open_servers2").hidden=false;
    document.getElementById("storage_servers_iseries2").hidden=true;
    document.getElementById("storage_servers_open2").hidden=true;
    document.getElementById("storage_servers_power2").hidden=true;
    document.getElementById("iseries_servers2").hidden=true;
    document.getElementById("power_servers2").hidden=true;

  }
  if (document.getElementById("iseries2").checked==true) {
    document.getElementById("open_servers2").hidden=true;
    document.getElementById("storage_servers_iseries2").hidden=true;
    document.getElementById("storage_servers_open2").hidden=true;
    document.getElementById("storage_servers_power2").hidden=true;
    document.getElementById("iseries_servers2").hidden=false;
    document.getElementById("power_servers2").hidden=true;
  }
  }


//////////////////////////////////////////////////////////////////////////////////////////////////////
db20000 = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/storage_platforms');
var st_platforms_gdl_open = [];
var st_platforms_gdl_iseries_t0 = [];
var st_platforms_gdl_iseries_t1 = [];
var st_platforms_gdl_iseries_t15 = [];
var st_platforms_gdl_iseries_t2= [];
var st_platforms_gdl_iseries_t3 = [];
var st_platforms_gdl_power_t0 = [];
var st_platforms_gdl_power_t1 = [];
var st_platforms_gdl_power_t15 = [];
var st_platforms_gdl_power_t2 = [];
var st_platforms_gdl_power_t3 = [];
var st_platforms_qro_open = [];
var st_platforms_qro_iseries_t0 = [];
var st_platforms_qro_iseries_t1 = [];
var st_platforms_qro_iseries_t15 = [];
var st_platforms_qro_iseries_t2 = [];
var st_platforms_qro_iseries_t3 = [];
var st_platforms_qro_power_t0 = [];
var st_platforms_qro_power_t1 = [];
var st_platforms_qro_power_t15 = [];
var st_platforms_qro_power_t2 = [];
var st_platforms_qro_power_t3 = [];


db20000.find({
  selector: {_id: {$gt:0}},
  sort: ['_id']
}).then(function (result) {
  /////////////////////////////////////////////
  r=result["docs"];
  // document.getElementById("input_rfs").value = _this.innerHTML;
  console.log(r);
  for (var i = 0; i < r.length; i++) {
    tot_cores="tot_cores"
    if ((r[i]["sys_name"]=="all")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="Open")) {
      st_platforms_gdl_open.push(r[i]["tot_cores"])
    }
    if ((r[i]["sys_name"]=="T0 total")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="iSeries")) {
      st_platforms_gdl_iseries_t0 = r[i][tot_cores];
    }
    if ((r[i]["sys_name"]=="T1 total")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="iSeries")) {
      st_platforms_gdl_iseries_t1 = r[i][tot_cores];
    }
    if ((r[i]["sys_name"]=="T1.5 total")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="iSeries")) {
      st_platforms_gdl_iseries_t15 = r[i][tot_cores];
    }
    if((r[i]["sys_name"]=="T2 total")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="iSeries")) {
      st_platforms_gdl_iseries_t2 = r[i][tot_cores];
    }
    if ((r[i]["sys_name"]=="T3 total")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="iSeries")) {
      st_platforms_gdl_iseries_t3 = r[i][tot_cores];
    }
    /////////////////
    if ((r[i]["sys_name"]=="T0 total")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="Other")) {
      st_platforms_gdl_power_t0 = r[i][tot_cores];
    }
    if ((r[i]["sys_name"]=="T1 total")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="Other")) {
      st_platforms_gdl_power_t1 = r[i][tot_cores];
    }
    if ((r[i]["sys_name"]=="T1.5 total")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="Other")) {
      st_platforms_gdl_power_t15 = r[i][tot_cores];
    }
    if((r[i]["sys_name"]=="T2 total")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="Other")) {
      st_platforms_gdl_power_t2 = r[i][tot_cores];
    }
    if ((r[i]["sys_name"]=="T3 total")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="Other")) {
      st_platforms_gdl_power_t3 = r[i][tot_cores];
    }
    if ((r[i]["sys_name"]=="T0 total")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="Other")) {
      st_platforms_qro_power_t0 = r[i][tot_cores];
    }
    if ((r[i]["sys_name"]=="T1 total")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="Other")) {
      st_platforms_qro_power_t1 = r[i][tot_cores];
    }
    if ((r[i]["sys_name"]=="T1.5 total")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="Other")) {
      st_platforms_qro_power_t15 = r[i][tot_cores];
    }
    if ((r[i]["sys_name"]=="T2 total")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="Other")) {
      st_platforms_qro_power_t2 = r[i][tot_cores];
    }
    if ((r[i]["sys_name"]=="T3 total")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="Other")) {
      st_platforms_qro_power_t3 = r[i][tot_cores];
    }

    if ((r[i]["sys_name"]=="all")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="Open")) {
      st_platforms_qro_open.push(r[i]["tot_cores"])
    }
    ///////////////
    if ((r[i]["sys_name"]=="T0 total")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="iSeries")) {
      st_platforms_qro_iseries_t0 = r[i][tot_cores];
    }
    if ((r[i]["sys_name"]=="T1 total")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="iSeries")) {
      st_platforms_qro_iseries_t1 = r[i][tot_cores];
    }
    if ((r[i]["sys_name"]=="T1.5 total")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="iSeries")) {
      st_platforms_qro_iseries_t15 = r[i][tot_cores];
    }
    if((r[i]["sys_name"]=="T2 total")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="iSeries")) {
      st_platforms_qro_iseries_t2 = r[i][tot_cores];
    }
    if ((r[i]["sys_name"]=="T3 total")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="iSeries")) {
      st_platforms_qro_iseries_t3 = r[i][tot_cores];
    }

  }
  ///////////////////////////////////////////////
  document.getElementById("vcpu0").value = 0;
  document.getElementById("demo0").innerHTML= 0;


  document.getElementById("tier_111").value = 0;
  document.getElementById("demo02").innerHTML= 0;

  document.getElementById("tier_151").value = 0;
  document.getElementById("demo_3").innerHTML= 0;

  document.getElementById("tier_222").value = 0;
  document.getElementById("demo_4").innerHTML= 0;

  document.getElementById("tier_333").value = 0;
  document.getElementById("demo_5").innerHTML= 0;



  document.getElementById("tier000").checked = true;
  if (document.getElementById("tier000").checked == true) {
    document.getElementById("tier_00").hidden = false;
  }
  else if (document.getElementById("tier000").checked == false) {
    document.getElementById("tier_00").hidden = true;
  }
  document.getElementById("tier_111").checked = true;
  if (document.getElementById("tier_111").checked == true) {
    document.getElementById("tier_11").hidden = false;
  }
  else if (document.getElementById("tier_111").checked == false) {
    document.getElementById("tier_11").hidden = true;
  }
  document.getElementById("tier_15").checked = true;
  if (document.getElementById("tier_15").checked == true) {
    document.getElementById("tier_1.5").hidden = false;
  }
  else if (document.getElementById("tier_15").checked == false) {
    document.getElementById("tier_1.5").hidden = true;
  }
  document.getElementById("tier_22").checked = true;
  if (document.getElementById("tier_22").checked == true) {
    document.getElementById("tier_2").hidden = false;
  }
  else if (document.getElementById("tier_22").checked == false) {
    document.getElementById("tier_2").hidden = true;
  }
  document.getElementById("tier_33").checked = true;
  if (document.getElementById("tier_33").checked == true) {
    document.getElementById("tier_3").hidden = false;
  }
  else if (document.getElementById("tier_33").checked == false) {
    document.getElementById("tier_3").hidden = true;
  }


  if (document.getElementById("Guadalajara").checked==true) {
    document.getElementById("count_open_cores_2").innerHTML = st_platforms_gdl_open[0];
    if (document.getElementById("platform_other2").checked==true) {
      document.getElementById("vcpu0").max = st_platforms_gdl_power_t0;
      document.getElementById("tier_1111").max = st_platforms_gdl_power_t1;
      document.getElementById("tier_151").max = st_platforms_gdl_power_t15;
      document.getElementById("tier_222").max = st_platforms_gdl_power_t2;
      document.getElementById("tier_333").max = st_platforms_gdl_power_t3;
    }
    if (document.getElementById("platform_iseries2").checked==true) {
      document.getElementById("vcpu0").max = st_platforms_gdl_iseries_t0;
      document.getElementById("tier_1111").max = st_platforms_gdl_iseries_t1;
      document.getElementById("tier_151").max = st_platforms_gdl_iseries_t15;
      document.getElementById("tier_222").max  = st_platforms_gdl_iseries_t2;
      document.getElementById("tier_333").max= st_platforms_gdl_iseries_t3;
    }


  }
  if (document.getElementById("Queretaro").checked==true) {
    document.getElementById("count_open_cores_2").innerHTML = st_platforms_qro_open[0];
    if (document.getElementById("platform_other2").checked==true) {
      document.getElementById("vcpu0").max = st_platforms_qro_power_t0;
      document.getElementById("tier_1111").max = st_platforms_qro_power_t1;
      document.getElementById("tier_151").max = st_platforms_qro_power_t15;
      document.getElementById("tier_222").max  = st_platforms_qro_power_t2;
      document.getElementById("tier_333").max= st_platforms_qro_power_t3;
    }
    if (document.getElementById("platform_iseries2").checked==true) {
      document.getElementById("vcpu0").max = st_platforms_qro_iseries_t0;
      document.getElementById("tier_1111").max = st_platforms_qro_iseries_t1;
      document.getElementById("tier_151").max = st_platforms_qro_iseries_t15;
      document.getElementById("tier_222").max  = st_platforms_qro_iseries_t2;
      document.getElementById("tier_333").max = st_platforms_qro_iseries_t3;
    }
}

  /////////////////////////////////////////////
});

if ((document.getElementById("power2").checked == true)||(document.getElementById("open2").checked == true)||(document.getElementById("iseries2").checked == true)) {
  document.getElementById("slis222").hidden=true;
  document.getElementById("slis_open_request_2").hidden=true;
}

  /////////////////////////////////////////////////////////////////////////////////////////////////////
}
function show_server33(){

  if (document.getElementById('physical3').checked==true) {
console.log("ppp");
      document.getElementById("newserver00").hidden = false;
      document.getElementById("newserver002").hidden = false;
      document.getElementById("existingserver00").hidden = false;
      document.getElementById("existingserver002").hidden = false;
      document.getElementById("new_physical_server00").hidden=true;

  }
  if ((document.getElementById('virtual3').checked==true)) {
     alert("Requieres MNG/ARQ Authorization ");
      document.getElementById("newserver00").hidden = true;
      document.getElementById("newserver002").hidden = false;
      document.getElementById("existingserver00").hidden = true;
      document.getElementById("existingserver002").hidden = true;
      document.getElementById("new_physical_server00").hidden=false;
      document.getElementById("storage_servers_iseries3").hidden=true;
      document.getElementById("storage_servers_open3").hidden=true;
      document.getElementById("storage_servers_power3").hidden=true;
      document.getElementById("iseries_servers3").hidden=true;
      document.getElementById("power_servers3").hidden=true;
      document.getElementById("open_servers3").hidden=true;
  }
  if (document.getElementById('newserver00').checked==true) {
    document.getElementById("new_physical_server00").hidden=false;
  }
}
function show_server333(){

  if ((document.getElementById("storage3").checked==true)){
    document.getElementById("platform3").hidden=false;
    document.getElementById("confirm_server_3").hidden = true;

  if (document.getElementById("platform_open3").checked==true) {
    document.getElementById("slis_open_request_3").hidden = false;
    document.getElementById("slis333").hidden = true;
  }
  if ( (document.getElementById("platform_iseries3").checked==true) || (document.getElementById("platform_other3").checked==true) ) {
    document.getElementById("slis_open_request_3").hidden = true;
    document.getElementById("slis333").hidden = false;
  }
  }


  if (storage3.checked==true) {
    // document.getElementById("slis333").hidden=false;
    document.getElementById("slis33").hidden = true;
    document.getElementById("platform3").hidden = false;

  }
  else {
    // document.getElementById("slis333").hidden=true;
    document.getElementById("slis33").hidden = false;
    document.getElementById("platform3").hidden = true;

  }

  if ((document.getElementById('virtual3').checked==true)|| (document.getElementById("newserver00").checked==true)) {
     alert("Requieres MNG/ARQ Authorization2 ");
     document.getElementById("newserver00").hidden = false;
     document.getElementById("newserver002").hidden = false;
     document.getElementById("existingserver00").hidden = false;
     document.getElementById("existingserver002").hidden = false;
      document.getElementById("new_physical_server00").hidden=false;
      document.getElementById("storage_servers_iseries3").hidden=true;
      document.getElementById("storage_servers_open3").hidden=true;
      document.getElementById("storage_servers_power3").hidden=true;
      document.getElementById("iseries_servers3").hidden=true;
      document.getElementById("power_servers3").hidden=true;
      document.getElementById("open_servers3").hidden=true;
  }
    if (document.getElementById("storage3").checked==true) {
    document.getElementById("platform3").hidden=false;
      }
      else{
        document.getElementById("platform3").hidden=true;
      }



  //OPEN
  if (document.getElementById('existingserver00').checked==true) {
  document.getElementById("AUTOFILL3").hidden = false;
  document.getElementById("new_physical_server00").hidden=true;
  if (document.getElementById("storage3").checked==true) {
    document.getElementById("platform3").hidden=false;
  if (document.getElementById("platform_open3").checked==true) {
    document.getElementById("storage_servers_iseries3").hidden=true;
    document.getElementById("storage_servers_open3").hidden=false;
    document.getElementById("storage_servers_power3").hidden=true;
  }
  if (document.getElementById("platform_iseries3").checked==true) {
    document.getElementById("storage_servers_iseries3").hidden=false;
    document.getElementById("storage_servers_open3").hidden=true;
    document.getElementById("storage_servers_power3").hidden=true;
  }
  if (document.getElementById("platform_other3").checked==true) {
    document.getElementById("storage_servers_iseries3").hidden=true;
    document.getElementById("storage_servers_open3").hidden=true;
    document.getElementById("storage_servers_power3").hidden=false;
  }
    document.getElementById("open_servers3").hidden=true;
    document.getElementById("storage_servers_iseries3").hidden=false;
    document.getElementById("storage_servers_open3").hidden=false;
    document.getElementById("storage_servers_power3").hidden=false;
    document.getElementById("iseries_servers3").hidden=true;
    document.getElementById("power_servers3").hidden=true;

    if (document.getElementById("platform_open3").checked==true) {
      document.getElementById("storage_servers_iseries3").hidden=true;
      document.getElementById("storage_servers_open3").hidden=false;
      document.getElementById("storage_servers_power3").hidden=true;
    }
    if (document.getElementById("platform_iseries3").checked==true) {
      document.getElementById("storage_servers_iseries3").hidden=false;
      document.getElementById("storage_servers_open3").hidden=true;
      document.getElementById("storage_servers_power3").hidden=true;
    }
    if (document.getElementById("platform_other3").checked==true) {
      document.getElementById("storage_servers_iseries3").hidden=true;
      document.getElementById("storage_servers_open3").hidden=true;
      document.getElementById("storage_servers_power3").hidden=false;
    }
  }
  if (document.getElementById("power3").checked==true) {
    document.getElementById("open_servers3").hidden=true;
    document.getElementById("storage_servers_iseries3").hidden=true;
    document.getElementById("storage_servers_open3").hidden=true;
    document.getElementById("storage_servers_power3").hidden=true;
    document.getElementById("iseries_servers3").hidden=true;
    document.getElementById("power_servers3").hidden=false;
  }
  if (document.getElementById("open3").checked==true) {
    document.getElementById("open_servers3").hidden=false;
    document.getElementById("storage_servers_iseries3").hidden=true;
    document.getElementById("storage_servers_open3").hidden=true;
    document.getElementById("storage_servers_power3").hidden=true;
    document.getElementById("iseries_servers3").hidden=true;
    document.getElementById("power_servers3").hidden=true;

  }
  if (document.getElementById("iseries3").checked==true) {
    document.getElementById("open_servers3").hidden=true;
    document.getElementById("storage_servers_iseries3").hidden=true;
    document.getElementById("storage_servers_open3").hidden=true;
    document.getElementById("storage_servers_power3").hidden=true;
    document.getElementById("iseries_servers3").hidden=false;
    document.getElementById("power_servers3").hidden=true;
  }
  }

  ////////////////////////////////////////////////////////////////////
  db20000 = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/storage_platforms');
  var st_platforms_gdl_open = [];
  var st_platforms_gdl_iseries_t0 = [];
  var st_platforms_gdl_iseries_t1 = [];
  var st_platforms_gdl_iseries_t15 = [];
  var st_platforms_gdl_iseries_t2= [];
  var st_platforms_gdl_iseries_t3 = [];
  var st_platforms_gdl_power_t0 = [];
  var st_platforms_gdl_power_t1 = [];
  var st_platforms_gdl_power_t15 = [];
  var st_platforms_gdl_power_t2 = [];
  var st_platforms_gdl_power_t3 = [];
  var st_platforms_qro_open = [];
  var st_platforms_qro_iseries_t0 = [];
  var st_platforms_qro_iseries_t1 = [];
  var st_platforms_qro_iseries_t15 = [];
  var st_platforms_qro_iseries_t2 = [];
  var st_platforms_qro_iseries_t3 = [];
  var st_platforms_qro_power_t0 = [];
  var st_platforms_qro_power_t1 = [];
  var st_platforms_qro_power_t15 = [];
  var st_platforms_qro_power_t2 = [];
  var st_platforms_qro_power_t3 = [];


  db20000.find({
    selector: {_id: {$gt:0}},
    sort: ['_id']
  }).then(function (result) {
    /////////////////////////////////////////////
    r=result["docs"];
    // document.getElementById("input_rfs").value = _this.innerHTML;
    console.log(r);
    for (var i = 0; i < r.length; i++) {
      tot_cores="tot_cores"
      if ((r[i]["sys_name"]=="all")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="Open")) {
        st_platforms_gdl_open.push(r[i]["tot_cores"])
      }
      if ((r[i]["sys_name"]=="T0 total")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="iSeries")) {
        st_platforms_gdl_iseries_t0 = r[i][tot_cores];
      }
      if ((r[i]["sys_name"]=="T1 total")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="iSeries")) {
        st_platforms_gdl_iseries_t1 = r[i][tot_cores];
      }
      if ((r[i]["sys_name"]=="T1.5 total")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="iSeries")) {
        st_platforms_gdl_iseries_t15 = r[i][tot_cores];
      }
      if((r[i]["sys_name"]=="T2 total")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="iSeries")) {
        st_platforms_gdl_iseries_t2 = r[i][tot_cores];
      }
      if ((r[i]["sys_name"]=="T3 total")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="iSeries")) {
        st_platforms_gdl_iseries_t3 = r[i][tot_cores];
      }
      /////////////////
      if ((r[i]["sys_name"]=="T0 total")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="Other")) {
        st_platforms_gdl_power_t0 = r[i][tot_cores];
      }
      if ((r[i]["sys_name"]=="T1 total")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="Other")) {
        st_platforms_gdl_power_t1 = r[i][tot_cores];
      }
      if ((r[i]["sys_name"]=="T1.5 total")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="Other")) {
        st_platforms_gdl_power_t15 = r[i][tot_cores];
      }
      if((r[i]["sys_name"]=="T2 total")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="Other")) {
        st_platforms_gdl_power_t2 = r[i][tot_cores];
      }
      if ((r[i]["sys_name"]=="T3 total")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="Other")) {
        st_platforms_gdl_power_t3 = r[i][tot_cores];
      }
      if ((r[i]["sys_name"]=="T0 total")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="Other")) {
        st_platforms_qro_power_t0 = r[i][tot_cores];
      }
      if ((r[i]["sys_name"]=="T1 total")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="Other")) {
        st_platforms_qro_power_t1 = r[i][tot_cores];
      }
      if ((r[i]["sys_name"]=="T1.5 total")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="Other")) {
        st_platforms_qro_power_t15 = r[i][tot_cores];
      }
      if ((r[i]["sys_name"]=="T2 total")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="Other")) {
        st_platforms_qro_power_t2 = r[i][tot_cores];
      }
      if ((r[i]["sys_name"]=="T3 total")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="Other")) {
        st_platforms_qro_power_t3 = r[i][tot_cores];
      }

      if ((r[i]["sys_name"]=="all")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="Open")) {
        st_platforms_qro_open.push(r[i]["tot_cores"])
      }
      ///////////////
      if ((r[i]["sys_name"]=="T0 total")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="iSeries")) {
        st_platforms_qro_iseries_t0 = r[i][tot_cores];
      }
      if ((r[i]["sys_name"]=="T1 total")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="iSeries")) {
        st_platforms_qro_iseries_t1 = r[i][tot_cores];
      }
      if ((r[i]["sys_name"]=="T1.5 total")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="iSeries")) {
        st_platforms_qro_iseries_t15 = r[i][tot_cores];
      }
      if((r[i]["sys_name"]=="T2 total")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="iSeries")) {
        st_platforms_qro_iseries_t2 = r[i][tot_cores];
      }
      if ((r[i]["sys_name"]=="T3 total")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="iSeries")) {
        st_platforms_qro_iseries_t3 = r[i][tot_cores];
      }

    }
    ///////////////////////////////////////////////
    document.getElementById("vcpu__").value = 0;
    document.getElementById("demo__").innerHTML= 0;


    document.getElementById("tier__111").value = 0;
    document.getElementById("demo__2").innerHTML= 0;

    document.getElementById("tier__151").value = 0;
    document.getElementById("demo__3").innerHTML= 0;

    document.getElementById("tier__222").value = 0;
    document.getElementById("demo__4").innerHTML= 0;

    document.getElementById("tier__333").value = 0;
    document.getElementById("demo__5").innerHTML= 0;



    document.getElementById("tier__00").checked = true;
    if (document.getElementById("tier__00").checked == true) {
      document.getElementById("tier__0").hidden = false;
    }
    else if (document.getElementById("tier__00").checked == false) {
      document.getElementById("tier__0").hidden = true;
    }
    document.getElementById("tier__11").checked = true;
    if (document.getElementById("tier__11").checked == true) {
      document.getElementById("tier__1").hidden = false;
    }
    else if (document.getElementById("tier__11").checked == false) {
      document.getElementById("tier__1").hidden = true;
    }
    document.getElementById("tier__15").checked = true;
    if (document.getElementById("tier__15").checked == true) {
      document.getElementById("tier__1.5").hidden = false;
    }
    else if (document.getElementById("tier__15").checked == false) {
      document.getElementById("ttier__1.5").hidden = true;
    }
    document.getElementById("tier__22").checked = true;
    if (document.getElementById("tier__22").checked == true) {
      document.getElementById("tier__2").hidden = false;
    }
    else if (document.getElementById("tier__22").checked == false) {
      document.getElementById("tier__2").hidden = true;
    }
    document.getElementById("tier__33").checked = true;
    if (document.getElementById("tier__33").checked == true) {
      document.getElementById("tier__3").hidden = false;
    }
    else if (document.getElementById("tier__33").checked == false) {
      document.getElementById("tier__3").hidden = true;
    }


    if (document.getElementById("Guadalajara").checked==true) {
      document.getElementById("count_open_cores_3").innerHTML = st_platforms_gdl_open[0];
      if (document.getElementById("platform_other3").checked==true) {
        document.getElementById("vcpu__").max = st_platforms_gdl_power_t0;
        document.getElementById("tier__111").max = st_platforms_gdl_power_t1;
        document.getElementById("tier__151").max = st_platforms_gdl_power_t15;
        document.getElementById("tier__222").max = st_platforms_gdl_power_t2;
        document.getElementById("tier__333").max = st_platforms_gdl_power_t3;
      }
      if (document.getElementById("platform_iseries3").checked==true) {
        document.getElementById("vcpu__").max = st_platforms_gdl_iseries_t0;
        document.getElementById("tier__111").max = st_platforms_gdl_iseries_t1;
        document.getElementById("tier__151").max = st_platforms_gdl_iseries_t15;
        document.getElementById("tier__222").max  = st_platforms_gdl_iseries_t2;
        document.getElementById("tier__333").max= st_platforms_gdl_iseries_t3;
      }


    }
    if (document.getElementById("Queretaro").checked==true) {
      document.getElementById("count_open_cores_3").innerHTML = st_platforms_qro_open[0];
      if (document.getElementById("platform_other3").checked==true) {
        document.getElementById("vcpu__").max = st_platforms_qro_power_t0;
        document.getElementById("tier__111").max = st_platforms_qro_power_t1;
        document.getElementById("tier__151").max = st_platforms_qro_power_t15;
        document.getElementById("tier__222").max  = st_platforms_qro_power_t2;
        document.getElementById("tier__333").max= st_platforms_qro_power_t3;
      }
      if (document.getElementById("platform_iseries3").checked==true) {
        document.getElementById("vcpu__").max = st_platforms_qro_iseries_t0;
        document.getElementById("tier__111").max = st_platforms_qro_iseries_t1;
        document.getElementById("tier__151").max = st_platforms_qro_iseries_t15;
        document.getElementById("tier__222").max  = st_platforms_qro_iseries_t2;
        document.getElementById("tier__333").max = st_platforms_qro_iseries_t3;
      }
  }
});
    /////////////////////////////////////////////
    if ((document.getElementById("power3").checked == true)||(document.getElementById("open3").checked == true)||(document.getElementById("iseries3").checked == true)) {
      document.getElementById("slis333").hidden=true;
      document.getElementById("slis_open_request_3").hidden=true;
    }
}
function show_server44(){

  if (document.getElementById('physical4').checked==true) {
console.log("ppp");
      document.getElementById("newserver000").hidden = false;
      document.getElementById("newserver0002").hidden = false;
      document.getElementById("existingserver000").hidden = false;
      document.getElementById("existingserver0002").hidden = false;
      document.getElementById("new_physical_server00").hidden=true;

  }
  if ((document.getElementById('virtual4').checked==true)) {
     alert("Requieres MNG/ARQ Authorization ");
      document.getElementById("newserver000").hidden = true;
      document.getElementById("newserver0002").hidden = false;
      document.getElementById("existingserver000").hidden = true;
      document.getElementById("existingserver0002").hidden = true;
      document.getElementById("new_physical_server000").hidden=false;
      document.getElementById("storage_servers_iseries4").hidden=true;
      document.getElementById("storage_servers_open4").hidden=true;
      document.getElementById("storage_servers_power4").hidden=true;
      document.getElementById("iseries_servers4").hidden=true;
      document.getElementById("power_servers4").hidden=true;
      document.getElementById("open_servers4").hidden=true;
  }
  if (document.getElementById('newserver000').checked==true) {
    document.getElementById("new_physical_server000").hidden=false;
  }
}
function show_server444(){

  if ((document.getElementById("storage4").checked==true)){
    document.getElementById("platform4").hidden=false;
    document.getElementById("confirm_server_4").hidden=true;
  if (document.getElementById("platform_open4").checked==true) {
    document.getElementById("slis_open_request_4").hidden = false;
    document.getElementById("slis444").hidden = true;
  }
  if ( (document.getElementById("platform_iseries4").checked==true) || (document.getElementById("platform_other4").checked==true) ) {
    document.getElementById("slis_open_request_4").hidden = true;
    document.getElementById("slis444").hidden = false;
  }
  }


  document.getElementById("platform4").hidden=false;
  document.getElementById("add_tech").hidden=true;
  if (storage4.checked==true) {
    // document.getElementById("slis444").hidden=false;
    document.getElementById("slis44").hidden = true;
    document.getElementById("platform4").hidden = false;

  }
  else {
    // document.getElementById("slis444").hidden=true;
    document.getElementById("slis44").hidden = false;
    document.getElementById("platform4").hidden = true;
  }


  if ((document.getElementById('virtual4').checked==true)|| (document.getElementById("newserver00").checked==true)) {
     document.getElementById("newserver000").hidden = false;
     document.getElementById("newserver0002").hidden = false;
     document.getElementById("existingserver000").hidden = false;
     document.getElementById("existingserver0002").hidden = false;
      document.getElementById("new_physical_server000").hidden=false;
      document.getElementById("storage_servers_iseries4").hidden=true;
      document.getElementById("storage_servers_open4").hidden=true;
      document.getElementById("storage_servers_power4").hidden=true;
      document.getElementById("iseries_servers4").hidden=true;
      document.getElementById("power_servers4").hidden=true;
      document.getElementById("open_servers4").hidden=true;
  }
    if (document.getElementById("storage4").checked==true) {
    document.getElementById("platform4").hidden=false;
      }
      else{
        document.getElementById("platform4").hidden=true;
      }



  //OPEN
  if (document.getElementById('existingserver000').checked==true) {
  document.getElementById("AUTOFILL4").hidden = false;
  document.getElementById("new_physical_server000").hidden=true;
  if (document.getElementById("storage4").checked==true) {
    document.getElementById("platform4").hidden=false;
  if (document.getElementById("platform_open4").checked==true) {
    document.getElementById("storage_servers_iseries4").hidden=true;
    document.getElementById("storage_servers_open4").hidden=false;
    document.getElementById("storage_servers_power4").hidden=true;
  }
  if (document.getElementById("platform_iseries4").checked==true) {
    document.getElementById("storage_servers_iseries4").hidden=false;
    document.getElementById("storage_servers_open4").hidden=true;
    document.getElementById("storage_servers_power4").hidden=true;
  }
  if (document.getElementById("platform_other4").checked==true) {
    document.getElementById("storage_servers_iseries4").hidden=true;
    document.getElementById("storage_servers_open4").hidden=true;
    document.getElementById("storage_servers_power4").hidden=false;
  }
    document.getElementById("open_servers4").hidden=true;
    document.getElementById("storage_servers_iseries4").hidden=false;
    document.getElementById("storage_servers_open4").hidden=false;
    document.getElementById("storage_servers_power4").hidden=false;
    document.getElementById("iseries_servers4").hidden=true;
    document.getElementById("power_servers4").hidden=true;

    if (document.getElementById("platform_open4").checked==true) {
      document.getElementById("storage_servers_iseries4").hidden=true;
      document.getElementById("storage_servers_open4").hidden=false;
      document.getElementById("storage_servers_power4").hidden=true;
    }
    if (document.getElementById("platform_iseries4").checked==true) {
      document.getElementById("storage_servers_iseries4").hidden=false;
      document.getElementById("storage_servers_open4").hidden=true;
      document.getElementById("storage_servers_power4").hidden=true;
    }
    if (document.getElementById("platform_other4").checked==true) {
      document.getElementById("storage_servers_iseries4").hidden=true;
      document.getElementById("storage_servers_open4").hidden=true;
      document.getElementById("storage_servers_power4").hidden=false;
    }
  }
  if (document.getElementById("power4").checked==true) {
    document.getElementById("open_servers4").hidden=true;
    document.getElementById("storage_servers_iseries4").hidden=true;
    document.getElementById("storage_servers_open4").hidden=true;
    document.getElementById("storage_servers_power4").hidden=true;
    document.getElementById("iseries_servers4").hidden=true;
    document.getElementById("power_servers4").hidden=false;
  }
  if (document.getElementById("open4").checked==true) {
    document.getElementById("open_servers4").hidden=false;
    document.getElementById("storage_servers_iseries4").hidden=true;
    document.getElementById("storage_servers_open4").hidden=true;
    document.getElementById("storage_servers_power4").hidden=true;
    document.getElementById("iseries_servers4").hidden=true;
    document.getElementById("power_servers4").hidden=true;

  }
  if (document.getElementById("iseries4").checked==true) {
    document.getElementById("open_servers4").hidden=true;
    document.getElementById("storage_servers_iseries4").hidden=true;
    document.getElementById("storage_servers_open4").hidden=true;
    document.getElementById("storage_servers_power4").hidden=true;
    document.getElementById("iseries_servers4").hidden=false;
    document.getElementById("power_servers4").hidden=true;
  }
  }
  ////////////////////////////////////////////////////////////////////
  db20000 = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/storage_platforms');
  var st_platforms_gdl_open = [];
  var st_platforms_gdl_iseries_t0 = [];
  var st_platforms_gdl_iseries_t1 = [];
  var st_platforms_gdl_iseries_t15 = [];
  var st_platforms_gdl_iseries_t2= [];
  var st_platforms_gdl_iseries_t3 = [];
  var st_platforms_gdl_power_t0 = [];
  var st_platforms_gdl_power_t1 = [];
  var st_platforms_gdl_power_t15 = [];
  var st_platforms_gdl_power_t2 = [];
  var st_platforms_gdl_power_t3 = [];
  var st_platforms_qro_open = [];
  var st_platforms_qro_iseries_t0 = [];
  var st_platforms_qro_iseries_t1 = [];
  var st_platforms_qro_iseries_t15 = [];
  var st_platforms_qro_iseries_t2 = [];
  var st_platforms_qro_iseries_t3 = [];
  var st_platforms_qro_power_t0 = [];
  var st_platforms_qro_power_t1 = [];
  var st_platforms_qro_power_t15 = [];
  var st_platforms_qro_power_t2 = [];
  var st_platforms_qro_power_t3 = [];


  db20000.find({
    selector: {_id: {$gt:0}},
    sort: ['_id']
  }).then(function (result) {
    /////////////////////////////////////////////
    r=result["docs"];
    // document.getElementById("input_rfs").value = _this.innerHTML;
    console.log(r);
    for (var i = 0; i < r.length; i++) {
      tot_cores="tot_cores"
      if ((r[i]["sys_name"]=="all")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="Open")) {
        st_platforms_gdl_open.push(r[i]["tot_cores"])
      }
      if ((r[i]["sys_name"]=="T0 total")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="iSeries")) {
        st_platforms_gdl_iseries_t0 = r[i][tot_cores];
      }
      if ((r[i]["sys_name"]=="T1 total")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="iSeries")) {
        st_platforms_gdl_iseries_t1 = r[i][tot_cores];
      }
      if ((r[i]["sys_name"]=="T1.5 total")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="iSeries")) {
        st_platforms_gdl_iseries_t15 = r[i][tot_cores];
      }
      if((r[i]["sys_name"]=="T2 total")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="iSeries")) {
        st_platforms_gdl_iseries_t2 = r[i][tot_cores];
      }
      if ((r[i]["sys_name"]=="T3 total")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="iSeries")) {
        st_platforms_gdl_iseries_t3 = r[i][tot_cores];
      }
      /////////////////
      if ((r[i]["sys_name"]=="T0 total")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="Other")) {
        st_platforms_gdl_power_t0 = r[i][tot_cores];
      }
      if ((r[i]["sys_name"]=="T1 total")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="Other")) {
        st_platforms_gdl_power_t1 = r[i][tot_cores];
      }
      if ((r[i]["sys_name"]=="T1.5 total")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="Other")) {
        st_platforms_gdl_power_t15 = r[i][tot_cores];
      }
      if((r[i]["sys_name"]=="T2 total")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="Other")) {
        st_platforms_gdl_power_t2 = r[i][tot_cores];
      }
      if ((r[i]["sys_name"]=="T3 total")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="Other")) {
        st_platforms_gdl_power_t3 = r[i][tot_cores];
      }
      if ((r[i]["sys_name"]=="T0 total")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="Other")) {
        st_platforms_qro_power_t0 = r[i][tot_cores];
      }
      if ((r[i]["sys_name"]=="T1 total")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="Other")) {
        st_platforms_qro_power_t1 = r[i][tot_cores];
      }
      if ((r[i]["sys_name"]=="T1.5 total")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="Other")) {
        st_platforms_qro_power_t15 = r[i][tot_cores];
      }
      if ((r[i]["sys_name"]=="T2 total")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="Other")) {
        st_platforms_qro_power_t2 = r[i][tot_cores];
      }
      if ((r[i]["sys_name"]=="T3 total")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="Other")) {
        st_platforms_qro_power_t3 = r[i][tot_cores];
      }

      if ((r[i]["sys_name"]=="all")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="Open")) {
        st_platforms_qro_open.push(r[i]["tot_cores"])
      }
      ///////////////
      if ((r[i]["sys_name"]=="T0 total")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="iSeries")) {
        st_platforms_qro_iseries_t0 = r[i][tot_cores];
      }
      if ((r[i]["sys_name"]=="T1 total")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="iSeries")) {
        st_platforms_qro_iseries_t1 = r[i][tot_cores];
      }
      if ((r[i]["sys_name"]=="T1.5 total")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="iSeries")) {
        st_platforms_qro_iseries_t15 = r[i][tot_cores];
      }
      if((r[i]["sys_name"]=="T2 total")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="iSeries")) {
        st_platforms_qro_iseries_t2 = r[i][tot_cores];
      }
      if ((r[i]["sys_name"]=="T3 total")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="iSeries")) {
        st_platforms_qro_iseries_t3 = r[i][tot_cores];
      }

    }
    ///////////////////////////////////////////////
    document.getElementById("vcpu___").value = 0;
    document.getElementById("demo___").innerHTML= 0;


    document.getElementById("tier___111").value = 0;
    document.getElementById("demo___2").innerHTML= 0;

    document.getElementById("tier___151").value = 0;
    document.getElementById("demo___3").innerHTML= 0;

    document.getElementById("tier___222").value = 0;
    document.getElementById("demo___4").innerHTML= 0;

    document.getElementById("tier___333").value = 0;
    document.getElementById("demo___5").innerHTML= 0;



    document.getElementById("tier___00").checked = true;
    if (document.getElementById("tier___00").checked == true) {
      document.getElementById("tier___0").hidden = false;
    }
    else if (document.getElementById("tier___00").checked == false) {
      document.getElementById("tier___0").hidden = true;
    }
    document.getElementById("tier___11").checked = true;
    if (document.getElementById("tier___11").checked == true) {
      document.getElementById("tier___1").hidden = false;
    }
    else if (document.getElementById("tier___11").checked == false) {
      document.getElementById("tier___1").hidden = true;
    }
    document.getElementById("tier___15").checked = true;
    if (document.getElementById("tier___15").checked == true) {
      document.getElementById("tier___1.5").hidden = false;
    }
    else if (document.getElementById("tier___15").checked == false) {
      document.getElementById("ttier___1.5").hidden = true;
    }
    document.getElementById("tier___22").checked = true;
    if (document.getElementById("tier___22").checked == true) {
      document.getElementById("tier___2").hidden = false;
    }
    else if (document.getElementById("tier___22").checked == false) {
      document.getElementById("tier___2").hidden = true;
    }
    document.getElementById("tier___33").checked = true;
    if (document.getElementById("tier___33").checked == true) {
      document.getElementById("tier___3").hidden = false;
    }
    else if (document.getElementById("tier___33").checked == false) {
      document.getElementById("tier___3").hidden = true;
    }


    if (document.getElementById("Guadalajara").checked==true) {
      document.getElementById("count_open_cores_4").innerHTML = st_platforms_gdl_open[0];
      if (document.getElementById("platform_other4").checked==true) {
        document.getElementById("vcpu___").max = st_platforms_gdl_power_t0;
        document.getElementById("tier___111").max = st_platforms_gdl_power_t1;
        document.getElementById("tier___151").max = st_platforms_gdl_power_t15;
        document.getElementById("tier___222").max = st_platforms_gdl_power_t2;
        document.getElementById("tier___333").max = st_platforms_gdl_power_t3;
      }
      if (document.getElementById("platform_iseries4").checked==true) {
        document.getElementById("vcpu___").max = st_platforms_gdl_iseries_t0;
        document.getElementById("tier___111").max = st_platforms_gdl_iseries_t1;
        document.getElementById("tier___151").max = st_platforms_gdl_iseries_t15;
        document.getElementById("tier___222").max  = st_platforms_gdl_iseries_t2;
        document.getElementById("tier___333").max= st_platforms_gdl_iseries_t3;
      }


    }
    if (document.getElementById("Queretaro").checked==true) {
      document.getElementById("count_open_cores_4").innerHTML = st_platforms_qro_open[0];
      if (document.getElementById("platform_other4").checked==true) {
        document.getElementById("vcpu___").max = st_platforms_qro_power_t0;
        document.getElementById("tier___111").max = st_platforms_qro_power_t1;
        document.getElementById("tier___151").max = st_platforms_qro_power_t15;
        document.getElementById("tier___222").max  = st_platforms_qro_power_t2;
        document.getElementById("tier___333").max= st_platforms_qro_power_t3;
      }
      if (document.getElementById("platform_iseries4").checked==true) {
        document.getElementById("vcpu___").max = st_platforms_qro_iseries_t0;
        document.getElementById("tier___111").max = st_platforms_qro_iseries_t1;
        document.getElementById("tier___151").max = st_platforms_qro_iseries_t15;
        document.getElementById("tier___222").max  = st_platforms_qro_iseries_t2;
        document.getElementById("tier___333").max = st_platforms_qro_iseries_t3;
      }
  }
  });
    /////////////////////////////////////////////
    if ((document.getElementById("power4").checked == true)||(document.getElementById("open4").checked == true)||(document.getElementById("iseries4").checked == true)) {
      document.getElementById("slis444").hidden=true;
      document.getElementById("slis_open_request_4").hidden=true;
    }
}
function getSysname(){
  //Technology divs data 
  //Req1
  var divr1_techa="";
  //Req2
  var divr2_techa="";
  var divr2_techb="";
  var divr2_techc="";
  //Req3
  var divr3_techa="";
  var divr3_techb="";
  var divr3_techc="";
  //Req4
  var divr4_techa="";
  var divr4_techb="";
  var divr4_techc="";
 
  var dbStorage = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/storage');
  var dbPower = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/power');
  var dbiSeries= new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/iseries');
  var dbOpen = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/open');
  divr1_techa= document.getElementById("tech_req_1_str_opn").value;
  divr2_techa=document.getElementById("tech_req_2_str_opn").value;
  divr2_techb=document.getElementById("tech_req_2_str").value;
  divr2_techc=document.getElementById("tech_req_2_oth").value;

  divr3_techa=document.getElementById("tech_req_3_str_opn").value;
  divr3_techb=document.getElementById("tech_req_3_str").value;
  divr3_techc=document.getElementById("tech_req_3_oth").value;

  divr4_techa=document.getElementById("tech_req_4_str_opn").value;
  divr4_techb=document.getElementById("tech_req_4_str").value;
  divr4_techc=document.getElementById("tech_req_4_oth").value;
  tech1= divr1_techa;
  tech2=divr2_techa.concat(divr2_techb).concat(divr2_techc);
  tech3=divr3_techa.concat(divr3_techb).concat(divr3_techc);
  tech4=divr4_techa.concat(divr4_techb).concat(divr4_techc);
  var dropRequest1="requestServer1";
  var dropRequest2="requestServer2";
  var dropRequest3="requestServer3";
  var dropRequest4="requestServer4";
  // TECH 1  CONTROL MODULE
  switch (tech1){
    case 'POWER':
      loadDropSysname(dbPower, dropRequest1);

      console.log("pOWER-1");
      break;
    case 'ISERIES':
      console.log("iseries-1");
      loadDropSysname(dbiSeries, dropRequest1);
      break;
    case 'Storage Platform Open':
      console.log("storageopen-1");
      loadDropSysname(dbStorage, dropRequest1);
      break;
    case 'STORAGE_ISERIES':

      console.log("storageIseries-1");
      document.getElementById("ASR1").style.display = 'none';
      if(document.getElementById("tier0").value==0){
        document.getElementById("servertier0").disabled=true;
        document.getElementById("r1_approve0").disabled=true;
      }else{
        loadDropSysname(dbStorage, "servertier0");
      }
      if(document.getElementById("tier1").value==0){
        document.getElementById("servertier1").disabled=true;
        document.getElementById("r1_approve1").disabled=true;
      }else{
        loadDropSysname(dbStorage, "servertier1");
      }
      if(document.getElementById("tier1.5").value==0){
        document.getElementById("servertier15").disabled=true;
        document.getElementById("r1_approve15").disabled=true;
      }else{
        loadDropSysname(dbStorage, "servertier15");
      }
      if(document.getElementById("tier2").value==0){
        document.getElementById("servertier2").disabled=true;
        document.getElementById("r1_approve2").disabled=true;
      }else{
        loadDropSysname(dbStorage, "servertier2");
      }
      if(document.getElementById("tier3").value==0){
        document.getElementById("servertier3").disabled=true;
        document.getElementById("r1_approve3").disabled=true;
      }else{
        loadDropSysname(dbStorage, "servertier3");
      }
      break;
    case 'STORAGE_POWER':
      console.log("storageopen-1");
      document.getElementById("ASR1").style.display = 'none';
      loadDropSysname(dbStorage, dropRequest1);   
      if(document.getElementById("tier0").value==0){
        document.getElementById("servertier0").disabled=true;
        document.getElementById("r1_approve0").disabled=true;
      }else{
        loadDropSysname(dbStorage, "servertier0");
      }
      if(document.getElementById("tier1").value==0){
        document.getElementById("servertier1").disabled=true;
        document.getElementById("r1_approve1").disabled=true;
      }else{
        loadDropSysname(dbStorage, "servertier1");
      }
      if(document.getElementById("tier1.5").value==0){
        document.getElementById("servertier15").disabled=true;
        document.getElementById("r1_approve15").disabled=true;
      }else{
        loadDropSysname(dbStorage, "servertier15");
      }
      if(document.getElementById("tier2").value==0){
        document.getElementById("servertier2").disabled=true;
        document.getElementById("r1_approve2").disabled=true;
      }else{
        loadDropSysname(dbStorage, "servertier2");
      }
      if(document.getElementById("tier3").value==0){
        document.getElementById("servertier3").disabled=true;
        document.getElementById("r1_approve3").disabled=true;
      }else{
        loadDropSysname(dbStorage, "servertier3");
      }
      break;

    case 'OPEN':
        loadDropSysname(dbOpen, dropRequest1);  
        console.log("open-1");
      break;
      // 5568901233
    default:
      console.log("DIV NO EN USO");
  }
  // TECH 2  CONTROL MODULE
  switch (tech2){
    case 'POWER':
      console.log("pOWER-2");
      loadDropSysname(dbPower, dropRequest2);
    break;
    case 'ISERIES':
      console.log("iseries-2");
      loadDropSysname(dbiSeries, dropRequest2);
    break;
    case 'Storage Platform Open':
        console.log("storageopen-2");
      loadDropSysname(dbStorage, dropRequest2);
    break;
    case 'STORAGE_ISERIES':
      document.getElementById("ASR2").style.display = 'none';
      loadDropSysname(dbStorage, dropRequest2); 
      console.log("storageiseries-2"); 
      if(document.getElementById("r2_tier0").value==0){
        document.getElementById("serverr2_tier0").disabled=true;
        document.getElementById("r2_approve0").disabled=true;
      }else{
        loadDropSysname(dbStorage, "serverr2_tier0");
      }
      if(document.getElementById("r2_tier1").value==0){
        document.getElementById("serverr2_tier1").disabled=true;
        document.getElementById("r2_approve1").disabled=true;
      }else{
        loadDropSysname(dbStorage, "serverr2_tier1");
      }
      if(document.getElementById("r2_tier1.5").value==0){
        document.getElementById("serverr2_tier15").disabled=true;
        document.getElementById("r2_approve15").disabled=true;
      }else{
        loadDropSysname(dbStorage, "serverr2_tier15");
      }
      if(document.getElementById("r2_tier2").value==0){
        document.getElementById("serverr2_tier2").disabled=true;
        document.getElementById("r2_approve2").disabled=true;
      }else{
        loadDropSysname(dbStorage, "serverr2_tier2");
      }
      if(document.getElementById("r2_tier3").value==0){
        document.getElementById("serverr2_tier3").disabled=true;
        document.getElementById("r2_approve3").disabled=true;
      }else{
        loadDropSysname(dbStorage, "serverr2_tier3");
      }
      break;
    case 'STORAGE_POWER':
      console.log("storagepowrer-2");
      document.getElementById("ASR2").style.display = 'none';
      loadDropSysname(dbStorage, dropRequest2);
      if(document.getElementById("r2_tier0").value==0){
        document.getElementById("serverr2_tier0").disabled=true;
        document.getElementById("r2_approve0").disabled=true;
      }else{
        loadDropSysname(dbStorage, "serverr2_tier0");
      }
      if(document.getElementById("r2_tier1").value==0){
        document.getElementById("serverr2_tier1").disabled=true;
        document.getElementById("r2_approve1").disabled=true;
      }else{
        loadDropSysname(dbStorage, "serverr2_tier1");
      }
      if(document.getElementById("r2_tier1.5").value==0){
        document.getElementById("serverr2_tier15").disabled=true;
        document.getElementById("r2_approve15").disabled=true;
      }else{
        loadDropSysname(dbStorage, "serverr2_tier15");
      }
      if(document.getElementById("r2_tier2").value==0){
        document.getElementById("serverr2_tier2").disabled=true;
        document.getElementById("r2_approve2").disabled=true;
      }else{
        loadDropSysname(dbStorage, "serverr2_tier2");
      }
      if(document.getElementById("r2_tier3").value==0){
        document.getElementById("serverr2_tier3").disabled=true;
        document.getElementById("r2_approve3").disabled=true;
      }else{
        loadDropSysname(dbStorage, "serverr2_tier3");
      }
    break;
    case 'OPEN':
      console.log("open-2");
      loadDropSysname(dbOpen, dropRequest2);
      break;
    default:
    console.log("DIV NO EN USO");
  }
  // TECH 3  CONTROL MODULE
  switch (tech3){
    case 'POWER':
      console.log("pOWER-3");
      loadDropSysname(dbPower,dropRequest3);
    break;
    case 'ISERIES':
      console.log("iseries-3");
      loadDropSysname(dbiSeries,dropRequest3);
    break;
    case 'Storage Platform Open':
      console.log("storageopen-3");
      loadDropSysname(dbStorage,dropRequest3);
    break;
    case 'STORAGE_ISERIES':
      console.log("storageiseries-3");
      document.getElementById("ASR3").style.display = 'none';
      loadDropSysname(dbOStorage,dropRequest3);
      if(document.getElementById("r3_tier0").value==0){
        document.getElementById("serverr3_tier0").disabled=true;
        document.getElementById("r3_approve0").disabled=true;
      }else{
        loadDropSysname(dbStorage, "serverr3_tier0");
      }
      if(document.getElementById("r3_tier1").value==0){
        document.getElementById("serverr3_tier1").disabled=true;
        document.getElementById("r3_approve1").disabled=true;
      }else{
        loadDropSysname(dbStorage, "serverr3_tier1");
      }
      if(document.getElementById("r3_tier1.5").value==0){
        document.getElementById("serverr3_tier15").disabled=true;
        document.getElementById("r3_approve15").disabled=true;
      }else{
        loadDropSysname(dbStorage, "serverr3_tier15");
      }
      if(document.getElementById("r3_tier2").value==0){
        document.getElementById("serverr3_tier2").disabled=true;
        document.getElementById("r3_approve2").disabled=true;
      }else{
        loadDropSysname(dbStorage, "serverr3_tier2");
      }
      if(document.getElementById("r3_tier3").value==0){
        document.getElementById("serverr3_tier3").disabled=true;
        document.getElementById("r3_approve3").disabled=true;
      }else{
        loadDropSysname(dbStorage, "serverr3_tier3");
      }  
      break;
    case 'STORAGE_POWER':
      console.log("storagepower-3");
      document.getElementById("ASR3").style.display = 'none';
      loadDropSysname(dbStorage,dropRequest3); 
      if(document.getElementById("r3_tier0").value==0){
        document.getElementById("serverr3_tier0").disabled=true;
        document.getElementById("r3_approve0").disabled=true;
      }else{
        loadDropSysname(dbStorage, "serverr3_tier0");
      }
      if(document.getElementById("r3_tier1").value==0){
        document.getElementById("serverr3_tier1").disabled=true;
        document.getElementById("r3_approve1").disabled=true;
      }else{
        loadDropSysname(dbStorage, "serverr3_tier1");
      }
      if(document.getElementById("r3_tier1.5").value==0){
        document.getElementById("serverr3_tier15").disabled=true;
        document.getElementById("r3_approve15").disabled=true;
      }else{
        loadDropSysname(dbStorage, "serverr3_tier15");
      }
      if(document.getElementById("r3_tier2").value==0){
        document.getElementById("serverr3_tier2").disabled=true;
        document.getElementById("r3_approve2").disabled=true;
      }else{
        loadDropSysname(dbStorage, "serverr3_tier2");
      }
      if(document.getElementById("r3_tier3").value==0){
        document.getElementById("serverr3_tier3").disabled=true;
        document.getElementById("r3_approve3").disabled=true;
      }else{
        loadDropSysname(dbStorage, "serverr3_tier3");
      }  
      break;
    case 'OPEN':
        console.log("open-3");
        loadDropSysname(dbOpen,dropRequest3);
      break;
    default:
      console.log("DIV NO EN USO");
  }
  // TECH 4  CONTROL MODULE
  switch (tech4){
    case 'POWER':
      console.log("pOWER-4");
      loadDropSysname(dbPower,dropRequest4);
    break;
    case 'ISERIES': 
      loadDropSysname(dbiSeries,dropRequest4);
      
      console.log("iseries-4");
    break;
    case 'Storage Platform Open':
      loadDropSysname(dbStorage,dropRequest4);
      console.log("storageopen-4");
    break;
    case 'STORAGE_ISERIES':
      console.log("storageiseries-4");
      document.getElementById("ASR4").style.display = 'none';
      loadDropSysname(dbStorage,dropRequest4);
      if(document.getElementById("r4_tier0").value==0){
        document.getElementById("serverr4_tier0").disabled=true;
        document.getElementById("r4_approve0").disabled=true;
      }else{
        document.getElementById("serverr4_tier0").disabled=false;
        document.getElementById("r4_approve0").disabled=false;
        loadDropSysname(dbStorage, "serverr4_tier0");
      } 
      if(document.getElementById("r4_tier1").value==0){
        document.getElementById("serverr4_tier1").disabled=true;
        document.getElementById("r4_approve1").disabled=true;
      }else{
        document.getElementById("serverr4_tier1").disabled=false;
        document.getElementById("r4_approve1").disabled=false;
        loadDropSysname(dbStorage, "serverr4_tier1");
      } 
      if(document.getElementById("r4_tier1.5").value==0){
        document.getElementById("serverr4_tier15").disabled=true;
        document.getElementById("r4_approve15").disabled=true;
      }else{
        document.getElementById("serverr4_tier15").disabled=false;
        document.getElementById("r4_approve15").disabled=false;
        loadDropSysname(dbStorage, "serverr4_tier15");
      } 
      if(document.getElementById("r4_tier2").value==0){
        document.getElementById("serverr4_tier2").disabled=true;
        document.getElementById("r4_approve2").disabled=true;
      }else{
        document.getElementById("serverr4_tier2").disabled=false;
        document.getElementById("r4_approve2").disabled=false;
        loadDropSysname(dbStorage, "serverr4_tier2");
      } 
      if(document.getElementById("r4_tier3").value==0){
        document.getElementById("serverr4_tier3").disabled=true;
        document.getElementById("r4_approve3").disabled=true;
      }else{
        document.getElementById("serverr4_tier3").disabled=false;
        document.getElementById("r4_approve3").disabled=false;
        loadDropSysname(dbStorage, "serverr4_tier3");
      }   
    break;
    case 'STORAGE_POWER':
      console.log("storagepOWER-4");
      document.getElementById("ASR4").style.display = 'none';
      loadDropSysname(dbStorage,dropRequest4);
      if(document.getElementById("r4_tier0").value==0){
        document.getElementById("serverr4_tier0").disabled=true;
        document.getElementById("r4_approve0").disabled=true;
        
      }else{
        document.getElementById("serverr4_tier0").disabled=false;
        document.getElementById("r4_approve0").disabled=false;
        loadDropSysname(dbStorage, "serverr4_tier0");
      } 
      if(document.getElementById("r4_tier1").value==0){
        document.getElementById("serverr4_tier1").disabled=true;
        document.getElementById("r4_approve1").disabled=true;
      }else{
        document.getElementById("serverr4_tier1").disabled=false;
        document.getElementById("r4_approve1").disabled=false;
        loadDropSysname(dbStorage, "serverr4_tier1");
      } 
      if(document.getElementById("r4_tier1.5").value==0){
        document.getElementById("serverr4_tier15").disabled=true;
        document.getElementById("r4_approve15").disabled=true;
      }else{
        document.getElementById("serverr4_tier15").disabled=false;
        document.getElementById("r4_approve15").disabled=false;
        loadDropSysname(dbStorage, "serverr4_tier15");
      } 
      if(document.getElementById("r4_tier2").value==0){
        document.getElementById("serverr4_tier2").disabled=true;
        document.getElementById("r4_approve2").disabled=true;
      }else{
        document.getElementById("serverr4_tier2").disabled=false;
        document.getElementById("r4_approve2").disabled=false;
        loadDropSysname(dbStorage, "serverr4_tier2");
      } 
      if(document.getElementById("r4_tier3").value==0){
        document.getElementById("serverr4_tier3").disabled=true;
        document.getElementById("r4_approve3").disabled=true;
      }else{
        document.getElementById("serverr4_tier3").disabled=false;
        document.getElementById("r4_approve3").disabled=false;
        loadDropSysname(dbStorage, "serverr4_tier3");
      }   
    break;
    case 'OPEN':
      console.log("open-4");
      loadDropSysname(dbOpen,dropRequest4);
    break;
    default:
      console.log("DIV NO EN USO");
    }
}

function loadDropSysname(db, select){
  setTimeout("console.log('Busqueda 1')", 4000);
  db.find({
      selector: {_id: {$gt:0}},
      }).then(function (result) {
          var i = 0;
          var len = result.docs.length;
      for (i = 0; i < len; i++) {
          var y = document.getElementById(select);
          var option = document.createElement("option");
          option.text = result.docs[i].sys_name;        
          y.add(option);
   }
  }).catch(function (err) {
      console.log("err"+err);
  });
}

//Hace muchas peticiones



function reserve_rfs(){

db = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/reserve_request');
  x=[];
  y=[];
  storage=[];
  power=[];
  open=[];
  iseries=[];
  solaris=[];
  request = 0;
  db.find({
    selector: {_id: {$gt:0}},
    sort: ['_id']
  }).then(function (result) {
    /////////////////////////////////////////////
    r = result["docs"]
    for (var i = 0; i < r.length; i++) {


      if ((r[i]["technology"]=="STORAGE_OPEN")||(r[i]["technology"]=="STORAGE_ISERIES")||(r[i]["technology"]=="STORAGE_POWER")) {
        ////////////////////////////////////STORAGE////////////////////////////////////
        storage.push(r[i])
      }
       if (r[i]["technology"]=="POWER") {
        ////////////////////////////////////POWER////////////////////////////////////
        power.push(r[i])
      }
       if (r[i]["technology"]=="OPEN") {
        ////////////////////////////////////OPEN////////////////////////////////////
        open.push(r[i])
      }
       if (r[i]["technology"]=="ISERIES") {
        ////////////////////////////////////ISERIES////////////////////////////////////
        iseries.push(r[i])
      }
      if (r[i]["technology"]=="SOLARIS") {
        ////////////////////////////////////SOLARIS////////////////////////////////////
        solaris.push(r[i])
      }
    }
      if (document.getElementById("storage").checked==true) {
        for (var k = 0; k < 20; k++) {
          var a = document.getElementById(String(k));
          a.innerText = " ";
          }
        for (var j = 0; j < storage.length; j++) {
       var a = document.getElementById(String(j));
       a.innerText = storage[j]["rfs"];
         }
      }
      if (document.getElementById("power").checked==true) {
        for (var k = 0; k < 20; k++) {
          var a = document.getElementById(String(k));
          a.innerText = " ";
          }
        for (var j = 0; j < power.length; j++) {
       var b = document.getElementById(String(j));
       b.innerText = power[j]["rfs"];
         }
         }
         if (document.getElementById("open").checked==true) {
           for (var k = 0; k < 20; k++) {
             var a = document.getElementById(String(k));
             a.innerText = " ";
             }
           for (var j = 0; j < open.length; j++) {
          var b = document.getElementById(String(j));
          b.innerText = open[j]["rfs"];
            }
          }
          if (document.getElementById("iseries").checked==true) {
            for (var k = 0; k < 20; k++) {
              var a = document.getElementById(String(k));
              a.innerText = " ";
              }
            for (var j = 0; j < iseries.length; j++) {
           var b = document.getElementById(String(j));
           b.innerText = iseries[j]["rfs"];
             }
             }
             if (document.getElementById("solari").checked==true) {
               for (var k = 0; k < 20; k++) {
                 var a = document.getElementById(String(k));
                 a.innerText = " ";
                 }
               for (var j = 0; j < solaris.length; j++) {
              var b = document.getElementById(String(j));
              b.innerText = solaris[j]["rfs"];
                }
                }


    /////////////////////////////////////////////
  });


}
function reserve_rfs2(_this){
this.rfsVar=_this.innerHTML;
  db = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/reserve_request');
  entidad = '';
  fecha_final='';
  fecha_firma = '';
  fecha_inicio = '';
  data_center='';
  roll = '';
  server_type = "";
  storage_tier0= "";
  storage_tier1= "";
  storage_tier2= "";
  storage_tier3= "";
  storage_tier15 = "";
  memory = "";
  vcpu ="";
  servert ="";
  servern="";
  user="";
  request = 0;
  db.find({
    selector: {_id: {$gt:0}},
    sort: ['_id']
  }).then(function (result) {
    /////////////////////////////////////////////
    r=result["docs"];
    for (var i = 0; i < r.length; i++) {
      if ((r[i]["rfs"]== _this.innerHTML)&&(r[i]["request"]=="REQUEST 1")) {
        request = request+1;
        document.getElementById("R2").hidden = true;
        document.getElementById("R3").hidden = true;
        document.getElementById("R4").hidden = true;
        document.getElementById("ASR2").hidden = true;
        document.getElementById("ASR3").hidden = true;
        document.getElementById("ASR4").hidden = true;
      }
      if ((r[i]["rfs"]== _this.innerHTML)&&(r[i]["request"]=="REQUEST 2")) {
        request = request+1;
        document.getElementById("R2").hidden = false;
        document.getElementById("R3").hidden = true;
        document.getElementById("R4").hidden = true;
        document.getElementById("ASR2").hidden = false;
        document.getElementById("ASR3").hidden = true;
        document.getElementById("ASR4").hidden = true;
      }
      if ((r[i]["rfs"]== _this.innerHTML)&&(r[i]["request"]=="REQUEST 3")) {
        request = request+1;
        document.getElementById("R3").hidden = false;
        document.getElementById("R4").hidden = true;
        document.getElementById("ASR3").hidden = false;
        document.getElementById("ASR4").hidden = true;


      }
      if ((r[i]["rfs"]== _this.innerHTML)&&(r[i]["request"]=="REQUEST 4")) {
        request = request+1;
        document.getElementById("R4").hidden = false;
        document.getElementById("ASR4").hidden = false;

      }




      if (r[i]["rfs"]== _this.innerHTML) {
        entidad = r[i]["entidad"];
        fecha_final = r[i]["fecha_final"];
        fecha_firma = r[i]["fecha_firma"];
        fecha_inicio = r[i]["fecha_inicio"];
        data_center  = r[i]["data_center"];
        roll = r[i]["roll"];
        server_type = r[i]["server_type"];
        storage_tier0 = r[i]["storage_tier0"];
        storage_tier1 = r[i]["storage_tier1"];
        storage_tier2  = r[i]["storage_tier2"];
        storage_tier3 = r[i]["storage_tier3"];
        storage_tier15 = r[i]["storage_tier15"];
        memory = r[i]["memory"];
        vcpu = r[i]["vcpu"];
        servert =r[i]["server_type"];
        servern=r[i]["server_name"];
        user=r[i]["user"];;

      }

    }
    alert("There are "+request + " different technologies requests in "+ _this.innerHTML);
    document.getElementById("input_rfs").value = _this.innerHTML;
    document.getElementById("entidad").value = entidad;
    document.getElementById("user").value = user;
    document.getElementById("Fecha_Final_Servicio").value = fecha_final;
    document.getElementById("Fecha_Firma_Servicio").value = fecha_firma;
    document.getElementById("Fecha_Inicio_Servicio").value = fecha_inicio;
    document.getElementById("data_center").value = data_center;
    document.getElementById("roll").value = roll;
    document.getElementById("tier0").value = storage_tier0;
    document.getElementById("tier1").value = storage_tier1;
    document.getElementById("tier2").value = storage_tier2;
    document.getElementById("tier3").value = storage_tier3;
    document.getElementById("tier1.5").value = storage_tier15;
    document.getElementById("vcpu").value = vcpu;
    document.getElementById("memory").value = memory;
    document.getElementById("server_type").value = servert;
    document.getElementById("server_name").value = servern;


    /////////////////////////////////////////////
  });



        ////////////////////////////////////////////////FILL REQUESTS/////////////////////////////////////////////////////////////////////////
        ///////////////REQUEST 1 /////////////////////////////

        /////////////////////////////////////////////////////////////////////////
        ///////////////REQUEST 2 /////////////////////////////
        db.find({
          selector: {_id: {$gt:0}},
          sort: ['_id']
        }).then(function (result) {
          /////////////////////////////////////////////
          r=result["docs"];
                  /////////////////////////////////////////////
        });



        db.find({
          selector: {_id: {$gt:0}},
          sort: ['_id']
        }).then(function (result) {
          /////////////////////////////////////////////
          r=result["docs"];
          console.log("debbuging");
          console.log(r);
                  /////////////////////////////////////////////

        ///////////////REQUEST 1 /////////////////////////////

        for (var i = 0; i < r.length; i++) {

         if ((r[i]["technology"]=="STORAGE_OPEN")&&(r[i]["rfs"]==_this.innerHTML)&&((r[i]["request"]=="REQUEST 1"))) {
           console.log("STORAGE_OPEN");
             document.getElementById("R1_STORAGE_OPEN").hidden=false;
             document.getElementById("body1").hidden=true;
             document.getElementById("body2").hidden=true;
             document.getElementById("tech_req_1_str_opn").value = "Storage Platform Open";
             document.getElementById("req_1_str_opn_crs").value =  r[i]["open_cores"];
             document.getElementById("server_type").value = r[i]["server_type"];
             document.getElementById("server_name").value =  r[i]["server_name"];
             break;

         }
         if ((r[i]["request"]=="REQUEST 1")&&((r[i]["rfs"]==_this.innerHTML))&&((r[i]["technology"]=="STORAGE_POWER")||(r[i]["technology"]=="STORAGE_ISERIES"))) {
           console.log("STORAGE_POWER,ISERIES");
           document.getElementById("R1_STORAGE_OPEN").hidden=true;
           document.getElementById("body1").hidden=false;
           document.getElementById("body2").hidden=true;
           document.getElementById("tech_req_1_str_opn").value = r[i]["technology"];
           document.getElementById("tier0").value = r[i]["storage_tier0"];
           document.getElementById("tier1").value = r[i]["storage_tier1"];
           document.getElementById("tier1.5").value = r[i]["storage_tier15"];
           document.getElementById("tier2").value = r[i]["storage_tier2"];
           document.getElementById("tier3").value = r[i]["storage_tier3"];
           document.getElementById("server_type").value = r[i]["server_type"];
           document.getElementById("server_name").value =  r[i]["server_name"];
           break;
         }
         if ((r[i]["request"]=="REQUEST 1")&&((r[i]["rfs"]==_this.innerHTML))&&((r[i]["technology"]=="POWER")||(r[i]["technology"]=="OPEN")||(r[i]["technology"]=="ISERIES"))) {
           document.getElementById("R1_STORAGE_OPEN").hidden=true;
           document.getElementById("body1").hidden=true;
           document.getElementById("body2").hidden=false;
           document.getElementById("tech_req_1_str_opn").value = r[i]["technology"];
           document.getElementById("vcpu").value = r[i]["vcpu"];
           document.getElementById("memory").value = r[i]["memory"];
           document.getElementById("server_type").value = r[i]["server_type"];
           document.getElementById("server_name").value =  r[i]["server_name"];
           break;
         }
       }

        /////////////////////////////////////////////////////////////////////////
        ///////////////REQUEST 2 /////////////////////////////

        /////////////////////////////////////////////////////////////////////////

              for (var i = 0; i < r.length; i++) {

                if ((r[i]["technology"]=="STORAGE_OPEN")&&(r[i]["rfs"]==_this.innerHTML)&&((r[i]["request"]=="REQUEST 2"))) {
                  console.log("STORAGE_OPEN");
                    document.getElementById("R2_STORAGE_OPEN").hidden=false;
                    document.getElementById("R2_STORAGE").hidden=true;
                    document.getElementById("R2_OTHERS").hidden=true;
                    document.getElementById("tech_req_2_str_opn").value = "Storage Platform Open";
                    document.getElementById("req_2_str_opn_crs").value =  r[i]["open_cores"];
                    document.getElementById("server_type2").value = r[i]["server_type"];
                    document.getElementById("server_name2").value =  r[i]["server_name"];
                    break;

                }
                if ((r[i]["request"]=="REQUEST 2")&&((r[i]["rfs"]==_this.innerHTML))&&((r[i]["technology"]=="STORAGE_POWER")||(r[i]["technology"]=="STORAGE_ISERIES"))) {
                  console.log("STORAGE_POWER,ISERIES");
                  document.getElementById("R2_STORAGE_OPEN").hidden=true;
                  document.getElementById("R2_STORAGE").hidden=false;
                  document.getElementById("R2_OTHERS").hidden=true;
                  document.getElementById("tech_req_2_str").value = r[i]["technology"];
                  document.getElementById("r2_tier0").value = r[i]["storage_tier0"];
                  document.getElementById("r2_tier1").value = r[i]["storage_tier1"];
                  document.getElementById("r2_tier1.5").value = r[i]["storage_tier15"];
                  document.getElementById("r2_tier2").value = r[i]["storage_tier2"];
                  document.getElementById("r2_tier3").value = r[i]["storage_tier3"];
                  document.getElementById("server_type2").value = r[i]["server_type"];
                  document.getElementById("server_name2").value =  r[i]["server_name"];
                  break;
                }
                if ((r[i]["request"]=="REQUEST 2")&&((r[i]["rfs"]==_this.innerHTML))&&((r[i]["technology"]=="POWER")||(r[i]["technology"]=="OPEN")||(r[i]["technology"]=="ISERIES"))){
                  console.log("OTHERS");
                  document.getElementById("R2_STORAGE_OPEN").hidden=true;
                  document.getElementById("R2_STORAGE").hidden=true;
                  document.getElementById("R2_OTHERS").hidden=false;
                  document.getElementById("tech_req_2_oth").value = r[i]["technology"];
                  document.getElementById("r2_vcpu").value = r[i]["vcpu"];
                  document.getElementById("r2_memory").value = r[i]["memory"];
                  document.getElementById("server_type2").value = r[i]["server_type"];
                  document.getElementById("server_name2").value =  r[i]["server_name"];
                  break;
                }
              }



        /////////////////////////////////////////////////////////////////////////
        ///////////////REQUEST 3 /////////////////////////////
        for (var i = 0; i < r.length; i++) {

           if ((r[i]["technology"]=="STORAGE_OPEN")&&(r[i]["rfs"]==_this.innerHTML)&&((r[i]["request"]=="REQUEST 3"))) {
             console.log("STORAGE_OPEN");
               document.getElementById("R3_STORAGE_OPEN").hidden=false;
               document.getElementById("R3_STORAGE").hidden=true;
               document.getElementById("R3_OTHERS").hidden=true;
               document.getElementById("tech_req_3_str_opn").value = "Storage Platform Open";
               document.getElementById("req_3_str_opn_crs").value =  r[i]["open_cores"];
               document.getElementById("server_type3").value = r[i]["server_type"];
               document.getElementById("server_name3").value =  r[i]["server_name"];
               break;

           }
           if ((r[i]["request"]=="REQUEST 3")&&((r[i]["rfs"]==_this.innerHTML))&&((r[i]["technology"]=="STORAGE_POWER")||(r[i]["technology"]=="STORAGE_ISERIES"))) {
             console.log("STORAGE_POWER,ISERIES");
             document.getElementById("R3_STORAGE_OPEN").hidden=true;
             document.getElementById("R3_STORAGE").hidden=false;
             document.getElementById("R3_OTHERS").hidden=true;
             document.getElementById("tech_req_3_str").value = r[i]["technology"];
             document.getElementById("r3_tier0").value = r[i]["storage_tier0"];
             document.getElementById("r3_tier1").value = r[i]["storage_tier1"];
             document.getElementById("r3_tier1.5").value = r[i]["storage_tier15"];
             document.getElementById("r3_tier2").value = r[i]["storage_tier2"];
             document.getElementById("r3_tier3").value = r[i]["storage_tier3"];
             document.getElementById("server_type3").value = r[i]["server_type"];
             document.getElementById("server_name3").value =  r[i]["server_name"];
             break;
           }
           if ((r[i]["request"]=="REQUEST 3")&&((r[i]["rfs"]==_this.innerHTML))&&((r[i]["technology"]=="POWER")||(r[i]["technology"]=="OPEN")||(r[i]["technology"]=="ISERIES"))) {
             console.log("OTHERS");
             document.getElementById("R3_STORAGE_OPEN").hidden=true;
             document.getElementById("R3_STORAGE").hidden=true;
             document.getElementById("R3_OTHERS").hidden=false;
             document.getElementById("tech_req_3_oth").value = r[i]["technology"];
             document.getElementById("r3_vcpu").value = r[i]["vcpu"];
             document.getElementById("r3_memory").value = r[i]["memory"];
             document.getElementById("server_type3").value = r[i]["server_type"];
             document.getElementById("server_name3").value =  r[i]["server_name"];
             break;
           }
         }
        /////////////////////////////////////////////////////////////////////////
        ///////////////REQUEST 4 /////////////////////////////
        for (var i = 0; i < r.length; i++) {

         if ((r[i]["technology"]=="STORAGE_OPEN")&&(r[i]["rfs"]==_this.innerHTML)&&((r[i]["request"]=="REQUEST 4"))) {
           console.log("STORAGE_OPEN");
             document.getElementById("R4_STORAGE_OPEN").hidden=false;
             document.getElementById("R4_STORAGE").hidden=true;
             document.getElementById("R4_OTHERS").hidden=true;
             document.getElementById("tech_req_4_str_opn").value = "Storage Platform Open";
             document.getElementById("req_4_str_opn_crs").value =  r[i]["open_cores"];
             document.getElementById("server_type4").value = r[i]["server_type"];
             document.getElementById("server_name4").value =  r[i]["server_name"];
             break;

         }
         if ((r[i]["request"]=="REQUEST 4")&&((r[i]["rfs"]==_this.innerHTML))&&((r[i]["technology"]=="STORAGE_POWER")||(r[i]["technology"]=="STORAGE_ISERIES"))) {
           console.log("STORAGE_POWER,ISERIES");
           document.getElementById("R4_STORAGE_OPEN").hidden=true;
           document.getElementById("R4_STORAGE").hidden=false;
           document.getElementById("R4_OTHERS").hidden=true;
           document.getElementById("tech_req_4_str").value = r[i]["technology"];
           document.getElementById("r4_tier0").value = r[i]["storage_tier0"];
           document.getElementById("r4_tier1").value = r[i]["storage_tier1"];
           document.getElementById("r4_tier1.5").value = r[i]["storage_tier15"];
           document.getElementById("r4_tier2").value = r[i]["storage_tier2"];
           document.getElementById("r4_tier3").value = r[i]["storage_tier3"];
           document.getElementById("server_type4").value = r[i]["server_type"];
           document.getElementById("server_name4").value =  r[i]["server_name"];
           break;
         }
         if ((r[i]["request"]=="REQUEST 4")&&((r[i]["rfs"]==_this.innerHTML))&&((r[i]["technology"]=="POWER")||(r[i]["technology"]=="OPEN")||(r[i]["technology"]=="ISERIES"))) {
           console.log("OTHERS");
           document.getElementById("R4_STORAGE_OPEN").hidden=true;
           document.getElementById("R4_STORAGE").hidden=true;
           document.getElementById("R4_OTHERS").hidden=false;
           document.getElementById("tech_req_4_oth").value = r[i]["technology"];
           document.getElementById("r4_vcpu").value = r[i]["vcpu"];
           document.getElementById("r4_memory").value = r[i]["memory"];
           document.getElementById("server_type4").value = r[i]["server_type"];
           document.getElementById("server_name4").value =  r[i]["server_name"];
           break;
         }
       }

        /////////////////////////////////////////////////////////////////////////

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        getSysname();
        
  });
}
function my_reserves(){
  var user2 = window.onload = localStorage.getItem("user_log");
  // alert("Welcome to your reserves, "+user2);
  db = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/reserves_status');
  db2 = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/reserve_request');
  db.find({
    selector: {_id: {$gt:0}},
    sort: ['_id']
  }).then(function (result) {
    /////////////////////////////////////////////
    r=result["docs"];
      for (var i = 0; i < r.length; i++) {
        if (r[i]["user"]==user2) {
          var a = document.getElementById(String(i));
          a.innerText = r[i]["rfs"];
        }
      }
        });
        db2.find({
          selector: {_id: {$gt:0}},
          sort: ['_id']
        }).then(function (result) {
          /////////////////////////////////////////////
          r=result["docs"];
            for (var i = 0; i < r.length; i++) {
              if (r[i]["user"]==user2) {
                var a = document.getElementById(String(i));
                a.innerText = r[i]["rfs"];
              }
            }
              });
      }
function my_reserves2(_this){
rfs =  _this.innerHTML;
var user2 = window.onload = localStorage.getItem("user_log");
db = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/reserves_status');
db2 = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/reserve_request');
db2.find({
  selector: {_id: {$gt:0}},
  sort: ['_id']
}).then(function (result) {
  /////////////////////////////////////////////
  r=result["docs"];
    for (var i = 0; i < r.length; i++) {
      if (r[i]["rfs"]==rfs) {
      if (r[i]["user"]==user2) {
        document.getElementById("reserves_body").hidden=false;
        document.getElementById("reserves_body2").hidden=true;
        document.getElementById("more_info").hidden=false;
        document.getElementById("reserve_rfs").value = rfs;
        document.getElementById("reserve_status").value = "PENDING";

      }
    }
  }
      });
db.find({
  selector: {_id: {$gt:0}},
  sort: ['_id']
}).then(function (result) {
  /////////////////////////////////////////////
  r=result["docs"];
    for (var i = 0; i < r.length; i++) {
      if (r[i]["rfs"]==rfs) {
         (_this.innerHTML);

      if (r[i]["status"]=="accepted") {
         ("accepted",i);
        document.getElementById("reserves_body").hidden=false;
        document.getElementById("reserves_body2").hidden=true;
        document.getElementById("more_info").hidden=false;
        document.getElementById("reserve_rfs").value = rfs;
        document.getElementById("reserve_status").value = r[i]["status"];
      }
      else if (r[i]["status"]=="declined") {
        document.getElementById("reserves_body").hidden=false;
        document.getElementById("reserves_body2").hidden=false;
        document.getElementById("more_info").hidden=false;
        document.getElementById("reserve_rfs").value = rfs;
        document.getElementById("reserve_status").value = r[i]["status"];
        document.getElementById("reserve_reason").value = r[i]["reason"];

      }
      }
    }

      });



}
function show_platform(){
  if ((document.getElementById("storage").checked==true)){
    document.getElementById("platform").hidden=false;
  if (document.getElementById("platform_open").checked==true) {
    document.getElementById("slis_open_request_1").hidden = false;
    document.getElementById("slis2").hidden = true;
  }
  if ( (document.getElementById("platform_iseries").checked==true) || (document.getElementById("platform_other").checked==true) ) {
    document.getElementById("slis_open_request_1").hidden = true;
    document.getElementById("slis2").hidden = false;
  }
  }

  if (document.getElementById("platform_open").checked==true) {
    document.getElementById("storage_servers_iseries").hidden=true;
    document.getElementById("storage_servers_open").hidden=false;
    document.getElementById("storage_servers_power").hidden=true;
  }
  if (document.getElementById("platform_iseries").checked==true) {
    document.getElementById("storage_servers_iseries").hidden=false;
    document.getElementById("storage_servers_open").hidden=true;
    document.getElementById("storage_servers_power").hidden=true;
  }
  if (document.getElementById("platform_other").checked==true) {
    document.getElementById("storage_servers_iseries").hidden=true;
    document.getElementById("storage_servers_open").hidden=true;
    document.getElementById("storage_servers_power").hidden=false;
  }

db = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/storage_platforms');
var st_platforms_gdl_open = [];
var st_platforms_gdl_iseries_t0 = [];
var st_platforms_gdl_iseries_t1 = [];
var st_platforms_gdl_iseries_t15 = [];
var st_platforms_gdl_iseries_t2= [];
var st_platforms_gdl_iseries_t3 = [];
var st_platforms_gdl_power_t0 = [];
var st_platforms_gdl_power_t1 = [];
var st_platforms_gdl_power_t15 = [];
var st_platforms_gdl_power_t2 = [];
var st_platforms_gdl_power_t3 = [];
var st_platforms_qro_open = [];
var st_platforms_qro_iseries_t0 = [];
var st_platforms_qro_iseries_t1 = [];
var st_platforms_qro_iseries_t15 = [];
var st_platforms_qro_iseries_t2 = [];
var st_platforms_qro_iseries_t3 = [];
var st_platforms_qro_power_t0 = [];
var st_platforms_qro_power_t1 = [];
var st_platforms_qro_power_t15 = [];
var st_platforms_qro_power_t2 = [];
var st_platforms_qro_power_t3 = [];


db.find({
  selector: {_id: {$gt:0}},
  sort: ['_id']
}).then(function (result) {
  /////////////////////////////////////////////
  r=result["docs"];
  // document.getElementById("input_rfs").value = _this.innerHTML;
  console.log(r);
  for (var i = 0; i < r.length; i++) {
    tot_cores="tot_cores"
    if ((r[i]["sys_name"]=="all")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="Open")) {
      st_platforms_gdl_open.push(r[i]["tot_cores"])
    }
    if ((r[i]["sys_name"]=="T0 total")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="iSeries")) {
      st_platforms_gdl_iseries_t0 = r[i][tot_cores];
    }
    if ((r[i]["sys_name"]=="T1 total")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="iSeries")) {
      st_platforms_gdl_iseries_t1 = r[i][tot_cores];
    }
    if ((r[i]["sys_name"]=="T1.5 total")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="iSeries")) {
      st_platforms_gdl_iseries_t15 = r[i][tot_cores];
    }
    if((r[i]["sys_name"]=="T2 total")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="iSeries")) {
      st_platforms_gdl_iseries_t2 = r[i][tot_cores];
    }
    if ((r[i]["sys_name"]=="T3 total")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="iSeries")) {
      st_platforms_gdl_iseries_t3 = r[i][tot_cores];
    }
    /////////////////
    if ((r[i]["sys_name"]=="T0 total")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="Other")) {
      st_platforms_gdl_power_t0 = r[i][tot_cores];
    }
    if ((r[i]["sys_name"]=="T1 total")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="Other")) {
      st_platforms_gdl_power_t1 = r[i][tot_cores];
    }
    if ((r[i]["sys_name"]=="T1.5 total")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="Other")) {
      st_platforms_gdl_power_t15 = r[i][tot_cores];
    }
    if((r[i]["sys_name"]=="T2 total")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="Other")) {
      st_platforms_gdl_power_t2 = r[i][tot_cores];
    }
    if ((r[i]["sys_name"]=="T3 total")&&(r[i]["dc"]=="GDL")&&(r[i]["Platform"]=="Other")) {
      st_platforms_gdl_power_t3 = r[i][tot_cores];
    }
    if ((r[i]["sys_name"]=="T0 total")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="Other")) {
      st_platforms_qro_power_t0 = r[i][tot_cores];
    }
    if ((r[i]["sys_name"]=="T1 total")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="Other")) {
      st_platforms_qro_power_t1 = r[i][tot_cores];
    }
    if ((r[i]["sys_name"]=="T1.5 total")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="Other")) {
      st_platforms_qro_power_t15 = r[i][tot_cores];
    }
    if ((r[i]["sys_name"]=="T2 total")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="Other")) {
      st_platforms_qro_power_t2 = r[i][tot_cores];
    }
    if ((r[i]["sys_name"]=="T3 total")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="Other")) {
      st_platforms_qro_power_t3 = r[i][tot_cores];
    }

    if ((r[i]["sys_name"]=="all")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="Open")) {
      st_platforms_qro_open.push(r[i]["tot_cores"])
    }
    ///////////////
    if ((r[i]["sys_name"]=="T0 total")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="iSeries")) {
      st_platforms_qro_iseries_t0 = r[i][tot_cores];
    }
    if ((r[i]["sys_name"]=="T1 total")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="iSeries")) {
      st_platforms_qro_iseries_t1 = r[i][tot_cores];
    }
    if ((r[i]["sys_name"]=="T1.5 total")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="iSeries")) {
      st_platforms_qro_iseries_t15 = r[i][tot_cores];
    }
    if((r[i]["sys_name"]=="T2 total")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="iSeries")) {
      st_platforms_qro_iseries_t2 = r[i][tot_cores];
    }
    if ((r[i]["sys_name"]=="T3 total")&&(r[i]["dc"]=="QRO")&&(r[i]["Platform"]=="iSeries")) {
      st_platforms_qro_iseries_t3 = r[i][tot_cores];
    }

  }
  ///////////////////////////////////////////////
  document.getElementById("vcpu").value = 0;
  document.getElementById("demo").innerHTML= 0;


  document.getElementById("tier111").value = 0;
  document.getElementById("demo2").innerHTML= 0;

  document.getElementById("tier151").value = 0;
  document.getElementById("demo3").innerHTML= 0;

  document.getElementById("tier222").value = 0;
  document.getElementById("demo4").innerHTML= 0;

  document.getElementById("tier333").value = 0;
  document.getElementById("demo5").innerHTML= 0;



  document.getElementById("tier00").checked = true;
  if (document.getElementById("tier00").checked == true) {
    document.getElementById("tier0").hidden = false;
  }
  else if (document.getElementById("tier00").checked == false) {
    document.getElementById("tier0").hidden = true;
  }
  document.getElementById("tier11").checked = true;
  if (document.getElementById("tier11").checked == true) {
    document.getElementById("tier1").hidden = false;
  }
  else if (document.getElementById("tier11").checked == false) {
    document.getElementById("tier1").hidden = true;
  }
  document.getElementById("tier15").checked = true;
  if (document.getElementById("tier15").checked == true) {
    document.getElementById("tier1.5").hidden = false;
  }
  else if (document.getElementById("tier15").checked == false) {
    document.getElementById("tier1.5").hidden = true;
  }
  document.getElementById("tier22").checked = true;
  if (document.getElementById("tier22").checked == true) {
    document.getElementById("tier2").hidden = false;
  }
  else if (document.getElementById("tier22").checked == false) {
    document.getElementById("tier2").hidden = true;
  }
  document.getElementById("tier33").checked = true;
  if (document.getElementById("tier33").checked == true) {
    document.getElementById("tier3").hidden = false;
  }
  else if (document.getElementById("tier33").checked == false) {
    document.getElementById("tier3").hidden = true;
  }


  if (document.getElementById("Guadalajara").checked==true) {
    document.getElementById("count_open_cores").innerHTML = st_platforms_gdl_open[0] ;
    console.log(st_platforms_gdl_open[0]);
    if (document.getElementById("platform_other").checked==true) {
      document.getElementById("vcpu").max = st_platforms_gdl_power_t0;
      document.getElementById("tier111").max = st_platforms_gdl_power_t1;
      document.getElementById("tier151").max = st_platforms_gdl_power_t15;
      document.getElementById("tier222").max = st_platforms_gdl_power_t2;
      document.getElementById("tier333").max = st_platforms_gdl_power_t3;
    }
    if (document.getElementById("platform_iseries").checked==true) {
      document.getElementById("vcpu").max = st_platforms_gdl_iseries_t0;
      document.getElementById("tier111").max = st_platforms_gdl_iseries_t1;
      document.getElementById("tier151").max = st_platforms_gdl_iseries_t15;
      document.getElementById("tier222").max  = st_platforms_gdl_iseries_t2;
      document.getElementById("tier333").max= st_platforms_gdl_iseries_t3;
    }


  }
  if (document.getElementById("Queretaro").checked==true) {
    document.getElementById("count_open_cores").innerHTML = st_platforms_qro_open[0];
    if (document.getElementById("platform_other").checked==true) {
      document.getElementById("vcpu").max = st_platforms_qro_power_t0;
      document.getElementById("tier111").max = st_platforms_qro_power_t1;
      document.getElementById("tier151").max = st_platforms_qro_power_t15;
      document.getElementById("tier222").max  = st_platforms_qro_power_t2;
      document.getElementById("tier333").max= st_platforms_qro_power_t3;
    }
    if (document.getElementById("platform_iseries").checked==true) {
      document.getElementById("vcpu").max = st_platforms_qro_iseries_t0;
      document.getElementById("tier111").max = st_platforms_qro_iseries_t1;
      document.getElementById("tier151").max = st_platforms_qro_iseries_t15;
      document.getElementById("tier222").max  = st_platforms_qro_iseries_t2;
      document.getElementById("tier333").max = st_platforms_qro_iseries_t3;
    }
}

  /////////////////////////////////////////////
});

  }
function physicals(){
//OPEN
db1 = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/open_qro_gen_t1');
//POWER
db2 = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/power_gen');
//ISERIES
db3 = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/iseries_gen');
//STORAGE
db4 = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/storage_conc');

    if (document.getElementById("platform_open").checked==true) {
      server = document.getElementById("myInput5").value;
      console.log(server);

    }
    if (document.getElementById("platform_iseries").checked==true) {
      server = document.getElementById("myInput4").value;
      console.log(server);
    }
    if (document.getElementById("platform_other").checked==true) {
      server = document.getElementById("myInput6").value;
      console.log(server);
    }
    if (document.getElementById("power").checked==true) {
      server = document.getElementById("myInput2").value;
      console.log(server);
      db2.find({
        selector: {_id: {$gt:0}},
        sort: ['_id']
      }).then(function (result) {
        r=result["docs"];
        console.log(r);
        for (var i = 0; i < r.length; i++) {
          if (r[i]["name"]==server) {
            mem = r[i]["av_vmem"];
            cpu = r[i]["av_vcpu"];
            document.getElementById("count_vcpu").innerHTML=String(cpu);
            document.getElementById("count_memory").innerHTML=String(mem);
          }
        }
      });
    }
    if (document.getElementById("open").checked==true) {
      server = document.getElementById("myInput").value;
      console.log(server);
      db1.find({
        selector: {_id: {$gt:0}},
        sort: ['_id']
      }).then(function (result) {
        r=result["docs"];
        console.log(r);
        for (var i = 0; i < r.length; i++) {
          if (r[i]["name"]==server) {
            mem = r[i]["av_vmem"];
            cpu = r[i]["av_vcpu"];
            document.getElementById("count_vcpu").innerHTML=String(cpu);
            document.getElementById("count_memory").innerHTML=String(mem);
          }
        }
      });
    }
    if (document.getElementById("iseries").checked==true) {
      server = document.getElementById("myInput3").value;
      console.log(server);
      db3.find({
        selector: {_id: {$gt:0}},
        sort: ['_id']
      }).then(function (result) {
        r=result["docs"];
        console.log(r);
        for (var i = 0; i < r.length; i++) {
          if (r[i]["name"]==server) {
            mem = r[i]["av_vmem"];
            cpu = r[i]["av_vcpu"];
            document.getElementById("count_vcpu").innerHTML=String(cpu);
            document.getElementById("count_memory").innerHTML=String(mem);
          }
        }
      });
  }

}
function physicals2(){
  //OPEN
  db1 = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/open_qro_gen_t1');
  //POWER
  db2 = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/power_gen');
  //ISERIES
  db3 = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/iseries_gen');
  //STORAGE
  db4 = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/storage_conc');

      if (document.getElementById("platform_open2").checked==true) {
        server = document.getElementById("myInput5_storage_open_request2").value;
        console.log(server);

      }
      if (document.getElementById("platform_iseries2").checked==true) {
        server = document.getElementById("myInput4_storage_iseries_request2").value;
        console.log(server);
      }
      if (document.getElementById("platform_other2").checked==true) {
        server = document.getElementById("myInput6_storage_power_request2").value;
        console.log(server);
      }
      if (document.getElementById("power2").checked==true) {
        server = document.getElementById("myInput2_power_request2").value;
        console.log(server);
        db2.find({
          selector: {_id: {$gt:0}},
          sort: ['_id']
        }).then(function (result) {
          r=result["docs"];
          console.log(r);
          for (var i = 0; i < r.length; i++) {
            if (r[i]["name"]==server) {
              mem = r[i]["av_vmem"];
              cpu = r[i]["av_vcpu"];
              document.getElementById("count__vcpu").innerHTML=String(cpu);
              document.getElementById("count__memory").innerHTML=String(mem);
            }
          }
        });
      }
      if (document.getElementById("open2").checked==true) {
        server = document.getElementById("myInput_open_request2").value;
        console.log(server);
        db1.find({
          selector: {_id: {$gt:0}},
          sort: ['_id']
        }).then(function (result) {
          r=result["docs"];
          console.log(r);
          for (var i = 0; i < r.length; i++) {
            if (r[i]["name"]==server) {
              mem = r[i]["av_vmem"];
              cpu = r[i]["av_vcpu"];
              document.getElementById("count__vcpu").innerHTML=String(cpu);
              document.getElementById("count__memory").innerHTML=String(mem);
            }
          }
        });
      }
      if (document.getElementById("iseries2").checked==true) {
        server = document.getElementById("myInput3_iseries_request2").value;
        console.log(server);
        db3.find({
          selector: {_id: {$gt:0}},
          sort: ['_id']
        }).then(function (result) {
          r=result["docs"];
          console.log(r);
          for (var i = 0; i < r.length; i++) {
            if (r[i]["name"]==server) {
              mem = r[i]["av_vmem"];
              cpu = r[i]["av_vcpu"];
              document.getElementById("count__vcpu").innerHTML=String(cpu);
              document.getElementById("count__memory").innerHTML=String(mem);
            }
          }
        });
    }
}
function physicals3(){
  //OPEN
  db1 = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/open_qro_gen_t1');
  //POWER
  db2 = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/power_gen');
  //ISERIES
  db3 = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/iseries_gen');
  //STORAGE
  db4 = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/storage_conc');

      if (document.getElementById("platform_open3").checked==true) {
        server = document.getElementById("myInput5_storage_open_request3").value;
        console.log(server);

      }
      if (document.getElementById("platform_iseries3").checked==true) {
        server = document.getElementById("myInput4_storage_iseries_request3").value;
        console.log(server);
      }
      if (document.getElementById("platform_other3").checked==true) {
        server = document.getElementById("myInput6_storage_power_request3").value;
        console.log(server);
      }
      if (document.getElementById("power3").checked==true) {
        server = document.getElementById("myInput2_power_request3").value;
        console.log(server);
        db2.find({
          selector: {_id: {$gt:0}},
          sort: ['_id']
        }).then(function (result) {
          r=result["docs"];
          console.log(r);
          for (var i = 0; i < r.length; i++) {
            if (r[i]["name"]==server) {
              mem = r[i]["av_vmem"];
              cpu = r[i]["av_vcpu"];
              document.getElementById("count___vcpu").innerHTML=String(cpu);
              document.getElementById("count___memory").innerHTML=String(mem);
            }
          }
        });
      }
      if (document.getElementById("open3").checked==true) {
        server = document.getElementById("myInput_open_request3").value;
        console.log(server);
        db1.find({
          selector: {_id: {$gt:0}},
          sort: ['_id']
        }).then(function (result) {
          r=result["docs"];
          console.log(r);
          for (var i = 0; i < r.length; i++) {
            if (r[i]["name"]==server) {
              mem = r[i]["av_vmem"];
              cpu = r[i]["av_vcpu"];
              document.getElementById("count___vcpu").innerHTML=String(cpu);
              document.getElementById("count___memory").innerHTML=String(mem);
            }
          }
        });
      }
      if (document.getElementById("iseries3").checked==true) {
        server = document.getElementById("myInput3_iseries_request3").value;
        console.log(server);
        db3.find({
          selector: {_id: {$gt:0}},
          sort: ['_id']
        }).then(function (result) {
          r=result["docs"];
          console.log(r);
          for (var i = 0; i < r.length; i++) {
            if (r[i]["name"]==server) {
              mem = r[i]["av_vmem"];
              cpu = r[i]["av_vcpu"];
              document.getElementById("count___vcpu").innerHTML=String(cpu);
              document.getElementById("count___memory").innerHTML=String(mem);
            }
          }
        });
    }
}
function physicals4(){
  //OPEN
  db1 = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/open_qro_gen_t1');
  //POWER
  db2 = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/power_gen');
  //ISERIES
  db3 = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/iseries_gen');
  //STORAGE
  db4 = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/storage_conc');

      if (document.getElementById("platform_open4").checked==true) {
        server = document.getElementById("myInput5_storage_open_request4").value;
        console.log(server);

      }
      if (document.getElementById("platform_iseries4").checked==true) {
        server = document.getElementById("myInput4_storage_iseries_request4").value;
        console.log(server);
      }
      if (document.getElementById("platform_other4").checked==true) {
        server = document.getElementById("myInput6_storage_power_request4").value;
        console.log(server);
      }
      if (document.getElementById("power4").checked==true) {
        server = document.getElementById("myInput2_power_request4").value;
        console.log(server);
        db2.find({
          selector: {_id: {$gt:0}},
          sort: ['_id']
        }).then(function (result) {
          r=result["docs"];
          console.log(r);
          for (var i = 0; i < r.length; i++) {
            if (r[i]["name"]==server) {
              mem = r[i]["av_vmem"];
              cpu = r[i]["av_vcpu"];
              document.getElementById("count_____vcpu").innerHTML=String(cpu);
              document.getElementById("count____memory").innerHTML=String(mem);
            }
          }
        });
      }
      if (document.getElementById("open4").checked==true) {
        server = document.getElementById("myInput_open_request4").value;
        console.log(server);
        db1.find({
          selector: {_id: {$gt:0}},
          sort: ['_id']
        }).then(function (result) {
          r=result["docs"];
          console.log(r);
          for (var i = 0; i < r.length; i++) {
            if (r[i]["name"]==server) {
              mem = r[i]["av_vmem"];
              cpu = r[i]["av_vcpu"];
              document.getElementById("count_____vcpu").innerHTML=String(cpu);
              document.getElementById("count____memory").innerHTML=String(mem);
            }
          }
        });
      }
      if (document.getElementById("iseries4").checked==true) {
        server = document.getElementById("myInput3_iseries_request4").value;
        console.log(server);
        db3.find({
          selector: {_id: {$gt:0}},
          sort: ['_id']
        }).then(function (result) {
          r=result["docs"];
          console.log(r);
          for (var i = 0; i < r.length; i++) {
            if (r[i]["name"]==server) {
              mem = r[i]["av_vmem"];
              cpu = r[i]["av_vcpu"];
              document.getElementById("count_____vcpu").innerHTML=String(cpu);
              document.getElementById("count____memory").innerHTML=String(mem);
            }
          }
        });
    }
}
function reserve_spaces(){
  //OPEN
  db1 = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/open_qro_gen_t1');
  //POWER
  db2 = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/power_gen');
  //ISERIES
  db3 = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/iseries_gen');
  //STORAGE
  db4 = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/storage_conc');

  var array=[];
  var array2 = [];
  if (document.getElementById("storage_servers").hidden==false) {

  }
  if (document.getElementById("power_servers").hidden==false) {

  }
  if (document.getElementById("iseries_servers").hidden==false) {

  }
  if (document.getElementById("open_servers").hidden==false) {

    db1.find({
      selector: {_id: {$gt:0}},
      sort: ['_id']
    }).then(function (result) {
      r=result["docs"];
        for (var j = 0; j < r.length; j++) {
          var a = document.getElementById(String(j+100));
          console.log(r[j]["sys_name"]);
          array.push(r[j]["sys_name"]);
          for (var i = 0; i < array.length; i++) {
            if (r[j]["sys_name"]!=array[i]) {
              array2.push(r[j]["sys_name"]);
            }
            else {
              break;
            }
          }
          // a.innerText = r[j]["sys_name"];

      }
      console.log("lucky: ",array2);
    });

  }
  }
function reserve_spaces2(){

  if (document.getElementById("storage_servers").hidden==false) {

  }
  if (document.getElementById("power_servers").hidden==false) {

  }
  if (document.getElementById("iseries_servers").hidden==false) {

  }
  if (document.getElementById("open_servers").hidden==false) {
    server = document.getElementById("open_servers").value;
    console.log(server);
  if (r[j]["sys_name"]==server) {
    mem = r[j]["av_vmem"];
    cpu = r[j]["av_vcpu"];
    console.log(mem,cpu);
    document.getElementById("count_vcpu").innerHTML=String(cpu);
    document.getElementById("count_memory").innerHTML=String(mem);
  }
}
}
function add_tech_reserve(){
  console.log("add_tech_reserve()");
  count += 1;
  count2 += 1;
  console.log(count);
  let name = "add_tech_";
  let name2=(name+count.toString());
  let name3=("server"+count2.toString())
  document.getElementById(name2).hidden=false;
  document.getElementById(name3).hidden=false;
  if (count==4) {
    document.getElementById("add_tech").hidden=true;
  }

}
function change(){
 var slider2 = document.getElementById("vcpu0");
  var output2 = document.getElementById("demo0");
  output2.innerHTML = slider2.value;
  slider2.oninput = function() {
  output2.innerHTML = this.value;
  }

  var slider3 = document.getElementById("tier_1111");
  var output3 = document.getElementById("demo02");
  output3.innerHTML = slider3.value;
  slider3.oninput = function() {
  output3.innerHTML = this.value;
  }

  var slider4 = document.getElementById("tier_151");
  var output4 = document.getElementById("demo_3");
  output4.innerHTML = slider4.value;
  slider4.oninput = function() {
  output4.innerHTML = this.value;
  }


  var slider5 = document.getElementById("tier_222");
  var output5 = document.getElementById("demo_4");
  output5.innerHTML = slider5.value;
  slider5.oninput = function() {
  output5.innerHTML = this.value;
  }

  var slider6 = document.getElementById("tier_333");
  var output6 = document.getElementById("demo_5");
  output6.innerHTML = slider6.value;
  slider6.oninput = function() {
  output6.innerHTML = this.value;
}

var slider7 = document.getElementById("vcpu__");
var output7 = document.getElementById("demo__");
output7.innerHTML = slider7.value;
slider7.oninput = function() {
output7.innerHTML = this.value;
}


var slider8 = document.getElementById("tier__111");
var output8 = document.getElementById("demo__2");
output8.innerHTML = slider8.value;
slider8.oninput = function() {
output8.innerHTML = this.value;
}

var slider9 = document.getElementById("tier__151");
var output9 = document.getElementById("demo__3");
output9.innerHTML = slider9.value;
slider9.oninput = function() {
output9.innerHTML = this.value;
}

var slider10 = document.getElementById("tier__222");
var output10 = document.getElementById("demo__4");
output10.innerHTML = slider10.value;
slider10.oninput = function() {
output10.innerHTML = this.value;
}

var slider11 = document.getElementById("tier__333");
var output11 = document.getElementById("demo__5");
output11.innerHTML = slider11.value;
slider11.oninput = function() {
output11.innerHTML = this.value;
}
var slider12 = document.getElementById("vcpu___");
var output12 = document.getElementById("demo___");
output12.innerHTML = slider12.value;
slider12.oninput = function() {
output12.innerHTML = this.value;
}

var slider13 = document.getElementById("tier___111");
var output13 = document.getElementById("demo___2");
output13.innerHTML = slider13.value;
slider13.oninput = function() {
output13.innerHTML = this.value;
}

var slider14 = document.getElementById("tier___151");
var output14 = document.getElementById("demo___3");
output14.innerHTML = slider14.value;
slider14.oninput = function() {
output14.innerHTML = this.value;
}

var slider15 = document.getElementById("tier___222");
var output15 = document.getElementById("demo___4");
output15.innerHTML = slider15.value;
slider15.oninput = function() {
output15.innerHTML = this.value;
}

var slider16 = document.getElementById("tier___333");
var output16 = document.getElementById("demo___5");
output16.innerHTML = slider16.value;
slider16.oninput = function() {
output16.innerHTML = this.value;
}
}
function reset_str_gdl_qro(){
  document.getElementById("vcpu").value = 0;
  document.getElementById("demo").innerHTML= 0;


  document.getElementById("tier111").value = 0;
  document.getElementById("demo2").innerHTML= 0;

  document.getElementById("tier151").value = 0;
  document.getElementById("demo3").innerHTML= 0;

  document.getElementById("tier222").value = 0;
  document.getElementById("demo4").innerHTML= 0;

  document.getElementById("tier333").value = 0;
  document.getElementById("demo5").innerHTML= 0;



  document.getElementById("tier00").checked = true;
  if (document.getElementById("tier00").checked == true) {
    document.getElementById("tier0").hidden = false;
  }
  else if (document.getElementById("tier00").checked == false) {
    document.getElementById("tier0").hidden = true;
  }
  document.getElementById("tier11").checked = true;
  if (document.getElementById("tier11").checked == true) {
    document.getElementById("tier1").hidden = false;
  }
  else if (document.getElementById("tier11").checked == false) {
    document.getElementById("tier1").hidden = true;
  }
  document.getElementById("tier15").checked = true;
  if (document.getElementById("tier15").checked == true) {
    document.getElementById("tier1.5").hidden = false;
  }
  else if (document.getElementById("tier15").checked == false) {
    document.getElementById("tier1.5").hidden = true;
  }
  document.getElementById("tier22").checked = true;
  if (document.getElementById("tier22").checked == true) {
    document.getElementById("tier2").hidden = false;
  }
  else if (document.getElementById("tier22").checked == false) {
    document.getElementById("tier2").hidden = true;
  }
  document.getElementById("tier33").checked = true;
  if (document.getElementById("tier33").checked == true) {
    document.getElementById("tier3").hidden = false;
  }
  else if (document.getElementById("tier33").checked == false) {
    document.getElementById("tier3").hidden = true;
  }
  document.getElementById("vcpu0").value = 0;
  document.getElementById("demo0").innerHTML= 0;


  document.getElementById("tier_111").value = 0;
  document.getElementById("demo02").innerHTML= 0;

  document.getElementById("tier_151").value = 0;
  document.getElementById("demo_3").innerHTML= 0;

  document.getElementById("tier_222").value = 0;
  document.getElementById("demo_4").innerHTML= 0;

  document.getElementById("tier_333").value = 0;
  document.getElementById("demo_5").innerHTML= 0;



  document.getElementById("tier000").checked = true;
  if (document.getElementById("tier000").checked == true) {
    document.getElementById("tier_00").hidden = false;
  }
  else if (document.getElementById("tier000").checked == false) {
    document.getElementById("tier_00").hidden = true;
  }
  document.getElementById("tier_111").checked = true;
  if (document.getElementById("tier_111").checked == true) {
    document.getElementById("tier_11").hidden = false;
  }
  else if (document.getElementById("tier_111").checked == false) {
    document.getElementById("tier_11").hidden = true;
  }
  document.getElementById("tier_15").checked = true;
  if (document.getElementById("tier_15").checked == true) {
    document.getElementById("tier_1.5").hidden = false;
  }
  else if (document.getElementById("tier_15").checked == false) {
    document.getElementById("tier_1.5").hidden = true;
  }
  document.getElementById("tier_22").checked = true;
  if (document.getElementById("tier_22").checked == true) {
    document.getElementById("tier_2").hidden = false;
  }
  else if (document.getElementById("tier_22").checked == false) {
    document.getElementById("tier_2").hidden = true;
  }
  document.getElementById("tier_33").checked = true;
  if (document.getElementById("tier_33").checked == true) {
    document.getElementById("tier_3").hidden = false;
  }
  else if (document.getElementById("tier_33").checked == false) {
    document.getElementById("tier_3").hidden = true;
  }
  document.getElementById("vcpu__").value = 0;
  document.getElementById("demo__").innerHTML= 0;


  document.getElementById("tier__111").value = 0;
  document.getElementById("demo__2").innerHTML= 0;

  document.getElementById("tier__151").value = 0;
  document.getElementById("demo__3").innerHTML= 0;

  document.getElementById("tier__222").value = 0;
  document.getElementById("demo__4").innerHTML= 0;

  document.getElementById("tier__333").value = 0;
  document.getElementById("demo__5").innerHTML= 0;



  document.getElementById("tier__00").checked = true;
  if (document.getElementById("tier__00").checked == true) {
    document.getElementById("tier__0").hidden = false;
  }
  else if (document.getElementById("tier__00").checked == false) {
    document.getElementById("tier__0").hidden = true;
  }
  document.getElementById("tier__11").checked = true;
  if (document.getElementById("tier__11").checked == true) {
    document.getElementById("tier__1").hidden = false;
  }
  else if (document.getElementById("tier__11").checked == false) {
    document.getElementById("tier__1").hidden = true;
  }
  document.getElementById("tier__15").checked = true;
  if (document.getElementById("tier__15").checked == true) {
    document.getElementById("tier__1.5").hidden = false;
  }
  else if (document.getElementById("tier__15").checked == false) {
    document.getElementById("ttier__1.5").hidden = true;
  }
  document.getElementById("tier__22").checked = true;
  if (document.getElementById("tier__22").checked == true) {
    document.getElementById("tier__2").hidden = false;
  }
  else if (document.getElementById("tier__22").checked == false) {
    document.getElementById("tier__2").hidden = true;
  }
  document.getElementById("tier__33").checked = true;
  if (document.getElementById("tier__33").checked == true) {
    document.getElementById("tier__3").hidden = false;
  }
  else if (document.getElementById("tier__33").checked == false) {
    document.getElementById("tier__3").hidden = true;
  }

    ///////////////////////////////////////////////
    document.getElementById("vcpu___").value = 0;
    document.getElementById("demo___").innerHTML= 0;


    document.getElementById("tier___111").value = 0;
    document.getElementById("demo___2").innerHTML= 0;

    document.getElementById("tier___151").value = 0;
    document.getElementById("demo___3").innerHTML= 0;

    document.getElementById("tier___222").value = 0;
    document.getElementById("demo___4").innerHTML= 0;

    document.getElementById("tier___333").value = 0;
    document.getElementById("demo___5").innerHTML= 0;



    document.getElementById("tier___00").checked = true;
    if (document.getElementById("tier___00").checked == true) {
      document.getElementById("tier___0").hidden = false;
    }
    else if (document.getElementById("tier___00").checked == false) {
      document.getElementById("tier___0").hidden = true;
    }
    document.getElementById("tier___11").checked = true;
    if (document.getElementById("tier___11").checked == true) {
      document.getElementById("tier___1").hidden = false;
    }
    else if (document.getElementById("tier___11").checked == false) {
      document.getElementById("tier___1").hidden = true;
    }
    document.getElementById("tier___15").checked = true;
    if (document.getElementById("tier___15").checked == true) {
      document.getElementById("tier___1.5").hidden = false;
    }
    else if (document.getElementById("tier___15").checked == false) {
      document.getElementById("ttier___1.5").hidden = true;
    }
    document.getElementById("tier___22").checked = true;
    if (document.getElementById("tier___22").checked == true) {
      document.getElementById("tier___2").hidden = false;
    }
    else if (document.getElementById("tier___22").checked == false) {
      document.getElementById("tier___2").hidden = true;
    }
    document.getElementById("tier___33").checked = true;
    if (document.getElementById("tier___33").checked == true) {
      document.getElementById("tier___3").hidden = false;
    }
    else if (document.getElementById("tier___33").checked == false) {
      document.getElementById("tier___3").hidden = true;
    }



}
