<a
  class="
    px-5
    py-2.5
    rounded-lg
    bg-s-red
    disabled:bg-slate-700
  "
  {href}
  target="_blank"
  rel="noreferrer noopener"
  {disabled}
  {alt}
>
  <slot></slot>
</a>

<script>
  export let href
  export let disabled = false
  export let alt = undefined
</script>
