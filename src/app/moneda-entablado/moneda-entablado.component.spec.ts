import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonedaEntabladoComponent } from './moneda-entablado.component';

describe('MonedaEntabladoComponent', () => {
  let component: MonedaEntabladoComponent;
  let fixture: ComponentFixture<MonedaEntabladoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonedaEntabladoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonedaEntabladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
