import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraPortfolioComponent } from './cabecera-portfolio.component';

describe('CabeceraPortfolioComponent', () => {
  let component: CabeceraPortfolioComponent;
  let fixture: ComponentFixture<CabeceraPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabeceraPortfolioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CabeceraPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
