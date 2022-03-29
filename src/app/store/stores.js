import { writable } from 'svelte/store'

export const currentProject = writable({})
export const projects = writable(JSON.parse(localStorage.getItem('projects')) || [])
