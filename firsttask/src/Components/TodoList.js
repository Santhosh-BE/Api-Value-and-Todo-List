import React, { useEffect } from 'react'
import { useState} from 'react'
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
    console.log(userdata)
    if (value.trim().length !== 0) {
      setUserData([...userdata, { value: value }])
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
        <div class="d-grid gap-2 d-md-block">
          <button class="btn btn-success m-2" type="button" onClick={AddData}>Add</button>&nbsp;
          <button class="btn btn-danger m-2" type="button" onClick={DeleteData}>Delete</button>
        </div>
      </div>
      {
        userdata.map(e => {
          return (
            <div className='d-flex m-2 '>
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