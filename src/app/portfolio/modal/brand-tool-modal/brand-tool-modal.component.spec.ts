import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandToolModalComponent } from './brand-tool-modal.component';

describe('BrandToolModalComponent', () => {
  let component: BrandToolModalComponent;
  let fixture: ComponentFixture<BrandToolModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandToolModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandToolModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
