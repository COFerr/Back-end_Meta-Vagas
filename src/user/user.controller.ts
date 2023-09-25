import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from '';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserEntityDoc } from '';
import { CreateUserDoc } from '';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiBody({
    type: CreateUserDoc,
  })
  @ApiResponse({
    type: UserEntityDoc,
  })
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }
}