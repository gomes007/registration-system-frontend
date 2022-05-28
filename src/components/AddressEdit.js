import {forwardRef, useEffect, useImperativeHandle, useState} from 'react';
import {Modal} from 'react-bootstrap';
import AddressModel from "../model/AddressModel";


const AddressEdit = forwardRef((props, ref) => {

    useImperativeHandle(ref, () => ({
        showAddressModal() {
            setTimeout(() => {
                setShow(true);
            }, 0);

        }
    }));


    useEffect(() => {
        setAddress(props.address);
    }, [props.address]);


    const [address, setAddress] = useState(new AddressModel('', '', '', '', '', '', ''));

    const [errorMessage, setErrorMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [show, setShow] = useState(false);


    const saveAddressDb = (e) => {
        e.preventDefault();
    };


    const handleChange = (e) => {
        const {name, value} = e.target;
        setAddress((prevState => {
            return {
                ...prevState,
                [name]: value
            };
        }));
    };

    return (
        <Modal show={show}>
            <form onSubmit={(e) => saveAddressDb(e)}
                  noValidate
                  className={submitted ? 'was-validated' : ''}>

                <div className="modal-header">
                    <h5 className="modal-title">Addresses</h5>
                    <button type="button" className="btn-close" onClick={() => setShow(false)}></button>
                </div>

                <div className="modal-body">

                    {errorMessage &&
                        <div className="alert alert-danger">
                            {errorMessage}
                        </div>
                    }

                    <div className="row">
                        <div className="form-group col-6">
                            <label htmlFor="street">street:</label>
                            <input type="text" name="street" value={address.street}
                                   onChange={(e) => handleChange(e)} className="form-control"/>
                        </div>

                        <div className="form-group col-2">
                            <label htmlFor="number">number:</label>
                            <input type="text" name="number" value={address.number}
                                   onChange={(e) => handleChange(e)} className="form-control"/>
                        </div>
                        <div className="form-group col-3">
                            <label htmlFor="complement">complement:</label>
                            <input type="text" name="complement" value={address.complement}
                                   onChange={(e) => handleChange(e)} className="form-control"/>
                        </div>
                        <div className="form-group col-2">
                            <label htmlFor="zipCode">zipCode:</label>
                            <input type="text" name="zipCode" value={address.zipCode}
                                   onChange={(e) => handleChange(e)} className="form-control"/>
                        </div>
                        <div className="form-group col-4">
                            <label htmlFor="state">state:</label>
                            <input type="text" name="state" value={address.state}
                                   onChange={(e) => handleChange(e)} className="form-control"/>
                        </div>
                        <div className="form-group col-5">
                            <label htmlFor="city">city:</label>
                            <input type="text" name="city" value={address.city}
                                   onChange={(e) => handleChange(e)} className="form-control"/>
                        </div>

                    </div>
                </div>


                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={() => setShow(false)}>Close</button>
                    <button type="submit" className="btn btn-primary">Save Changes</button>
                </div>

            </form>
        </Modal>
    )

})

export {AddressEdit};