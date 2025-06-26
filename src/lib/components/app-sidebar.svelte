<script lang="ts">
	import { page } from '$app/stores';
	import { Avatar, AvatarImage, AvatarFallback } from '$lib/components/ui/avatar';
	import * as Card from '$lib/components/ui/card';
	import * as Sidebar from '$lib/components/ui/sidebar';
	import { buttonVariants } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';
	import LayoutDashboardIcon from '@lucide/svelte/icons/layout-dashboard';
	import CreditCardIcon from '@lucide/svelte/icons/credit-card';
	import LogOutIcon from '@lucide/svelte/icons/log-out';

	let { data } = $props();

	const menuItems = [
		{
			label: 'Dashboard',
			href: '/',
			icon: LayoutDashboardIcon
		},
		{
			label: 'Subscriptions',
			href: '/subscriptions',
			icon: CreditCardIcon
		}
	];
</script>

<Sidebar.Root>
	<Sidebar.Content class="flex flex-col">
		<Sidebar.Header>
			<p>Sub Tracker</p>
		</Sidebar.Header>
		<Sidebar.Menu class="flex-1">
			{#each menuItems as item}
				<Sidebar.MenuItem>
					<a
						href={item.href}
						class={cn(
							buttonVariants({
								variant: $page.url.pathname === item.href ? 'secondary' : 'ghost'
							}),
							'w-full justify-start'
						)}
					>
						<item.icon class="mr-2 h-4 w-4" />
						<span>{item.label}</span>
					</a>
				</Sidebar.MenuItem>
			{/each}
		</Sidebar.Menu>
		<Sidebar.Footer>
			<Card.Root>
				<Card.Header class="flex-row items-center gap-3 p-2">
					<Avatar>
						<AvatarImage
							src={data.user?.user_metadata.avatar_url}
							alt={data.user?.user_metadata.full_name}
						/>
						<AvatarFallback>
							{data.user?.user_metadata.full_name.charAt(0).toUpperCase()}
						</AvatarFallback>
					</Avatar>
					<div class="flex flex-col">
						<span class="text-sm font-medium">{data.user?.user_metadata.full_name}</span>
						<span class="text-xs text-muted-foreground">{data.user?.email}</span>
					</div>
					<form action="/login?/logout" method="post" class="ml-auto">
						<button type="submit" class={cn(buttonVariants({ variant: 'ghost', size: 'icon' }))}>
							<LogOutIcon class="h-4 w-4" />
						</button>
					</form>
				</Card.Header>
			</Card.Root>
		</Sidebar.Footer>
	</Sidebar.Content>
</Sidebar.Root>