<script>
  import Container from '../../components/Container.svelte';
  import TimeLineItem from '../../components/TimeLine/TimeLineItem.svelte';
  import RightModule from '../../components/RightModule.svelte';
  import { getModuleData } from '../../services';
  import EmptyStatus from '../../components/EmptyStatus.svelte';
  export let title;
  export let mid;

  let timeLineData = [];
  let loading = false;

  function getListData({ mid = mid, page = 1 } = {}) {
    if (!loading && mid) {
      loading = true;
      getModuleData({
        mid,
        page,
        pageSize: Number.MAX_SAFE_INTEGER, // 不分页
        needAContent: 1,
      })
        .then((res) => {
          if (res && res.code === 200) {
            const moreList = (res && res.data && res.data.moduleContent) || [];
            timeLineData = moreList;
          }
        })
        .finally(() => {
          loading = false;
        });
    }
  }

  $: {
    mid && getListData({ mid });
  }
</script>

<svelte:head>
  <title>{title}-天佳空调-风机箱-组合式空调箱</title>
</svelte:head>

<Container>
  <div class="flex flex-col md:flex-row w-full">
    <div class="flex-1 overflow-hidden">
      {#if timeLineData.length}
        {#each timeLineData as itemCase}
          <div class="mb-6 flex flex-row justify-center">
            <TimeLineItem data={itemCase} />
          </div>
        {/each}
      {:else}
        <EmptyStatus emptyText="暂无案例" />
      {/if}
    </div>
    <RightModule showHot />
  </div>
</Container>
