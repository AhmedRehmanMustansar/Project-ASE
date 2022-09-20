import { Component, Input, OnInit } from '@angular/core';
import {  FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { course } from 'src/app/courses/course.model';
import { CourseService } from 'src/app/courses/course.service';
import { student } from '../../student.model';
import { StudentService } from '../../student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  constructor( private studentservice:StudentService, private courseservice: CourseService) { }
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
          'courses': new FormArray([]),
        }
      );
    }
    else{
      this.Student = this.studentservice.findstudent(+this.id);
      console.log(this.Student);
      this.addform = new FormGroup(
        {
          'name': new FormControl(this.Student.name,[Validators.required]),
          'email': new FormControl(this.Student.email,[Validators.required, Validators.email]),
          'cellno': new FormControl(this.Student.cellno,[Validators.required, Validators.pattern('[1-9]*[0-9]+')],),
          'age': new FormControl(this.Student.age, [Validators.required, Validators.pattern('[1-9]*[0-9]+')]),
          'address': new FormControl(this.Student.address, [Validators.required]),
          'courses': new FormArray([]),
        }
      );
    }
   
  }





  onSubmit(){
    if (this.addform.invalid) {
      alert("Cannot submit you have submitted Invalid information");
      return;
  }

  // adding student and the courses he is enlisted in
   let Student = new student(0,this.addform.value.name,this.addform.value.email,this.addform.value.cellno,+this.addform.value.age,this.addform.value.address, (this.addform.value.courses as string[]));
   this.studentservice.addStudent(Student);

  
    
   alert("Student has been added");
  }

  onUpdate(){
    let Student = new student(this.id,this.addform.value.name,this.addform.value.email,this.addform.value.cellno,+this.addform.value.age,this.addform.value.address,(this.addform.value.courses as string[]));
    this.studentservice.editStudent(Student);
    alert("Student has been edited");
  }

  onAddCourse(){
    const control = new FormControl(null,[Validators.required, this.coursemismatchValidator.bind(this)]);
    (<FormArray>this.addform.get('courses')).push(control);
  }

  getControls() {
    return (<FormArray>this.addform.get('courses')).controls;
  }

  coursemismatchValidator(control: FormControl){
     let coursename = [];
     for( let x =0; x < this.courseservice.courses.length; ++x){
       coursename.push(this.courseservice.courses[x].name);
     }
     console.log(control.value);
     let checkmismatch = coursename.includes((control.value as string));
     console.log(checkmismatch);
    if(!checkmismatch){
      return {"mismatch":true};
    }
   return null;
  }


}