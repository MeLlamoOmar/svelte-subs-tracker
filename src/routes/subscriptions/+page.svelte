<script lang="ts">
	import SubscriptionItem from "$lib/components/subscription-item.svelte";
	import type { PageData } from "./$types";

	let { data }: { data: PageData } = $props();
</script>

<h1 class="text-2xl font-bold mb-4">My Subscriptions</h1>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
	{#each data.subscriptions as subscription}
		<SubscriptionItem {subscription} />
	{/each}
</div>