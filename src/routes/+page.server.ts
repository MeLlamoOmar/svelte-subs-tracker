import { redirect } from '@sveltejs/kit';

export const load = async ({request}) => {
  const token = request.headers.get('cookie')?.split('=')[1];

  if (!token) {
    redirect(302, '/login');
  }
}
