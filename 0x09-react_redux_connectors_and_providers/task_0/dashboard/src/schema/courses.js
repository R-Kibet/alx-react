import { normalize, schema } from "normalizr";

const Course = new schema.Entity('courses');

export default function coursesNormalizer(data) {
  const normalized = normalize(data, [Course]);

  return normalized.entities;
}