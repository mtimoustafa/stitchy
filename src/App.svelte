<main
  class="
    container
    mx-auto
    p-8
    text-white
  "
>
  <Router>
    <div class="relative mb-14">
      <Link to="/" aria-label="Stitchy: Home">
        <h1 class="absolute bottom-0 left-10 text-6xl font-bold s-text-border">Stitchy</h1>
        <img src="{logo}" aria-hidden="true" alt="" class="w-20" />
      </Link>
    </div>

    <Route path="/">
      <Projects />
    </Route>

    <Route path="projects/new">
      <ProjectForm mode="new" />
    </Route>

    <Route path="projects/:id" let:params>
      <Project projectId="{params.id}" />
    </Route>

    <Route path="projects/:id/edit" let:params>
      <ProjectForm
        mode="edit"
        projectId="{params.id}"
      />
    </Route>
  </Router>
</main>

<script>
  import { Link, Router, Route } from 'svelte-navigator'
  import Projects from './app/components/Projects.svelte'
  import ProjectForm from './app/components/ProjectForm.svelte'
  import Project from './app/components/Project.svelte'
  import logo from './app/assets/yarn-ball.svg'

  // <body> style must be added dynamically to index.html
  // for Tailwind to pick it up
  document.body.classList.add('bg-black')
</script>

<style>
  @import './main.css';

  .s-text-border {
    text-stroke: 0.1rem #000;
    -webkit-text-stroke: 0.1rem #000;
  }
</style>
