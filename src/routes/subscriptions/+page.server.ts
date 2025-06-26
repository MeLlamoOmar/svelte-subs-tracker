import type { PageServerLoad } from "./$types";
import type { Subscription } from "$lib/types";

export const load: PageServerLoad = async () => {
  const subscriptions: Subscription[] = [
    {
      id: "1",
      name: "Netflix",
      price: 12.99,
      billingCycle: "monthly",
    },
    {
      id: "2",
      name: "Spotify",
      price: 9.99,
      billingCycle: "monthly",
    },
    {
      id: "3",
      name: "Amazon Prime",
      price: 14.99,
      billingCycle: "yearly",
    },
  ];

  return { subscriptions };
};