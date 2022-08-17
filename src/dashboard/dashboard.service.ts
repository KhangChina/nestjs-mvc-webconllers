// import { Injectable } from '@nestjs/common';
// import { CreateDashboardDto } from './dto/create-dashboard.dto';
// import { UpdateDashboardDto } from './dto/update-dashboard.dto';

export class DashboardService {
  async getPerformance() {
    return {cpu:20,ram:50};
  }
}
