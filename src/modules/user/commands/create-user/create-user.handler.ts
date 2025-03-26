import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from './create-user.command';
import { UserCommandService } from '../../services';
import { CreateUserEvent } from '../../events';

@CommandHandler(CreateUserCommand)
export class CreateUserCommandHandler
  implements ICommandHandler<CreateUserCommand>
{
  constructor(
    private readonly userCommandService: UserCommandService,
    private readonly eventBus: EventBus,
  ) {}

  async execute(command: CreateUserCommand) {
    this.eventBus.publish(new CreateUserEvent(command.createUserDto));
    return this.userCommandService.createUser(command.createUserDto);
  }
}
