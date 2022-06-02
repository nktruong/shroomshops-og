<script>
  import Shop from './Shop.svelte'

  export let shops = []
</script>

<section class="font-inter mx-auto mt-24 grid max-w-4xl grid-cols-2 gap-y-16">
  {#each shops as shop (shop.id)}
    <Shop {shop} />
  {/each}
</section>
