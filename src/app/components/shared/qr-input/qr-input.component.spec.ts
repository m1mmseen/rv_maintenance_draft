import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrInputComponent } from './qr-input.component';

describe('QrInputComponent', () => {
  let component: QrInputComponent;
  let fixture: ComponentFixture<QrInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QrInputComponent]
    });
    fixture = TestBed.createComponent(QrInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
