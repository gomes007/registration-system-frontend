

export default class DependentModel {
    id;
    constructor(kinship = '', name = '', email= '', cpf= '', phone= '', birthDate= '', gender= '',
                otherInformations= '') {

        this.kinship = kinship;
        this.name = name;
        this.email = email;
        this.cpf = cpf;
        this.phone = phone;
        this.birthDate = birthDate;
        this.gender = gender;
        this.otherInformations = otherInformations;

    }
}