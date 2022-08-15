import {useState} from "react";
import DependentModel from "../model/DependentModel";

const DependentTab = (props) => {

    const [kinship, setKinship] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [phone, setPhone] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [gender, setGender] = useState('');

    const [dependents, SetDependents] = useState([]);


    const clickSaveDependent = () => {
        const listDependent = dependents;
        listDependent.push(new DependentModel(kinship, name, email, cpf, phone, birthDate, gender));
        SetDependents(listDependent);
    }


    return (
        <div className="card-body">
            <div className="row">
                <div className="form-group col-6">
                    <label htmlFor="kinship">kinship:</label>
                    <input type="text" name="kinship" value={kinship}
                           onChange={(e) => setKinship(e.target.value)} className="form-control"/>
                </div>
                <div className="form-group col-6">
                    <label htmlFor="name">name:</label>
                    <input type="text" name="name" value={name}
                           onChange={(e) => setName(e.target.value)} className="form-control"/>
                </div>
                <div className="form-group col-6">
                    <label htmlFor="phone">phone:</label>
                    <input type="text" name="phone" value={phone}
                           onChange={(e) => setPhone(e.target.value)} className="form-control"/>
                </div>

            </div>
            <br/>

            <br/>
            <button className="btn btn-dark" onClick={clickSaveDependent}>Add Address</button>
        </div>
    )
}

export {DependentTab}
