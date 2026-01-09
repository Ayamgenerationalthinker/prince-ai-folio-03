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
          {/* Breadcrumb */}
          <div className="max-w-4xl mx-auto mb-8">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/blog" className="hover:text-foreground transition-colors">
                Blog
              </Link>
              <span>/</span>
              <span className="text-foreground truncate max-w-[300px]">
                {post?.title || "Loading..."}
              </span>
            </nav>
          </div>

          <div className="max-w-4xl mx-auto">
            {isLoading ? (
              <div>
                <Skeleton className="h-12 w-full mb-6" />
                <div className="flex items-center gap-4 mb-8">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-3 w-48" />
                  </div>
                </div>
                <Skeleton className="aspect-video w-full rounded-xl mb-8" />
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
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-primary mt-4 hover:underline"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blog
                </Link>
              </div>
            ) : post ? (
              <>
                {/* Title */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8">
                  {post.title}
                </h1>

                {/* Author Info */}
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-border">
                  <img
                    src="/images/profile-picture.jpg"
                    alt="Prince Fiebor"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground">Prince Fiebor</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-3.5 h-3.5" />
                      <time dateTime={post.created_at}>
                        {format(new Date(post.created_at), "MMMM d, yyyy")}
                      </time>
                    </div>
                  </div>
                </div>

                {/* Featured Image */}
                {post.image_url && (
                  <div className="aspect-video rounded-xl overflow-hidden bg-muted mb-10">
                    <img
                      src={post.image_url}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Summary as Lead */}
                <p className="text-xl text-muted-foreground leading-relaxed mb-10 font-medium">
                  {post.summary}
                </p>

                {/* Content */}
                <BlogContent content={post.content} />

                {/* Back to Blog */}
                <div className="mt-16 pt-8 border-t border-border">
                  <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to all articles
                  </Link>
                </div>
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
