import {useState} from "react";
import {saveAddress, saveEmployee} from "../../services/EmployeeService";
import Tabs from "react-bootstrap/Tabs";
import {Tab} from "react-bootstrap";


export default function RegistrationPageComponent() {

    const employeeAndAddress = {
        name:"",
        phone: "",
        address: [
            {
                street: "",
                number: "",
                neighborhood: "",
                zipCode: "",
                complement: "",
                city: "",
                state: ""
            }
        ],

        items:[],

    }


    const [employees, setEmployees] = useState(employeeAndAddress);
    const [errorMessage, setErrorMessage] = useState('');
    const [infoMessage, setInfoMessage] = useState('');


    const saveEmployees = () => {
        saveEmployee(employees).then(() => {
            setInfoMessage('Saved with success!');
        }).catch((err) => {
            setErrorMessage('Unexpected error occurred.');
            console.log(err);
        })
    }


    const handleChange = (e) => {
        const {name, value} = e.target;
        setEmployees((prevState => {
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

                    <Tabs defaultActiveKey="profile" transition={false} id="noanim-tab-example" className="mb-3">

                        <Tab eventKey="profile" title="Profile" >
                            <div className="card-body">
                                <div className="row">
                                    <div className="form-group col-6">
                                        <label htmlFor="name">Name:</label>
                                        <input type="text" name="name" value={employees.name}
                                               onChange={(e) => handleChange(e)} className="form-control"/>
                                    </div>
                                    <div className="form-group col-6">
                                        <label htmlFor="street">street:</label>
                                        <input type="text" name="street" value={employees.address.street}
                                               onChange={(e) => handleChange(e)} className="form-control"/>
                                    </div>
                                    <div className="form-group col-6">

                                    </div>

                                </div>

                            </div>
                        </Tab>

                        <Tab eventKey="address" title="Address" >
                            <div >

                            </div>
                        </Tab>
                        <br/>

                    </Tabs>

                </div>
                <br/>
                <button className="btn btn-primary" onClick={() => saveEmployees()}>Save</button>
            </div>
        </div>
    )
}