import {useState} from "react";
import Employee from "../../models/Employee";
import {saveEmployee} from "../../services/EmployeeService";
import Tabs from "react-bootstrap/Tabs";
import {Tab} from "react-bootstrap";
import Address from "../../models/Address";


export default function RegistrationAdressPageComponent() {

    const [address, setAddress] = useState(new Address('', '', '', '', '', '', '',
        ''));



    const saveAddresses = () => {
        if (!address.street) {
            return;
        }
        saveEmployee(address).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
    }


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
        <div className="container">
            <div className="pt-5">
                <div className="card">
                    <div className="card-header">
                        <h3>Registration Page</h3>
                    </div>

                            <div className="card-body">
                                <div className="row">
                                    <div className="form-group col-6">
                                        <label htmlFor="street">Street:</label>
                                        <input type="text" name="street" value={address.street}
                                               onChange={(e) => handleChange(e)} required className="form-control"/>
                                    </div>

                                </div>
                                <br/>
                                <button className="btn btn-primary" onClick={() => saveAddresses()}>Save</button>
                            </div>
                </div>
            </div>
        </div>
    )
}