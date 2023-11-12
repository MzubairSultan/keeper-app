import React, { useState } from 'react'
import './form.css'
function Formm({funFormData}) {
    const[contactData,setContactData]=useState({name:"",email:"",phone:""})
    function evenHnadler(e){
       setContactData({...contactData,[e.target.name]:e.target.value})
    }
    function addhandle(e){
        e.preventDefault();
        if(contactData.name==="" || contactData.email==="" || contactData.phone==="")
        {
            alert("all field is required");
        }
        else{
           // console.log(contactData)
           funFormData(contactData);
           setContactData({name:"",email:"",phone:""})
        }
    }
  return (
    <>
    <div className='left'>
      <form >
        <h1>Add Contact</h1>
        <label>Name:</label><br />
        <input type="text"  className='name' name='name' value={contactData.name}onChange={evenHnadler}/><br />
        <label>Email</label><br />
        <input type="text" className='email'name='email' value={contactData.email} onChange={evenHnadler}/><br />
        <label>Phone:</label><br />
        <input type="text" className='phone' name='phone' value={contactData.phone} onChange={evenHnadler}/><br /><br />
        <button className='btn' onClick={addhandle}>Add Contact</button>
      </form>
    </div>
    </>
  )
}

export default Formm
