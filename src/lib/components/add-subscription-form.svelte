<script lang="ts">
	import * as Card from "$lib/components/ui/card";
	import * as Input from "$lib/components/ui/input";
	import * as Button from "$lib/components/ui/button";
	import * as Label from "$lib/components/ui/label";
	import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "$lib/components/ui/select";

	let name = $state("");
	let price = $state(0);
	let billingCycle = $state("monthly");
</script>

<Card.Root class="w-full max-w-md">
	<Card.Header>
		<Card.Title>Add New Subscription</Card.Title>
		<Card.Description>Enter the details for your new subscription.</Card.Description>
	</Card.Header>
	<Card.Content>
		<form method="POST" action="?/addSubscription" class="grid gap-4">
			<div class="grid gap-2">
				<Label.Label for="name">Name</Label.Label>
				<Input.Input id="name" type="text" name="name" bind:value={name} required />
			</div>
			<div class="grid gap-2">
				<Label.Label for="price">Price</Label.Label>
				<Input.Input id="price" type="number" name="price" bind:value={price} step="0.01" required />
			</div>
			<div class="grid gap-2">
				<Label.Label for="billingCycle">Billing Cycle</Label.Label>
				<Select selected={{ value: billingCycle, label: billingCycle }} onSelectedChange={(v) => { if (v) billingCycle = v.value as string; }} name="billingCycle">
					<SelectTrigger class="w-full">
						<SelectValue placeholder="Select a billing cycle" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="monthly">Monthly</SelectItem>
						<SelectItem value="yearly">Yearly</SelectItem>
						<SelectItem value="weekly">Weekly</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<Button.Button type="submit" class="w-full">Add Subscription</Button.Button>
		</form>
	</Card.Content>
</Card.Root>