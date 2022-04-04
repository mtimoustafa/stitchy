<div class="flex justify-between items-center mb-10">
  <h2 class="text-3xl font-bold">Projects</h2>

  <RouterLink to="/projects/new">
    +
  </RouterLink>
</div>

<ul class="text-sky-50 space-y-8">
  {#each $projects as project}
    <li>
      <RouterLink to="/projects/{project.id}">
        { project.name }
      </RouterLink>
    </li>
  {/each}
</ul>

<script>
  import { projects } from '../store/stores.js'
  import RouterLink from './shared/RouterLink.svelte'
</script>
