<Link
  class="
    px-5
    py-2.5
    rounded-lg
    bg-s-red
    disabled:bg-slate-500
  "
  {to}
  {alt}
>
  <slot></slot>
</Link>

<script>
  import { Link } from 'svelte-navigator'

  export let to
  export let alt = undefined
</script>
