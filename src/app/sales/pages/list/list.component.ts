import { Component, OnInit } from '@angular/core';
import { SalesService } from '../../services/sales.service';
import { Bill } from '../../sales.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  sales: Bill[] = []

  constructor(private salesService: SalesService) {
  }

  ngOnInit(): void {
    this.sales = this.salesService.getSales();
  }
}
