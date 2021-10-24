import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    @Inject('API_KEY') private apikey: string,
    @Inject('TASKS') private tasks: any[],
  ) {
    console.log(apikey);
  }
  getHello(): string {
    console.log(this.tasks);
    return `Hello World! ${this.apikey}`;
  }
}
