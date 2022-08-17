import { Module } from '@nestjs/common';
import { AuthenService } from './authen.service';
import { AuthenController } from './authen.controller';
import { UsersModule } from 'src/users/users.module';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [UsersModule,PassportModule.register({session:true})],
  controllers: [AuthenController],
  providers: [AuthenService,LocalStrategy, SessionSerializer]
})
export class AuthenModule {}
