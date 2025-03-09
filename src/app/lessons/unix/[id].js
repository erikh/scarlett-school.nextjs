import buildLesson from "../build_lesson.js";
import lessons from "./lessons.js";
import { useRouter } from "next/router";

export const getStaticPaths = async () => {
  return {
    paths: lessons.map((lesson, index) => {
      params: {
        name: `/lessons/unix/${index}`;
      }
    }),
    fallback: true,
  };
};

export default function Id() {
  return buildLesson(useRouter().query, "unix", lessons);
}
