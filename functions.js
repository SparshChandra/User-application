"use strict";
// Read Existing data from localstorage
const getSavedData = () => {
  const userJSON = localStorage.getItem("user");
  try {
    return userJSON ? JSON.parse(userJSON) : [];
  } catch (e) {
    return [];
  }
};

// Save User Data on Local Storage
const saveData = (data) => {
  localStorage.setItem("user", JSON.stringify(data));
};

const getCredId=(hashid)=>{
 const userObejct=getSavedData().find((obj)=>obj.id===hashid);
  if(userObejct === undefined) return{};
  else return userObejct;
}

const getCredEmail=(email)=>{
  const userObejct=getSavedData().find((obj)=>obj.email===email);
  if(userObejct === undefined) return false;
  else return userObejct;
}

const isEmailAvail = (email)=>{
  const avail=getSavedData().find((obj)=>obj.email===email);
  if(avail === undefined) return false;
  else return true;
  
}