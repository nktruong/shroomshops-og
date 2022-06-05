<script>
  import Header from '../../components/Header.svelte'

  export let products
  export let shop
</script>

<Header />

<section
  class="mx-auto max-w-3xl my-16 bg-gray-50 text-slate-800 rounded-lg shadow-sm py-8 px-6 font-inter"
>
  <h1
    class="text-5xl font-bold text-center mb-4 py-6 text-amber-500 font-gloria"
  >
    Welcome to {shop.name}!
  </h1>
  <section class="text-lg">
    <section
      class="flex flex-col gap-y-4 px-4 py-8 bg-amber-900 text-amber-100 rounded-md shadow-inner"
    >
      <section>
        <span>Owned by </span>
        <span class="font-semibold">{shop.owner}</span>
      </section>
      <section>
        <span>Located at: </span>
        <span class="font-semibold">{shop.coordinates}</span>
      </section>
      <section>
        <span>Conversions: </span>
        <span class="font-semibold">{shop.conversionRates}</span>
      </section>
    </section>
    <section class="grid grid-cols-2 text-xl my-8 gap-y-2">
      {#each products as product (product.id)}
        <section>
          {#if product.image}
            <img
              src={product.image}
              alt={product.name}
              class="h-16 w-16 inline p-2"
            />
          {/if}
          <span class="my-auto font-medium pl-2">{product.name}</span>
        </section>
        <span class="my-auto">{product.price}</span>
      {/each}
    </section>
  </section>
</section>
