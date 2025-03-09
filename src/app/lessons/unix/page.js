import buildLesson from "../build_lesson.js";
import lessons from "./lessons.js";

export default function Unix() {
  return buildLesson({}, "unix", lessons);
}
