import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstructuraMonedaComponent } from './estructura-moneda.component';

describe('EstructuraMonedaComponent', () => {
  let component: EstructuraMonedaComponent;
  let fixture: ComponentFixture<EstructuraMonedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstructuraMonedaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstructuraMonedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
