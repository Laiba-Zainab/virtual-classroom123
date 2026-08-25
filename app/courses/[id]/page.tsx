type CoursePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CourseDetails({
  params,
}: CoursePageProps) {
  const { id } = await params;

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold">Course Details</h1>

      <div className="mt-6 rounded-xl border bg-white p-6 shadow-sm">
        <p className="text-gray-600">Course ID:</p>

        <p className="mt-1 text-xl font-semibold">
          {id}
        </p>

        <p className="mt-4 text-gray-600">
          Course content, lectures, materials, and quizzes will appear here.
        </p>
      </div>
    </div>
  );
}