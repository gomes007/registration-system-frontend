import {useState} from "react";
import {saveEmployee} from "../../services/EmployeeService";
import Tabs from "react-bootstrap/Tabs";
import {Tab} from "react-bootstrap";
import EmployeeModel from "../../model/EmployeeModel";
import {FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, Switch} from "@mui/material";



export default function RegistrationPageComponent() {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [phone, setPhone] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [gender, setGender] = useState('');
    const [retired, setRetired] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [otherInformations, setOtherInformations] = useState('');
    const [salary, setSalary] = useState('');
    const [languages, setLanguages] = useState([]);
    const [address, setAddress] = useState([]);

    const [street, setStreet] = useState('');



    const [errorMessage, setErrorMessage] = useState('');
    const [infoMessage, setInfoMessage] = useState('');


    const clickSaveEmployee = () => {
        const employee = new EmployeeModel(name, email, cpf, phone, birthDate, gender,
            retired, maritalStatus, otherInformations, salary, languages, address);
        saveEmployee(employee).then(() => {
            setInfoMessage('Saved with success!');
        }).catch((err) => {
            setErrorMessage('Unexpected error occurred.');
            console.log(err);
        })
    }




    return (
        <div className="container">
            <div className="pt-5">
                <div className="card">
                    <div className="card-header">
                        <h3>Registration Page</h3>
                    </div>
                    <Tabs defaultActiveKey="profile" transition={false} id="noanim-tab-example" className="mb-3">
                        <Tab eventKey="profile" title="Profile">
                            <div className="card-body">
                                <div className="row">
                                    <div className="form-group col-6">
                                        <label htmlFor="name">Name:</label>
                                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control"/>
                                    </div>
                                    <div className="form-group col-6">
                                        <label htmlFor="email">Email:</label>
                                        <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control"/>
                                    </div>

                                    <div className="form-group col-4">
                                        <label htmlFor="cpf">CPF:</label>
                                        <input type="text" name="cpf" value={cpf} onChange={(e) => setCpf(e.target.value)} className="form-control"/>
                                    </div>
                                    <div className="form-group col-4">
                                        <label htmlFor="phone">Phone:</label>
                                        <input type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control"/>
                                    </div>
                                    <div className="form-group col-4">
                                        <label htmlFor="birthDate">BirthDate:</label>
                                        <input type="datetime-local" name="birthDate" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} className="form-control"/>
                                    </div>

                                    <div className="form-group col-4">
                                        <FormLabel id="gender">Gender</FormLabel>
                                        <RadioGroup name="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                                        </RadioGroup>
                                        <div className="form-group col-4">
                                            <FormControl component="fieldset">
                                                <FormGroup aria-label="position" row>
                                                    <FormControlLabel
                                                        value={retired}
                                                        onChange={(e) => setRetired(e.target.value)}
                                                        control={<Switch color="primary" />}
                                                        label="Retired"
                                                        labelPlacement="start"
                                                    />
                                                </FormGroup>
                                            </FormControl>
                                            <div className="form-group col-4">

                                            </div>
                                        </div>
                                    </div>
                                    </div>
                            </div>
                        </Tab>

                        <Tab eventKey="address" title="Address">
                            <div className="card-body">
                                <div className="row">
                                <div className="form-group col-6">
                                    <label htmlFor="street">street:</label>
                                    <input type="text" name="street" value={street} onChange={(e) => setStreet(e.target.value)} className="form-control"/>
                                </div>
                                </div>
                            </div>
                        </Tab>
                        <br/>

                    </Tabs>

                </div>
                <br/>
                <button className="btn btn-primary" onClick={clickSaveEmployee}>Save</button>
            </div>
        </div>
    )
}