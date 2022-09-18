import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { student } from '../../student.model';
import { StudentService } from '../../student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {


 
  constructor( private studentservice:StudentService) { }
   @Input() AddorEdit!:string;
   @Input() id!:number;
   Student!: student;
   public addform!:FormGroup;
  ngOnInit(): void {
   

    if(this.AddorEdit === 'add'){
      this.addform = new FormGroup(
        {
          'name': new FormControl(null,[Validators.required]),
          'email': new FormControl(null,[Validators.required, Validators.email]),
          'cellno': new FormControl(null,[Validators.required, Validators.pattern('[1-9]*[0-9]+')],),
          'age': new FormControl(null, [Validators.required, Validators.pattern('[1-9]*[0-9]+')]),
          'address': new FormControl(null, [Validators.required]),
        }
      );
    }
    else{
      this.Student = this.studentservice.findstudent(+this.id);
      this.addform = new FormGroup(
        {
          'name': new FormControl(this.Student.name,[Validators.required]),
          'email': new FormControl(this.Student.email,[Validators.required, Validators.email]),
          'cellno': new FormControl(this.Student.cellno,[Validators.required, Validators.pattern('[1-9]*[0-9]+')],),
          'age': new FormControl(this.Student.age, [Validators.required, Validators.pattern('[1-9]*[0-9]+')]),
          'address': new FormControl(this.Student.address, [Validators.required]),
        }
      );
    }
   
  }

  onSubmit(){
    if (this.addform.invalid) {
      alert("Cannot submit you have submitted Invalid information");
      return;
  }
   let Student = new student(0,this.addform.value.name,this.addform.value.email,this.addform.value.cellno,+this.addform.value.age,this.addform.value.address);
   // add pseudo id later on
   this.studentservice.addStudent(Student);
  }

  onUpdate(){
    let Student = new student(this.id,this.addform.value.name,this.addform.value.email,this.addform.value.cellno,+this.addform.value.age,this.addform.value.address);
    this.studentservice.editStudent(Student);
  }
}
