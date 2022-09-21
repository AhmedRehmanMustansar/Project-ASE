import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { student } from '../../student.model';
import { StudentService } from '../../student.service';

@Component({
  selector: 'app-student-filter',
  templateUrl: './student-filter.component.html',
  styleUrls: ['./student-filter.component.css']
})
export class StudentFilterComponent implements OnInit {
  public searchform!:FormGroup;
  filter:boolean = false;
  @Output() b1 = new EventEmitter<boolean>();

  constructor(private studentservice: StudentService) { }

  ngOnInit(): void {
    this.searchform = new FormGroup(
      {
        'name': new FormControl(null,),
        'email': new FormControl(null,),
        'cellno': new FormControl(null,[Validators.pattern('[1-9]*[0-9]+')],),
        'age': new FormControl(null, [Validators.pattern('[1-9]*[0-9]+')]),
        'address': new FormControl(null),
      }
    );
  }

 onSubmit(){
  let Student = new student(this.searchform.value.name, this.searchform.value.email,this.searchform.value.cellno,this.searchform.value.age,this.searchform.value.address);
  this.studentservice.filterstudent(Student);
  this.b1.emit(!this.filter);

 }

}
