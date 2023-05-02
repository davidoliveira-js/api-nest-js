import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/CreateUser.dto';
import { UserEntity } from './user.entity';
import { v4 as uuid } from 'uuid';
import { GetUserDto } from './dto/GetUser.dto';
import { UpdateUserDto } from './dto/UpdateUser.dto';

@Controller('/users')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Get()
  async getAllUsers() {
    const users = await this.userRepository.getAllUsers();
    const cleanedUsers = users.map(
      (user) => new GetUserDto(user.id, user.name),
    );
    return cleanedUsers;
  }

  @Post()
  async createUser(@Body() data: CreateUserDto) {
    const userEntity = new UserEntity();
    userEntity.id = uuid();
    userEntity.name = data.name;
    userEntity.email = data.email;
    userEntity.password = data.password;

    this.userRepository.createUser(userEntity);

    return {
      user: new GetUserDto(userEntity.id, userEntity.name),
    };
  }

  @Put('/:id')
  async updateUser(@Param('id') id: string, @Body() data: UpdateUserDto) {
    const updatedUser = await this.userRepository.updateUser(id, data);
    return {
      user: updatedUser.id,
    };
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string) {
    const deletedUser = await this.userRepository.deleteUser(id);
    return { user: deletedUser.id };
  }
}
