import { TestBed } from '@angular/core/testing';

import { AutorisationInterceptor } from './autorisation.interceptor';

describe('AutorisationInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AutorisationInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AutorisationInterceptor = TestBed.inject(AutorisationInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
