import React from 'react'

const Contact = () => {
  return (
<div>


  <div className="container">
    <main>
      <div className="py-5 text-center">
        <h2>Contact </h2>
      </div>
      <div className="row g-5">
  
        <div className="col-md-7 col-lg-12">
          <h4 className="mb-3"></h4>
          <form className="needs-validation" noValidate>
            <div className="row g-3">
              <div className="col-sm-6">
                <label htmlFor="firstName" className="form-label">First name</label>
                <input type="text" className="form-control" id="firstName" placeholder  required />
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div className="col-sm-6">
                <label htmlFor="lastName" className="form-label">Last name</label>
                <input type="text" className="form-control" id="lastName" placeholder  required />
               
              </div>
              <div className="col-sm-6">
                <label htmlFor="lastName" className="form-label">Number</label>
                <input type="text" className="form-control" id="lastName" placeholder  required />
               
              </div>
              <div className="col-sm-6">
                <label htmlFor="lastName" className="form-label">Message</label>
                <input type="text" className="form-control" id="lastName" placeholder  required />
               
              </div>
             
             
             
         
            </div>
   
       <br /><br />
         
            <button className="w-100 btn btn-primary btn-lg" type="submit">Send</button>
          </form>
        </div>
      </div>
    </main>

  </div>
</div>


  )
}

export default Contact