<script context="module">
  import CONST from '../../utils/const.js';
  // 获取页面数据，包括标题和文章数据
  export async function preload(page) {
    const { path } = page;
    // 设置标题
    let title = '江苏净化洁净中央空调厂家';
    let article = {};
    let error = false;

    const aid = path.split('/')[path.split('/').length - 1];
    const res = await this.fetch(
      `${CONST.apiPath}/common/article/getDetail?aid=${aid}`
    );

    if (res.status === 200) {
      const resJson = await res.json();
      if (resJson.code === 200) {
        article = resJson.data;
        title = article.title || '';
      } else {
        error = true;
      }
    } else {
      error = true;
    }

    // 获取文章内容
    return {
      title,
      article,
      error,
      aid,
    };
  }
</script>

<script>
  export let title;
  export let article;
  export let error;
  export let aid;
  let hotArticles = [];
  import Container from '../../components/Container.svelte';
  import Error from '../../components/Error.svelte';
  import SideModule from '../../components/SideModule.svelte';
  import { browseArticle, getHotArticles } from '../../services';
  // 获取热门文章
  $: aid &&
    getHotArticles(6).then((res) => {
      if (res && res.code === 200) {
        hotArticles = res.data || [];
      }
    });

  // 记录访问量
  $: aid && browseArticle(aid);
</script>

<svelte:head>
  <title>{title}-天佳空调-风机箱-组合式空调箱</title>
</svelte:head>

<Container>
  <div class="flex flex-col lg:flex-row w-full">
    {#if error}
      <Error />
    {:else}
      <div class="leading-loose flex-1 articleContent prose-xl">
        <p
          class="text-2xl mb-6 font-bold w-4/5 mx-auto text-center text-gray-600"
        >
          {title}
        </p>
        {@html article.content}
        <p class="py-4 text-right text-gray-400 text-base">
          发布日期: {article.createTime}
        </p>
      </div>
    {/if}
    <div class="w-full lg:w-1/3 max-w-xl mx-auto lg:ml-8 mt-10 lg:mt-0">
      <SideModule moduleName="关于我们">
        <p class="py-2">江苏专业的中央空调服务商！</p>
        <img src="images/wechat.png" alt="微信" class="w-3/4 mx-auto mb-2" />
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
            <a href="article/{itemArticle.aid}" class="block overflow-hidden">
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
  </div>
</Container>

<style>
  :global(.articleContent img) {
    display: block;
    margin: 10px auto;
  }
</style>
