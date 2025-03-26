import { Module } from '@nestjs/common';
import { UserCommandHandlers } from './commands';
import { UserCommandController, UserQueryController } from './controllers';
import { UserEventHandlers } from './events';
import { UserQueryHandlers } from './queries';
import { UserCommandService, UserQueryService } from './services';

@Module({
  controllers: [UserCommandController, UserQueryController],
  providers: [
    UserCommandService,
    UserQueryService,
    ...UserCommandHandlers,
    ...UserQueryHandlers,
    ...UserEventHandlers,
  ],
})
export class UserModule {}
