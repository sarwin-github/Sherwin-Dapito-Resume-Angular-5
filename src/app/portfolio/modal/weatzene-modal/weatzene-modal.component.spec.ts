import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatzeneModalComponent } from './weatzene-modal.component';

describe('WeatzeneModalComponent', () => {
  let component: WeatzeneModalComponent;
  let fixture: ComponentFixture<WeatzeneModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatzeneModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatzeneModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
