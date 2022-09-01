import AddressModel from "./AddressModel";

export default class EmployeeModel {
    id;
    constructor(name = '', email= '', cpf= '', phone= '', birthDate= '', gender= '',
                retired= false, maritalStatus= '', otherInformations= '', salary= '', languages= [],
                address = [], dependents = [], profilePhoto = '') {

        this.name = name;
        this.email = email;
        this.cpf = cpf;
        this.phone = phone;
        this.birthDate = birthDate;
        this.gender = gender;
        this.retired = retired;
        this.maritalStatus = maritalStatus;
        this.otherInformations = otherInformations;
        this.salary = salary;
        this.languages = languages;
        this.address = address;
        this.dependents = dependents;
        this.profilePhoto = profilePhoto;
    }
}