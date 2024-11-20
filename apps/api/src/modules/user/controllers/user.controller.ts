import {
  Body,
  Delete,
  Get,
  Post,
  Put,
  Query,
  Controller,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { Public } from '~/decorators/auth.decorator';
import { UuidParam } from '~/decorators/uuid-param.decorator';
import { ApiPaginationQuery } from '~/decorators/api-pagination-query.decorator';
import { LoggedInUserIdDecorator } from '~/decorators/logged-in-user-id.decorator';
import { DataBaseInterceptorDecorator } from '~/decorators/database-interceptor.decorator';

import { UserService } from '../services/user.service';
import { CreateUserDTO } from '../dtos/create-user.dto';
import { UpdateUserDTO } from '../dtos/update-user.dto';
import { PaginateUsersDTO } from '../dtos/paginate-users.dto';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Public()
  @ApiPaginationQuery()
  @DataBaseInterceptorDecorator()
  @Get('paginate')
  async paginate(@Query() querys: PaginateUsersDTO) {
    return this.userService.paginateUsers(querys);
  }

  @Public()
  @Get(':id')
  async getOne(@UuidParam('id') id: string) {
    return this.userService.getUserById(id, false);
  }

  @Public()
  @DataBaseInterceptorDecorator()
  @Post('')
  async create(@Body() body: CreateUserDTO) {
    return this.userService.createUser(body);
  }

  @DataBaseInterceptorDecorator()
  @Put(':id')
  async update(
    @UuidParam('id') id: string,
    @Body() payload: UpdateUserDTO,
    @LoggedInUserIdDecorator() logged_in_user_id: string,
  ) {
    return this.userService.updateUser(id, payload, logged_in_user_id);
  }

  @Delete(':id')
  async delete(
    @UuidParam('id') id: string,
    @LoggedInUserIdDecorator() logged_in_user_id: string,
  ) {
    return this.userService.deleteUser(id, logged_in_user_id);
  }
}
