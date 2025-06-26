<script lang="ts">
	import { Toaster } from '$lib/components/ui/sonner';
	import '../app.css';
	import AppSidebar from '$lib/components/app-sidebar.svelte';
	import * as Sidebar from '$lib/components/ui/sidebar';
	import { page } from '$app/stores';

	let { data, children } = $props();
</script>

<Sidebar.Provider>
	<div class="flex h-screen">
		{#if $page.url.pathname === '/' || $page.url.pathname === '/subscriptions'}
			<AppSidebar {data} />
		{/if}
		<main class="flex-1 w-full overflow-y-auto p-8">
			<Toaster />
			{@render children()}
		</main>
	</div>
</Sidebar.Provider>