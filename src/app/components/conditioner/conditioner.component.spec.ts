import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionerComponent } from './conditioner.component';

describe('ConditionerComponent', () => {
  let component: ConditionerComponent;
  let fixture: ComponentFixture<ConditionerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
