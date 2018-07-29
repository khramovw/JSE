import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeModuleComponent } from './time-module.component';

describe('TimeModuleComponent', () => {
  let component: TimeModuleComponent;
  let fixture: ComponentFixture<TimeModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
