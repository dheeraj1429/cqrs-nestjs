import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from './create-user.command';
import { UserCommandService } from '../../services';

@CommandHandler(CreateUserCommand)
export class CreateUserCommandHandler
  implements ICommandHandler<CreateUserCommand>
{
  constructor(private readonly userCommandService: UserCommandService) {}

  async execute(command: CreateUserCommand) {
    return this.userCommandService.createUser(command.createUserDto);
  }
}
