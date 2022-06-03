<script>
  import Header from '../../components/Header.svelte'

  export let products = []
</script>

<Header />

{#each products as product (product.id)}
  <section class="flex gap-x-6">
    <span class="text-lg">{product.name}</span>
    <span class="text-lg">{product.price}</span>
  </section>
{/each}
