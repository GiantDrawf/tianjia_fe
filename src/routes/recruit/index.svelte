<script>
  import CONST from '../../utils/const.js';
  const mid = CONST.pageModuleMap['recruit'];
  const title = '招聘中心';

  import NewsStreamLayout from '../../components/NewStreamLayout.svelte';
</script>

<NewsStreamLayout {mid} {title} emptyText="暂无岗位信息" />
