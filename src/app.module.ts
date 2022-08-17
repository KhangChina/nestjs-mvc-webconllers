import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DashboardModule } from './dashboard/dashboard.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [DashboardModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
