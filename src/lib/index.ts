import { goto } from "$app/navigation";

// place files you want to import through the `$lib` alias in this folder.
export const fetchApi = async (url: string, options?: RequestInit): Promise<Response> => {
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response;
}

export const handleLogout = async (): Promise<void> => {
  const response = await fetchApi('/api/auth/logout', {
    method: 'POST',
  });

  if (response.ok) {
    // Redirect to login page after logout
    console.log('Logout successful');
    goto('/login');
  } else {
    throw new Error('Logout failed');
  }
}