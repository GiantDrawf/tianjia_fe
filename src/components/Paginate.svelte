<script>
  export let page;
  export let pageSize;
  export let total;
  export let onChange;
  let pageArr = [];
  $: totalPages = Math.ceil(total / pageSize);
  $: if (totalPages < 7) {
    // 分页数量小于7个，全部展示
    pageArr = Array(totalPages)
      .fill('')
      .map((item, index) => ({
        type: 'number',
        order: index + 1,
      }));
  } else if (totalPages >= 7) {
    // 取当前页+左右各一页的简略分页器
    let middlePageSliceStart = page - 2;
    if (middlePageSliceStart < 0) {
      middlePageSliceStart = 0;
    } else if (middlePageSliceStart + 3 > totalPages) {
      middlePageSliceStart -= 1;
    }

    // 填充首尾分页器，并填充省略号
    // 第一页
    const firstPage = {
      type: 'number',
      order: 1,
    };
    // 第二页
    const endPage = {
      type: 'number',
      order: totalPages,
    };
    // 左侧省略号
    const leftEllipsisPage = {
      type: 'ellipsis',
      direction: 'left',
    };
    // 右侧省略号
    const rightEllipsisPage = {
      type: 'ellipsis',
      direction: 'right',
    };

    pageArr = [middlePageSliceStart >= 1 ? firstPage : null]
      .concat([middlePageSliceStart >= 2 ? leftEllipsisPage : null])
      .concat(
        Array(3)
          .fill('')
          .map((item, index) => ({
            type: 'number',
            order: middlePageSliceStart + index + 1,
          }))
      )
      .concat([
        middlePageSliceStart < totalPages - 4 ? rightEllipsisPage : null,
      ])
      .concat([middlePageSliceStart < totalPages - 3 ? endPage : null])
      .filter((item) => item);
  }

  function handleClick(actionPage) {
    if (actionPage > 0 && actionPage !== page && actionPage <= totalPages) {
      onChange(actionPage);
    }
  }
</script>

{#if total}
  <div class="w-full flex flex-row py-4 justify-center">
    <div
      class="w-7 h-7 rounded-md border border-solid border-gray-200 mx-2 flex flex-row justify-center items-center {page ===
      1
        ? 'cursor-not-allowed'
        : 'cursor-pointer'}"
      on:click|preventDefault={() => handleClick(page - 1)}
    >
      <img class="w-1/2" src="images/left.png" alt="上一页" />
    </div>
    {#each pageArr as item}
      <div
        class="px-2 min-w-7 h-7 rounded-md border border-solid border-gray-200 mx-2 flex flex-row justify-center items-center {page ===
        item.order
          ? 'cursor-not-allowed bg-gray-800 text-white'
          : 'cursor-pointer'}"
        on:click|preventDefault={() => {
          if (item.type === 'number') {
            handleClick(item.order);
          } else if (item.type === 'ellipsis') {
            handleClick(item.direction === 'left' ? page - 2 : page + 2);
          }
        }}
      >
        {#if item.type === 'number'}
          {item.order}
        {:else if item.type === 'ellipsis'}
          ...
        {/if}
      </div>
    {/each}
    <div
      class="w-7 h-7 rounded-md border border-solid border-gray-200 mx-2 flex flex-row justify-center items-center {page ===
      totalPages
        ? 'cursor-not-allowed'
        : 'cursor-pointer'}"
      on:click|preventDefault={() => handleClick(page + 1)}
    >
      <img class="w-1/2" src="images/right.png" alt="下一页" />
    </div>
  </div>
{/if}
