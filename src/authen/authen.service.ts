import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { CreateAuthenDto } from './dto/create-authen.dto';
import { UpdateAuthenDto } from './dto/update-authen.dto';

@Injectable()
export class AuthenService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(username, pass): Promise<any>{
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
