/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function abc()
{
   var firstname=document.getElementById("i1").value; 
   if(firstname === '')
   {
       alert("empty field");
       return false;
   }
   
   
   var secondname=document.getElementById("i2").value; 
   if(secondname === '')
   {
       alert("empty field");
       return false;
   }
   
   
   var contactno=document.getElementById("i3").value;
       if(isNaN(contactno))
       {
       alert("Put Digits");
       return false;
       } 
   else if (contactno.length !== 10)
   {
       alert("Invalid Length");
       return false;  
   }
  
  
   var email=document.getElementById("i4").value;
   var at=email.indexOf("@")
   var dot=email.lastIndexOf(".")
   if(email === '')
   {
       alert("put the email");
       return false;
   }
   else if(at<1 || dot<at+3 || dot+3>=email.length)
   {
       alert("incorrect email");
       return false;
   }
   
   
   var address=document.getElementById("i5").value; 
   if(address === '')
   {
       alert("empty field");
       return false;
   }
   
   
   var password=document.getElementById("i6").value; 
   if((password.length<8) || (password.length>15))
   {
       alert("password must contain contain more than 8 & less than 15 digits");
       return false;
   }
   
   
   var confirm_password=document.getElementById("i7").value; 
   if(confirm_password!==password)
   {
       alert("two passwords must match");
       return false;
   }
   if(!i8.checked)
   {
       alert("Fill the check box");
       return false;
   }
 }





