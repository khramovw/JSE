import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResoultComponent } from './search-resoult.component';

describe('SearchResoultComponent', () => {
  let component: SearchResoultComponent;
  let fixture: ComponentFixture<SearchResoultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResoultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResoultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
