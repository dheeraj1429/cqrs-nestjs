import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../dto';
import { CommandBus } from '@nestjs/cqrs';
import { CreateUserCommand } from '../commands';

@Controller('user')
export class UserCommandController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.commandBus.execute(new CreateUserCommand(createUserDto));
  }
}
