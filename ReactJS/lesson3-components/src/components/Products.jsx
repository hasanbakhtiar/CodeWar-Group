import React from 'react'
import SingleCard from './SingleCard'

const Products = () => {
    return (
        <div>
            <h1 className='text-center my-5'>Product List</h1>

            <div className="container">
                <div className="row g-5">
                    <SingleCard title="Asus" photo="https://cdn.irshad.az/products/82107/x515ea.jpg?width=1400"/>
                    <SingleCard title="Acer"/>
                    <SingleCard title="Hp"/>
                    <SingleCard title="Lenovo"/>
                </div>
            </div>


        </div>
    )
}

export default Products