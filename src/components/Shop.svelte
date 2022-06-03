<script>
  export let shop
</script>

<section class="flex h-56 w-96 items-end rounded-xl bg-cover p-4 text-gray-800">
  <section class="flex flex-col">
    <span class="text-lg">{shop.owner}</span>
    <a href="/shop/{shop.name}">
      <span class="text-3xl font-semibold text-orange-900">{shop.name}</span>
    </a>
    <span class="text-2xl">{shop.description}</span>
    <span class="text-xl">{shop.productName}</span>
    <span class="text-xl">{shop.productPrice}</span>
  </section>
</section>
