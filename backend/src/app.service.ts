import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log("log check");
    return 'ハローワールド! Nest.js';
  }
}
