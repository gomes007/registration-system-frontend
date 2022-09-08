import {Modal} from 'react-bootstrap';
import {useEffect, useState} from "react";
import DependentModel from "../model/DependentModel";


const DependentDialog = (props) => {

    const [kinship, setKinship] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [phone, setPhone] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [gender, setGender] = useState('');


    // useEffect(() => {
    //     setKinship(props.dependent.kinship ?? '');
    //     // setName(props.dependent.personalInformation.name ?? '');
    //     // setEmail(props.dependent.personalInformation.email ?? '');
    //     // setCpf(props.dependent.personalInformation.cpf ?? '');
    //     // setPhone(props.dependent.personalInformation.phone ?? '');
    //     // setBirthDate(props.dependent.personalInformation.birthDate ?? '');
    //     // setGender(props.dependent.personalInformation.gender ?? '');
    // }, [props.dependent])

    useEffect(() => {
        setKinship(props.dependents.kinship ?? '');
        // setCpf(props.dependents.personalInformation.cpf ?? '');
    }, [props.dependents]);


    const clickConfirm = () => {
        props.confirmEdit(new DependentModel(kinship, name, email, cpf, phone, birthDate, gender));
        props.setDialogOpen(false);
    }

    return (
        <Modal show={props.dialogOpen}>

            <div className="modal-header">
                <h5 className="modal-title">Confirmation</h5>
                <button type="button" className="btn-close" onClick={() => props.setDialogOpen(false)}></button>
            </div>

            <div className="modal-body">
                <div className="row">
                    <div className="form-group col-6">
                        <label htmlFor="kinship">kinship:</label>
                        <input type="text" name="kinship" value={kinship}
                               onChange={(e) => setKinship(e.target.value)} className="form-control"/>
                    </div>
                    <div className="form-group col-6">
                        <label htmlFor="cpf">cpf:</label>
                        <input type="text" name="cpf" value={cpf}
                               onChange={(e) => setCpf(e.target.value)} className="form-control"/>
                    </div>
                </div>
            </div>

            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => props.setDialogOpen(false)}>Cancel</button>
                <button type="button" onClick={clickConfirm} className="btn btn-danger">I'm sure!</button>
            </div>

        </Modal>
    );

};

export {DependentDialog};
