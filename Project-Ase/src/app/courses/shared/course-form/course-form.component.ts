import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { course, field } from '../../course.model';
import { CourseService } from '../../course.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  @Input() id!:number;
  @Input() AddorEdit!: string;
  public addcourse!: FormGroup; 
  Course!: course;

  constructor(public courseservice: CourseService) { }

  ngOnInit(): void {

    if(this.AddorEdit === 'add'){
      this.addcourse = new FormGroup(
        {
          'name': new FormControl(null,[Validators.required]),
          'credithour': new FormControl(null,[Validators.required, Validators.pattern('[1|2|3]')]),
          'lab': new FormControl(null,[Validators.required, Validators.pattern('True|true|False|false|TRUE|FALSE')],),
          'subject': new FormControl(null, [Validators.required, Validators.pattern('science|history|arts')]),
        }
      );
    }
    else{
      this.Course = this.courseservice.findcourse(+this.id);
      this.addcourse = new FormGroup(
        {
          'name': new FormControl(this.Course.name,[Validators.required]),
          'credithour': new FormControl(this.Course.credithour,[Validators.required, Validators.pattern('[0|1|2|3]')]),
          'lab': new FormControl(this.Course.lab,[Validators.required, Validators.pattern('True|true|False|false|TRUE|FALSE')],),
          'subject': new FormControl(this.Course.Field, [Validators.required, Validators.pattern('science|history|arts')]),
        }
      );
    }
  }
  onSubmit(){
    if (this.addcourse.invalid) {
      alert("Cannot submit you have submitted Invalid information");
      return;
  }

  let Course = new course(0,this.addcourse.value.name,+this.addcourse.value.credithour,(this.addcourse.value.lab as boolean),(this.addcourse.value.subject as field));
  this.courseservice.AddCourse(Course);
}

onUpdate(){
  if (this.addcourse.invalid) {
    alert("Cannot submit you have submitted Invalid information");
    return;
}

let Course = new course(+this.id,this.addcourse.value.name,+this.addcourse.value.credithour,(this.addcourse.value.lab as boolean),(this.addcourse.value.subject as field));
this.courseservice.EditCourse(Course);
}



}
