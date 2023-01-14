import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BaseApiService } from './base-api.service';

describe('BaseApiService tests', () => {
  let service: BaseApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BaseApiService],
    });
    service = TestBed.inject(BaseApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
