import { Injectable } from '@angular/core';
import { todayString } from '@ws-example/utils';

export abstract class ILogErrorService {
  abstract log(msg: any): void;
  abstract error(msg: any): void;
  abstract warning(msg: any): void;
}

@Injectable()
export class LogErrorService implements ILogErrorService {
  log(msg: unknown): void {
    console.log(`${JSON.stringify(msg)} ${todayString()}`);
  }
  error(msg: unknown): void {
    console.error(`${JSON.stringify(msg)} ${todayString()}`);
  }
  warning(msg: unknown): void {
    console.warn(`${JSON.stringify(msg)} ${todayString()}`);
  }
}
