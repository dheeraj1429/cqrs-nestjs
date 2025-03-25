import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { UserQueryService } from '../../services';
import { GetUserQuery } from './get-user.query';

@QueryHandler(GetUserQuery)
export class GetUserQueryHandler implements IQueryHandler<GetUserQuery> {
  constructor(private readonly userQueryService: UserQueryService) {}

  async execute() {
    return this.userQueryService.getUsers();
  }
}
