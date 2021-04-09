<script context="module">
  import menus from '../routes.js';
  import CONST from '../../utils/const.js';
  // 获取页面数据，包括标题和文章数据
  export async function preload(page) {
    const { path } = page;
    // 设置标题
    let title = '江苏净化洁净中央空调厂家';
    let article = {};
    let error = false;
    try {
      title = menus
        .filter((itemMenu) => itemMenu.url === 'about')[0]
        .children.filter((itemChild) => path.includes(itemChild.url))[0].text;
    } catch (e) {
      console.log(e);
    }
    const childPath = path.split('/')[path.split('/').length - 1];
    const aid = CONST.pageModuleMap.about.children[childPath].aid;
    const res = await this.fetch(
      `${CONST.apiPath}/common/article/getDetail?aid=${aid}`
    );

    if (res.status === 200) {
      const resJson = await res.json();
      if (resJson.code === 200) {
        article = resJson.data;
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
    };
  }
</script>

<script>
  export let title;
  export let article;
  export let error;
</script>

<svelte:head>
  <title>{title}-天佳空调-风机箱-组合式空调箱</title>
</svelte:head>

{#if error}
  <div>啊哦，出错了</div>
{:else}
  <div class="leading-loose w-full articleContent prose-xl">
    {@html article.content}
  </div>
{/if}

<style>
  :global(.articleContent img) {
    display: block;
    margin: 10px auto;
  }
</style>
