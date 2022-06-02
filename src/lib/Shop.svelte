<script>
  export let shop
</script>

<section class="flex h-56 w-96 items-end rounded-xl bg-cover p-4 text-gray-50">
  <section class="flex flex-col">
    <span class="text-lg">{shop.owner}</span>
    <span class="text-3xl font-semibold text-green-400">{shop.name}</span>
  </section>
</section>
