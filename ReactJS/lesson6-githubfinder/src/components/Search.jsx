import React, { Component } from 'react'

export class Search extends Component {
    constructor(){
        super();
        this.state={
            keyword:""
        }
    }
    formSubmit = e => {
        e.preventDefault();
        this.props.sendKeyword(this.state.keyword);
    }

    render() {


        return (
            <form onSubmit={this.formSubmit}>
                
                <div className='d-flex justify-content-center my-5'>
                    <div className="col-6">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" onChange={(e)=>{this.setState({keyword:e.target.value})}} placeholder="Enter username" />
                            <button className="btn btn-success" type="submit" id="button-addon2">Search</button>
                        </div>
                    </div>

                </div>
            </form>
        )
    }
}

export default Search