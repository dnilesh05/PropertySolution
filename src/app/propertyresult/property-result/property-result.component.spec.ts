import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyResultComponent } from './property-result.component';

describe('PropertyResultComponent', () => {
  let component: PropertyResultComponent;
  let fixture: ComponentFixture<PropertyResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
