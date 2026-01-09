import { Link } from "react-router-dom";
import { format } from "date-fns";
import type { Post } from "@/hooks/usePosts";

interface BlogCardProps {
  post: Post;
}

export const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <article className="group">
      <Link to={`/blog/${post.id}`} className="block">
        {/* Featured Image */}
        <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted mb-4">
          {post.image_url ? (
            <img
              src={post.image_url}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <span className="text-4xl">📝</span>
            </div>
          )}
        </div>
        
        {/* Title */}
        <h2 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h2>
        
        {/* Author/Date */}
        <p className="text-sm text-muted-foreground">
          Prince Fiebor • {format(new Date(post.created_at), "MMM d, yyyy")}
        </p>
      </Link>
    </article>
  );
};
