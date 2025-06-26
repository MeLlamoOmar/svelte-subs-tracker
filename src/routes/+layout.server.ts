export const load = async ({ fetch }) => {
  const subscriptions = await fetch('api/subs').then(res => res.json());

  return { subscriptions };
}
