import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorpanelComponent } from './errorpanel.component';

describe('ErrorpanelComponent', () => {
  let component: ErrorpanelComponent;
  let fixture: ComponentFixture<ErrorpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
