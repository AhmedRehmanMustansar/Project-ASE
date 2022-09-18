import { Component, Input, OnInit } from '@angular/core';
import { student } from '../../student.model';
import { StudentService } from '../../student.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-student-data-table',
  templateUrl: './student-data-table.component.html',
  styleUrls: ['./student-data-table.component.css']
})
export class StudentDataTableComponent implements OnInit {
  @Input() Filter!:boolean;
  students:student[] = [];
  filter: student[] = [];

 @Input() isfilter:boolean =false;

  constructor( private studentservice: StudentService, private nav : Router, private path: ActivatedRoute) { 

  }

  ngOnInit(): void {
   this.Filter= false;
   this.students = this.studentservice.students;
  }

  onEdit(id: number){
    this.nav.navigate(['edit-student/', id]);
  }
  onDelete(id:number){
    this.studentservice.onDelete(id);
  }

  onFilter(){
    this.filter = this.studentservice.array;
    return true;
  }

}
