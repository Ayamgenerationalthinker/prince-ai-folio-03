interface BlogContentProps {
  content: string;
}

export const BlogContent = ({ content }: BlogContentProps) => {
  // Simple markdown-like rendering for headings, paragraphs, code blocks, and lists
  const renderContent = (text: string) => {
    const lines = text.split("\n");
    const elements: JSX.Element[] = [];
    let inCodeBlock = false;
    let codeBlockContent: string[] = [];
    let listItems: string[] = [];
    let listType: "ul" | "ol" | null = null;

    const flushList = () => {
      if (listItems.length > 0 && listType) {
        const ListTag = listType;
        elements.push(
          <ListTag
            key={elements.length}
            className={`my-4 ${listType === "ul" ? "list-disc" : "list-decimal"} list-inside space-y-2 text-foreground/90`}
          >
            {listItems.map((item, i) => (
              <li key={i} className="leading-relaxed">
                {item}
              </li>
            ))}
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
            <pre
              key={elements.length}
              className="my-6 p-4 bg-muted rounded-lg overflow-x-auto font-mono text-sm"
            >
              <code className="text-foreground/90">
                {codeBlockContent.join("\n")}
              </code>
            </pre>
          );
          codeBlockContent = [];
          inCodeBlock = false;
        } else {
          flushList();
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

      // Headings
      if (line.startsWith("### ")) {
        elements.push(
          <h3 key={index} className="text-xl font-semibold mt-8 mb-4 text-foreground">
            {line.slice(4)}
          </h3>
        );
        return;
      }

      if (line.startsWith("## ")) {
        elements.push(
          <h2 key={index} className="text-2xl font-semibold mt-10 mb-4 text-foreground">
            {line.slice(3)}
          </h2>
        );
        return;
      }

      if (line.startsWith("# ")) {
        elements.push(
          <h1 key={index} className="text-3xl font-bold mt-10 mb-6 text-foreground">
            {line.slice(2)}
          </h1>
        );
        return;
      }

      // Inline code
      const processedLine = line.replace(
        /`([^`]+)`/g,
        '<code class="px-1.5 py-0.5 bg-muted rounded text-sm font-mono">$1</code>'
      );

      // Empty lines create spacing
      if (line.trim() === "") {
        elements.push(<div key={index} className="h-4" />);
        return;
      }

      // Regular paragraphs
      elements.push(
        <p
          key={index}
          className="my-4 leading-relaxed text-foreground/90 text-lg"
          dangerouslySetInnerHTML={{ __html: processedLine }}
        />
      );
    });

    // Flush remaining list items
    flushList();

    return elements;
  };

  return (
    <div className="prose prose-lg max-w-none">
      {renderContent(content)}
    </div>
  );
};
