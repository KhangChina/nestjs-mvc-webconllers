// src/auth/local.strategy.ts
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, Render, UnauthorizedException } from '@nestjs/common';
import { AuthenService } from './authen.service';
import { AuthenController } from './authen.controller';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthenService,authControler :AuthenController) {
    super();
  }
  async validate(username: string, password: string) {
    const user = await this.authService.validateUser(username, password);
    if (!user) {

      this.authControler.login_fail();
     //throw new UnauthorizedException();
     
    }
    return user
  }
}