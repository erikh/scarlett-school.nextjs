import Link from "next/link";
import lessons from "./lessons.js";

export default function Unix({ params }) {
  return (
    <div>
      <ol>
        {lessons.map((lesson, index) => (
          <li key={index + 1}>
            <Link href={`/lessons/unix/${index + 1}`}>{lesson.name}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
