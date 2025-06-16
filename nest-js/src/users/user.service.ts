// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      username: 'admin',
      password: 'admin123', // En producción debería ir hasheado
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}
