import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { VacancyModule } from '';
import { DatabaseModule } from '';
import { UserModule } from './user/user.module';
import { AuthModule } from '';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    VacancyModule,
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
