<script lang="ts">
  import { type Subscription } from "$lib/types";
  import { onMount } from "svelte"
  import { toast } from "svelte-sonner";

  import { fetchApi } from "$lib"
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import { Button } from "$lib/components/ui/button"
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

<Sidebar.Trigger />
<Button onclick={() => toast("Hello world")}>Show toast</Button>
