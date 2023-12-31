export interface Customer {
    id: number;
    identification: string;
    idType: IdType,
    name: string;
    shortName?: string;
    address: string;
    phone?: string
    email?: string;
}

export enum IdType {
    DNI,
    RUC,
    PAS
}