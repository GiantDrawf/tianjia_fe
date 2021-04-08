<script>
  export let segment;
  const menus = [
    {
      url: 'about',
      text: '关于天佳',
    },
    {
      url: 'news',
      text: '新闻中心',
    },
    {
      url: 'products',
      text: '产品中心',
    },
    {
      url: 'successes',
      text: '成功案例',
    },
    {
      url: 'serviceCenter',
      text: '服务中心',
    },
    {
      url: 'recruit',
      text: '招聘信息',
    },
  ];
</script>

<header class="text-black body-font shadow mb-1">
  <div
    class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
  >
    <a
      href="."
      class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
    >
      <img class="h-8 w-8" src="favicon.png" alt="天佳空调" />
      <span class="ml-3 text-xl">天佳空调</span>
    </a>
    <nav
      class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"
    >
      {#each menus as menu}
        <a
          class="{segment === menu.url
            ? 'text-blue-600'
            : ''} mr-5 hover:text-blue-600"
          href={menu.url}>{menu.text}</a
        >
      {/each}
    </nav>
    <button
      class="text-gray-300 inline-flex items-center bg-blue-600 border-0 py-1 px-3 focus:outline-none hover:bg-blue-900 hover:text-white rounded text-base mt-4 md:mt-0"
      >联系我们
    </button>
  </div>
</header>
