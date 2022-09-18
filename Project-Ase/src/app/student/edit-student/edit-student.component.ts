import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  id!: number;
  constructor( private path: ActivatedRoute) { 

  }

  ngOnInit(): void {
   this.id = this.path.snapshot.params['id'];
  }

}
