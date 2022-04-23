import React,{useRef} from 'react';
import  './Bond.css';
import signaturePad from 'react-signature-canvas';

const Bond = () => {

        let sigPad = useRef({})

    return (
        <div className="container-fluid my-auto mx-auto align-items-center d-flex justify-content-center ">
            <div className="container w-100 p-4">
                <h1 className="text-center">Add Bond</h1>
                <form>
                <div className="mb-3">
                        <div className="row">
                        <div className="col">
                                <label htmlFor="validationCustom03" className="form-label">Bond ID</label>
                                <input type="number" className="form-control" placeholder="Bond ID." min="0" id="validationCustom03" required />
                            </div>
                            <div className="col">
                                <label htmlFor="validationCustom03" className="form-label">Client ID</label>
                                <input type="number" className="form-control" placeholder="Client ID." min="0" id="validationCustom03" required />
                            </div>
                            <div className="col">
                                <label htmlFor="validationCustom03" className="form-label">Loan ID</label>
                                <input type="number" className="form-control" placeholder="Loan ID." min="0" id="validationCustom03" required />
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="validationCustom03" className="form-label">Bond Name</label>
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
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown button
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
                    <div className="mb-3">
                    <div className="form-check ">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Add Bond
                    </label>
                    </div>
                    <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Released Bond
                    </label>
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

export default Bond;
