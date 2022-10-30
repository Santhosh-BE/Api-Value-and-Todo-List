import React, { useState,useEffect } from 'react'
import { BsFillTrashFill} from 'react-icons/bs'

const getlocalstorage =()=>{
let userdata =localStorage.getItem("userdata");
if(userdata){
  return(userdata=JSON.parse(localStorage.getItem("userdata")));
}
else{
  return[];
}
}

function TodoList() {
  const [value, setValue] = useState("");
  const [userdata, setUserData] = useState(getlocalstorage());

  useEffect(()=>{
    localStorage.setItem("userdata",JSON.stringify(userdata))
  },[userdata])

  const AddData = () => {
    // console.log(userdata)
    if (value.trim().length !== 0) {
      setUserData([...userdata, { value: value, id: userdata.length + 1 }])
      setValue(""); 
    }
    else {
      alert("Please enter a value")
    }
  }
  const Deleteindi = (value) => {

    setUserData(userdata.filter(e => e.value !== value))
  }
  const DeleteData = () => {
    setUserData([]);
  }

  return (
    <>
      <div className='d-flex'>
        <input type='text' className='form-control w-25 m-2' placeholder='Enter a value' required value={value} onChange={e => setValue(e.target.value)}></input>
        <div className="d-grid gap-2 d-md-block">
          <button className="btn btn-success m-2" type="button" onClick={AddData}>Add</button>&nbsp;
          <button className="btn btn-danger m-2" type="button" onClick={DeleteData}>Delete</button>
        </div>
      </div>
      {
        userdata.map(e => {
          return (
            <div key={e.id} className='d-flex m-2 '>
              {e.value}
              <BsFillTrashFill className='d-flex m-2 align-items-' onClick={() => { Deleteindi(e.value) }}/>
              
            </div>
          )
        })

      }
    </>
  )
}

export default TodoList