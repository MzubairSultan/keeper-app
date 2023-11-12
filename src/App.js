// Contact Manager All topic  basic cover of react with local storage 
import { useEffect, useState } from 'react';
import './App.css';
import Formm from './Components/Form/Formm';
import Header from './Components/Header/Header';
import List from './Components/List/List';
import uuid4 from 'uuid4'

function App() {
  const storageKery='contact';
  const[contact,setContact]=useState(()=>{
    return JSON.parse(localStorage.getItem(storageKery))
  ||[]})
  
  useEffect(()=>{
       localStorage.setItem(storageKery,JSON.stringify(contact))
  },[contact])
  function acceptFormData(data){
    //console.log(data,"data from app")
    setContact([...contact,{id:uuid4(),data}])
  }
  function removedata(removeid){
      setContact(contact.filter((fil)=>{
        return  fil.id !==removeid;
      }))
  }
  return (
    <div className="App">
      <div className="container">
         <Header/>
         <div className="leftRightContainer">
            <Formm funFormData={acceptFormData}/>
            <List myData={contact} removefun={removedata}/>
          </div>        
      </div>
      
    </div>
  );
}

export default App;
