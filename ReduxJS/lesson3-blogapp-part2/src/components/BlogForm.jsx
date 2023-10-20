import { useState } from 'react';
import { Col, FloatingLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addBlog } from '../manager/action/blogAction';

function BlogForm() {
    const [formTitle,setFormTitle] = useState('');
    const [formDesc,setFormDesc] = useState('');
    const dispatch = useDispatch();
    const FormSubmit =(e)=>{
        e.preventDefault();
        dispatch(addBlog({title:formTitle,desc:formDesc}))
    }
    
    
    return (
        <div className="d-flex align-items-center justify-content-center flex-column">
            <h1 className='my-3'>Add Blog</h1>
            <Col md={4}>
                <Form onSubmit={FormSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Type title" onChange={e=>setFormTitle(e.target.value)}/>

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Desc</Form.Label>
                        <FloatingLabel controlId="floatingTextarea2" label="Type description">
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                                onChange={e=>setFormDesc(e.target.value)}
                            />
                        </FloatingLabel>
                    </Form.Group>
                  
                    <Button variant="primary" type="submit">
                        Add
                    </Button>
                </Form>
            </Col>
        </div>
    );
}

export default BlogForm;