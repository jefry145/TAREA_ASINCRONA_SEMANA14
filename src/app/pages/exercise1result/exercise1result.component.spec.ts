import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise1resultComponent } from './exercise1result.component';

describe('Exercise1resultComponent', () => {
  let component: Exercise1resultComponent;
  let fixture: ComponentFixture<Exercise1resultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercise1resultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise1resultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
