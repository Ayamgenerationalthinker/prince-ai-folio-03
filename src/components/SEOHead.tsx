import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  author?: string;
}

export const SEOHead = ({
  title,
  description,
  image,
  type = "website",
  publishedTime,
  author = "Prince Fiebor",
}: SEOHeadProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper to update or create meta tag
    const setMetaTag = (property: string, content: string, isProperty = true) => {
      const attr = isProperty ? "property" : "name";
      let meta = document.querySelector(`meta[${attr}="${property}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, property);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Get the full URL for the current page
    const url = window.location.href;
    const origin = window.location.origin;
    const fullImage = image?.startsWith("http") ? image : `${origin}${image}`;

    // Basic meta tags
    setMetaTag("description", description, false);

    // Open Graph tags
    setMetaTag("og:title", title);
    setMetaTag("og:description", description);
    setMetaTag("og:type", type);
    setMetaTag("og:url", url);
    if (image) {
      setMetaTag("og:image", fullImage);
    }

    // Twitter Card tags
    setMetaTag("twitter:card", "summary_large_image", false);
    setMetaTag("twitter:title", title, false);
    setMetaTag("twitter:description", description, false);
    if (image) {
      setMetaTag("twitter:image", fullImage, false);
    }

    // Article specific tags
    if (type === "article") {
      if (publishedTime) {
        setMetaTag("article:published_time", publishedTime);
      }
      if (author) {
        setMetaTag("article:author", author);
      }
    }

    // Cleanup function to restore original meta tags
    return () => {
      document.title = "Prince Fiebor | Computer Scientist & AI Enthusiast";
    };
  }, [title, description, image, type, publishedTime, author]);

  return null;
};
