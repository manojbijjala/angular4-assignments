import { Component, Input } from '@angular/core';
import { Student } from '../Student';
import { Programs } from '../programs';

@Component({
    selector: 'app-student-data',
    templateUrl: './student-data.component.html',
    styleUrls: ['./student-data.component.css']
})
export class StudenntDataComponent {

    @Input()
    students: Array<Student> = [];

}
