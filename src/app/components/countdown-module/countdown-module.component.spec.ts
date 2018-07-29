import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownModuleComponent } from './countdown-module.component';

describe('CountdownModuleComponent', () => {
  let component: CountdownModuleComponent;
  let fixture: ComponentFixture<CountdownModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
