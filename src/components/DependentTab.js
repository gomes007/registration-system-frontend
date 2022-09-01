import { useCallback, useState } from "react";
import DependentModel from "../model/DependentModel";
import { DependentsTable } from "./DependentsTable";

const DependentTab = ({onDependentsChange}) => {
  const [kinship, setKinship] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");

  const [dependents, setDependents] = useState([]);

  const handleKinship = useCallback(
    (e) => {
      const value = e.target.value;
      setKinship(value);
    },
    [kinship]
  );

  const handleName = useCallback(
    (e) => {
      const value = e.target.value;
      setName(value);
    },
    [name]
  );

  const handlePhone = useCallback(
    (e) => {
      const value = e.target.value;
      setPhone(value);
    },
    [phone]
  );

  const handleEmail = useCallback(
    (e) => {
      const value = e.target.value;
      setEmail(value);
    },
    [email]
  );

  const handleCPF = useCallback(
    (e) => {
      const value = e.target.value;
      setCpf(value);
    },
    [cpf]
  );

  const handleBirthDate = useCallback(
    (e) => {
      const value = e.target.value;
      setBirthDate(value);
    },
    [birthDate]
  );

  const handleGender = useCallback(
    (e) => {
      const value = e.target.value;
      setGender(value);
    },
    [gender]
  );

  const cleanFields = useCallback(() => {
    setKinship("");
    setName("");
    setEmail("");
    setCpf("");
    setPhone("");
    setBirthDate("");
    setGender("");
  }, []);

  const clickSaveDependent = useCallback(() => {
    const listDependent = dependents;
    listDependent.push(
      new DependentModel(kinship, name, email, cpf, phone, birthDate, gender)
    );
    setDependents(listDependent);
    onDependentsChange(listDependent);
    cleanFields();
  }, [kinship, name, email, cpf, phone, birthDate, gender, dependents]);

  return (
    <div className="card-body">
      <div className="row">
        <div className="form-group col-6">
          <label htmlFor="kinship">kinship:</label>
          <input
            type="text"
            name="kinship"
            value={kinship}
            onChange={handleKinship}
            className="form-control"
          />
        </div>

        <div className="form-group col-6">
          <label htmlFor="name">name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleName}
            className="form-control"
          />
        </div>

        <div className="form-group col-6">
          <label htmlFor="phone">phone:</label>
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={handlePhone}
            className="form-control"
          />
        </div>

        <div className="form-group col-6">
          <label htmlFor="email">E-mail:</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleEmail}
            className="form-control"
          />
        </div>

        <div className="form-group col-6">
          <label htmlFor="cpf">Social Code:</label>
          <input
            type="text"
            name="cpf"
            value={cpf}
            onChange={handleCPF}
            className="form-control"
          />
        </div>

        <div className="form-group col-6">
          <label htmlFor="birthDate">Birth Date:</label>
          <input
            type="date"
            name="birthDate"
            value={birthDate}
            onChange={handleBirthDate}
            className="form-control"
          />
        </div>

        <div className="form-group col-6">
          <label htmlFor="gender">Gender:</label>
          <select
            name="gender"
            value={gender}
            onChange={handleGender}
            className="form-control"
          >
            <option value={""}>Select Gender</option>
            <option value={"male"}>M</option>
            <option value={"female"}>F</option>
          </select>
        </div>
      </div>
      <br />

      <DependentsTable dependents={dependents} />

      <br />
      <button className="btn btn-dark" onClick={clickSaveDependent}>
        Add Dependent
      </button>
    </div>
  );
};

export { DependentTab };
