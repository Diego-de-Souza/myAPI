import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';

@Injectable()
export class AuthService {
  private readonly saltRounds = 10;
  private readonly hash = "$2b$10$Ri9WZyDEPqPYEc.LY//BmOEepB54fzrdiLTeIynZWIjyP9eM/30DW"

  async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, this.saltRounds);
  }

  async comparePassword(password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.hash);
  }

}
