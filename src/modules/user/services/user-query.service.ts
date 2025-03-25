import { Injectable } from '@nestjs/common';

@Injectable()
export class UserQueryService {
  async getUsers() {
    return [{ name: 'John', age: 20, email: 'john@gmail.com' }];
  }
}
