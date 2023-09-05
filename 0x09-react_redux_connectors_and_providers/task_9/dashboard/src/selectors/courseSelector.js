export const getCourses = (state) => {
  const course = state.course;

  if (course) {
    return course.valueSeq();
  }

  return course;
};
