import { TestBed } from '@angular/core/testing';

import { InicioUsuariosService } from './inicio-usuarios.service';

describe('InicioUsuariosService', () => {
  let service: InicioUsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InicioUsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
