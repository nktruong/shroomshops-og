<script>
  import Header from '../components/Header.svelte'
  import Shop from '../components/Shop.svelte'

  export let shops
  export let products
  let searchTerm = ''

  $: results = products.filter((product) => {
    return product.name.toLowerCase().includes(searchTerm)
  })

  console.log(shops, products, results)
</script>

<Header />
<section class="pt-10 flex gap-4 justify-center">
  <label for="search" class="sr-only" />
  <input
    name="search"
    type="text"
    placeholder="Search products"
    class="rounded-full border-black border-2 text-center text-xl w-48"
    bind:value={searchTerm}
  />
</section>

<section class="font-inter my-24">
  {#if searchTerm === ''}
    <section class=" mx-auto grid max-w-7xl grid-cols-3  gap-y-12">
      {#each shops as shop (shop.id)}
        <Shop {shop} />
      {/each}
    </section>
  {:else}
    <section class="flex flex-col mx-auto max-w-4xl gap-y-2">
      {#each results as result}
        <section
          class="flex flex-col gap-y-4 bg-gray-100 rounded-md p-2 shadow-sm"
        >
          <a
            href="/shop/{result.shopSlug}"
            class="font-semibold p-2 text-lime-700">{result.shopName}</a
          >
          <section class="grid grid-cols-2 text-xl">
            <section>
              {#if result.image}
                <img
                  src={result.image}
                  alt={result.name}
                  class="h-16 w-16 inline p-2"
                />
              {/if}
              <span class="my-auto font-medium pl-2">{result.name}</span>
            </section>
            <span class="my-auto">{result.price}</span>
          </section>
        </section>
      {/each}
    </section>
  {/if}
</section>
