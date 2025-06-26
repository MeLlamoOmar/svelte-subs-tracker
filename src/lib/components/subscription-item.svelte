<script lang="ts">
	import type { Subscription } from "$lib/types";
	import * as Card from "$lib/components/ui/card";
	import { formatCurrency } from "$lib/utils";

	let { subscription }: { subscription: Subscription } = $props();
</script>

<Card.Root class="w-full">
	<Card.Header>
		<Card.Title>{subscription.name}</Card.Title>
		<Card.Description>
			{formatCurrency(subscription.price)} / {subscription.billingCycle}
		</Card.Description>
	</Card.Header>
</Card.Root>