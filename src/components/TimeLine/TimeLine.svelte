<script>
  import cn from 'classnames';
  import TimeLineItem from './TimeLineItem.svelte';
  export let data = [];
</script>

<div class="w-full h-full">
  <div class="relative wrap pl-4 h-full">
    <div
      class="border absolute border-opacity-20 border-gray-700 h-full top-0 left-1/10 md:left-1/2"
    />
    {#each data as itemCase, index}
      <div
        class={cn(
          'flex',
          'flex-flow',
          'items-center',
          'mb-4',
          'md:mb-0',
          index % 2 === 0 ? 'md:flex-row-reverse md:ml-4' : 'md:-ml-4'
        )}
      >
        <div class="order-1 md:w-1/2" />
        <div
          class="order-2 z-20 flex flex-row justify-center items-center bg-gray-800 shadow-xl w-8 h-8 rounded-full -ml-4 text-white text-lg font-semibold"
        >
          {index + 1}
        </div>
        <TimeLineItem data={itemCase} />
      </div>
    {/each}
  </div>
  <slot />
</div>
