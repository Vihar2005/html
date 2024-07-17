//input id
var roti=document.getElementById("1")
var paneer=document.getElementById("2")
var burger=document.getElementById("3")
var dhosa=document.getElementById("4")

//price
var p1p=document.getElementById("pq1")
var p2p=document.getElementById("pq2")
var p3p=document.getElementById("pq3")
var p4p=document.getElementById("pq4")

//convert string to int
const cp1p=parseInt(p1p.innerHTML);
const cp2p=parseInt(p2p.innerHTML);
const cp3p=parseInt(p3p.innerHTML);
const cp4p=parseInt(p4p.innerHTML);


//sub total
var p1st=document.getElementById("ppu1")
var p2st=document.getElementById("ppu2")
var p3st=document.getElementById("ppu3")
var p4st=document.getElementById("ppu4")

//convert sub total to number
let cp1st=parseInt(p1st.innerHTML);
let cp2st=parseInt(p2st.innerHTML);
let cp3st=parseInt(p3st.innerHTML);
let cp4st=parseInt(p4st.innerHTML);


//buttonid
const p1btn=document.getElementById("btn1")
const p2btn=document.getElementById("btn2")
const p3btn=document.getElementById("btn3")
const p4btn=document.getElementById("btn4") 

//total amount
var total=document.getElementById("total")

 


function calroti(){
if(roti.value>=0){
    let cp2st=parseInt(p2st.innerHTML);
    let cp3st=parseInt(p3st.innerHTML);
    let cp4st=parseInt(p4st.innerHTML);

 console.log(roti.value*cp1p)
 p1st.textContent=roti.value*cp1p;
  
 const Total=roti.value*cp1p+cp2st+cp3st+cp4st;  
 total.textContent=Total;
}

   
}

function calpaneer(){
 if(paneer.value>=0){
    let cp1st=parseInt(p1st.innerHTML);
    let cp3st=parseInt(p3st.innerHTML);
    let cp4st=parseInt(p4st.innerHTML);

    console.log(paneer.value*cp2p)
    p2st.textContent=paneer.value*cp2p;
     
    const Total=paneer.value*cp2p+cp1st+cp3st+cp4st;  
    total.textContent=Total;
   }
 }   
   

   function calburger(){
 if(burger.value>=0){
    let cp2st=parseInt(p2st.innerHTML);
    let cp1st=parseInt(p1st.innerHTML);
    let cp4st=parseInt(p4st.innerHTML);
  
    console.log(burger.value*cp3p)
    p3st.textContent=burger.value*cp3p;
     
    const Total=burger.value*cp3p+cp2st+cp1st+cp4st;  
    total.textContent=Total;
 }   
   
   }


   function caldhosa(){
 if(dhosa.value>=0){
    let cp2st=parseInt(p2st.innerHTML);
    let cp1st=parseInt(p1st.innerHTML);
    let cp3st=parseInt(p4st.innerHTML);

    console.log(dhosa.value*cp4p)
    p4st.textContent=dhosa.value*cp4p;
    
    const Total=dhosa.value*cp4p+cp2st+cp3st+cp1st;  
    total.textContent=Total;
 }   
  
   }

