import React from 'react'
import { Link } from "react-router-dom"
import './Header.css'
function Header() {
    return (
        <div className='header'>
            <ul class="list-group list-group-horizontal">               
                <li class="link list-group-item ">
                    <Link to="/" className='link'>Home Page</Link>
                </li>
                <li class="link list-group-item ">
                    <Link to="Todo List" className='link'>Todo List</Link>
                </li>
            </ul>
        </div>


    )
}

export default Header