<script>
  import Header from '../../components/Header.svelte'

  export let products
  export let shop
</script>

<Header />

<section
  class="mx-auto max-w-xl my-16 bg-gray-50 text-slate-800 rounded-lg shadow-sm py-4 px-6 font-inter"
>
  <p class="text-center text-lg pb-2">
    {shop.coordinates}
  </p>
  <h1
    class="text-3xl font-bold text-center mb-4 pb-4 text-yellow-700  border-b-2 border-slate-200"
  >
    {shop.name}
  </h1>
  <section>
    <p class="text-center text-lg pb-8">{shop.conversionRates}</p>
    {#each products as product (product.id)}
      <section class="grid grid-cols-2 text-xl">
        <section>
          <img
            src={product.image}
            alt={product.name}
            class="h-16 w-16 inline"
          />
          <span class="my-auto">{product.name}</span>
        </section>
        <span class="my-auto">{product.price}</span>
      </section>
    {/each}
  </section>
</section>
