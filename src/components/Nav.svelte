<script>
  export let segment;
  let showSideBar = false;
  import menus from '../routes/routes.js';

  const handleShowSideBar = () => (showSideBar = !showSideBar);
  const handleSideBarClick = (e) => {
    const tagName = e.target.tagName;
    if (tagName && tagName.toUpperCase() === 'A') {
      showSideBar = false;
    }
  };
</script>

<header class="text-black body-font shadow sticky top-0 z-50 bg-white">
  <div
    class="hidden md:flex container mx-auto flex-nowrap h-20 flex-row items-center"
  >
    <a href="." class="flex title-font font-medium items-center text-gray-900">
      <img class="h-8 w-8" src="images/favicon.png" alt="天佳空调" />
      <span class="ml-3 text-xl">天佳空调</span>
    </a>
    <nav
      class="mx-auto flex flex-wrap justify-between text-base h-full items-center"
    >
      {#each menus as menu}
        <a
          class="{segment === menu.url
            ? 'bg-gray-900 text-gray-100'
            : 'text-gray-800'} px-2 py-2 text-sm rounded-md dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 hover:font-medium md:mx-2 menu-item relative"
          href={menu.redirectUrl || menu.url}
          rel="prefetch"
          >{menu.text}
          {#if menu.children}
            <div
              class="hidden absolute z-10 -left-1/2 mt-3 top-full w-36 rounded-lg border border-gray-100 shadow-2xl menu-child"
            >
              <div
                class="w-full flex bg-white flex-col flex-nowrap text-center divide-y divide-gray-200 rounded-lg overflow-hidden"
              >
                {#each menu.children as child}
                  <a
                    href={`${menu.url}/${child.url}`}
                    rel="prefetch"
                    class="py-2 text-black hover:text-white hover:bg-gray-900"
                    >{child.text}</a
                  >
                {/each}
              </div>
            </div>
          {/if}
        </a>
      {/each}
    </nav>
    <button
      class="text-white inline-flex items-center bg-gray-600 border-0 py-1 px-3 focus:outline-none hover:bg-gray-900 rounded text-base focus:bg-gray-600 transition ease-in-out duration-300 transform hover:scale-110"
      >联系我们
    </button>
  </div>
  <div
    class="flex md:hidden h-12 bg-gray-100 flex-row flex-nowrap px-2 justify-between items-center"
  >
    <a href="." class="flex title-font font-medium items-center">
      <img class="h-8 w-8" src="images/favicon.png" alt="天佳空调" />
      <span class="ml-3 text-xl text-black">天佳空调</span>
    </a>
    <a href="contactus" class="mr-2">联系我们</a>
    <a
      href="tel:13921745084"
      type="button"
      class="fixed z-50 bottom-40 right-4 w-16 h-16 rounded-full bg-gray-500 text-white block"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 absolute top-1/2 left-1/2 -mt-3 -ml-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    </a>
    <button
      type="button"
      on:click={handleShowSideBar}
      class="fixed z-50 bottom-20 right-4 w-16 h-16 rounded-full bg-gray-900 text-white block focus:outline-none"
    >
      {#if showSideBar}
        <svg
          width="24"
          height="24"
          fill="none"
          class="absolute top-1/2 left-1/2 -mt-3 -ml-3"
          ><path
            d="M6 18L18 6M6 6l12 12"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          /></svg
        >
      {:else}
        <svg
          width="24"
          height="24"
          fill="none"
          class="absolute top-1/2 left-1/2 -mt-3 -ml-3"
        >
          <path
            d="M4 8h16M4 16h16"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      {/if}
    </button>
    <div
      class:hidden={!showSideBar}
      class="fixed z-40 inset-0 flex-none h-full bg-black bg-opacity-25 w-full transition ease-in-out duration-500 transform"
      on:click={handleSideBarClick}
    >
      <div
        class="h-full overflow-y-auto scrolling-touch overflow-hidden w-2/3 p-4 bg-white"
      >
        <ul class="list-none">
          {#each menus as menu}
            <li class="mb-8">
              <a
                href={menu.redirectUrl || menu.url}
                class="h-full w-full inline-block mb-3 font-semibold text-sm text-gray-900"
                >{menu.text}</a
              >
              {#if menu.children}
                <nav class="list-none pl-2">
                  {#each menu.children as child}
                    <li class="text-base py-2 text-gray-400 font-normal">
                      <a
                        href={`${menu.url}/${child.url}`}
                        rel="prefetch"
                        class="h-full w-full inline-block">{child.text}</a
                      >
                    </li>
                  {/each}
                </nav>
              {/if}
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</header>

<style>
  .menu-item:hover .menu-child {
    display: block;
  }

  .menu-child::before,
  .menu-child::after {
    position: absolute;
    content: '';
  }

  .menu-child:before {
    left: 50%;
    top: -20px;
    margin-left: -10px;
    border: 10px solid;
    border-color: transparent transparent rgba(0, 0, 0, 0.05) transparent;
  }
  .menu-child:after {
    border: 9px solid;
    margin-left: -9px;
    border-color: transparent transparent #fff transparent;
    left: 50%;
    top: -18px;
  }
</style>
