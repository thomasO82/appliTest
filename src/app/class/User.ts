export class User{
    name: string;
    firstname: string;
    adress_mail: string;
    password: string;
    constructor(name: string, firstname: string, adress_mail: string, password: string){
        this.name = name;
        this.firstname = firstname;
        this.adress_mail = adress_mail;
        this.password = password;
    }
}