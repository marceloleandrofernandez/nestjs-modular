import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from './config';
@Injectable()
export class AppService {
  constructor(
    //@Inject('API_KEY') private apikey: string,
    @Inject('TASKS') private tasks: any[],
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {
    console.log(this.configService.apiKey);
    console.log(this.configService.database.name);
  }
  getHello(): string {
    console.log(this.tasks);
    /*return `Hello World! ${this.configService.get<string>(
      'API_KEY',
    )} ${this.configService.get('DATABASE_NAME')}`; */

    const apiKey = this.configService.apiKey; // 👈
    const name = this.configService.database.name; // 👈
    return `Hello World! ${apiKey} ${name}`;
  }
}
