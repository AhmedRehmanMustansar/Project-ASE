import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { course } from '../../course.model';
import { CourseService } from '../../course.service';

@Component({
  selector: 'app-course-data-table',
  templateUrl: './course-data-table.component.html',
  styleUrls: ['./course-data-table.component.css']
})
export class CourseDataTableComponent implements OnInit {
  @Input() Filter!:boolean;
  courses:course[] = [];
  filter: course[] = [];
  constructor(private courseservice: CourseService, private nav: Router, private path: ActivatedRoute ) { }

  ngOnInit(): void {
  this.Filter= false;
  this.courses = this.courseservice.courses;
  }

  onEdit(id: number){
    this.nav.navigate(['edit-course/', id]);
  }
  onDelete(id:number){
    this.courseservice.onDelete(id);
  }

  onFilter(){
    this.filter = this.courseservice.filterarray;
    return true;
  }







}
