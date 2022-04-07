<div class="space-y-4">
  <Button on:click={clearProjects}>
    clear projects
  </Button>

  <Button on:click={() => localStorage.clear()}>
    nuke dat local store babyyyy
  </Button>
</div>

<script>
  import Button from './shared/Button.svelte'
  import { clearProjects } from '../store/stores.js'
</script>
