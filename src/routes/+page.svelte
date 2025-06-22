<script lang="ts">
  import { type Subscription } from "$lib/types";
  import { onMount } from "svelte"

  import {CirclePlus} from "@lucide/svelte"
  import { fetchApi } from "$lib"
  let subsList: Subscription[] = $state([])


  onMount(async () => {
    const subs = await fetchApi('api/subs',
      {
        method: 'GET',
      }
    )
    
    subsList = await subs.json()
  })

  // $inspect(subsList)
</script>

<div>
  <section class="flex items-center justify-evenly w-xl mx-auto my-10">
    <button class="bg-blue-500 text-white rounded-sm py-2 px-4 flex items-center gap-1 cursor-pointer hover:bg-blue-600 transition duration-75">
      <CirclePlus size={20}/>
      Add Subscription
    </button>
    <div>
      <input type="text" placeholder="Search" class="py-2 px-2.5 bg-neutral-700 text-neutral-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-75" />
      
    </div>
  </section>
</div>
{#each subsList as subs}
  <div class="flex flex-col w-xl mx-auto items-center justify-center p-10 my-20 border bg-neutral-800 gap-5 rounded-md">
    <h1 class="text-white text-6xl mb-1.5">{subs.name}</h1>
    <p class="text-neutral-400 text-lg">Price: ${subs.price}</p>
    <button class="w-full bg-blue-500 text-white rounded-sm py-2 hover:bg-blue-600 transition duration-75 cursor-pointer">
      Subscribe
    </button>
  </div>
{/each}