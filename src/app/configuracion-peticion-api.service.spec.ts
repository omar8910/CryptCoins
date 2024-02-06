import { TestBed } from '@angular/core/testing';

import { ConfiguracionPeticionApiService } from './configuracion-peticion-api.service';

describe('ConfiguracionPeticionApiService', () => {
  let service: ConfiguracionPeticionApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfiguracionPeticionApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
