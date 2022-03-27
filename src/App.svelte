<Layout />

<script>
  import Layout from './app/components/Layout.svelte'

  // <body> style must be added dynamically to index.html
  // for Tailwind to pick it up
  document.body.classList.add('bg-midnight')
</script>

<style>
  @import './main.css';
</style>
