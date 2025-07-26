import { User } from '../interfaces/user.interface';

export class UserRegistration {
  constructor(
    public email: string,
    public username: string,
    public password: string
  ) {}

  static fromUserFrom(user: User): User {
    return {
      email: user.email,
      username: user.username,
      password: user.password,
    };
  }
}
