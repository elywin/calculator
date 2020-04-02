
let tapButton = document.getElementById("mult");
let tapButton = document.getElementById("div");
let tapButton = document.getElementById("plus");
let tapButton = document.getElementById("minus");



multi =()=>{
  let num11 = Number(document.getElementById("").value);
  let num22 =   Number(document.getElementById("").value);
  return  num11 * num22;
   //alert(result);
  // alert(num11 * num22);

};

divi =()=>{
  let num11 = Number(document.getElementById("").value);
  let num22 =   Number(document.getElementById("").value);
  return  num11 / num22;
   //alert(result);
  // alert(num11 * num22);

};

add =()=>{
  let num11 = Number(document.getElementById("").value);
  let num22 =   Number(document.getElementById("").value);
  return  num11 + num22;
   //alert(result);
  // alert(num11 * num22);

};

sub =()=>{
  let num11 = Number(document.getElementById("").value);
  let num22 =   Number(document.getElementById("").value);
  return  num11 - num22;
   //alert(result);
  // alert(num11 * num22);

};

// tapButton.onclick = ()=>{
//  let result=multi();  
//  document.getElementById("text1").value="Answer=" +" "+ result;
// };