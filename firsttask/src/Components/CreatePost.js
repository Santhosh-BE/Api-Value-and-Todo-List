import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [status, setStatus] = useState("");
    const [postvalue, setPostValue] = useState([]);

    const Data ={
            id:id,
            name:name,
            email:email,
            gender:gender,
            status:status,
        };
    

    const navigate = useNavigate();
    const api =`https://gorest.co.in/public/v2/users`



    function createpost()  {
        // console.log(Data);
       
        axios.post(api, Data,{ headers:
             {"Authorization" : `Bearer ${'65a780d930e9d44a1d0607f12b2b90b368fcf094b9a8457ded8fbe1515d94cb8'}`,
             'Content-Type': 'application/json'
            } }).then(function(res){
                console.log(res.data[0]);
                return res.data[0];
            });
        if (id.trim().length !== 0 && name.trim().length !== 0 && email.trim().length !== 0 && gender.trim().length !== 0 && status.trim().length !== 0) {
            setPostValue([...postvalue, { id: id, name: name, email: email ,gender:gender,status:status}])
            setId("");
            setEmail("");
            setName("");
            setGender("");
            setStatus("");
            navigate("/")
        }
        
        else {
            alert("Please Enter All Fields ")
        }
    }
    const Deletepost = () => {
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
                <Row className="justify-content-center mb-4">
                    <Col md={4} className="text-center text-md-right">
                        <input placeholder='Enter your Gender' type='text' className='form-control' value={gender} onChange={(e => setGender(e.target.value))} ></input>
                    </Col>
                </Row>
                <Row className="justify-content-center mb-4">
                    <Col md={4} className="text-center text-md-right">
                        <input placeholder='Enter your Status' type='text' className='form-control' value={status} onChange={(e => setStatus(e.target.value))} ></input>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md={8} className="text-center text-md-right">
                        <button className='btn btn-success btn-lg' onClick={createpost}>Submit</button>
                        <button className="btn btn-danger btn-lg m-2" type="button" onClick={Deletepost}>Delete</button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default CreatePost