<script>
  import { onMount } from 'svelte';
  import Container from '../../components/Container.svelte';
  import RightModule from '../../components/RightModule.svelte';
  import Paginate from '../../components/Paginate.svelte';
  import { queryMsg } from '../../services';
  import { getRandomNum, desensitizationPhoneNumber } from '../../utils';

  let msgList = [];
  let query = {
    query: {
      isShow: true,
    },
    pagination: {
      page: 1,
      pageSize: 10,
      total: 0,
    },
  };

  function getMsg(payload) {
    queryMsg(payload).then((res) => {
      if (res && res.code === 200) {
        msgList = (res.data && res.data.list) || [];
        query = {
          ...query,
          pagination: {
            page:
              (res.data &&
                res.data.pagination &&
                res.data.pagination.current) ||
              1,
            total:
              (res.data && res.data.pagination && res.data.pagination.total) ||
              0,
            pageSize:
              (res.data &&
                res.data.pagination &&
                res.data.pagination.pageSize) ||
              10,
          },
        };
      }
    });
  }

  onMount(() => {
    getMsg(query);
  });

  function handlePageChange(page) {
    getMsg({ ...query, pagination: { ...query.pagination, page } });
  }
</script>

<svelte:head>
  <title>服务中心-天佳空调-风机箱-组合式空调箱</title>
</svelte:head>

<Container>
  <div class="flex flex-col md:flex-row w-full">
    <div class="flex-1">
      {#each msgList as eachMsg}
        <div class="mb-8 shadow-xl rounded-md py-3 px-6 bg-gray-100">
          <!-- 用户问题标题及内容 -->
          <div class="flex flex-row">
            <img
              class="rounded-full w-10 h-10 overflow-hidden mr-4 mt-2 border border-solid border-gray-200"
              src="images/randomAvatar/{`${getRandomNum(1, 10)}`}.png"
              alt="userAvatar"
            />
            <div class="flex-1">
              <p
                class="flex flex-col md:flex-row justify-between text-sm text-gray-400"
              >
                <span>用户{desensitizationPhoneNumber(eachMsg.contact)}</span>
                <span>留言时间: {eachMsg.createTime}</span>
              </p>
              <h3
                class="py-1 pl-2 my-1 bg-gray-300 text-white font-bold text-base"
              >
                {eachMsg.title}
              </h3>
              <p class="py-1" disabled>
                {eachMsg.content}
              </p>
              {#if eachMsg.replay}
                <div
                  class="flex flex-row items-center border border-solid border-gray-200 rounded-md p-3"
                >
                  <img
                    class="w-8 h-8 mr-3"
                    src="images/managerAvatar.png"
                    alt="managerAvatar"
                  />
                  {eachMsg.replay}
                </div>
                <p class="my-2 text-right text-sm text-gray-400">
                  回复时间: {eachMsg.replayTime}
                </p>
              {/if}
            </div>
          </div>
        </div>
      {/each}
      <Paginate {...query.pagination} onChange={handlePageChange} />
      {#if msgList.length === 0}
        <div class="w-1/2 mx-auto mt-20 text-center">
          <img class="m-auto" src="images/noMsg.png" alt="nomsg" />
          <p class="text-gray-400 text-lg">
            暂无留言，去<a class="text-blue-400" href="/contactus">联系我们</a>
          </p>
        </div>
      {/if}
    </div>
    <RightModule />
  </div>
</Container>
