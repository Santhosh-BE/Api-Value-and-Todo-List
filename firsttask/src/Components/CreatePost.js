import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { useState } from 'react';

function CreatePost() {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [postvalue, setPostValue] = useState([]);



    const createpost = () => {
        console.log(id, name, email);
        if(id.trim().length !== 0 && name.trim().length !== 0 && email.trim().length !== 0){
        setPostValue([...postvalue, { id: id, name: name, email: email }])
        setId("");
        setEmail("");
        setName("");   
    }
    else{
        alert("Please Enter All Fields ")
    }
}
    const Deletepost=()=>{
        setPostValue([]);
    }
    return (
        <>

            <h3>Create Your Post</h3>
            <Container className="contact-content debug-border">
                <Row className="justify-content-center mt-5 mb-4">
                    <Col md={4} className="text-center text-md-right">
                        <input type='text' placeholder="Enter Post Id" className='form-control' value={id} onChange={(e => setId(e.target.value))}></input>
                    </Col>
                </Row>
                <Row className="justify-content-center mb-4">
                    <Col md={4} className="text-center text-md-right">
                        <input type='text' placeholder="Enter Author Name" className='form-control' value={name} onChange={(e => setName(e.target.value))}></input>
                    </Col>
                </Row>
                <Row className="justify-content-center mb-4">
                    <Col md={4} className="text-center text-md-right">
                        <input placeholder='Enter your Email' type='text' className='form-control' value={email} onChange={(e => setEmail(e.target.value))} ></input>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md={8} className="text-center text-md-right">
                        <button className='btn btn-success btn-lg' onClick={createpost}>Submit</button>
                        <button class="btn btn-danger btn-lg m-2" type="button" onClick={Deletepost}>Delete</button>
                    </Col>
                </Row>
            </Container>
            <table className="table table-hover mt-4">
                <thead>
                    <tr>
                        <th>Post Id</th>
                        <th>Author Name</th>
                        <th>Email</th>
                    </tr>
                </thead>

                {postvalue.map(post => {
                    return (
                        <tbody>
                            <tr>
                                <td className='bg-info'>{post.id}</td>
                                <td className='bg-info'>{post.name}</td>
                                <td className='bg-info'>{post.email}</td>
                            </tr>
                        </tbody>

                    )
                })}
            </table>
        </>
    )
}

export default CreatePost