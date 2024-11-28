import { Controller, Get, Post, Put, Delete, Body, Param, Query, BadRequestException } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: Partial<User>): Promise<User> {
    try {
      const user = await this.userService.create(createUserDto as User);
      return user;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get('search')
  async search(@Query('term') term: string): Promise<User[]> {
    if (!term) {
      throw new BadRequestException('Termo de busca é obrigatório');
    }
    return this.userService.findByEmailOrNome(term);
  }

  @Get('email/:email')
  async findByEmail(@Param('email') email: string): Promise<User> {
    const user = await this.userService.findByEmail(email);
    if (!user) {
      throw new BadRequestException('Usuário não encontrado');
    }
    return user;
  }

  @Get('nome/:nome')
  async findByNome(@Param('nome') nome: string): Promise<User[]> {
    return this.userService.findByNome(nome);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    const user = await this.userService.findOne(+id);
    if (!user) {
      throw new BadRequestException('Usuário não encontrado');
    }
    return user;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: Partial<User>): Promise<User> {
    const user = await this.userService.findOne(+id);
    if (!user) {
      throw new BadRequestException('Usuário não encontrado');
    }
    return this.userService.update(+id, updateUserDto);
}

     @Delete(':id')
  async remove(@Param('id') id: string): Promise<boolean> {
    return await this.userService.delete(+id);
  }
}
  