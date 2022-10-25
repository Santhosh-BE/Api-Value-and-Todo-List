import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { useState } from 'react';

function CreatePost() {
    const[name,setName]=useState("");
    const[title,setTitle]=useState("");
    const[content,setContent]=useState("");
    const [postvalue,setPostValue]=useState([]);

    const createpost=()=>{
        console.log(name,title,content);
setPostValue([...postvalue,{name:name,title:title,content:content}])
    }
    return (
        <>
            <h3>Create Your Post</h3>
            <Container className="contact-content debug-border">
                <Row className="justify-content-center mt-5 mb-4">
                    <Col md={4} className="text-center text-md-right">
                        <input type='text' placeholder="Enter Author Name" className='form-control' value={name} onChange={(e=>setName(e.target.value))}></input>
                    </Col>
                </Row>
                <Row className="justify-content-center mb-4">
                    <Col md={4} className="text-center text-md-right">
                        <input type='text' placeholder="Enter Your Title" className='form-control' value={title} onChange={(e=>setTitle(e.target.value))}></input>
                    </Col>
                </Row>
                <Row className="justify-content-center mb-4">
                    <Col md={4} className="text-center text-md-right">
                        <textarea placeholder='Enter your Content' type='text' className='form-control' value={content} onChange={(e=>setContent(e.target.value))} style={{ resize: 'none' }}></textarea>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md={8} className="text-center text-md-right">
                        <button className='btn btn-success btn-lg' onClick={createpost}>Submit</button>
                    </Col>
                </Row>
            </Container>
            <table className="table table-hover table-info mt-4">
                <thead>
                    <th className='bg-warning'>Author Name</th>
                    <th className='bg-warning'>Post Title</th>
                    <th className='bg-warning'>Content</th>
                </thead>
           
            {postvalue.map(post=>{
                return(
                    <tbody>
                        <tr>
                            <td className='bg-info'>{post.name}</td>
                            <td className='bg-info'>{post.title}</td>
                            <td className='bg-info'>{post.content}</td>
                        </tr>
                    </tbody>
                     
                )
            })}
            </table>
        </>
    )
}

export default CreatePost