import type { billingCycle } from "$lib/types";
import type { Actions } from "./$types";
import { fail, redirect } from "@sveltejs/kit";

export const load = ({ cookies }) => {
  const token = cookies.get('access_token');

  if (!token) {
    redirect(302, '/login');
  }
}

export const actions: Actions = {
  addSubscription: async ({ request, fetch }) => {
    const data = await request.formData();
    const name = data.get("name") as string;
    const price = parseFloat(data.get("price") as string);
    const currency = data.get("currency") as string || "USD"; // Default to USD if not provided
    const billingCycle = data.get("billingCycle") as billingCycle;

    if (!name || isNaN(price) || !billingCycle) {
      return fail(400, { message: "Missing required fields" });
    }

    const response = await fetch("/api/subs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, price, billingCycle, currency }),
    });

    if (!response.ok) {
      const error = await response.json();
      return fail(response.status, { message: error.message || "Failed to add subscription" });
    }

    return { success: true };
  },
};