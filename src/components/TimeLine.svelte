<script>
  export let data = [];
</script>

<div class="w-full h-full">
  <div class="relative wrap pl-4 h-full">
    <div
      class="border absolute border-opacity-20 border-gray-700 h-full top-0 left-1/10 md:left-1/2"
    />
    {#each data as itemCase, index}
      <a
        href="."
        class="flex flex-row items-center {index % 2 === 0
          ? 'md:flex-row-reverse md:ml-4'
          : 'md:-ml-4'}"
      >
        <div class="order-1 md:w-1/2" />
        <div
          class="order-2 z-20 flex flex-row justify-center items-center bg-gray-800 shadow-xl w-8 h-8 rounded-full -ml-4 text-white text-lg font-semibold"
        >
          {index + 1}
        </div>
        <div
          class="order-3 flex-1 max-w-sm ml-2 md:mx-10 overflow-hidden bg-white rounded-lg shadow-lg itemCase"
        >
          <img
            src={itemCase.thumbnail}
            alt={itemCase.title}
            class="object-cover object-center w-full h-48 transition duration-500 itemCaseImg"
          />
          <p
            class="text-center px-6 py-3 bg-gray-900 text-lg font-semibold text-white"
          >
            {itemCase.title}
          </p>
          {#if itemCase.content}
            <div class="p-4 text-sm">
              {@html itemCase.content}
            </div>
          {/if}
        </div>
      </a>
    {/each}
  </div>
  <slot />
</div>

<style>
  :global(.itemCase:hover .itemCaseImg) {
    transform: scale(1.1);
  }
</style>
