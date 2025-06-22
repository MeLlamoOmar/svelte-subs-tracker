export type Subscription = {
  id: string;
  name: string;
  price: number;
  billingCycle: 'monthly' | 'yearly' | 'weekly';
}