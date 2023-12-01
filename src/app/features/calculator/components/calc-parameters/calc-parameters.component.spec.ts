import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcParametersComponent } from './calc-parameters.component';

describe('CalcParametersComponent', () => {
  let component: CalcParametersComponent;
  let fixture: ComponentFixture<CalcParametersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalcParametersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalcParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
