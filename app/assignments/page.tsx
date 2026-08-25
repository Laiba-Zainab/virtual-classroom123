export default function Assignments() {
  const assignments = [
    {
      title: "Data Structures Practice",
      course: "Data Structures",
      due: "August 27, 2026",
      priority: "High",
      status: "Pending",
    },
    {
      title: "SQL Queries",
      course: "Database Systems",
      due: "August 29, 2026",
      priority: "Medium",
      status: "Pending",
    },
    {
      title: "Academic Writing Essay",
      course: "English",
      due: "August 31, 2026",
      priority: "Medium",
      status: "Pending",
    },
    {
      title: "Programming Fundamentals",
      course: "Computer Science",
      due: "September 2, 2026",
      priority: "Low",
      status: "Completed",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Assignments
          </h1>

          <p className="mt-2 text-gray-600">
            Keep track of your assignments and upcoming deadlines.
          </p>
        </div>

        {/* Assignment List */}
        <div className="mt-8 space-y-4">

          {assignments.map((assignment) => (
            <div
              key={assignment.title}
              className="rounded-xl bg-white p-6 shadow-sm"
            >
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                {/* Assignment Info */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    {assignment.title}
                  </h2>

                  <p className="mt-1 text-gray-500">
                    {assignment.course}
                  </p>

                  <p className="mt-3 text-sm text-gray-600">
                    Due:{" "}
                    <span className="font-medium text-gray-900">
                      {assignment.due}
                    </span>
                  </p>
                </div>

                {/* Status */}
                <div className="flex flex-wrap items-center gap-3">

                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${
                      assignment.priority === "High"
                        ? "bg-red-100 text-red-700"
                        : assignment.priority === "Medium"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {assignment.priority} Priority
                  </span>

                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${
                      assignment.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {assignment.status}
                  </span>

                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}