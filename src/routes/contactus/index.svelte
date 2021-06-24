<script>
  import Container from '../../components/Container.svelte';
  import Form from '../../components/Form/index.svelte';
  import { submitMsg } from '../../services';
  import CONST from '../../utils/const';

  let errors = {};
  const formFields = [
    {
      label: '问题',
      name: 'title',
      component: 'input',
      rules: ['required(请填写问题)', 'len:50(问题不要超过50字)'],
    },
    {
      label: '内容',
      name: 'content',
      component: 'textarea',
      rules: ['required(请填写内容)'],
    },
    {
      label: '联系人名称',
      name: 'name',
      component: 'input',
      rules: ['required(请填写联系人名称)', 'len:10(联系人名称不要超过10个字)'],
    },
    {
      label: '手机号',
      name: 'contact',
      component: 'input',
      rules: ['required(请填写联系手机)', 'phone(请填写正确的手机号)'],
    },
  ];

  function handleFormSubmit(fieldsValue) {
    submitMsg({ ...fieldsValue, msgFrom: 'front' }).then((res) => {
      if (res && res.code === 200) {
        alert('成功提交，请耐心等待客服人员联系您~');
        window.location.href = '/serviceCenter';
      } else {
        alert('网络异常，请稍后重试！');
      }
    });
  }
</script>

<svelte:head>
  <title>联系我们-天佳空调-风机箱-组合式空调箱</title>
</svelte:head>

<Container>
  <div class="flex flex-col md:flex-row">
    <div class="md:w-3/5 md:mr-16">
      <h3 class="mt-2 mb-4 text-2xl font-bold">联 系 客 服</h3>
      <Form fields={formFields} formErrors={errors} submit={handleFormSubmit} />
    </div>
    <div class="flex-1 text-center md:text-left">
      <h3 class="mt-2 mb-4 text-2xl font-bold">找 到 我 们</h3>
      {#each CONST.contactInfoMap as itemInfo}
        <p class="font-bold text-lg">{itemInfo.label}</p>
        <p class="py-2 text-base text-gray-500">
          {#if itemInfo.isPhone}
            <a href="tel:{itemInfo.value}" class="">{itemInfo.value}</a>
          {:else}
            {itemInfo.value}
          {/if}
        </p>
      {/each}
    </div>
  </div>
</Container>
