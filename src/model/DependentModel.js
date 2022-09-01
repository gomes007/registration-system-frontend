import PersonalInformationModel from "./PersonalInformationModel";

export default class DependentModel {
  id;
  constructor(
    kinship = "",
    name = "",
    email = "",
    cpf = "",
    phone = "",
    birthDate = "",
    gender = "",
    otherInformations = ""
  ) {
    this.kinship = kinship;
    this.personalInformation = new PersonalInformationModel(
      name,
      email,
      cpf,
      phone,
      birthDate,
      gender,
      otherInformations
    );
  }
}
