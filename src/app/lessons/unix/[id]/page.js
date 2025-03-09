import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
const fs = require("fs");

const lessons = [
  {
    name: "Filesystems",
    path: "unix/1-filesystems.md",
  },
  {
    name: "The Shell",
    path: "unix/2-the-shell.md",
  },
  {
    name: "Filesystem Commands",
    path: "unix/3-filesystem-commands.md",
  },
  {
    name: "Standard I/O",
    path: "unix/4-standard-io.md",
  },
  {
    name: "Directory Structure",
    path: "unix/5-directory-structure.md",
  },
  {
    name: "Users",
    path: "unix/6-users.md",
  },
  {
    name: "Processes",
    path: "unix/7-processes.md",
  },
  {
    name: "Devices and Links",
    path: "unix/8-devices-and-links.md",
  },
  {
    name: "Scripting",
    path: "unix/9-scripting.md",
  },
];

export async function generateStaticParams() {
  return lessons.map((lesson, index) => ({
    id: String(index + 1),
  }));
}

export default async function Unix({ params }) {
  const { id } = await params;
  return (
    <div className="markdown">
      <ReactMarkdown
        remarkPlugins={[[remarkGfm]]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                style={solarizedlight}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
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
        {fs.readFileSync(
          "src/documents/lessons/" + lessons[id - 1].path,
          "utf8"
        )}
      </ReactMarkdown>
    </div>
  );
}
