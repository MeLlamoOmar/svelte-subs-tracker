import type { Subscription } from '$lib/types.js';
// import { redirect } from '@sveltejs/kit';

export const load = async ({ fetch }) => {
  let subscriptions: Subscription[]
  let user = undefined
  try {
    const subscriptionsRes = await fetch('/api/subs');
    const userRes = await fetch('/api/auth/user')
  

  // if(!subscriptionsRes.ok) {
  //   throw new Error(`Unexpected error fetching subscriptions: ${subscriptionsRes.status} ${subscriptionsRes.statusText}`);
  // }

    subscriptions = await subscriptionsRes.json();
    user = await userRes.json();
    // user = await userRes.json();
  } catch(er) {
    console.log('Error fetching subscriptions or user:', er);
    subscriptions = []
  }

  return { subscriptions, user };
}
