import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate'
import { Link, useNavigate } from "react-router-dom"
import './Home.css'
import { BsFillTrashFill } from 'react-icons/bs'
import { Col, Row } from 'react-bootstrap';



function Home() {
    const [user, setUser] = useState([]);
    const [offset, setOffset] = useState(0);
    const [perpage] = useState(5);
    const [pageCount, setPageCount] = useState(0)
    const navigate = useNavigate();
    // console.log(user);
    const getData = async () => {
        const res = await axios.get('https://gorest.co.in/public/v2/users',
            {
                headers:
                {
                    "Authorization": `Bearer ${'65a780d930e9d44a1d0607f12b2b90b368fcf094b9a8457ded8fbe1515d94cb8'}`,
                    'Content-Type': 'application/json'
                }
            })
        const user = res.data;
        // console.log("response 1", offset, offset + perpage, user);
        const slice = user.slice(offset, offset + perpage)
        // const postData = slice.map(pd=> 
        //     <div key={pd.id}>
        //     <Link to={`/About/${pd.id}`} className='link'>{pd.name}</Link>
        //     {/* <p>{pd.email}</p>
        //     <p>{pd.gender}</p>
        //     <p>{pd.status}</p> */}
        // </div>)
        setUser(slice)
        setPageCount(Math.ceil(user.length / perpage))
    }
    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        // console.log(selectedPage, "output")
        setOffset(selectedPage * perpage)
    };
    useEffect(() => {
        getData()
    })
    const Createpost = () => {
        navigate('/CreatePost')
    }
    const deletePost = (id) => {
        axios.delete(`https://gorest.co.in/public/v2/users/${id}`,
            {
                headers:
                {
                    "Authorization": `Bearer ${'65a780d930e9d44a1d0607f12b2b90b368fcf094b9a8457ded8fbe1515d94cb8'}`,
                    'Content-Type': 'application/json'
                }
            })
        getData();
    }

    return (
        <><>
            <button className='btn btn-success m-2' onClick={Createpost}>Create Post</button>
            <Row>
                <Col></Col>
                <Col>
                    <table className="table table-bordered " >
                        <thead>
                            <tr>
                                <th>
                                    Author Name
                                </th>
                                <th>
                                    Operations
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {user.map(pd =>
                                <tr>
                                    <td key={pd.id} style={{ textAlign: "start" }}><Link to={`/About/${pd.id}`} className='link'>{pd.name}</Link>
                                    </td>
                                    <td style={{ textAlign: "center", color: "red" }}>
                                        <BsFillTrashFill className=' m-2' onClick={() => deletePost(pd.id)} />
                                    </td>
                                </tr>)}
                        </tbody>
                    </table>
                </Col>                
            <Col></Col>
            </Row>
            <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination justify-content-center"}
                subContainerClassName={"page-item"}
                activeClassName={"active"} /></>
        </>)
}

export default Home