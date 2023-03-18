import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('api')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('users')
  findAll() {
    return this.usersService.findAll();
  }

  @Get('users/:id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Post('users/mail/')
  async findByMail(@Body() createUserDto: CreateUserDto) {
    let request = await this.usersService.findByMail(createUserDto);
    if (request.length === 0) {
      return this.usersService.create(createUserDto);
    } else {
      let obj = {
        _id: request[0]._id,
        email: request[0].email,
        webkarma: request[0].webkarma,
        role: request[0].role
      };
      return obj;
    }
  }

  @Post('users/new')
  async create(@Body() createUserDto: CreateUserDto) {
    let request = await this.usersService.findByMail(createUserDto);
    if (request.length === 0) {
      request = this.usersService.create(createUserDto);
      return request;
    } else {
      request = { status: "L'utilisateur éxiste déjà dans notre base de données." };
      return request;
    }
  }

  @Put('users/update/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete('users/delete/:id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
