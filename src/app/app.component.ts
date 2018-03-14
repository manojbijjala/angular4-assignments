import { Component } from '@angular/core';
import { Student } from './student/Student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Student class';

  students: Array<Student> = [];

  onStudentAdded(student: Student) {
    this.students.push(student);
  }
}
