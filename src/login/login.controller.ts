import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { AuthService } from 'src/security/auth.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService, private readonly authService:AuthService) {}

  @Post('register')
  async create(@Body() createLoginDto: CreateLoginDto) {
    const hashPassword = await this.authService.hashPassword(createLoginDto.password);
    createLoginDto.password = hashPassword;
    return this.loginService.create(createLoginDto);
  }

  @Post('access')
  async acessarPortal(@Body() createLoginDto:CreateLoginDto){
    const confirmaAcess = await this.authService.comparePassword(createLoginDto.password);
    return this.loginService.logaPortal(confirmaAcess, createLoginDto);
  }

  
}
