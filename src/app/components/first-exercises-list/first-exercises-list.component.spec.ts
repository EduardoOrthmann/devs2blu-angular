import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstExercisesListComponent } from './first-exercises-list.component';

describe('FirstExercisesListComponent', () => {
  let component: FirstExercisesListComponent;
  let fixture: ComponentFixture<FirstExercisesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstExercisesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstExercisesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
