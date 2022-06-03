<script>
  import Header from '../../components/Header.svelte'

  export let products = []
</script>

<Header />
<h1>hello</h1>
{#each products as product (product.id)}
  <section class="flex gap-x-6">
    <span>{product.name}</span>
    <span>{product.price}</span>
  </section>
{/each}
