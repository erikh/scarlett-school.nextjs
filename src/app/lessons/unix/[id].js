import lessons from "./lessons.js";
import { useRouter } from "next/navigation";

export default function Unix() {
  const router = useRouter();
  return (
    <div className="markdown">
      <ReactMarkdown
        remarkPlugins={[[remarkGfm]]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                style={solarizedlight}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code
                style={{
                  paddingLeft: "0.25em",
                  paddingRight: "0.25em",
                  border: "1px solid #888",
                  backgroundColor: "#966",
                  color: "white",
                }}
                className={className}
                {...props}
              >
                {children}
              </code>
            );
          },
        }}
      >
        {lessons[router.query.id]}
      </ReactMarkdown>
    </div>
  );
}
