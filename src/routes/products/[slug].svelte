<script context="module">
  import menus from '../routes.js';
  import CONST from '../../utils/const.js';

  export async function preload(page) {
    const {
      params: { slug },
    } = page;

    const pageModuleMap = CONST.pageModuleMap;
    const mid = pageModuleMap[`${slug}`] || '';
    let title = '';
    try {
      title = menus
        .filter((itemMenu) => itemMenu.url === 'products')[0]
        .children.filter((itemChild) => slug === itemChild.url)[0].text;
    } catch (e) {
      console.log(e);
    }

    return {
      mid,
      title,
    };
  }
</script>

<script>
  export let mid;
  export let title;

  import NewsStreamLayout from '../../components/NewStreamLayout.svelte';
</script>

<NewsStreamLayout {mid} {title} emptyText="当前分类下暂无产品" />
