import { TestBed, inject } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http'
import { IdentityService } from './identity.service';
import { Config } from '../config'
 
describe('IdentityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IdentityService, HttpClient, HttpHandler, Config],
    });
  });

  it('should be created', inject([IdentityService], (service: IdentityService) => {
    expect(service).toBeTruthy();
  }));
});
