<script>
  export let mid;
  export let title = '';
  export let emptyText;

  import Container from './Container.svelte';
  import RightModule from './RightModule.svelte';
  import SearchInput from './SearchInput.svelte';
  import Paginate from './Paginate.svelte';
  import InfoFlow from './InfoFlow.svelte';
  import { getModuleData } from '../services';

  let pagination = {
    page: 1,
    pageSize: 10,
    total: 0,
  };
  let newsList = [];
  let loading = false;

  function getListData({
    mid = mid,
    page = 1,
    pageSize = 10,
    fuzzy = '',
  } = {}) {
    if (!loading && mid) {
      loading = true;
      getModuleData({ mid, page, pageSize, fuzzy })
        .then((res) => {
          if (res && res.code === 200) {
            const moreList = (res && res.data && res.data.moduleContent) || [];
            newsList = moreList;
            pagination = {
              page,
              pageSize,
              total: (res && res.data && res.data.total) || 0,
            };
          }
        })
        .finally(() => {
          loading = false;
        });
    }
  }

  function onSearch(val) {
    if (val) {
      getListData({ mid, fuzzy: val, page: 1 });
    } else {
      getListData({ mid });
    }
  }

  $: {
    getListData({ mid });
  }

  function handlePageChange(page) {
    getListData({ mid, ...pagination, page });
  }
</script>

<svelte:head>
  <title>{title}-天佳空调-风机箱-组合式空调箱</title>
</svelte:head>

{#if mid}
  <Container>
    <div class="flex flex-col md:flex-row w-full">
      <div class="flex-1 overflow-hidden">
        <div class="flex flex-row-reverse items-center">
          <SearchInput {onSearch} />
        </div>
        <InfoFlow data={newsList} {emptyText} />
        <Paginate {...pagination} onChange={handlePageChange} />
      </div>
      <RightModule showHot={false} />
    </div>
  </Container>
{/if}
