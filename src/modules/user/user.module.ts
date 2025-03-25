import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { UserCommandHandlers } from './commands';
import { UserCommandController, UserQueryController } from './controllers';
import { UserQueryHandlers } from './queries';
import { UserCommandService, UserQueryService } from './services';

@Module({
  imports: [CqrsModule],
  controllers: [UserCommandController, UserQueryController],
  providers: [
    UserCommandService,
    UserQueryService,
    ...UserCommandHandlers,
    ...UserQueryHandlers,
  ],
})
export class UserModule {}
