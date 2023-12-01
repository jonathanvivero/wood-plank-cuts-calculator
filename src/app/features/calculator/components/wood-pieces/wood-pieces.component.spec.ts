import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodPiecesComponent } from './wood-pieces.component';

describe('WoodPiecesComponent', () => {
  let component: WoodPiecesComponent;
  let fixture: ComponentFixture<WoodPiecesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WoodPiecesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WoodPiecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
