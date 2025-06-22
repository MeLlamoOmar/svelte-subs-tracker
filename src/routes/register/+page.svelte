<script lang="ts">
	let email = $state('');
	let password = $state('');
  let name = $state('');
</script>

<form
	class="flex flex-col w-xl mx-auto items-center justify-center p-10 my-20 border bg-neutral-800 gap-5 rounded-md"
	method="POST"
>
	<h1 class="text-white text-6xl mb-1.5">Sign Up</h1>
  <input
		type="text"
		placeholder="Name"
    name="name"
		class="py-2 px-3 border-1 border-neutral-800 bg-neutral-900 text-neutral-400 rounded-sm w-full"
		bind:value={name}
	/>
	<input
		type="text"
		placeholder="Email"
    name="email"
		class="py-2 px-3 border-1 border-neutral-800 bg-neutral-900 text-neutral-400 rounded-sm w-full"
		bind:value={email}
	/>
	<input
		type="password"
		placeholder="Password"
    name="password"
		class="py-2 px-3 border-1 border-neutral-800 bg-neutral-900 text-neutral-400 rounded-sm w-full"
		bind:value={password}
	/>
	<button
		class="w-full bg-blue-500 text-white rounded-sm py-2 hover:bg-blue-600 transition duration-75 cursor-pointer"
		>Sign Up</button
	>
</form>
