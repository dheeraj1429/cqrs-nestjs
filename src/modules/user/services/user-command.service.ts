import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto';

@Injectable()
export class UserCommandService {
  async createUser(createUserDto: CreateUserDto) {
    console.log('service', createUserDto);
  }
}
