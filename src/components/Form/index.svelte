<script>
  import FormItem from './FormItem.svelte';
  import * as rulesValidate from './validateRules';
  import * as Utils from '../../utils/index.js';

  // 表单字段
  export let fields = [];
  // 表单错误
  export let formErrors = {};
  export let submit;
  // 表单值
  let formValues = {};
  // 验证
  async function validate(fields) {
    const allRulesPromise = [];
    fields.forEach(({ name, rules }) => {
      const itemValue = formValues[name];
      rules.forEach((itemRule) => {
        if (typeof itemRule === 'function') {
          if (Utils.isPromise(itemRule)) {
            allRulesPromise.push(itemRule.bind(this, itemValue));
          }

          allRulesPromise.push(Promise.resolve(itemRule(itemValue)));
        }

        // 提取验证规则
        itemRule.match(/^(.*)\((.+)\)/g);
        const validatorName = RegExp.$1.split(':')[0];
        const validatorArg = RegExp.$1.split(':')[1] || '';
        const validatorMsg = RegExp.$2;

        if (validatorName && rulesValidate[validatorName]) {
          const validateRes = rulesValidate[validatorName](
            itemValue,
            validatorArg
          );

          allRulesPromise.push(
            validateRes
              ? Promise.resolve(true)
              : Promise.resolve({
                  name,
                  validator: validatorName,
                  msg: validatorMsg,
                })
          );
        }
      });
    });

    const allErrors = await Promise.all(allRulesPromise);

    // 过滤掉验证通过的
    return allErrors.filter(
      (item) => !(typeof item === 'boolean' && item === true)
    );
  }
  async function handleSubmit() {
    // 校验每个字段及值
    if (fields && Object.prototype.toString.call(fields) === '[object Array]') {
      formErrors = {};
      const allErrors = await validate(fields);
      if (allErrors.length === 0 && submit) {
        submit(formValues);
      } else {
        const newFormErrors = {};
        allErrors.forEach((item) => {
          newFormErrors[`${item.name}`] = newFormErrors[`${item.name}`]
            ? [...newFormErrors[`${item.name}`], item]
            : [item];
        });
        formErrors = newFormErrors;
      }
    } else {
      console.error('The props of form component must be array type');
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  {#each fields as itemField}
    <FormItem
      label={itemField.label}
      name={itemField.name}
      required={itemField.rules &&
        itemField.rules.filter(
          (item) => typeof item !== 'function' && item.indexOf('required') === 0
        ).length}
      errors={formErrors[`${itemField.name}`]}
    >
      {#if itemField.component === 'input'}
        <input
          class="border-solid border-2 border-gray-700 w-full px-2 py-1 rounded {formErrors[
            `${itemField.name}`
          ]
            ? 'border-red-500'
            : ''}"
          type="text"
          placeholder={itemField.placeholder || `请填写${itemField.label}`}
          bind:value={formValues[`${itemField.name}`]}
        />
      {:else if itemField.component === 'textarea'}
        <textarea
          class="border-solid border-2 border-gray-700 w-full h-32 px-2 py-1 rounded {formErrors[
            `${itemField.name}`
          ]
            ? 'border-red-500'
            : ''}"
          type="text"
          placeholder={itemField.placeholder || `请填写${itemField.label}`}
          bind:value={formValues[`${itemField.name}`]}
        />
      {/if}
    </FormItem>
  {/each}
  <button
    type="submit"
    class="block text-white bg-gray-600 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50 w-16 h-10 rounded-md mx-auto"
  >
    提交
  </button>
</form>
