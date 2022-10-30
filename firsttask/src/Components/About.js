import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';



function About() {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios.get(`https://gorest.co.in/public/v2/users/${id}`,{ headers:
    {"Authorization" : `Bearer ${'65a780d930e9d44a1d0607f12b2b90b368fcf094b9a8457ded8fbe1515d94cb8'}`,
    'Content-Type': 'application/json'
   } })
      .then(res => setUser(res.data))

  })
  return (
    <>
      <Link to={'/'}>Back To Home</Link>
      {user && (
        <>
          <div className="card m-5" style={{ width: "28rem" }}>
            <div className="card-header">
              Author Details
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Post Id:{user.id}</li>
              <li className="list-group-item">Author Name:{user.name}</li>
              <li className="list-group-item">Author Email: {user.email}</li>
            </ul>
          </div>
        </>
      )}
    </>)
}
export default About