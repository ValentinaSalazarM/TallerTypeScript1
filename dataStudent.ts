import {Student} from './student.js';

let student1:Student = new Student ("201815243", "1.193.548.096", 18, "Calle 63 71 F 72", 3103010224, "kv.salazar@uniandes.edu.co", "Ingeniería de sistemas");

export const dataStudent = [ student1.code, student1.identifier, student1.age, student1.address, student1.phone, student1.email, student1.career];