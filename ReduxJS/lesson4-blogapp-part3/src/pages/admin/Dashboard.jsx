import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { removeBlog } from '../../manager/action/blogAction';

const Dashboard = () => {

    const data = useSelector(p=>p);
    const dispatch = useDispatch();
    return (
        <div>
            <h1 className='text-center my-4'>Admin Panel</h1>
            <div className="container">
                <Link to="/dashboard/addblog" className='btn btn-dark my-3'>Add blog</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                       {data.map((item,c)=>(
                         <tr key={item.id}>
                         <th scope="row">{c+1}</th>
                         <td>{item.title}</td>
                         <td>{item.desc}</td>
                         <td><Link to={`/dashboard/edit/${item.id}`} className='btn btn-warning'>Edit</Link></td>
                         <td><button className='btn btn-danger' onClick={()=>{dispatch(removeBlog({id:item.id}))}}>X</button></td>
                     </tr>
                       ))}
                        
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default Dashboard