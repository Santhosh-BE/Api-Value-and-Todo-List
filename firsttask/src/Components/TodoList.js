import React from 'react'
import { useState } from 'react'

function TodoList() {
  const [value, setValue] = useState("");
  const [userdata, setUserData] = useState([]);
  const AddData = () => {
    console.log(value)
    setUserData([...userdata, { value: value }])
    setValue("");
  }
  const DeleteData = () => {
    setUserData([]);
  }
  return (
    <>
      <div className='d-flex'>
        <input type='text' className='form-control w-25 m-2' placeholder='Enter a value' value={value} onChange={e => setValue(e.target.value)}></input>
        <div class="d-grid gap-2 d-md-block">
          <button class="btn btn-success m-2" type="button" onClick={AddData}>Add</button>&nbsp;
          <button class="btn btn-danger m-2" type="button" onClick={DeleteData}>Delete</button>
        </div>
      </div>
      {
        userdata.map(v => {
          return (
            <div className='d-flex m-2 '>{v.value}</div>
          )
        })

      }
    </>
  )
}

export default TodoList