const fs = require("fs");
import lessons from "../lessons.js";
import Markdown from "../../../../components/markdown";

export async function generateStaticParams() {
  return lessons.map((lesson, index) => ({
    id: String(index + 1),
  }));
}

export default async function Unix({ params }) {
  const { id } = await params;
  return (
    <Markdown>
      {fs.readFileSync("src/documents/lessons/" + lessons[id - 1].path, "utf8")}
    </Markdown>
  );
}
