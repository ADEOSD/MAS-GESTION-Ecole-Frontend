import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClassesComponent } from './list-classes.component';

describe('ListClassesComponent', () => {
  let component: ListClassesComponent;
  let fixture: ComponentFixture<ListClassesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListClassesComponent]
    });
    fixture = TestBed.createComponent(ListClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
