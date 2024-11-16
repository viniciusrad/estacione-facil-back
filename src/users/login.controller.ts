import { Controller, Post, Body } from '@nestjs/common';
import { LoginService } from './login.service';

interface LoginDto {
  email: string;
  senha: string;
}

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
    async login(@Body() loginDto: LoginDto): Promise<any> {
        return await this.loginService.verificarLogin(loginDto.email, loginDto.senha);
    }
} 