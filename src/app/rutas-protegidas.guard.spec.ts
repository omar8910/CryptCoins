import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { rutasProtegidasGuard } from './rutas-protegidas.guard';

describe('rutasProtegidasGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => rutasProtegidasGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
