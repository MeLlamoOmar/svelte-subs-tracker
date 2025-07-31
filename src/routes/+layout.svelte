<script lang="ts">
	import { Toaster } from '$lib/components/ui/sonner';
	import '../app.css';
	import AppSidebar from '$lib/components/app-sidebar.svelte';
	import * as Sidebar from '$lib/components/ui/sidebar';
	import { page } from '$app/stores';

	let { data, children } = $props();
</script>

<Sidebar.Provider>
	<div class="flex h-screen w-screen">
		{#if $page.url.pathname === '/' || $page.url.pathname === '/subscriptions'}
			<AppSidebar {data}/>
		{/if}
		<main class="flex-1 w-full overflow-y-auto py-4 px-4">
			{#if $page.url.pathname != '/login' && $page.url.pathname != '/register'}
				<Sidebar.Trigger />
			{/if}
			<Toaster />
			{@render children()}
		</main>
	</div>
</Sidebar.Provider>