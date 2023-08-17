import { Seq } from './node_modules/immutable/dist/immutable';

export default function printBestStudents(obj) {
  const student = Seq(obj)
    .filter((std) => std.score >= 70)
    .map((std) => ({
      ...std,
      firstName: std.firstName.charAt(0).toUpperCase() + std.firstName.slice(1),
      lastName: std.lastName.charAt(0).toUpperCase() + std.lastName.slice(1),
    }))
    .toObject();

  console.log(student);
}
