import { Course } from './course.js';
import { Student } from './student.js';
import { dataCourses } from './dataCourses.js';
import { dataStudent } from './dataStudent.js';


let coursesTbody: HTMLElement = document.getElementById('courses')!;
let studentTbody: HTMLElement = document.getElementById('student')!;
let student1:Student = new Student ("201815243", "1.193.548.096", 18, "Calle 63 71 F 72", 3103010224, "kv.salazar@uniandes.edu.co", "Ingeniería de sistemas");

const btnfilterByName: HTMLElement = document.getElementById("button-filterByName")!;
const btnfilterByCredits: HTMLElement = document.getElementById("button-filterByCredits")!;

const inputSearchBox: HTMLInputElement = <HTMLInputElement>document.getElementById("search-box")!;
const minCredits: HTMLInputElement = <HTMLInputElement>document.getElementById("minimum")!;
const maxCredits: HTMLInputElement = <HTMLInputElement>document.getElementById("maximum")!;

const totalCreditElm: HTMLElement = document.getElementById("total-credits")!;


btnfilterByName.onclick = () => applyFilterByName();
btnfilterByCredits.onclick = () => applyFilterByCredits();


renderCoursesInTable(dataCourses);
renderStudentInformation(student1);

totalCreditElm.innerHTML = `${getTotalCredits(dataCourses)}`


function renderCoursesInTable(courses: Course[]): void {
  console.log('Desplegando cursos');
  courses.forEach((course) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${course.name}</td>
                           <td>${course.professor}</td>
                           <td>${course.credits}</td>`;
    coursesTbody.appendChild(trElement);
  });
}

function renderStudentInformation(student: Student): void {
  console.log('Desplegando información del estudiante');

  let trElement1 = document.createElement("tr");
  trElement1.innerHTML = `<th scope="row">Código</th> <td>${student.code}</td>`;
  studentTbody.appendChild (trElement1);

  let trElement2 = document.createElement ("tr");
  trElement2.innerHTML = `<th scope="row">Cédula</th> <td>${student.identifier}</td>`;
  studentTbody.appendChild (trElement2);

  let trElement3 = document.createElement("tr");
  trElement3.innerHTML = `<th scope="row">Edad</th> <td>${student.age}</td>`;
  studentTbody.appendChild (trElement3);

  let trElement4 = document.createElement("tr");
  trElement4.innerHTML = `<th scope="row">Dirección</th> <td>${student.address}</td>`;
  studentTbody.appendChild (trElement4);

  
  let trElement5 = document.createElement("tr");
  trElement5.innerHTML = `<th scope="row">Teléfono</th> <td>${student.phone}</td>`;
  studentTbody.appendChild (trElement5);

  
  let trElement6 = document.createElement("tr");
  trElement6.innerHTML = `<th scope="row">Correo</th> <td>${student.email}</td>`;
  studentTbody.appendChild (trElement6);

  let trElement7 = document.createElement("tr");
  trElement7.innerHTML = `<th scope="row">Carrera</th> <td>${student.career}</td>`;
  studentTbody.appendChild (trElement7);

}


function applyFilterByName() {
  let text = inputSearchBox.value;
  text = (text == null) ? '' : text;
  clearCoursesInTable();
  let coursesFiltered: Course[] = searchCourseByName(text, dataCourses);
  renderCoursesInTable(coursesFiltered);
}

function applyFilterByCredits() {
  let number1 = minCredits.value;
  let number2 = maxCredits.value;
  
  number1 = (number1 == null) ? '' : number1;
  number2 = (number2 == null) ? '' : number2;

  clearCoursesInTable();
  let coursesFiltered: Course[] = searchCourseByCredits(number1, number2, dataCourses);
  renderCoursesInTable(coursesFiltered);
}

function searchCourseByCredits(min: string, max: string, courses: Course[]) {
  return (min && max ) === '' ? dataCourses : courses.filter(c =>
    c.credits >= parseInt(min) && c.credits <= parseInt (max));
}

function searchCourseByName(nameKey: string, courses: Course[]) {
  return nameKey === '' ? dataCourses : courses.filter(c =>
    c.name.match(nameKey));
}


function getTotalCredits(courses: Course[]): number {
  let totalCredits: number = 0;
  courses.forEach((course) => totalCredits = totalCredits + course.credits);
  return totalCredits;
}

function clearCoursesInTable() {
  while (coursesTbody.hasChildNodes()) {
    if (coursesTbody.firstChild != null) {
      coursesTbody.removeChild(coursesTbody.firstChild);

    }
  }
}
