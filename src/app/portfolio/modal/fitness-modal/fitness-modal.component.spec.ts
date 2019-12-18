import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessModalComponent } from './fitness-modal.component';

describe('FitnessModalComponent', () => {
  let component: FitnessModalComponent;
  let fixture: ComponentFixture<FitnessModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitnessModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
