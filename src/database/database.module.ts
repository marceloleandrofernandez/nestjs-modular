import { Module, Global } from '@nestjs/common';

const API_KEY = '124123412341234';
const API_KEY_PROD = 'PROD1234123412341234';

@Global()
@Module({
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'production' ? API_KEY_PROD : API_KEY,
    },
  ],
  exports: ['API_KEY'],
})
export class DatabaseModule {}
