<!-- 侧边模块 -->
<script>
  export let moduleName;
</script>

<div class="mb-6">
  {#if moduleName}
    <div class="font-bold text-xl border-b-2 border-gray-300 pb-2">
      {moduleName}
    </div>
  {/if}
  <slot />
</div>
