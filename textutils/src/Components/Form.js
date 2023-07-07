import React, { useEffect, useState } from 'react'

export default function Form() {
    const [data,setData]=useState([])
    useEffect(
        ()=>{
            fetch('https://api.data.gov.sg/v1/environment/air-temperature').then((result)=>{
                result.json().then((resp)=>{
                    alert(data)
                    setData(resp);
                })
            })
        }
    ,[])
    // console.warn(data)
  return (
    <div>
        {/* <label htmlFor="name">Name : </label>
      <input type="text" id='name' /> */}
      <table border={3}>
      <tr>
            <td> 
              name  
            </td>
            <td>
                id
            </td>
            <td>
                location
            </td>
        </tr>
      {data.map((item)=>
        <tr>
            <td>
                {item.name}
            </td>
            <td>
                {item.id}
            </td>
            <td>
                {item.location}
            </td>
        </tr>
      )}
      </table>
    </div>
  )
}
