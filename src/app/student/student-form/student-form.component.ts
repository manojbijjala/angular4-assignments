import { Component, Output, EventEmitter } from '@angular/core';
import { Programs } from '../programs';
import { Student } from '../Student';

@Component({

    selector: 'app-student-form',
    templateUrl: './Student-form.component.html',

    styleUrls: ['./Student-form.component.css']
})

export class StudentFormComponent {
    public firstName: String;
    public lastName: String;
    public rollNumber: number;
    public program: Programs;

    @Output()
    studentAdded: EventEmitter<Student> = new EventEmitter<Student>();

    constructor() { }

    onSubmit() {

        this.studentAdded.emit(new Student(this.rollNumber, this.firstName, this.lastName, this.program));

        // resetting the form
        this.rollNumber = null;
        this.firstName = null;
        this.lastName = null;
        this.program = null;
    }
}
