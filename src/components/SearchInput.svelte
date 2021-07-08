<script>
  export let placeholder = '请输入搜索关键词';
  export let onSearch = (val) => {
    console.warn('未定义 onSearch 函数');
  };
  let searchValue = '';

  const handleSearch = (e) => {
    // 回车时开始搜索
    if (e.which === 13) {
      onSearch(searchValue);
    }
  };

  const clearVal = () => {
    searchValue = '';
  };
</script>

<div class="relative md:w-3/4 flex flex-row-reverse">
  <input
    class="block md:w-1/2 w:2/3 min-w-50 outline-none focus:outline-none border-2 border-gray-500 pl-3 pr-12 py-1 rounded-full shadow-lg focus:w-full transition-all duration-300"
    {placeholder}
    on:keypress={handleSearch}
    bind:value={searchValue}
  />
  <div
    class="absolute w-9 h-9 bg-search-icon bg-center bg-no-repeat bg-1 z-50 top-1/2 right-1 -mt-4.5 cursor-pointer"
    on:click={() => onSearch(searchValue)}
  />
  {#if searchValue}
    <div
      class="absolute w-9 h-9 bg-close-icon bg-center bg-no-repeat bg-1 z-50 top-1/2 right-6 -mt-4.5 cursor-pointer"
      on:click={clearVal}
    />
  {/if}
</div>
