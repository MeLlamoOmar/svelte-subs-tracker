<script lang="ts">
  import { Button } from '$lib/components/ui/button'
  import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card'
  import ArrowLeft from '@lucide/svelte/icons/arrow-left'
  import { Badge } from '$lib/components/ui/badge'
  import type { Subscription } from '$lib/types'

  const { data } = $props();

  let subscription: Subscription = data.subscription
</script>

<div class="max-w-2xl mx-auto mt-8 px-4">
  <a href="/subscriptions">
    <Button variant="ghost" class="mb-4 cursor-pointer">
      <ArrowLeft class="w-4 h-4 mr-2" /> Volver
    </Button>
  </a>

  <Card>
    <CardHeader>
      <CardTitle class="flex justify-between items-center">
        <span>{subscription.name}</span>
        <Badge variant="outline">{subscription.billingCycle}</Badge>
      </CardTitle>
    </CardHeader>
    <CardContent class="space-y-3 text-sm text-muted-foreground">
      <div>
        <span class="font-semibold text-foreground">Precio:</span>
        <span> {subscription.price} {subscription.currency}</span>
      </div>

      <div>
        <span class="font-semibold text-foreground">Fecha de pago:</span>
        <span> {subscription.name}</span>
      </div>

      <div>
        <span class="font-semibold text-foreground">Notas:</span>
        <span> {subscription.name || "Sin notas"}</span>
      </div>
    </CardContent>
  </Card>
</div>