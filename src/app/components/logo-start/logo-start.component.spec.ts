import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoStartComponent } from './logo-start.component';

describe('LogoStartComponent', () => {
  let component: LogoStartComponent;
  let fixture: ComponentFixture<LogoStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
