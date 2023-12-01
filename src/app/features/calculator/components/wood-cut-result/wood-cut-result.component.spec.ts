import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodCutResultComponent } from './wood-cut-result.component';

describe('WoodCutResultComponent', () => {
  let component: WoodCutResultComponent;
  let fixture: ComponentFixture<WoodCutResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WoodCutResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WoodCutResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
