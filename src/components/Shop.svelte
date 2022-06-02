<script>
  export let shop
</script>

<section class="flex h-56 w-96 items-end rounded-xl bg-cover p-4 text-gray-800">
  <section class="flex flex-col">
    <span class="text-lg">{shop.owner}</span>
    <span class="text-3xl font-semibold text-orange-900">{shop.name}</span>
    <span class="text-2xl">{shop.description}</span>
  </section>
</section>
