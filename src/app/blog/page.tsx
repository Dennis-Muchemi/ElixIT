import { BlogHero } from '@/components/blogPage/BlogHero'
import { BlogFilters } from '@/components/blogPage/BlogFilters'
import { FeaturedPosts } from '@/components/blogPage/FeaturedPost'
import { BlogGrid } from '@/components/blogPage/BlogGrid'
import { Newsletter } from '@/components/blogPage/NewsLetter'
import Footer from '@/components/layout/Footer'
import NavigationBar from '@/components/layout/NavigationBar'

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <NavigationBar />
      <BlogHero />
      <BlogFilters />
      <FeaturedPosts />
      <BlogGrid />
      <Newsletter />
      <Footer />
    </main>
  )
}