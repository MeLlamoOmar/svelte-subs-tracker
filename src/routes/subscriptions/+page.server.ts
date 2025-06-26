import type { PageServerLoad } from "./$types";
// import { fetchApi } from "$lib";

export const load: PageServerLoad = async ({fetch}) => {
  const data = await fetch('api/subs').then(res => res.json());

  return { data };
};