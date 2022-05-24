import {useState} from "react";
import {saveEmployee} from "../../services/EmployeeService";
import Tabs from "react-bootstrap/Tabs";
import {Tab} from "react-bootstrap";
import EmployeeModel from "../../model/EmployeeModel";
import {FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import {InputTextarea} from "primereact/inputtextarea";
import {Checkbox} from 'primereact/checkbox';
import {Switch} from '@material-ui/core';


export default function RegistrationPageComponent() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [phone, setPhone] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [gender, setGender] = useState('');
    const [retired, setRetired] = useState(false);
    const [maritalStatus, setMaritalStatus] = useState('');
    const [otherInformations, setOtherInformations] = useState('');
    const [salary, setSalary] = useState('');
    const [address, setAddress] = useState([]);
    const [street, setStreet] = useState('');


    const [languages, setLanguages] = useState([]);
    const [checked, setChecked] = useState(false);

    const switchHandler = (event) => {
        setRetired(event.target.retired);
    };


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


    const onLanguageChange = (e) => {
        let selectedLanguages = [...languages];
        if (e.checked)
            selectedLanguages.push(e.value);
        else
            selectedLanguages.splice(selectedLanguages.indexOf(e.value), 1);
        setLanguages(selectedLanguages);
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
                                        <input type="text" name="name" value={name}
                                               onChange={(e) => setName(e.target.value)} className="form-control"/>
                                    </div>
                                    <div className="form-group col-6">
                                        <label htmlFor="email">Email:</label>
                                        <input type="text" name="email" value={email}
                                               onChange={(e) => setEmail(e.target.value)} className="form-control"/>
                                    </div>

                                    <div className="form-group col-4">
                                        <label htmlFor="cpf">CPF:</label>
                                        <input type="text" name="cpf" value={cpf}
                                               onChange={(e) => setCpf(e.target.value)} className="form-control"/>
                                    </div>
                                    <div className="form-group col-4">
                                        <label htmlFor="phone">Phone:</label>
                                        <input type="text" name="phone" value={phone}
                                               onChange={(e) => setPhone(e.target.value)} className="form-control"/>
                                    </div>
                                    <div className="form-group col-4">
                                        <label htmlFor="birthDate">BirthDate:</label>
                                        <input type="datetime-local" name="birthDate" value={birthDate}
                                               onChange={(e) => setBirthDate(e.target.value)} className="form-control"/>
                                    </div>


                                    <div className="form-group col-2">
                                        <FormLabel id="gender">Gender</FormLabel>
                                        <RadioGroup name="gender" value={gender}
                                                    onChange={(e) => setGender(e.target.value)}>
                                            <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                                            <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                                        </RadioGroup>
                                    </div>

                                    <div className="form-group col-2">
                                        <FormLabel id="maritalStatus">Marital Status</FormLabel>
                                        <RadioGroup name="maritalStatus" value={maritalStatus}
                                                    onChange={(e) => setMaritalStatus(e.target.value)}>
                                            <FormControlLabel value="single" control={<Radio/>} label="Single"/>
                                            <FormControlLabel value="married" control={<Radio/>} label="Married"/>
                                            <FormControlLabel value="divorced" control={<Radio/>} label="Divorced"/>
                                        </RadioGroup>
                                    </div>

                                    <div className="form-group col-8">
                                        <FormLabel>Retired? </FormLabel>
                                        <FormControlLabel control={<Switch value={retired} onChange={switchHandler}/>}
                                                          label={''}/>
                                    </div>

                                    <div className="form-group col-6">
                                        <label htmlFor="otherInformations">Other Informations:</label>
                                        <InputTextarea rows={5} cols={80} value={otherInformations}
                                                       onChange={(e) => setOtherInformations(e.target.value)}/>
                                    </div>


                                    <div className="form-group col-12">
                                        <h5>Languages</h5>
                                        <div className="field-checkbox">
                                            <label htmlFor="language1">English</label>
                                            <Checkbox inputId="language1" name="languages" value="English"
                                                      onChange={onLanguageChange}
                                                      checked={languages.indexOf('English') !== -1}/>
                                        </div>
                                        <div className="field-checkbox">
                                            <label htmlFor="language2">Spanish</label>
                                            <Checkbox inputId="language2" name="languages" value="Spanish"
                                                      onChange={onLanguageChange}
                                                      checked={languages.indexOf('Spanish') !== -1}/>
                                        </div>
                                        <div className="field-checkbox">
                                            <label htmlFor="language3">Italian</label>
                                            <Checkbox inputId="language3" name="languages" value="Italian"
                                                      onChange={onLanguageChange}
                                                      checked={languages.indexOf('Italian') !== -1}/>
                                        </div>
                                    </div>



                                    <div className="form-group col-2">
                                        <label htmlFor="salary">Salary:</label>
                                        <input type="number" name="salary" value={salary}
                                               onChange={(e) => setSalary(e.target.value)} className="form-control"/>
                                    </div>

                                </div>
                            </div>
                        </Tab>

                        <Tab eventKey="address" title="Address">
                            <div className="card-body">
                                <div className="row">
                                    <div className="form-group col-6">
                                        <label htmlFor="street">street:</label>
                                        <input type="text" name="street" value={street}
                                               onChange={(e) => setStreet(e.target.value)} className="form-control"/>
                                    </div>
                                    <div className="form-group col-6">

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