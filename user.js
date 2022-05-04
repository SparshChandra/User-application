"use strict";
const userHashId = location.hash.substring(1);
console.log(userHashId);

let savedData = getSavedData();
const getSavedCred = getCredId(userHashId);
console.log(getSavedCred);


const name = document.createElement("p");
name.textContent = getSavedCred.name;
if (name.textContent.length < 1) name.textContent = "Edit Your Name Please";
document.querySelector("#name").appendChild(name);

const email = document.createElement("p");
email.textContent = getSavedCred.email;
document.querySelector("#email").appendChild(email);

const dob = document.createElement("p");
dob.textContent = getSavedCred.dob;
document.querySelector("#dob").appendChild(dob);

const pos = document.createElement("p");
pos.textContent = getSavedCred.position;
document.querySelector("#pos").appendChild(pos);




document.querySelector("#cancelmodal").addEventListener('click', e =>{
    document.querySelector("#edit-modal").style.display = "none";
})



let edituser={
  name:'',
  id:userHashId,
  email:'',
  password:'',
  dob:'',
  position:''
}

document.querySelector("#editname").addEventListener("input",(e)=>{
  edituser.name=e.target.value;
})

document.querySelector("#editemail").addEventListener("input", (e) => {
  edituser.email = e.target.value;
});
document.querySelector("#editpassword").addEventListener("input", (e) => {
     edituser.password= e.target.value;
  
});
document.querySelector("#editdate").addEventListener("change", (e) => {
  edituser.dob = e.target.value;

});

document.querySelector("#editposition").addEventListener("change", (e) => {
  edituser.position = e.target.value;
});
const index=savedData.findIndex(function(userobject){
  return userobject.id === userHashId
})
console.log(index,"index")

document.querySelector("#submitmodal").addEventListener('click', (e) =>{

    console.log(edituser)
    savedData.splice(index,1,edituser)
    saveData(savedData)
})

document.querySelector("#deleteBtn").addEventListener('click', e =>{
  // alert("User has been deleted")
  // document.querySelector("#edit-modal").style.display = "block";
  savedData.splice(index,1)
  saveData(savedData)
  location.assign('index.html')
})