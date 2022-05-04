"use strict";
let email,pass;

document.querySelector("#email").addEventListener("input", (e) => {
  email=e.target.value;
});

document.querySelector("#password").addEventListener("input", (e) => {
  pass=e.target.value;
});

document.querySelector("#login1").addEventListener("submit" , (e)=>{
  e.preventDefault();
  const isAvail = isEmailAvail(email);
  if(isAvail){
    // alert('useravailable');
  const userObject = getCredEmail(email);
  console.log(userObject);
  const id = userObject.id;
  if(userObject.email===email && userObject.password === pass){
   location.assign(`user.html#${id}`)
 }else{
   alert('wrong credentials')
 }
} 
 })
 
