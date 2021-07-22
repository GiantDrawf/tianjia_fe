<script>
  import CONST from '../../utils/const.js';
  const mid = CONST.pageModuleMap['products'];
  const title = '产品中心';

  import NewsStreamLayout from '../../components/NewStreamLayout.svelte';
</script>

<NewsStreamLayout {mid} {title} emptyText="当前分类下暂无产品" />
