<button
    class="
      px-5
      py-2.5
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
