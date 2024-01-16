import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlarmComponent } from './flarm.component';

describe('FlarmComponent', () => {
  let component: FlarmComponent;
  let fixture: ComponentFixture<FlarmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlarmComponent]
    });
    fixture = TestBed.createComponent(FlarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
