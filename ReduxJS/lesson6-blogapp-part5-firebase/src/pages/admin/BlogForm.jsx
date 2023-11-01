import { useState } from 'react';
import { Col, FloatingLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BlogForm({ onFormSubmit, editblog }) {
    const [formTitle, setFormTitle] = useState(editblog?editblog.title:'');
    const [formDesc, setFormDesc] = useState(editblog?editblog.desc:'');
   
    const FormSubmit = (e) => {
        e.preventDefault();
        if (!formTitle && !formDesc) {
            alert('please fill input')
        } else {
            onFormSubmit({
                title: formTitle,
                desc: formDesc
            })
        }
    }


    return (
        <div className="d-flex align-items-center justify-content-center flex-column">
            <h1 className='my-3'>Add Blog</h1>
            <Col md={4}>
                <Form onSubmit={FormSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Title<span className='text-danger'>*</span></Form.Label>
                        <Form.Control value={formTitle} type="text" placeholder="Type title" onChange={e => setFormTitle(e.target.value)} />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Desc<span className='text-danger'>*</span></Form.Label>
                        <FloatingLabel controlId="floatingTextarea2" label="Type description">
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                                onChange={e => setFormDesc(e.target.value)}
                                value={formDesc}
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