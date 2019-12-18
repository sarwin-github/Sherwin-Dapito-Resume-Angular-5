import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelModalComponent } from './travel-modal.component';

describe('TravelModalComponent', () => {
  let component: TravelModalComponent;
  let fixture: ComponentFixture<TravelModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
