import axios from 'axios';
import { Component } from 'react'

class App extends Component {


  constructor() {
    super();
    this.state = {
      product: [],
      display: false
    }
  }


  componentDidMount() {
    axios.get('https://fakestoreapi.com/products')
      .then(res => this.setState({ product: res.data }));
  }


  render() {
    return (
      <div className='container'>
        <h1 className='text-center my-5'>Product List</h1>
        <div className="row g-5">
          {this.state.product.map(item => (
            <div key={item.id} className="col-12 col-sm-6 col-md-4">
              <div className="card">
                <img src={item.image} height={300} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.price}$</p>
                  <p className="card-text">{this.state.display ? item.description : ""}</p>
                  <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseOne${item.id}`} aria-expanded="true" aria-controls="collapseOne">
                          Read more
                        </button>
                      </h2>
                      <div id={`collapseOne${item.id}`} class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          {item.description}
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </div>

          ))}
        </div>
      </div>
    )
  }
}

export default App