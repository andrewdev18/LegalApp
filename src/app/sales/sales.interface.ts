import { Customer } from "../customers/customer.interfaces";

export interface Bill {
    id: number,
    customer: Customer,
    createdAt: Date,
    branch?: number,
    emissionPoint?: number,
    sequence?: number,
    base0?: number,
    base12?: number,
    discount?: number,
    iva?: number,
    ice?: number
    total?: number
}

export interface BillDetail {
    
}