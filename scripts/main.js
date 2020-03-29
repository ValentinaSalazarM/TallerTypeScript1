import { Student } from './student.js';
import { dataCourses } from './dataCourses.js';
var coursesTbody = document.getElementById('courses');
var studentTbody = document.getElementById('student');
var student1 = new Student("201815243", "1.193.548.096", 18, "Calle 63 71 F 72", 3103010224, "kv.salazar@uniandes.edu.co", "Ingeniería de sistemas");
var btnfilterByName = document.getElementById("button-filterByName");
var inputSearchBox = document.getElementById("search-box");
var totalCreditElm = document.getElementById("total-credits");
btnfilterByName.onclick = function () { return applyFilterByName(); };
renderCoursesInTable(dataCourses);
renderStudentInformation(student1);
totalCreditElm.innerHTML = "" + getTotalCredits(dataCourses);
function renderCoursesInTable(courses) {
    console.log('Desplegando cursos');
    courses.forEach(function (course) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>" + course.name + "</td>\n                           <td>" + course.professor + "</td>\n                           <td>" + course.credits + "</td>";
        coursesTbody.appendChild(trElement);
    });
}
function renderStudentInformation(student) {
    console.log('Desplegando información del estudiante');
    var trElement1 = document.createElement("tr");
    trElement1.innerHTML = "<th scope=\"row\">C\u00F3digo</th> <td>" + student.code + "</td>";
    studentTbody.appendChild(trElement1);
    var trElement2 = document.createElement("tr");
    trElement2.innerHTML = "<th scope=\"row\">C\u00E9dula</th> <td>" + student.identifier + "</td>";
    studentTbody.appendChild(trElement2);
    var trElement3 = document.createElement("tr");
    trElement3.innerHTML = "<th scope=\"row\">Edad</th> <td>" + student.age + "</td>";
    studentTbody.appendChild(trElement3);
    var trElement4 = document.createElement("tr");
    trElement4.innerHTML = "<th scope=\"row\">Direcci\u00F3n</th> <td>" + student.address + "</td>";
    studentTbody.appendChild(trElement4);
    var trElement5 = document.createElement("tr");
    trElement5.innerHTML = "<th scope=\"row\">Tel\u00E9fono</th> <td>" + student.phone + "</td>";
    studentTbody.appendChild(trElement5);
    var trElement6 = document.createElement("tr");
    trElement6.innerHTML = "<th scope=\"row\">Correo</th> <td>" + student.email + "</td>";
    studentTbody.appendChild(trElement6);
    var trElement7 = document.createElement("tr");
    trElement7.innerHTML = "<th scope=\"row\">Carrera</th> <td>" + student.career + "</td>";
    studentTbody.appendChild(trElement7);
}
function applyFilterByName() {
    var text = inputSearchBox.value;
    text = (text == null) ? '' : text;
    clearCoursesInTable();
    var coursesFiltered = searchCourseByName(text, dataCourses);
    renderCoursesInTable(coursesFiltered);
}
function searchCourseByName(nameKey, courses) {
    return nameKey === '' ? dataCourses : courses.filter(function (c) {
        return c.name.match(nameKey);
    });
}
function getTotalCredits(courses) {
    var totalCredits = 0;
    courses.forEach(function (course) { return totalCredits = totalCredits + course.credits; });
    return totalCredits;
}
function clearCoursesInTable() {
    while (coursesTbody.hasChildNodes()) {
        if (coursesTbody.firstChild != null) {
            coursesTbody.removeChild(coursesTbody.firstChild);
        }
    }
}
