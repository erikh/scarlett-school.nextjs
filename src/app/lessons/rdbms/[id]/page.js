const fs = require("fs");
import lessons from "../lessons.js";
import { generateLessons, Lesson } from "../../../../components/lesson";

export async function generateStaticParams() {
  return generateLessons(lessons);
}

export default async function RDBMS({ params }) {
  const { id } = await params;
  return <Lesson lessons={lessons} fs={fs} id={id} />;
}
