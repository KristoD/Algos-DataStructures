class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
    }
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }

    static enrollStudents(...students) {
        // maybe send an email here
        console.log(student);
    }
}

let firstStudent = new Student("Colt", "Steele");
let secondStudent = new Student("Chris", "Xeris");

Student.enrollStudents([firstStudent, secondStudent]);
