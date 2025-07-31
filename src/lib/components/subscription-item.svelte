<script lang="ts">
	import DotsVerticalIcon from '@lucide/svelte/icons/ellipsis-vertical'
	import TrashIcon from '@lucide/svelte/icons/trash'
	import PencilEditIcon from '@lucide/svelte/icons/pencil-line'
	import { goto } from '$app/navigation';

	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';

	import type { Subscription } from "$lib/types";
	import * as Card from "$lib/components/ui/card";
	import { formatCurrency } from "$lib/utils";

	let { subscription, handleDelete }: { subscription: Subscription, handleDelete: (id: string) => void } = $props();
</script>

<a href={`/subscriptions/${subscription.id}`} class="no-underline">
	<Card.Root class="w-full cursor-pointer hover:scale-102 transition-all">
	<Card.Header>
		<Card.Title>
			<div class="flex justify-between items-start">
				{subscription.name}
				<DropdownMenu.Root>
          <DropdownMenu.Trigger class='p-1 rounded-sm hover:bg-gray-200 cursor-pointer transition-colors'>
            <DotsVerticalIcon size={16}/>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content side='right' align='start'>
            <DropdownMenu.Group>
              <DropdownMenu.Item class='data-[highlighted]:bg-amber-100/50 data-[highlighted]:text-amber-500 text-amber-500'>
								<PencilEditIcon class='text-current'/>
                Edit
              </DropdownMenu.Item>
              <DropdownMenu.Item variant='destructive' onclick={() => handleDelete(subscription.id)}>
                <TrashIcon />
								Delete
              </DropdownMenu.Item>
            </DropdownMenu.Group>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
			</div>
	</Card.Title>
	</Card.Header>
	<Card.Content>
		<div class="flex justify-between items-center">
			<span class="text-md">{formatCurrency(subscription.price, subscription.currency)}</span>
		</div>
		<p class="text-sm text-gray-600 mt-1">Posible descripcion</p>
		<p class="text-xs text-gray-400 mt-1">Next payment: {subscription.billingCycle}</p>
		</Card.Content>
</Card.Root>
</a>