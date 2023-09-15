import axios from 'axios'
import React, { Component } from 'react'

export class CountryApp extends Component {
    constructor() {
        super();
        this.state = {
            country: [],
            start: 0,
            end: 50
        }
    }

    componentDidMount() {
        axios.get('https://restcountries.com/v3.1/all')
            .then(res => this.setState({ country: res.data }))
    }

    render() {
        return (
            <div className='container'>
                <div className="my-5">
                    <button className='btn btn-success ms-3' onClick={() => { this.setState({
                           start:0,
                           end:50
                    }) }}>1</button>
                    <button className='btn btn-success ms-3' onClick={() => { this.setState({
                           start:50,
                           end:100
                    }) }}>2</button>
                    <button className='btn btn-success ms-3'>3</button>
                    <button className='btn btn-success ms-3'>4</button>
                    <button className='btn btn-success ms-3'>5</button>
                </div>
                <div className="row g-5">
                    {this.state.country.slice(this.state.start, this.state.end).map(item => (
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="card">
                                <img src={item.flags.png} height={150} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name.common}</h5>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default CountryApp