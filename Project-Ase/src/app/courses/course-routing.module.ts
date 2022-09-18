import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { CourseDataTableComponent } from './course-list/course-data-table/course-data-table.component';
import { CourseFilterComponent } from './course-list/course-filter/course-filter.component';
import { CourseListComponent } from './course-list/course-list.component';
import { EditCourseComponent } from './edit-course/edit-course.component';


const course_routes : Routes = [
    { path: 'add-course', component: AddCourseComponent },
    { path: 'edit-course/:id', component: EditCourseComponent},
    { path: 'course-list', component: CourseListComponent, children: [
      {path: 'course-data-table', component: CourseDataTableComponent},
      {path: 'course-filter', component: CourseFilterComponent},
    ]},
  
  
  ];
  



@NgModule({
    imports: [RouterModule.forChild(course_routes)],
    exports: [RouterModule]
  })


export class CourseRoutingModule{

}