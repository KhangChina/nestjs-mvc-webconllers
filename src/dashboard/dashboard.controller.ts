import { Controller, Get,Render } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
@Controller('dashboard')
export class DashboardController {
  constructor(private dashboardService: DashboardService) {}
  @Get()
  @Render('dashboard/index')
  async index() {
    const data = await this.dashboardService.getPerformance()
    return { data };
  }

}
