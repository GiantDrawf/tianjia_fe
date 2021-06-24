<script>
  import { onMount } from 'svelte';
  import SideModule from './SideModule.svelte';
  import { getHotArticles } from '../services';
  import CONST from '../utils/const';

  let hotArticles = [];

  onMount(() => {
    getHotArticles(6).then((res) => {
      if (res && res.code === 200) {
        hotArticles = res.data || [];
      }
    });
  });
</script>

<div class="w-full lg:w-1/3 max-w-md md:max-w-xs mx-auto md:ml-8 mt-10 lg:mt-0">
  <SideModule moduleName="关于我们">
    <p class="py-2">江苏专业的中央空调服务商！</p>
    <img
      src="images/wechat.png"
      alt="微信"
      class="w-3/4 mx-auto mb-2 max-w-xs"
    />
    {#each CONST.companyInfoMap as itemInfo}
      <div class="flex flex-row mb-3">
        <img src={itemInfo.icon} alt="icon" class="w-6 mx-2" />
        <span class="mr-2">{itemInfo.name} :</span>
        <span>{itemInfo.value}</span>
      </div>
    {/each}
  </SideModule>
  {#if hotArticles.length}
    <SideModule moduleName="热门文章">
      {#each hotArticles as itemArticle}
        <a href="/article?aid={itemArticle.aid}" class="block overflow-hidden">
          <div
            class="flex flex-row my-2 text-gray-500 hover:text-black cursor-pointer"
          >
            <p class="truncate flex-1">
              {itemArticle.title}
            </p>
            <img src="images/fire.png" class="w-6 mx-1" alt="阅读量" />
            <span>{itemArticle.views}</span>
          </div>
        </a>
      {/each}
    </SideModule>
  {/if}
</div>
