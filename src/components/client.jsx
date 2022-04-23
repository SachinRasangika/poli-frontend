import React,{useRef} from 'react';
import  './client.css';
import signaturePad from 'react-signature-canvas';

const Client = () => {

        let sigPad = useRef({})

    return (
        <div className="container-fluid my-auto mx-auto align-items-center d-flex justify-content-center ">
            <div className="container w-100 p-4">
                <h1 className="text-center">Add Client</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="validationCustom03" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="validationCustom03" required />
                        <div className="invalid-feedback">
                            Please provide a Full Name .
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Address</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} id="validationCustom03" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="validationCustom03" className="form-label">Phone No.</label>
                        <input type="text" className="form-control" id="validationCustom03" required />
                        <div className="invalid-feedback">
                            Please provide a Phone no .
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="row">
                            <div className="col">
                                <label htmlFor="validationCustom03" className="form-label">NIC</label>
                                <input type="text" className="form-control" placeholder="*********V" id="validationCustom03" required />
                            </div>
                            <div className="col">
                                <label htmlFor="validationCustom03" className="form-label">ID</label>
                                <input type="number" className="form-control" placeholder="ID No." min="0" id="validationCustom03" required />
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formFile" className="form-label">Upload Photo</label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    <div className="signature">
                        <signaturePad
                          ref={sigPad}
                        />
                    </div>
                    <div className="col-12 ">
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Client;
