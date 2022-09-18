import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  id!: number;
  constructor(private path: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.path.snapshot.params['id'];
  }

}
