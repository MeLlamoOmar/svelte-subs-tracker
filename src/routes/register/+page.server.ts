import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
  default: async ({request, fetch}) => {
    const data = await request.formData();
    
    const email = data.get('email');
    const password = data.get('password');
    const name = data.get('name');

    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, name }),
    });

    if (response.ok) {
      // Handle successful login
      redirect(303, '/login');
    } else {
      // Handle login error
      const errorData = await response.json();
      console.log(`Login failed: ${errorData.message}`);
    }
  }
} satisfies Actions;