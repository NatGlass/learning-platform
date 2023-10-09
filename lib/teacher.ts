// Limit access to the teacher sections by only allowing
// users who are approved through Clerk to access it
export const isTeacher = (userId?: string | null) => {
  return userId === process.env.NEXT_PUBLIC_TEACHER_ID;
};
