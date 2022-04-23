import React,{useRef} from 'react';
import  './Loan.css';
import signaturePad from 'react-signature-canvas';

const Loan = () => {

        let sigPad = useRef({})

    return (
        <div className="container-fluid my-auto mx-auto align-items-center d-flex justify-content-center ">
        <div className="container w-100 p-4">
            <h1 className="text-center">Add Loan</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="validationCustom03" className="form-label">Loan Name</label>
                    <input type="text" className="form-control" id="validationCustom03" required />
                    <div className="invalid-feedback">
                        Please provide a Full Name .
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Details</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} id="validationCustom03" required />
                </div>
                <div className="dropdown mb-3">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
          Type
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
          <li><button className="dropdown-item" type="button">Action</button></li>
          <li><button className="dropdown-item" type="button">Another action</button></li>
          <li><button className="dropdown-item" type="button">Something else here</button></li>
        </ul>
      </div>
                <div className="mb-3">
                    <div className="row">
                        <div className="col">
                            <label htmlFor="validationCustom03" className="form-label">Intrest %</label>
                            <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">$</span>
        </div>
        <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
        <div className="input-group-append">
          <span className="input-group-text">.00</span>
        </div>
      </div>
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">Upload Photo</label>
                    <input className="form-control" type="file" id="formFile" />
                </div>
                <div className="col-12 ">
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>
            </form>
        </div>
    </div>
    );
}

export default Loan;