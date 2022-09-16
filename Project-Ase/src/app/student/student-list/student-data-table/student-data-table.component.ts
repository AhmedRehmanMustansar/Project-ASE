import { Component, OnInit } from '@angular/core';
import { student } from '../../student.model';
import { StudentService } from '../../student.service';

@Component({
  selector: 'app-student-data-table',
  templateUrl: './student-data-table.component.html',
  styleUrls: ['./student-data-table.component.css']
})
export class StudentDataTableComponent implements OnInit {
  
  students:student[] = [];


  constructor( private studentservice: StudentService) { 

  }

  ngOnInit(): void {
   this.students = this.studentservice.students;
  }

  onEdit(){
    
  }

}
