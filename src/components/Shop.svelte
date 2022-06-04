<script>
  export let shop
</script>

<a href="/shop/{shop.slug}">
  <section
    style="background-image: url('{shop.image}')"
    class=" flex h-56 w-96 scale-125 items-end rounded-xl bg-cover p-4 text-gray-800"
  >
    <section class="flex flex-col">
      <span class="text-lg text-gray-100">{shop.owner}</span>
      <span class="text-3xl font-semibold text-yellow-300">{shop.name}</span>
      <span class="text-2xl">{shop.description}</span>
    </section>
  </section>
</a>
