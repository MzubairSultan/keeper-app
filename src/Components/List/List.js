import React from 'react'
import './list.css'
import DeleteIcon from '@mui/icons-material/Delete';
function List({myData,removefun}) {

    console.log('form main to list',myData)
  return (
    <div className='right'>
      <h2>Contact Details</h2>
      {
        myData.map((item)=>{
            return(
                <>

                <div className='myflexItem'>
                <span>{item.data.name}</span>
                <span>{item.data.email}</span>
                <span>{item.data.phone}</span>
                <span onClick={()=>removefun(item.id)}><DeleteIcon/></span>
                </div>
                </>
            )
            
        })
      }
    </div>
  )
}

export default List
