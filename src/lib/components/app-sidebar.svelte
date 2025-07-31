<script lang="ts">
	import LibraryIcon from '@lucide/svelte/icons/library'
  import WalletCardsIcon from '@lucide/svelte/icons/wallet-cards'
  import DotsVerticalIcon from '@lucide/svelte/icons/ellipsis-vertical'
  import UserCircleIcon from '@lucide/svelte/icons/circle-user'
  import BellNotificationIcon from '@lucide/svelte/icons/bell-dot'
  import LogoutIcon from '@lucide/svelte/icons/log-out'
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  import * as Avatar from '$lib/components/ui/avatar/'

  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import { handleLogout } from '$lib'
  import { page } from '$app/state'

  const sidebar = Sidebar.useSidebar();
  const { data } = $props()

  const user = data.user;
  const userAvatarName = user.name.split(' ').map((name: string) => name[0]).join('')
</script>
<Sidebar.Root collapsible="icon" variant='floating'>
  <Sidebar.Header>
    <Sidebar.Menu>
      <Sidebar.MenuItem>
        <Sidebar.MenuButton class="data-[slot=sidebar-menu-button]:!p-1.5">
          {#snippet child({ props })}
            <a href="/" {...props}>
              <LibraryIcon class="!size-5" />
              <span class="text-base font-semibold">Subs Tracker</span>
            </a>
          {/snippet}
        </Sidebar.MenuButton>
      </Sidebar.MenuItem>
    </Sidebar.Menu>
  </Sidebar.Header>
  <Sidebar.Content>
    <Sidebar.Group>
      <Sidebar.Menu>
        <Sidebar.MenuItem>
          <Sidebar.MenuButton isActive={page.url.pathname === '/subscriptions'}>
            {#snippet child({ props })}
              <a href="/subscriptions" {...props}>
                <WalletCardsIcon />
                <span>Subscriptions</span>
              </a>
            {/snippet}
          </Sidebar.MenuButton>
        </Sidebar.MenuItem>
      </Sidebar.Menu>
    </Sidebar.Group>
  </Sidebar.Content>
  <Sidebar.Footer>
    <Sidebar.Menu>
      <Sidebar.MenuItem>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            {#snippet child({ props })}
              <Sidebar.MenuButton
                {...props}
                size="lg"
                class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                <Avatar.Root class="size-8 rounded-lg grayscale">
                  <Avatar.Image src={user.avatar} alt={user.name} />
                  <Avatar.Fallback class="rounded-lg">{userAvatarName}</Avatar.Fallback>
                </Avatar.Root>
                <div class="grid flex-1 text-left text-sm leading-tight">
                  <span class="truncate font-medium">{user.name}</span>
                  <span class="text-muted-foreground truncate text-xs">
                    {user.email}
                  </span>
                </div>
                <DotsVerticalIcon class="ml-auto size-4" />
              </Sidebar.MenuButton>
            {/snippet}
          </DropdownMenu.Trigger>
          <DropdownMenu.Content
            class="w-(--bits-dropdown-menu-anchor-width) min-w-56 rounded-lg"
            side={sidebar.isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenu.Label class="p-0 font-normal">
              <div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar.Root class="size-8 rounded-lg grayscale">
                  <Avatar.Image src={user.avatar} alt={user.name} />
                  <Avatar.Fallback class="rounded-lg">{userAvatarName}</Avatar.Fallback>
                </Avatar.Root>
                <div class="grid flex-1 text-left text-sm leading-tight">
                  <span class="truncate font-medium">{user.name}</span>
                  <span class="text-muted-foreground truncate text-xs">
                    {user.email}
                  </span>
                </div>
              </div>
            </DropdownMenu.Label>
            <DropdownMenu.Separator />
            <DropdownMenu.Group>
              <DropdownMenu.Item>
                <UserCircleIcon />
                Account
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <WalletCardsIcon />
                Billing
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <BellNotificationIcon />
                Notifications
              </DropdownMenu.Item>
            </DropdownMenu.Group>
            <DropdownMenu.Separator />
            <DropdownMenu.Item onclick={handleLogout}>
              <LogoutIcon />
              Log out
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </Sidebar.MenuItem>
    </Sidebar.Menu>
  </Sidebar.Footer>
</Sidebar.Root>
