<button
  class="
    px-5
    py-2.5
    rounded-lg
    bg-s-red
    disabled:bg-slate-500
  "
  on:click
  {disabled}
  {alt}
>
  <slot></slot>
</button>

<script>
  export let disabled = false
  export let alt = undefined
</script>
