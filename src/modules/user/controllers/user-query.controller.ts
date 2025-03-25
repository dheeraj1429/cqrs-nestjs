import { Controller, Get } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetUserQuery } from '../queries';

@Controller('user')
export class UserQueryController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get()
  async getUsers() {
    return this.queryBus.execute(new GetUserQuery());
  }
}
