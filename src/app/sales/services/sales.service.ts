import { Injectable } from '@angular/core';
import { Bill } from '../sales.interface';
import { Customer, IdType } from '../../customers/customer.interfaces';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  private _tempCustomer: Customer = { id: 0, name: 'Nombre Apellido', identification: '0999999999', idType: IdType.DNI, address: 'Quevedo' };
  private _tempSales: Bill[] = [
    { id: 1, customer: { ...this._tempCustomer }, branch: 1, emissionPoint: 1, sequence: 1, createdAt: new Date(), total: 200 },
    { id: 2, customer: { ...this._tempCustomer }, branch: 1, emissionPoint: 1, sequence: 2, createdAt: new Date(), total: 300 },
    { id: 3, customer: { ...this._tempCustomer }, branch: 1, emissionPoint: 1, sequence: 3, createdAt: new Date(), total: 150 },
  ]

  constructor() { }

  getSales() {
    return [...this._tempSales];
  }
}
