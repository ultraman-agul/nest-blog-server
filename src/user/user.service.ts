import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './entities/user.entity'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) 
    private userRepository: Repository<User>
  ){}

  async register(createUser: CreateUserDto) {
    const { username } = createUser;
    const user = await this.userRepository.findOne({ where: { username: username }})
    if(user) {
      throw new HttpException('用户已存在', HttpStatus.BAD_REQUEST)
    }
    const newUser = await this.userRepository.create(createUser)
    // return await this.userRepository.findOne({ where: { username: username }}) // 返回新建的用户信息，重新查询是为了不返回密码
    return await this.userRepository.save(newUser)
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
