import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCourseComponent } from './add-course/add-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { CourseFormComponent } from './shared/course-form/course-form.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseFilterComponent } from './course-list/course-filter/course-filter.component';
import { CourseDataTableComponent } from './course-list/course-data-table/course-data-table.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddCourseComponent,
    EditCourseComponent,
    CourseFormComponent,
    CourseListComponent,
    CourseFilterComponent,
    CourseDataTableComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class CoursesModule { }
