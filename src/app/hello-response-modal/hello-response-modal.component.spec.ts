import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloResponseModalComponent } from './hello-response-modal.component';

describe('HelloResponseModalComponent', () => {
  let component: HelloResponseModalComponent;
  let fixture: ComponentFixture<HelloResponseModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelloResponseModalComponent]
    });
    fixture = TestBed.createComponent(HelloResponseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
