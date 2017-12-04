import { TestBed, inject } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http'

import { ChainService } from './chain.service';
import { Config } from '../config'

describe('ChainService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChainService, HttpClient, HttpHandler, Config]
    });
  });

  it('should be created', inject([ChainService], (service: ChainService) => {
    expect(service).toBeTruthy();
  }));
});
