<main
  class="
    container
    mx-auto
    p-8
    text-white
  "
>
  <div class="relative mb-14">
    <h1 class="absolute bottom-0 left-10 text-6xl font-bold s-text-border">Stitchy</h1>
    <img src="{logo}" aria-hidden="true" alt="" class="w-20" />
  </div>

  {#if viewState === 'projects'}
    <Projects
      on:newProject={() => viewState = 'addProject'}
      on:showProject={showProject}
    />
  {/if}

  {#if viewState === 'addProject' || viewState === 'editProject'}
    <ProjectForm
      mode="{viewState === 'addProject' ? 'new' : 'edit' }"
      on:createProject={createProject}
      on:updateProject={updateProject}
      on:back={() => viewState = (viewState === 'addProject') ? 'projects' : 'showProject'}
    />
  {/if}

  {#if viewState === 'showProject'}
    <Project
      project={$currentProject}
      on:back={() => viewState = 'projects'}
      on:editProject={() => viewState = 'editProject'}
    />
  {/if}
</main>

<script>
  import { v4 as uuid } from "uuid"
  import Projects from './Projects.svelte'
  import ProjectForm from './ProjectForm.svelte'
  import Project from './Project.svelte'
  import { currentProject, projects } from '../store/stores.js'
  import logo from '../assets/yarn-ball.svg'

  let viewState = 'projects'

  function createProject() {
    viewState = 'projects'
  }
  function updateProject(event) {
    $currentProject = event.detail.project
    viewState = 'showProject'
  }

  function showProject(event) {
    $currentProject = $projects.filter(project => project.id === event.detail.projectId)[0]
    viewState = 'showProject'
  }
</script>

<style>
  .s-text-border {
    text-stroke: 0.1rem #000;
    -webkit-text-stroke: 0.1rem #000;
  }
</style>
