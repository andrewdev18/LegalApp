import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  items: MenuItem[] | undefined;
  
  ngOnInit(): void {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-home',
        routerLink: '/'
      },
      {
        label: 'Ventas',
        icon: 'pi pi-shopping-cart',
        routerLink: 'ventas'
      },
      {
        label: 'Clientes',
        icon: 'pi pi-users'
      },
      {
        label: 'Inventario',
        icon: 'pi pi-th-large'
      },
      {
        label: 'Reportes',
        icon: 'pi pi-chart-pie'
      }
    ]
  }
}
