import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentFormComponent } from './shared/student-form/student-form.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDataTableComponent } from './student-list/student-data-table/student-data-table.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { StudentFilterComponent } from './student-list/student-filter/student-filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';




@NgModule({
  declarations: [
    StudentListComponent,
    StudentDataTableComponent,
    StudentFilterComponent,
    AddStudentComponent,
    EditStudentComponent,
    StudentFormComponent,
  ],
  
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  exports: [StudentListComponent,AddStudentComponent],
})
export class StudentModule { }
