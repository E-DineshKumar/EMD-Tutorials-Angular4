import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadcourseComponent } from './readcourse.component';

describe('ReadcourseComponent', () => {
  let component: ReadcourseComponent;
  let fixture: ComponentFixture<ReadcourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadcourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
