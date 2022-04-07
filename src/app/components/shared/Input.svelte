<input
  class="
    bg-transparent
    border-b-4
    border-slate-500
    placeholder:text-slate-500
    px-2
    py-2.5
  "
  bind:value={value}
  {placeholder}
  on:input
/>

<script>
  export let value
  export let placeholder
</script>
