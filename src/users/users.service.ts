import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { MD5 } from 'crypto-js';

@Injectable()
export class UsersService {
  remove(arg0: number) {
    throw new Error('Method not implemented.');
  }
  update(arg0: number, updateUserDto: UpdateUserDto) {
    throw new Error('Method not implemented.');
  }
  findOne(arg0: number) {
    throw new Error('Method not implemented.');
  }
  findAll() {
    throw new Error('Method not implemented.');
  }
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async create(createUserDto: CreateUserDto) {
   const userExits = await this.findOneByEmail(createUserDto.email);
   if (userExits){
    throw new BadRequestException('Email ya existe');   
   }
   const newUser = Object.assign({},createUserDto);
   newUser.password =MD5(newUser.password).toString();
   return this.userRepo.save(newUser);
  }
async findOneByEmail(email: string){
  return this.userRepo.findOneBy({email});
  
}
}