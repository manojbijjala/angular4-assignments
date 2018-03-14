import { Component } from '@angular/core';
import { Programs } from './programs';

export class Student {
    constructor(
        public rollNumber: number,
        public firstName: String,
        public lastName: String,
        public program: Programs

    ) { }
}
