<script>
  import Header from '../../components/Header.svelte'

  export let products
  export let shop
</script>

<Header />

<section
  class="mx-auto max-w-xl my-16 bg-gray-50 text-slate-800 rounded-lg shadow-sm py-4 px-6 font-inter"
>
  <h1 class="text-2xl font-bold text-center mb-8">{shop.name}</h1>
  <section class="">
    {#each products as product (product.id)}
      <section class="grid grid-cols-2 text-xl">
        <span>{product.name}</span>
        <span>{product.price}</span>
      </section>
    {/each}
  </section>
</section>
