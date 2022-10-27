import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom"



function Home() {
    const [user, setUser] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('https://gorest.co.in/public/v2/users')
            .then(res => setUser(res.data))

    }, [])
    
    const Createpost = () => {
        navigate('/CreatePost')
    }
    return (
        <>
            <button className='btn btn-success' onClick={Createpost}>Create Post</button>
            <table className="table table-hover table-borderless">
                <thead>
                    <th>Author Name</th>
                </thead>
                <tbody>
                    {user.map(u => (

                        <tr>
                            <td>
                                <Link to={`/About/${u.id}`} className='link'>{u.name}</Link>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </>)
}

export default Home