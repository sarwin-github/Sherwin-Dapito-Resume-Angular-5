import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoskenesModalComponent } from './moskenes-modal.component';

describe('MoskenesModalComponent', () => {
  let component: MoskenesModalComponent;
  let fixture: ComponentFixture<MoskenesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoskenesModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoskenesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
