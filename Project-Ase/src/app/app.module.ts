import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseRoutingModule } from './courses/course-routing.module';
import { CourseService } from './courses/course.service';
import { CoursesModule } from './courses/courses.module';
import { StudentRoutingModule } from './student/student-routing.module';
import { StudentModule } from './student/student.module';
import { StudentService } from './student/student.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoursesModule,
    StudentModule,
    StudentRoutingModule,
    CourseRoutingModule

  ],
  providers: [StudentService,CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
