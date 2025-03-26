import { CreateUserDto } from '../../dto';

export class CreateUserEvent {
  constructor(public readonly createUserDto: CreateUserDto) {}
}
