import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import  ReactPaginate from 'react-paginate'
import { Link, useNavigate } from "react-router-dom"
import './Home.css'


function Home() {
    const [user, setUser] = useState([]);
    const [offset,setOffset] = useState(0);
    const [perpage] =useState(5);
    const [pageCount , setPageCount]= useState(0)
    const navigate = useNavigate();
    console.log(user);
    const getData = async()=>{
        const res = await axios.get('https://gorest.co.in/public/v2/users')
        const user = res.data;
        const slice = user.slice(offset, offset+perpage)
        const postData = slice.map(pd=> 
            <div key={pd.id}>
            <Link to={`/About/${pd.id}`} className='link'>{pd.name}</Link>
            {/* <p>{pd.email}</p>
            <p>{pd.gender}</p>
            <p>{pd.status}</p> */}
        </div>)
        setUser(postData)
        setPageCount(Math.ceil(user.length / perpage))
    }
    const handlePageClick =(e)=>{
        const selectedPage = e.selected;
        setOffset(selectedPage + 1)
    };
    useEffect(() => {
        getData()
    }, [offset])
    const Createpost = () => {
        navigate('/CreatePost')
    }
    return (
        <>
            <button className='btn btn-success' onClick={Createpost}>Create Post</button>
           {user}
           <ReactPaginate 
           previousLabel = {"prev"}
           nextLabel = {"next"}
           breakLabel = {"..."}
           breakClassName = {"break-me"}
           pageCount = {pageCount}
           marginPagesDisplayed = {2}
           pageRangeDisplayed = {5}
           onPageChange = {handlePageClick}           
           containerClassName = {"pagination justify-content-center"}
           subContainerClassName ={"page-item"}
           activeClassName = {"active"}
        />
        </>)
}

export default Home