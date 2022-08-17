import { Controller, Get,Render, UseGuards } from '@nestjs/common';
import { AuthenticatedGuard } from 'src/common/guards/authenticated.guard';
import { DashboardService } from './dashboard.service';
@Controller('dashboard')
export class DashboardController {
  constructor(private dashboardService: DashboardService) {}

  @UseGuards(AuthenticatedGuard)
  @Get()
  @Render('dashboard/index')
  async index() {
    const data = await this.dashboardService.getPerformance()
    return { data };
  }
  
  @UseGuards(AuthenticatedGuard)
  @Get('/invoices')
  async dataInvoices()
  {
    return await this.dashboardService.dataInvoices()
  }
}
