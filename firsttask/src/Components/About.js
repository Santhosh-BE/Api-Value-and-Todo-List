import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';



function About() {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios.get(`https://gorest.co.in/public/v2/users/${id}`)
      .then(res => setUser(res.data))

  })
  return (
    <>
      <Link to={'/'}>Back To Home</Link>
      {user && (
        <>
          <div class="card m-5" style={{ width: "28rem" }}>
            <div class="card-header">
              Author Details
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Post Id:{user.id}</li>
              <li class="list-group-item">Author Name:{user.name}</li>
              <li class="list-group-item">Author Email: {user.email}</li>
            </ul>
          </div>
        </>
      )}
    </>)
}
export default About