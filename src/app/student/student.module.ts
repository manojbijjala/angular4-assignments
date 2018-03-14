import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StudenntDataComponent } from './student-data/student-data.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        StudenntDataComponent,
        StudentFormComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    exports: [
        StudenntDataComponent,
        StudentFormComponent
    ],
    providers: [],
    bootstrap: []
})
export class StudentModule { }
