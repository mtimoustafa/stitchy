<main
  class="
    container
    mx-auto
    px-10
    py-16
    sm:py-20
    md:py-24
    lg:py-36
    space-y-8
    text-white
  "
>
  <div class="relative">
    <img src="{logo}" alt="Stitchy Logo: a yarn ball" class="w-20" />
    <h1 class="absolute bottom-0 left-10 text-5xl font-bold">Stitchy</h1>
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
