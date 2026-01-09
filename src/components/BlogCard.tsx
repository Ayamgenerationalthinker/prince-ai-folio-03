import { Link } from "react-router-dom";
import { format } from "date-fns";
import { Calendar, ArrowRight } from "lucide-react";
import type { Post } from "@/hooks/usePosts";

interface BlogCardProps {
  post: Post;
}

export const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <article className="group border-b border-border pb-8 last:border-0">
      <Link to={`/blog/${post.id}`} className="block">
        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
          <Calendar className="w-4 h-4" />
          <time dateTime={post.created_at}>
            {format(new Date(post.created_at), "MMMM d, yyyy")}
          </time>
        </div>
        
        <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
          {post.title}
        </h2>
        
        <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
          {post.summary}
        </p>
        
        <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
          Read more
          <ArrowRight className="w-4 h-4" />
        </span>
      </Link>
    </article>
  );
};
