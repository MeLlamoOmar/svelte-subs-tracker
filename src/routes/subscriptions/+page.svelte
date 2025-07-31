<script lang="ts">
	import * as Dialog from "$lib/components/ui/dialog/index.js";
	import CirclePlusIcon from "@lucide/svelte/icons/circle-plus";

	import SubscriptionItem from "$lib/components/subscription-item.svelte";
	import AddSubscriptionForm from "$lib/components/add-subscription-form.svelte";
	import type { PageData } from "./$types";
  import { Button } from "$lib/components/ui/button"

	let { data }: { data: PageData } = $props();

	let { subscriptions } = $state(data);

	const handleDelete = async (subscriptionId: string) => {
		// Implement delete functionality here
		try {
			await fetch(`/api/subs/${subscriptionId}`, {
				method: 'DELETE',
			});
			
			subscriptions = subscriptions.filter(sub => sub.id !== subscriptionId);
		} catch(error) {
			console.error('Error deleting subscription:', error);
			return;
		}

	};
</script>

<div class="flex gap-3 mt-3">
	<h1 class="text-2xl font-bold mb-4">My Subscriptions</h1>
	<Dialog.Root>
		<Dialog.Trigger>
			<Button variant="default" class="mb-4"><CirclePlusIcon />Add Subscription</Button>
		</Dialog.Trigger>
		<Dialog.Content>
			<AddSubscriptionForm />
		</Dialog.Content>
	</Dialog.Root>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
	{#if subscriptions && subscriptions.length > 0}
		{#each subscriptions as subscription (subscription.id)}
			<SubscriptionItem {subscription} {handleDelete} />
		{/each}
	{:else}
		<p class="col-span-full text-center text-gray-500">No subscriptions found.</p>
	{/if}
</div>