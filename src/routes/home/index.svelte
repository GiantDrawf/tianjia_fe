<script>
  import { onMount } from 'svelte';
  import Slide from '../../components/Slides.svelte';
  import ModuleName from '../../components/ModuleName.svelte';
  import { getModuleData, getArticleData } from '../../services';
  import CONST from '../../utils/const';
  import ImportSvg from '../../components/ImportSvg.svelte';
  import TimeLine from '../../components/TimeLine.svelte';
  let slides = [];
  let tjSelected;
  let brandStory;
  let timelineData = [];
  let brandInfos = [];

  onMount(() => {
    // 获取幻灯数据
    getModuleData({ mid: CONST.pageModuleMap.home.swiper }).then((res) => {
      if (res && res.code) {
        slides = (res.data && res.data.moduleContent) || [];
      }
    });

    // 获取天佳心选模块数据
    getModuleData({
      mid: CONST.pageModuleMap.home.tjSelected,
      showLimit: 5,
    }).then((res) => {
      if (res && res.code) {
        tjSelected = res.data || {};
      }
    });

    // 获取品牌故事文章数据
    getArticleData(CONST.pageModuleMap.home.brandStoryAid).then((res) => {
      if (res && res.code) {
        brandStory = res.data;
      }
    });

    // 获取商业案例数据
    getModuleData({
      mid: CONST.pageModuleMap.home.businessCase,
      showLimit: 5,
      needAContent: 1,
    }).then((res) => {
      if (res && res.code) {
        timelineData = (res.data && res.data.moduleContent) || [];
      }
    });

    // 获取品牌咨询文章列表数据
    getModuleData({
      mid: CONST.pageModuleMap.home.brandInfo,
      showLimit: 4,
    }).then((res) => {
      if (res && res.code) {
        brandInfos = (res.data && res.data.moduleContent) || [];
      }
    });
  });
</script>

<!-- 幻灯 -->
{#if slides && slides.length}
  <Slide {slides} />
{/if}

<!-- 天佳心选 -->
{#if tjSelected}
  <div class="w-full bg-gray-50 overflow-hidden">
    <div class="my-10 max-w-full px-4 md:px-0 md:max-w-5xl mx-auto">
      <ModuleName moduleName={tjSelected.moduleName} />
      <div
        class="grid grid-cols-1 grid-rows-5 gap-2 md:grid-cols-4 md:grid-rows-2 md:grid-flow-col"
      >
        {#if tjSelected.moduleContent && tjSelected.moduleContent.length}
          {#each tjSelected.moduleContent as itemSelected, index (itemSelected.aid)}
            <a
              href="."
              class="{index === 0
                ? 'md:col-span-2 md:row-span-2'
                : ''} col-span-1 row-span-1 w-full h-full rounded-md flex flex-col items-center pb-2 md:pb-4 itemTJSelect overflow-hidden transition-all duration-300 hover:shadow-2xl bg-gray-100 hover:bg-gray-200"
            >
              <img
                src={itemSelected.thumbnail}
                class="w-3/4 transition duration-1000"
                alt={itemSelected.title}
              />
              <div class="text-center flex-1 flex flex-col justify-center">
                <p class="my-4 text-xl font-medium">
                  {itemSelected.title}
                </p>
                <p class="text-sm text-gray-600">{itemSelected.summary}</p>
              </div>
            </a>
          {/each}
        {/if}
      </div>
    </div>
  </div>
{/if}

<!-- 品牌故事 -->
{#if brandStory}
  <div class="my-10 max-w-full px-4 md:px-0 md:max-w-5xl mx-auto">
    <ModuleName moduleName="品牌故事" />
    <div class="text-center text-sm text-gray-700 leading-6">
      {@html brandStory.content}
    </div>
    <img
      src={brandStory.thumbnail}
      alt={brandStory.title}
      class="w-full mx-auto my-6"
    />
    <div
      class="grid grid-rows-4 grid-cols-1 gap-4 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1"
    >
      {#each CONST.pageModuleMap.home.brandStorySlogan as itemSlogan}
        <div
          class="flex flex-row px-8 justify-between items-center h-28 rounded-xl bg-white shadow-md overflow-hidden cursor-pointer hover:shadow-lg"
        >
          <ImportSvg svgName={itemSlogan.icon} height={10} width={10} />
          <p class="flex-1 text-center text-base">{itemSlogan.txt}</p>
        </div>
      {/each}
    </div>
  </div>
{/if}

<!-- 商业案例 -->
{#if timelineData && timelineData.length}
  <div class="w-full bg-gray-50 overflow-hidden">
    <div class="my-10 max-w-full px-4 md:px-0 md:max-w-5xl mx-auto">
      <ModuleName moduleName="商业案例" />
      <TimeLine data={timelineData}>
        <div class="text-center my-6">
          <a
            href="about"
            class="bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 mx-auto rounded-lg"
          >
            查看更多
          </a>
        </div>
      </TimeLine>
    </div>
  </div>
{/if}

<!-- 品牌资讯 -->
{#if brandInfos && brandInfos.length}
  <div class="my-10 max-w-full px-4 lg:px-0 md:max-w-5xl mx-auto">
    <ModuleName moduleName="品牌资讯" />
    <div
      class="grid grid-cols-1 gap-x-10 mt-4 grid-rows-{brandInfos.length} lg:grid-cols-2 lg:grid-rows-{brandInfos.length -
        1}"
    >
      {#each brandInfos as itemBrandInfo, index}
        <a
          href="."
          class="{index === 0
            ? `lg:col-span-1 lg:row-span-${brandInfos.length - 1}`
            : ''} col-span-1 row-span-1 w-full h-full flex flex-col justify-between itemBrandInfo"
        >
          {#if index === 0}
            <div class="w-full h-auto hidden lg:block overflow-hidden">
              <img
                src={itemBrandInfo.thumbnail}
                alt={itemBrandInfo.title}
                class="w-full transition duration-1000 mb-10 "
              />
            </div>
          {/if}
          <div
            class="flex-1 mb-4 relative border-b-4 border-gray-200 flex flex-col justify-between"
          >
            <h2 class="text-base mb-1 lg:text-2xl font-semibold">
              {itemBrandInfo.title}
            </h2>
            <p
              class="text-xs lg:text-base leading-5 lg:leading-7 mb-4 lg:mb-6 overflow-ellipsis overflow-hidden"
              style="display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;"
            >
              {itemBrandInfo.summary}
            </p>
            <div
              class="border-b-4 border-blue-900  absolute left-0 -bottom-1 blueLine w-1/6 transition-all duration-500"
            />
          </div>
        </a>
      {/each}
    </div>
  </div>
{/if}

<style>
  :global(.itemTJSelect:hover img) {
    transform: scale(1.1);
  }
  :global(.itemBrandInfo:hover .blueLine) {
    width: 100%;
  }
  :global(.itemBrandInfo:hover h2, .itemBrandInfo:hover p) {
    color: rgba(30, 58, 138, 0.9);
  }
  :global(.itemBrandInfo:hover img) {
    transform: scale(1.1);
  }
</style>
