import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';

@Injectable()
export class UserRepository {
  private users: UserEntity[] = [];

  async getAllUsers() {
    return this.users;
  }

  private getById(id: string) {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      throw new Error('Usuário não existe');
    }

    return user;
  }

  async getUserByEmail(email: string) {
    const user = this.users.find((user) => user.email === email);
    return user;
  }

  async createUser(user: UserEntity) {
    await this.users.push(user);
  }

  async updateUser(id: string, data: Partial<UserEntity>) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new Error('Usuário não existe.');
    }

    Object.entries(data).forEach(([key, value]) => {
      if (key === 'id') {
        return;
      }

      user[key] = value;
    });

    return user;
  }

  async deleteUser(id: string) {
    const user = this.getById(id);
    this.users = this.users.filter((user) => user.id !== id);
    return user;
  }
}
