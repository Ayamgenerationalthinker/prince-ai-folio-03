import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BlogCard } from "@/components/BlogCard";
import { usePosts } from "@/hooks/usePosts";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const Blog = () => {
  const { data: posts, isLoading, error } = usePosts();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl mx-auto mb-12">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                Blog
              </h1>
            </div>
            
            <p className="text-lg text-muted-foreground">
              Thoughts, tutorials, and insights on AI, machine learning, and software development.
            </p>
          </div>

          {/* Blog Posts */}
          <div className="max-w-3xl mx-auto">
            {isLoading ? (
              <div className="space-y-8">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="border-b border-border pb-8">
                    <Skeleton className="h-4 w-32 mb-3" />
                    <Skeleton className="h-8 w-3/4 mb-3" />
                    <Skeleton className="h-20 w-full mb-4" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                ))}
              </div>
            ) : error ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground">
                  Unable to load blog posts. Please try again later.
                </p>
              </div>
            ) : posts && posts.length > 0 ? (
              <div className="space-y-8">
                {posts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <BookOpen className="w-12 h-12 mx-auto text-muted-foreground/50 mb-4" />
                <p className="text-muted-foreground">
                  No blog posts yet. Check back soon!
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
