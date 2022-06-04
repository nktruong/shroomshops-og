<script>
  import Header from '../components/Header.svelte'
  import Shop from '../components/Shop.svelte'
  export let shops = []
</script>

<Header />

<section class="font-inter mx-auto mt-24 grid max-w-5xl grid-cols-2 gap-x-32">
  {#each shops as shop (shop.id)}
    <Shop {shop} />
  {/each}
</section>
