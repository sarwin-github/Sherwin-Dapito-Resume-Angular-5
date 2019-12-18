import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DentistryModalComponent } from './dentistry-modal.component';

describe('DentistryModalComponent', () => {
  let component: DentistryModalComponent;
  let fixture: ComponentFixture<DentistryModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DentistryModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DentistryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
