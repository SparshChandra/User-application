// console.log(uuidv4);
"use strict";
let users=getSavedData();
let user={
  id:'',
  email:'',
  password:'',
  dob:'',
  position:''
}

let pass
let dobInput
document.querySelector("#email").addEventListener("input", (e) => {
  user.email = e.target.value;
});
document.querySelector("#password").addEventListener("input", (e) => {
  user.password= e.target.value;
  pass=e.target.value;
});
document.querySelector("#date").addEventListener("change", (e) => {
  user.dob = e.target.value;
  dobInput=e.target.value;
});

document.querySelector("#position").addEventListener("change", (e) => {
  user.position = e.target.value;
});

document.querySelector("#signup1").addEventListener("submit" , (e)=>{
 if(pass.length<8){
  alert("Password must be greater than 8 char")
 } else if(moment().diff(dobInput,'years') < 15){
  alert('User should have an age above 15 years')
} else{
  e.preventDefault();
  const id = uuidv4()
  user.id = id;
  users.push(user);
  saveData(users);
  location.assign(`user.html#${id}`)
   }
})


