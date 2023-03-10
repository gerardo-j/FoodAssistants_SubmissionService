export class submission {
    // string variables
    name: string;
    phone: string;
    address: string;
    distribution: string;
    residents: number;
    items: {
        grocery: string[];
        generalHygiene: string[];
        feminineHygiene: string[];
        cleaningAndHealth: string[];
    }
    // constructor consisting of our objects
    constructor(name: string, phone: string, address: string, distribution: string, residents: number, items: 
        {grocery: string[]; generalHygiene: string[]; feminineHygiene: string[]; cleaningAndHealth: string[];}) {
        this.name = name;
        this.phone = phone;
        this.address = address;
        this.distribution = distribution;
        this.residents = residents;
        this.items = items;
       }
}
