export type Subscription = {
  id: string;
  name: string;
  price: number;
  billingCycle: billingCycle;
  currency: string; // Optional, defaults to "USD"
}

export type billingCycle = 'monthly' | 'yearly' | 'weekly';