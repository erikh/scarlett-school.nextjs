import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import { Text } from "@mantine/core";
const fs = require("fs");

export default function About() {
  const contents = fs.readFileSync(
    "src/documents/papers/rules-and-ethos.md",
    "utf8"
  );
  return (
    <Text size="lg">
      <ReactMarkdown remarkPlugins={[[remarkGfm]]}>{contents}</ReactMarkdown>
    </Text>
  );
}
