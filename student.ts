export class Student
{
    code: string;
    identifier: string;
    age: number;
    address: string;
    phone: number;
    email: string;
    career:string;
    
    constructor ( code: string, identifier: string, age: number, address: string, phone: number, email: string, career: string)
    {
        this.code = code;
        this.identifier = identifier;
        this.age = age;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.career = career;
    }

}