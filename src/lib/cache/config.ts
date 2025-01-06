import { LRUCache } from 'lru-cache'

interface CacheOptions {
  maxAge: number
  maxSize: number
}

interface CacheConfig {
  content: CacheOptions
  api: CacheOptions
  static: CacheOptions
}

export const cacheConfig: CacheConfig = {
  content: {
    maxAge: 3600 * 24, // 24 hours
    maxSize: 100       // 100 items
  },
  api: {
    maxAge: 300,      // 5 minutes
    maxSize: 50       // 50 items
  },
  static: {
    maxAge: 3600,     // 1 hour
    maxSize: 200      // 200 items
  }
}

// Create type-safe cache instances
const createCache = (options: CacheOptions) => {
  return new LRUCache({
    max: options.maxSize,
    ttl: options.maxAge * 1000, // Convert to milliseconds
    updateAgeOnGet: true,
    allowStale: true
  })
}

// Export cache instances
export const caches = {
  content: createCache(cacheConfig.content),
  api: createCache(cacheConfig.api),
  static: createCache(cacheConfig.static)
}

// Cache middleware for API routes
export const withCache = async <T extends object>(
  key: string,
  fetcher: () => Promise<T>,
  options: { type: keyof typeof caches } = { type: 'api' }
): Promise<T> => {
  const cache = caches[options.type]
  const cached = cache.get(key) as T | undefined
  
  if (cached) {
    return cached
  }

  const fresh = await fetcher()
  cache.set(key, fresh)
  return fresh
}

// Replace any with specific type
export interface CacheData<T> {
  data: T;
  timestamp: number;
}