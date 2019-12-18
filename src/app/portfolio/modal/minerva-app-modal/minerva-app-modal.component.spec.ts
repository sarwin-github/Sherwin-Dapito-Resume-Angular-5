import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinervaAppModalComponent } from './minerva-app-modal.component';

describe('MinervaAppModalComponent', () => {
  let component: MinervaAppModalComponent;
  let fixture: ComponentFixture<MinervaAppModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinervaAppModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinervaAppModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
