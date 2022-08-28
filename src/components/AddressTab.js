import {useState} from "react";
import AddressModel from "../model/AddressModel";
import {AddressTable} from "./AddressTable";



export default function AddressTab({onAddressChange}) {


    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [complement, setComplement] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    const [address, setAddress] = useState([]);


    const clickSaveAddress = () => {
        const listAddress = address;
        listAddress.push(new AddressModel(street, number, neighborhood, zipCode, complement, city, state));
        setAddress(listAddress);
        onAddressChange(listAddress);
        cleanAddressField();
    }


    function cleanAddressField() {
        setStreet('');
        setNumber('');
        setNeighborhood('');
        setComplement('');
        setZipCode('');
        setComplement('');
        setCity('');
        setState('');
    }


    return (
        <div className="card-body">
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
                           onChange={(e) => setComplement(e.target.value)}
                           className="form-control"/>
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
            <br/>
            <AddressTable items={address} setAddress={setAddress}/>
            <br/>
            <button className="btn btn-dark" onClick={clickSaveAddress}>Add Address</button>
        </div>
    )
}
