<script>
  export let news = [];
</script>

<div
  class="grid grid-cols-1 gap-x-10 mt-4 grid-rows-4 lg:grid-cols-2 lg:grid-rows-3"
>
  {#each news as itemNewsInfo, index}
    <a
      href="article/{itemNewsInfo.aid}"
      class="{index === 0
        ? `lg:row-span-3`
        : ''} col-span-1 row-span-1 w-full h-full flex flex-col justify-between itemNewsInfo"
    >
      {#if index === 0}
        <div class="w-full h-auto hidden lg:block overflow-hidden">
          <img
            src={itemNewsInfo.thumbnail}
            alt={itemNewsInfo.title}
            class="w-full transition duration-1000 mb-10 "
          />
        </div>
      {/if}
      <div
        class="flex-1 mb-4 relative border-b-4 border-gray-200 flex flex-col justify-between"
      >
        <h2 class="text-base mb-1 lg:text-2xl font-semibold">
          {itemNewsInfo.title}
        </h2>
        <p
          class="text-xs lg:text-base leading-5 lg:leading-7 mb-4 lg:mb-6 overflow-ellipsis overflow-hidden"
          style="display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;"
        >
          {itemNewsInfo.summary}
        </p>
        <div
          class="border-b-4 border-blue-900  absolute left-0 -bottom-1 blueLine w-1/6 transition-all duration-500"
        />
      </div>
    </a>
  {/each}
</div>

<style>
  :global(.itemNewsInfo:hover .blueLine) {
    width: 100%;
  }
  :global(.itemNewsInfo:hover h2, .itemNewsInfo:hover p) {
    color: rgba(30, 58, 138, 0.9);
  }
  :global(.itemNewsInfo:hover img) {
    transform: scale(1.1);
  }
</style>
