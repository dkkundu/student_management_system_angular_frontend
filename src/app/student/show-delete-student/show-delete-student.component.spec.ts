import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDeleteStudentComponent } from './show-delete-student.component';

describe('ShowDeleteStudentComponent', () => {
  let component: ShowDeleteStudentComponent;
  let fixture: ComponentFixture<ShowDeleteStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDeleteStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDeleteStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
