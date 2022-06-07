import { TestBed } from '@angular/core/testing';

import { TsInterceptor } from './ts.interceptor';

describe('TsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TsInterceptor = TestBed.inject(TsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
