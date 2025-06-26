<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Input from '$lib/components/ui/input';
	import * as Button from '$lib/components/ui/button';

	let email = $state('');
	let password = $state('');
</script>

<div class="flex min-h-screen items-center justify-center">
	<Card.Root class="w-full max-w-md">
		<Card.Header class="text-center">
			<Card.Title class="text-2xl">Welcome</Card.Title>
			<Card.Description>
				Don't have an account yet? <a href="/register" class="text-primary hover:underline"
					>Sign Up</a
				>
			</Card.Description>
		</Card.Header>
		<Card.Content>
			<form method="POST" class="grid gap-4">
				<div class="grid gap-2">
					<Input.Input
						type="email"
						placeholder="Email"
						name="email"
						bind:value={email}
					/>
				</div>
				<div class="grid gap-2">
					<Input.Input
						type="password"
						placeholder="Password"
						name="password"
						bind:value={password}
					/>
				</div>
				<Button.Button type="submit" class="w-full">
					Log In
				</Button.Button>
			</form>
		</Card.Content>
	</Card.Root>
</div>