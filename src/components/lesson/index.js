import Markdown from "../markdown";

export async function generateLessons(lessons) {
  return lessons.map((lesson, index) => ({
    id: String(index + 1),
  }));
}

export function Lesson({ lessons, fs, id }) {
  return (
    <Markdown>
      {fs.readFileSync("src/documents/lessons/" + lessons[id - 1].path, "utf8")}
    </Markdown>
  );
}
