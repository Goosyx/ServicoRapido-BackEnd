export interface ISuccessNotificationPayment {
  from: string;
  amount: number;
  shipping: {
    city: string;
    country: string;
    line1: string;
    line2: string;
    postal_code: string;
    state: string;
  }
  buyer: {
    name: string;
    email: string;
  }
  items: {
    name: string;
    quantity: number;
    price: number;
  }[]
  storeId: string;
}