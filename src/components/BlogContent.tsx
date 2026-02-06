import DOMPurify from 'dompurify';

interface BlogContentProps {
  content: string;
}

export const BlogContent = ({ content }: BlogContentProps) => {
  // Configure DOMPurify to allow safe formatting tags and links
  const sanitize = (html: string): string => {
    return DOMPurify.sanitize(html, {
      ALLOWED_TAGS: ['strong', 'em', 'code', 'span', 'a'],
      ALLOWED_ATTR: ['class', 'href', 'target', 'rel'],
    });
  };

  const renderContent = (text: string) => {
    const lines = text.split("\n");
    const elements: JSX.Element[] = [];
    let inCodeBlock = false;
    let codeBlockContent: string[] = [];
    let codeLanguage = "";
    let listItems: string[] = [];
    let listType: "ul" | "ol" | null = null;

    // Helper to render images
    const renderImage = (line: string, index: number) => {
      // Match markdown image syntax: ![alt](url)
      const imageMatch = line.match(/!\[([^\]]*)\]\(([^)]+)\)/);
      if (imageMatch) {
        const [, alt, src] = imageMatch;
        return (
          <figure key={index} className="my-8">
            <img 
              src={src} 
              alt={alt} 
              className="w-full rounded-lg shadow-md"
              loading="lazy"
              decoding="async"
            />
            {alt && (
              <figcaption className="text-center text-sm text-muted-foreground mt-3 italic">
                {alt}
              </figcaption>
            )}
          </figure>
        );
      }
      return null;
    };

    // Helper to render links in text
    const processLinks = (text: string): string => {
      // Convert markdown links [text](url) to HTML
      return text.replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-medium">$1</a>'
      );
    };

    const flushList = () => {
      if (listItems.length > 0 && listType) {
        const ListTag = listType;
        elements.push(
          <ListTag
            key={elements.length}
            className={`my-6 space-y-3 ${listType === "ul" ? "list-disc" : "list-decimal"} list-outside ml-6`}
          >
            {listItems.map((item, i) => {
              // Process links and inline formatting in list items
              let processedItem = processLinks(item)
                .replace(/\*\*([^*]+)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')
                .replace(/\*([^*]+)\*/g, '<em>$1</em>')
                .replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 bg-muted rounded text-sm font-mono text-primary">$1</code>');
              
              return (
                <li 
                  key={i} 
                  className="text-foreground/90 text-lg leading-relaxed pl-2"
                  dangerouslySetInnerHTML={{ __html: sanitize(processedItem) }}
                />
              );
            })}
          </ListTag>
        );
        listItems = [];
        listType = null;
      }
    };

    lines.forEach((line, index) => {
      // Code block handling
      if (line.startsWith("```")) {
        if (inCodeBlock) {
          elements.push(
            <div key={elements.length} className="my-8">
              {codeLanguage && (
                <div className="bg-muted/80 px-4 py-2 rounded-t-lg border-b border-border">
                  <span className="text-xs font-mono text-muted-foreground uppercase">
                    {codeLanguage}
                  </span>
                </div>
              )}
              <pre className={`p-4 bg-muted overflow-x-auto font-mono text-sm ${codeLanguage ? 'rounded-b-lg' : 'rounded-lg'}`}>
                <code className="text-foreground/90">
                  {codeBlockContent.join("\n")}
                </code>
              </pre>
            </div>
          );
          codeBlockContent = [];
          codeLanguage = "";
          inCodeBlock = false;
        } else {
          flushList();
          codeLanguage = line.slice(3).trim();
          inCodeBlock = true;
        }
        return;
      }

      if (inCodeBlock) {
        codeBlockContent.push(line);
        return;
      }

      // List items
      const unorderedMatch = line.match(/^[-*]\s+(.+)/);
      const orderedMatch = line.match(/^\d+\.\s+(.+)/);

      if (unorderedMatch) {
        if (listType !== "ul") {
          flushList();
          listType = "ul";
        }
        listItems.push(unorderedMatch[1]);
        return;
      }

      if (orderedMatch) {
        if (listType !== "ol") {
          flushList();
          listType = "ol";
        }
        listItems.push(orderedMatch[1]);
        return;
      }

      // Flush list before other elements
      flushList();

      // Check for images first
      const imageElement = renderImage(line, index);
      if (imageElement) {
        elements.push(imageElement);
        return;
      }

      // Headings - SitePoint style with clear hierarchy
      if (line.startsWith("### ")) {
        elements.push(
          <h3 key={index} className="text-xl font-bold mt-10 mb-4 text-foreground">
            {line.slice(4)}
          </h3>
        );
        return;
      }

      if (line.startsWith("## ")) {
        elements.push(
          <h2 key={index} className="text-2xl font-bold mt-12 mb-6 text-foreground">
            {line.slice(3)}
          </h2>
        );
        return;
      }

      if (line.startsWith("# ")) {
        elements.push(
          <h1 key={index} className="text-3xl font-bold mt-12 mb-6 text-foreground">
            {line.slice(2)}
          </h1>
        );
        return;
      }

      // Process inline formatting and links
      let processedLine = processLinks(line)
        // Bold
        .replace(/\*\*([^*]+)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')
        // Italic
        .replace(/\*([^*]+)\*/g, '<em>$1</em>')
        // Inline code
        .replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 bg-muted rounded text-sm font-mono text-primary">$1</code>');

      // Empty lines create spacing
      if (line.trim() === "") {
        return;
      }

      // Regular paragraphs - sanitize HTML before rendering
      elements.push(
        <p
          key={index}
          className="my-5 leading-relaxed text-foreground/90 text-lg"
          dangerouslySetInnerHTML={{ __html: sanitize(processedLine) }}
        />
      );
    });

    // Flush remaining list items
    flushList();

    return elements;
  };

  return (
    <div className="prose-custom">
      {renderContent(content)}
    </div>
  );
};
