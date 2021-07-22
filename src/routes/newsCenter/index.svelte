<script>
  import CONST from '../../utils/const.js';
  const mid = CONST.pageModuleMap['newsCenter'];
  const title = '新闻中心';

  import NewsStreamLayout from '../../components/NewStreamLayout.svelte';
</script>

<NewsStreamLayout {mid} {title} />
