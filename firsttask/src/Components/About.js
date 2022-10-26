import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';



function About() {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios.get(`https://gorest.co.in/public/v2/comments/${id}`)
      .then(res => setUser(res.data))

  })
  console.log(user);
  return (
    <>
      <Link to={'/'}>Back To Home</Link>
      {user && (
        <>
            <table>
              <thead>
                <th>Post Id</th>
                <th>Author Name</th>
                <th>Author Email</th>
              </thead>
              <tbody>
                <td>
                {user.post_id}
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tbody>
            </table>
         
        </>


      )}
    </>)
}
export default About