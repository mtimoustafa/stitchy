import { writable } from 'svelte/store'

export const projects = writable(JSON.parse(localStorage.getItem('projects')) || [])
