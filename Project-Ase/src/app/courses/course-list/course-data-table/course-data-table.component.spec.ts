import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDataTableComponent } from './course-data-table.component';

describe('CourseDataTableComponent', () => {
  let component: CourseDataTableComponent;
  let fixture: ComponentFixture<CourseDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseDataTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
