import React from 'react';
import  './Conta.css';

const Contact = () => {
    return (
        <div className="container-fluid my-auto mx-auto align-items-center d-flex justify-content-center ">
            <div className="container w-100 p-4">
                <h1 className="text-center">Add User</h1>
                <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">Email</label>
          <input type="email" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">Password</label>
          <input type="password" className="form-control" id="inputPassword4" />
        </div>
        <div className="col-12">
          <label htmlFor="inputFullName" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="inputFullName"  />
        </div>
        <div className="col-12">
          <label htmlFor="inputUserName" className="form-label">UserName</label>
          <input type="text" className="form-control" id="inputUserName" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputId" className="form-label">ID</label>
          <input type="text" className="form-control" id="inputId" />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck" />
            <label className="form-check-label" htmlFor="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Sign in</button>
        </div>
      </form>
      </div>
        </div>
    )
}

export default Contact
