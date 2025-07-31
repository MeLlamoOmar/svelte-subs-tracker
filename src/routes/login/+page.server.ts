import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	default: async ({request, fetch, cookies}) => {
    const data = await request.formData();
    
		const email = data.get('email');
		const password = data.get('password');

		const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok && cookies.get('access_token')) {
      // Handle successful login
      
      redirect(303, '/subscriptions');
    } else {
      // Handle login error
      const errorData = await response.json();
      console.log(`Login failed: ${errorData.message}`);
    }
	}
} satisfies Actions;