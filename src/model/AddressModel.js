
export default class AddressModel  {
    id;
    constructor(street= '', number= '', neighborhood= '', zipCode= '', complement= '', city= '', state= '') {
        this.street = street;
        this.number = number;
        this.neighborhood = neighborhood;
        this.zipCode = zipCode;
        this.complement = complement;
        this.city = city;
        this.state = state;
    }

}