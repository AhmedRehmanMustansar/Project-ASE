import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { StudentDataTableComponent } from './student-list/student-data-table/student-data-table.component';
import { StudentFilterComponent } from './student-list/student-filter/student-filter.component';
import { StudentListComponent } from './student-list/student-list.component';


const student_routes : Routes = [
    { path: 'add-student', component: AddStudentComponent },
    { path: 'edit-student/:id', component: EditStudentComponent},
    { path: 'student-list', component: StudentListComponent, children: [
      {path: 'student-data-table', component: StudentDataTableComponent},
      {path: 'student-filter', component: StudentFilterComponent},
    ]},
  
  
  ];
  



@NgModule({
    imports: [RouterModule.forChild(student_routes)],
    exports: [RouterModule]
  })


export class StudentRoutingModule{

}