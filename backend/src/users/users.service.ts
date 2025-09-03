import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

// Mock data - in a real application, this would be replaced with a database
let users = [
  {
    id: 1,
    username: 'johndoe',
    email: 'john@example.com',
    password: '$2b$10$example', // This would be a hashed password
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    const newUser = {
      id: users.length + 1,
      ...createUserDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    users.push(newUser);
    return newUser;
  }

  findAll() {
    return users.map(({ password, ...user }) => user);
  }

  findOne(id: number) {
    const user = users.find(user => user.id === id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    const { password, ...result } = user;
    return result;
  }

  findByUsername(username: string) {
    return users.find(user => user.username === username);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex === -1) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    
    users[userIndex] = {
      ...users[userIndex],
      ...updateUserDto,
      updatedAt: new Date(),
    };
    
    const { password, ...result } = users[userIndex];
    return result;
  }

  remove(id: number) {
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex === -1) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    
    const deletedUser = users.splice(userIndex, 1)[0];
    const { password, ...result } = deletedUser;
    return result;
  }
}
