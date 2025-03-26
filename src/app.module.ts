import { Module } from '@nestjs/common';
import { UserModule } from './modules';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [CqrsModule.forRoot(), UserModule],
})
export class AppModule {}
