import React, { Component } from 'react'
import SingleCard from './SingleCard'

class Users extends Component {
    render() {
        return (
            <div className='container'>
                <div className="row g-5">
                    {this.props.comingusers.map(item => (
                        <SingleCard userdetails={item} key={item.id} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Users