// import { Injectable } from '@nestjs/common';
// import { CreateDashboardDto } from './dto/create-dashboard.dto';
// import { UpdateDashboardDto } from './dto/update-dashboard.dto';

export class DashboardService {
  async getPerformance() {
    return { cpu: 20, ram: 50 };
  }
  
  async dataInvoices() {
    return {
      "data": [
        {
          "responsive_id": null,
          "invoice_id": 4477,
          "issued_date": "12/13/2019",
          "client_name": "Roxy Floodgate",
          "email": "roxyfloodgate@email.com",
          "service": "Software Development",
          "total": 3428,
          "avatar": "",
          "invoice_status": "Paid",
          "balance": "$724",
          "due_date": "04/23/2019"
        },
        {
          "responsive_id": null,
          "invoice_id": 5020,
          "issued_date": "07/17/2019",
          "client_name": "Roy Southerell",
          "email": "roysoutherell@email.com",
          "service": "UI/UX Design & Development",
          "total": 5219,
          "avatar": "10-small.png",
          "invoice_status": "Downloaded",
          "balance": 0,
          "due_date": "12/15/2019"
        },
        {
          "responsive_id": null,
          "invoice_id": 4506,
          "issued_date": "10/19/2019",
          "client_name": "Briny Undrell",
          "email": "brinyundrell@email.com",
          "service": "Unlimited Extended License",
          "total": 3719,
          "avatar": "1-small.png",
          "invoice_status": "Paid",
          "balance": 0,
          "due_date": "11/03/2019"
        }]
    }
  }
}
