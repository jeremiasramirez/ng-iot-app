import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSpinnerComponent } from './icon-spinner.component';

describe('IconSpinnerComponent', () => {
  let component: IconSpinnerComponent;
  let fixture: ComponentFixture<IconSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconSpinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
