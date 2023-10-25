import React from 'react'
import { useSelector } from 'react-redux'
import SingleCard from '../components/SingleCard';

const Home = () => {
    const blog = useSelector(state=>state);
    
  return (
    <div className='row g-3'>
        {blog.map(item=>{
         return <SingleCard key={item.id} title={item.title} desc={item.desc}/>
        })}
    </div>
  )
}

export default Home