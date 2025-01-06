import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

// Configuration object following our cost-effective architecture
export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  apiVersion: '2024-01-02',
  useCdn: process.env.NODE_ENV === 'production',
  perspective: 'published' as const,
  stega: {
    enabled: false, // Disable stega for better performance
  },
}

// Create a client with configuration
export const client = createClient(config)

// Create a preview client with authentication
export const previewClient = createClient({
  ...config,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

// Helper to determine which client to use
export const getClient = (usePreview = false) => 
  usePreview ? previewClient : client

// Set up image builder instance
const builder = imageUrlBuilder(client)

// Helper function to source images
export const urlForImage = (source: SanityImageSource) => {
  return builder.image(source)
}

// Type-safe document fetching with caching configuration
export const fetchQuery = async <T>(
  query: string,
  params: Record<string, unknown> = {},
  usePreview = false
): Promise<T> => {
  try {
    return await getClient(usePreview).fetch<T>(query, params, {
      cache: process.env.NODE_ENV === 'production' ? 'force-cache' : 'no-store',
      next: { tags: ['content'], revalidate: 3600 }, // Cache for 1 hour
    })
  } catch (error) {
    console.error('Sanity query error:', error)
    throw new Error('Failed to fetch data from Sanity')
  }
}

// Replace any with specific type
export interface SanityDocument {
  _id: string;
  _type: string;
  [key: string]: unknown;
}