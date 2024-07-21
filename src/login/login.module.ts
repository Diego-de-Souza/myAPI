import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { AuthService } from 'src/security/auth.service';

@Module({
  controllers: [LoginController],
  providers: [LoginService, AuthService],
})
export class LoginModule {}
