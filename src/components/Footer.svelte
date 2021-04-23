<script>
  import menus from '../routes/routes.js';
</script>

<footer class="bg-gray-100">
  <div
    class="py-10 mx-auto max-w-7xl flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-nowrap flex-col"
  >
    <div class="w-50 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a
        href="."
        class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
      >
        <img class="h-8 w-8" src="images/favicon.png" alt="天佳空调" />
        <span class="ml-3 text-xl hover:text-blue-600">天佳空调</span>
      </a>
      <p class="my-2 text-sm text-gray-500">国内专业的中央空调服务商</p>
      <p class="my-2 text-sm text-gray-500 text-center">
        <a href="https://beian.miit.gov.cn/" class="hover:text-blue-600"
          >苏ICP备2020060739号</a
        >
      </p>
    </div>
    <div
      class="flex-grow flex flex-wrap md:pl-10 -mb-10 md:mt-0 mt-10 md:text-left text-center overflow-hidden"
    >
      {#each menus as menu}
        <div class="lg:w-1/{menus.length} md:w-1/3 w-1/2 text-center">
          <h2
            class="title-font font-medium text-gray-900 tracking-widest text-base mb-3 hover:text-blue-600"
          >
            <a href={menu.url}>{menu.text}</a>
          </h2>
          {#if menu.children}
            <nav class="list-none mb-10 lg:mb-0">
              {#each menu.children as child}
                <li>
                  <a
                    href={`${menu.url}/${child.url}`}
                    class="text-gray-600 text-sm hover:text-blue-600"
                    >{child.text}</a
                  >
                </li>
              {/each}
            </nav>
          {/if}
        </div>
      {/each}
    </div>
  </div>
  <div
    class="h-16 bg-black text-white px-6 items-center flex flex-row justify-between text-sm"
  >
    <span>天佳空调 版权所有</span>
    <span
      >Copyright © {new Date().getFullYear()} Taixing Tianjia Air Conditioning Co.,
      Ltd.</span
    >
  </div>
</footer>
