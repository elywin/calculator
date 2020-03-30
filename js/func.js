
let tapButton = document.getElementById("mult");

multi =()=>{
  let num11 = Number(document.getElementById("2").value);
  let num22 =   Number(document.getElementById("3").value);
  return  num11 * num22;
   //alert(result);
  // alert(num11 * num22);

};

tapButton.onclick = ()=>{
 let result=multi();  
 document.getElementById("text1").value="Answer=" +" "+ result;
};