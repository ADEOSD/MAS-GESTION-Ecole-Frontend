import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListstagesComponent } from './liststages.component';

describe('ListstagesComponent', () => {
  let component: ListstagesComponent;
  let fixture: ComponentFixture<ListstagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListstagesComponent]
    });
    fixture = TestBed.createComponent(ListstagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
