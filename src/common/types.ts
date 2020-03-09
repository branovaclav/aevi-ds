export type Id = number | string;
export enum Sort { asc, desc };
export enum Format { text, number };
export enum Appearance { strong, regular, small, faded, group };
export enum StatusType { approved, refunded, partialRefund, declined };
export enum PaymentMethodType { visa, mastercard, applePay, unionPay };