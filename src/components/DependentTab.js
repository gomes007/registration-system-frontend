import {useState} from "react";
import DependentModel from "../model/DependentModel";
import {DependentTable} from "./DependentTable";

const DependentTab = (props) => {

    const [kinship, setKinship] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [phone, setPhone] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [gender, setGender] = useState('');

    const [dependents, setDependents] = useState([]);


    const clickSaveDependent = () => {
        const listDependent = dependents;
        listDependent.push(new DependentModel(kinship, name, email, cpf, phone, birthDate, gender));
        setDependents(listDependent);
        props.onDependentChange(listDependent);
        cleanFields();
    }

    function cleanFields() {
        setKinship('');
        setName('');
        setEmail('');
        setCpf('');
        setPhone('');
        setBirthDate('');
        setGender('');
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
                <div className="form-group col-6">
                    <label htmlFor="email">email:</label>
                    <input type="text" name="email" value={email}
                           onChange={(e) => setEmail(e.target.value)} className="form-control"/>
                </div>
                <div className="form-group col-6">
                    <label htmlFor="cpf">cpf:</label>
                    <input type="text" name="cpf" value={cpf}
                           onChange={(e) => setCpf(e.target.value)} className="form-control"/>
                </div>
                <div className="form-group col-6">
                    <label htmlFor="birthDate">birthDate:</label>
                    <input type="date" name="birthDate" value={birthDate}
                           onChange={(e) => setBirthDate(e.target.value)} className="form-control"/>
                </div>
                <div className="form-group col-6">
                    <label htmlFor="gender">gender:</label>
                    <select name="gender" value={gender} onChange={(e) => setGender(e.target.value)} className="form-control">
                        <option value={""}>Select Gender</option>
                        <option value={"male"}>M</option>
                        <option value={"female"}>F</option>
                    </select>
                </div>

            </div>
            <br/>
                <DependentTable items={dependents} setDependent={setDependents}/>
            <br/>

            <button className="btn btn-dark" onClick={clickSaveDependent}>Add FamilyMembers</button>
        </div>
    )
}

export {DependentTab}
