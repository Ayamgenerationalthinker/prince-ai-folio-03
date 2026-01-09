import { useParams, Link, useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BlogContent } from "@/components/BlogContent";
import { usePost } from "@/hooks/usePosts";
import { ArrowLeft, Calendar } from "lucide-react";
import { format } from "date-fns";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect } from "react";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: post, isLoading, error } = usePost(id || "");

  useEffect(() => {
    if (!isLoading && !post && !error) {
      navigate("/blog", { replace: true });
    }
  }, [post, isLoading, error, navigate]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <article className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {/* Back Link */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            {isLoading ? (
              <div>
                <Skeleton className="h-6 w-40 mb-4" />
                <Skeleton className="h-12 w-full mb-4" />
                <Skeleton className="h-6 w-3/4 mb-8" />
                <div className="space-y-4">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              </div>
            ) : error ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground">
                  Unable to load this blog post. Please try again later.
                </p>
              </div>
            ) : post ? (
              <>
                {/* Featured Image */}
                {post.image_url && (
                  <div className="aspect-video rounded-xl overflow-hidden bg-muted mb-8">
                    <img
                      src={post.image_url}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Header */}
                <header className="mb-12">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={post.created_at}>
                      {format(new Date(post.created_at), "MMMM d, yyyy")}
                    </time>
                  </div>
                  
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                    {post.title}
                  </h1>
                  
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {post.summary}
                  </p>
                </header>

                {/* Divider */}
                <hr className="border-border mb-12" />

                {/* Content */}
                <BlogContent content={post.content} />
              </>
            ) : null}
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
