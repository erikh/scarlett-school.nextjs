import Link from "next/link";
import lessons from "./lessons.js";

export default function RDBMS({ params }) {
  return (
    <div>
      <ol>
        {lessons.map((lesson, index) => (
          <li key={index + 1}>
            <Link href={`/lessons/rdbms/${index + 1}`}>{lesson.name}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
