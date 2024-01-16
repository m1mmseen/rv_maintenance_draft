import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralDeviceFormComponent } from './general-device-form.component';

describe('GeneralDeviceFormComponent', () => {
  let component: GeneralDeviceFormComponent;
  let fixture: ComponentFixture<GeneralDeviceFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralDeviceFormComponent]
    });
    fixture = TestBed.createComponent(GeneralDeviceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
