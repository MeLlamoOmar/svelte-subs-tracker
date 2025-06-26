import type { PageServerLoad, Actions } from "./$types";
import type { Subscription } from "$lib/types";
import { fail } from "@sveltejs/kit";

let subscriptions: Subscription[] = [
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

export const load: PageServerLoad = async () => {
  return { subscriptions };
};

export const actions: Actions = {
  addSubscription: async ({ request }) => {
    const data = await request.formData();
    const name = data.get("name") as string;
    const price = parseFloat(data.get("price") as string);
    const billingCycle = data.get("billingCycle") as "monthly" | "yearly" | "weekly";

    if (!name || isNaN(price) || !billingCycle) {
      return fail(400, { message: "Missing required fields" });
    }

    const newSubscription: Subscription = {
      id: (subscriptions.length + 1).toString(),
      name,
      price,
      billingCycle,
    };

    subscriptions.push(newSubscription);

    return { success: true };
  },
};