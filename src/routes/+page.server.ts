import { redirect } from '@sveltejs/kit';

export const load = async ({cookies}) => {
  const token = cookies.get('access_token');

  if (!token) {
    redirect(302, '/login');
  }
}

export const actions = {
  logout: async ({cookies}) => {
    cookies.delete('access_token', {
      path: '/',
      expires: new Date(0) // Set the cookie to expire immediately
    })

    return redirect(302, '/login');    
  }
}
