import {Modal} from 'react-bootstrap';
import {useState} from "react";


const Dialog = (props) => {

    //console.log(props.address);

    const [street, setStreet] = useState(props.address.street);
    const [number, setNumber] = useState(props.address.number);
    const [neighborhood, setNeighborhood] = useState(props.address.neighborhood);
    const [zipCode, setZipCode] = useState(props.address.zipCode);
    const [complement, setComplement] = useState(props.address.complement);
    const [city, setCity] = useState(props.address.city);
    const [state, setState] = useState(props.address.state);

    return (
        <Modal show={props.dialogOpen}>

            <div className="modal-header">
                <h5 className="modal-title">Confirmation</h5>
                <button type="button" className="btn-close" onClick={() => props.setDialogOpen(false)}></button>
            </div>

            <div className="modal-body">
                <div className="row">
                    <div className="form-group col-6">
                        <label htmlFor="street">street:</label>
                        <input type="text" name="street" value={street}
                               onChange={(e) => setStreet(e.target.value)} className="form-control"/>
                    </div>

                    <div className="form-group col-2">
                        <label htmlFor="number">number:</label>
                        <input type="text" name="number" value={number}
                               onChange={(e) => setNumber(e.target.value)} className="form-control"/>
                    </div>
                    <div className="form-group col-3">
                        <label htmlFor="complement">complement:</label>
                        <input type="text" name="complement" value={complement}
                               onChange={(e) => setComplement(e.target.value)} className="form-control"/>
                    </div>
                    <div className="form-group col-2">
                        <label htmlFor="zipCode">zipCode:</label>
                        <input type="text" name="zipCode" value={zipCode}
                               onChange={(e) => setZipCode(e.target.value)} className="form-control"/>
                    </div>
                    <div className="form-group col-4">
                        <label htmlFor="state">state:</label>
                        <input type="text" name="state" value={state}
                               onChange={(e) => setState(e.target.value)} className="form-control"/>
                    </div>
                    <div className="form-group col-5">
                        <label htmlFor="city">city:</label>
                        <input type="text" name="city" value={city}
                               onChange={(e) => setCity(e.target.value)} className="form-control"/>
                    </div>
                </div>



            </div>

            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => props.setDialogOpen(false)}>Cancel
                </button>
                <button type="button" className="btn btn-danger">I'm sure!</button>
            </div>

        </Modal>
    );

};

export {Dialog};