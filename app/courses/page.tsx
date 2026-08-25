export default function Courses() {
  const courses = [
    {
      name: "Computer Science",
      code: "CS-101",
      instructor: "Dr. Ahmed",
      progress: "75%",
      description: "Programming fundamentals and problem solving.",
    },
    {
      name: "Data Structures",
      code: "CS-201",
      instructor: "Dr. Sara",
      progress: "60%",
      description: "Arrays, linked lists, stacks, queues and trees.",
    },
    {
      name: "Database Systems",
      code: "CS-301",
      instructor: "Dr. Hassan",
      progress: "45%",
      description: "SQL, relational databases and database design.",
    },
    {
      name: "English",
      code: "ENG-101",
      instructor: "Ms. Ayesha",
      progress: "80%",
      description: "Academic writing, communication and presentation.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            My Courses
          </h1>

          <p className="mt-2 text-gray-600">
            View your enrolled courses and track your progress.
          </p>
        </div>

        {/* Course Cards */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {courses.map((course) => (
            <div
              key={course.code}
              className="rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-blue-600">
                    {course.code}
                  </p>

                  <h2 className="mt-2 text-xl font-bold text-gray-900">
                    {course.name}
                  </h2>
                </div>
              </div>

              <p className="mt-4 text-gray-600">
                {course.description}
              </p>

              <p className="mt-4 text-sm text-gray-500">
                Instructor: {course.instructor}
              </p>

              {/* Progress */}
              <div className="mt-6">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">
                    Progress
                  </span>

                  <span className="text-gray-500">
                    {course.progress}
                  </span>
                </div>

                <div className="mt-2 h-2 rounded-full bg-gray-200">
                  <div
                    className="h-2 rounded-full bg-blue-600"
                    style={{ width: course.progress }}
                  />
                </div>
              </div>

              <button
                className="mt-6 w-full rounded-lg bg-blue-600 px-4 py-2.5 font-semibold text-white hover:bg-blue-700"
              >
                View Course
              </button>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}