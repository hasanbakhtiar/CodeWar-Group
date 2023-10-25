import React from 'react'
import BlogForm from '../BlogForm'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { editBlog } from '../../../manager/action/blogAction';

const EditBlog = () => {


    const {id} = useParams();
    const blog = useSelector(p=>p);
    const blogData = blog.find(p=>p.id.toString()===id);
    const dispatch = useDispatch();
    const navigate = useNavigate();
  return (
    <div>
        <BlogForm editblog={blogData} 
        onFormSubmit={fd=>{
            dispatch(editBlog(blogData.id,fd));
            navigate('/dashboard');
        }}
        />
    </div>
  )
}

export default EditBlog