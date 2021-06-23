<script>
  export let label;
  export let name;
  export let required;
  export let errors = [];
</script>

<div class="mb-4">
  {#if label}
    <label for={name} class="mb-2 font-bold text-lg text-gray-500">
      {label}
    </label>
    {#if required}
      <span class="text-red-600">*</span>
    {/if}
  {/if}
  <div>
    <slot />
    {#if errors && errors.length && errors[0].msg}
      <!-- 每次仅显示单个错误 -->
      <p class="text-red-500 text-sm">{errors[0].msg}</p>
    {/if}
  </div>
</div>
