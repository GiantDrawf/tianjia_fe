<script>
  // 信息流组件
  import cn from 'classnames';
  import EmptyStatus from './EmptyStatus.svelte';

  export let data = [];
  export let emptyText = '暂无新闻';
</script>

<div class="divide-y">
  {#each data as itemNew}
    <a href="article?aid={itemNew.aid}" class="block itemNew">
      <div
        class={cn(
          itemNew.isTop ? 'flex-col' : 'flex-row',
          'flex flex-nowrap py-6 cursor-pointer text-gray-400'
        )}
      >
        {#if itemNew.thumbnail}
          <div
            class={cn(
              'overflow-hidden flex-shrink-0',
              itemNew.isTop
                ? 'w-full h-48 md:h-96 mb-3'
                : 'w-28 md:w-56 h-20 md:h-28 mr-3'
            )}
          >
            <img
              src={itemNew.thumbnail}
              class={cn(
                'block',
                'transition-all',
                'duration-700',
                itemNew.isTop ? '' : 'h-full'
              )}
              alt={itemNew.title}
            />
          </div>
        {/if}
        <div
          class="flex-1 flex flex-col justify-center flex-nowrap overflow-hidden"
        >
          <p class="mb-3 text-xl font-bold truncate text-gray-600">
            {#if itemNew.isTop}
              <span class="text-gray-800">[置顶]</span>
            {/if}
            {itemNew.title}
          </p>
          <p class="text-base leading-6 max-h-12 overflow-hidden mb-2">
            {itemNew.summary}
          </p>
          <p class="text-sm text-right">{itemNew.createTime}</p>
        </div>
      </div>
    </a>
  {/each}
  {#if data.length === 0}
    <EmptyStatus {emptyText} />
  {/if}
</div>

<style>
  .itemNew:hover img {
    transform: scale(1.2);
  }
</style>
