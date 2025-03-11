import { Text } from "@mantine/core";
import Link from "next/link";

export default function Lessons() {
  return (
    <div>
      <Text size="lg" className="maintext">
        Here are the basic lessons we teach, provided to you for reference. Each
        lesson is given by an instructor who will help &quot;fill in the
        blanks&quot; and answer your questions.
      </Text>
      <Text size="lg" className="maintext">
        It is important that you understand that our lessons aren&apos;t
        exhaustive; some of these topics, you can spend a lifetime learning.
        Instead, we help you get started, but it is <b>your goal</b> to teach
        yourself beyond that. We strongly suggest 1-2 hours a day where you try
        to teach yourself new things. If you cannot do this due to time
        constraints, make it a day or two a week. The important thing is{" "}
        <b>effort</b> and <b>consistency</b>.
      </Text>
      <h2>Lesson Plans</h2>
      <Text size="lg" className="maintext">
        Each link leads to a series of lessons which should be read and digested
        in order. By way of your instructor, you should be able to ask
        questions, and receive assistance with parts of the lesson that trouble
        you. Do not let yourself feel stupid or inadequate, and do not fear
        interrupting to ask questions. The goal is for you to learn.
      </Text>
      <ul>
        <li>
          <Link href="./lessons/unix">
            Unix Fundamentals with the Linux Operating System
          </Link>
        </li>
        <li>
          <Link href="./lessons/rdbms">
            RDBMS: Relational Databases &amp; SQL
          </Link>
        </li>
      </ul>
    </div>
  );
}
