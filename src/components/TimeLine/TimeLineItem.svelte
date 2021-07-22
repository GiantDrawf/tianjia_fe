<script>
  export let data;
</script>

<div
  class="order-3 flex-1 max-w-sm ml-2 md:mx-10 overflow-hidden bg-white rounded-lg shadow-lg cursor-pointer itemCase"
>
  {#if data.thumbnail}
    <div class="w-full h-48 overflow-hidden">
      <img
        src={data.thumbnail}
        alt={data.title}
        class="object-cover object-center w-full h-full transition duration-500 itemCaseImg"
      />
    </div>
  {/if}
  <p class="text-center px-6 py-3 bg-gray-900 text-lg font-semibold text-white">
    {data.title}
  </p>
  {#if data.content}
    <div class="p-4 text-sm">
      {@html data.content}
    </div>
  {/if}
</div>

<style>
  :global(.itemCase:hover .itemCaseImg) {
    transform: scale(1.1);
  }
</style>
