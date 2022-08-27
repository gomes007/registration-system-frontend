export default class PersonalInformationModel {
    id;
    constructor(name = '', email= '', cpf= '', phone= '', birthDate= '', gender= '',
                otherInformations= '') {

        this.name = name;
        this.email = email;
        this.cpf = cpf;
        this.phone = phone;
        this.birthDate = birthDate;
        this.gender = gender;
        this.otherInformations = otherInformations;

    }
}
