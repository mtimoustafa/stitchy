<button
    class="
      px-6
      py-3
      rounded-lg
      bg-s-red
      disabled:bg-slate-700
    "
  on:click
  disabled={disabled}
>
  <slot></slot>
</button>

<script>
  export let disabled
</script>
