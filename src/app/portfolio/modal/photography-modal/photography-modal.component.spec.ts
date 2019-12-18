import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographyModalComponent } from './photography-modal.component';

describe('PhotographyModalComponent', () => {
  let component: PhotographyModalComponent;
  let fixture: ComponentFixture<PhotographyModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotographyModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotographyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
