import { TestBed } from '@angular/core/testing';
import { InvalidCredentialsError } from '.';
import { AccessDeniedError } from './access-denied-error';
import { LogErrorService } from "./log.service";
import { UnexpectedError } from "./unexpected-error";


describe('LogErrorService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        providers: [
            LogErrorService,
            AccessDeniedError,
            InvalidCredentialsError,
            UnexpectedError 
        ]
      }));

  it('should be created', () => {
    const service: LogErrorService = TestBed.inject(LogErrorService);
    expect(service).toBeTruthy();
  });

  it('should check log service', () => {
    const service: LogErrorService = TestBed.inject(LogErrorService);
    service.log('test');
    expect(service).toBeTruthy();
  });

  it('should check error', () => {
    const service: LogErrorService = TestBed.inject(LogErrorService);
    const error = TestBed.inject(AccessDeniedError);
    service.error('test');
    expect(error.name).toBe("AccessDeniedError");
  });

  it('should check warning', () => {
    const service: LogErrorService = TestBed.inject(LogErrorService);
    const warning = TestBed.inject(InvalidCredentialsError );
    service.warning('test');
    expect(warning.name).toBe("InvalidCredentialsError");
  });

  it('should check Unexpected', () => {
    const service: LogErrorService = TestBed.inject(LogErrorService);
    const Unexpected  = TestBed.inject(UnexpectedError);
    service.warning('test');
    expect(Unexpected.name).toBe("UnexpectedError");
  });

}); 