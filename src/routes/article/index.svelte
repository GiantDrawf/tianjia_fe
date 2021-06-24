<script context="module">
  import CONST from '../../utils/const.js';
  // 获取页面数据，包括标题和文章数据
  export async function preload(page) {
    const { query } = page;

    // 设置标题
    let title = '江苏净化洁净中央空调厂家';
    let article = {};
    let error = false;

    let aid = query.aid;
    const layout = query.layout || 'none';
    // 没有aid直接报错
    if (!aid) {
      return {
        title,
        article,
        error: true,
      };
    }
    const res = await this.fetch(
      `${CONST.apiPath}/common/article/getDetail?aid=${aid}`
    );

    if (res.status === 200) {
      const resJson = await res.json();
      if (resJson.code === 200 && resJson.data) {
        article = resJson.data;
        title = article.title || '';
      } else {
        error = true;
        aid = '';
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
      layout,
    };
  }
</script>

<script>
  import { onMount } from 'svelte';
  import Container from '../../components/Container.svelte';
  import Error from '../../components/Error.svelte';
  import RightModule from '../../components/RightModule.svelte';
  import { browseArticle } from '../../services';

  export let title;
  export let article;
  export let error;
  export let aid;
  export let layout;

  onMount(() => {
    if (aid) {
      // 记录访问量
      browseArticle(aid);
    }
  });
</script>

<svelte:head>
  <title>{title}-天佳空调-风机箱-组合式空调箱</title>
</svelte:head>

<Container>
  <div class="flex flex-col md:flex-row w-full">
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
    {#if layout !== 'noSide'}
      <RightModule />
    {/if}
  </div>
</Container>

<style>
  :global(.articleContent img) {
    display: block;
    margin: 10px auto;
  }
</style>
