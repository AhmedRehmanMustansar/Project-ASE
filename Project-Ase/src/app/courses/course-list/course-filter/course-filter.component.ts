import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { course, field } from '../../course.model';
import { CourseService } from '../../course.service';

@Component({
  selector: 'app-course-filter',
  templateUrl: './course-filter.component.html',
  styleUrls: ['./course-filter.component.css']
})
export class CourseFilterComponent implements OnInit {
  public searchform!:FormGroup;
  filter:boolean = false;
  @Output() b1 = new EventEmitter<boolean>();
  subjects =  Object.keys(field);
  constructor(private courseservice: CourseService) { }

  ngOnInit(): void {
    this.searchform = new FormGroup(
      {
        'name': new FormControl(null,),
        'credithours': new FormControl(null,Validators.pattern('[1,2,3]')),
        'lab': new FormControl(null,[Validators.pattern('true|false')],),
        'subject': new FormControl(null, Validators.required),
      }
    );
  }

 onSubmit(){
  
   let islab = (this.searchform.value.lab == "true"? true : (this.searchform.value.lab == "false" ?  false : (undefined as any)));
   let subject = (this.searchform.value.subject == 'arts'? field.arts : (this.searchform.value.subject === 'science'? field.science : (this.searchform.value.subject === 'history'? field.history: field.none)));
   let Course = new course(0,this.searchform.value.name, +this.searchform.value.credithours, islab ,subject);
    this.courseservice.filtercourse(Course);
    this.b1.emit(true);
   }

  

}
