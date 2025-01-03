import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { project, post } from './src/lib/sanity/schema'

export default defineConfig({
  name: 'default',
  title: 'ElixIT Website',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  plugins: [deskTool()],
  schema: {
    types: [project, post],
  },
  basePath: '/studio',
})