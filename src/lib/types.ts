export type Subscription = {
  id: string;
  name: string;
  price: number;
  billingCycle: billingCycle;
  currency: string; // Optional, defaults to "USD"
}

export const billingCycleValues = ['weekly', 'monthly', 'yearly'] as const;

export type billingCycle = (typeof billingCycleValues)[number]