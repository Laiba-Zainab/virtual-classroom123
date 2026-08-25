export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back!
          </h1>

          <p className="mt-2 text-gray-600">
            Here is an overview of your virtual classroom.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">My Courses</p>
            <p className="mt-2 text-3xl font-bold">4</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Assignments</p>
            <p className="mt-2 text-3xl font-bold">6</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Completed</p>
            <p className="mt-2 text-3xl font-bold">12</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Upcoming Classes</p>
            <p className="mt-2 text-3xl font-bold">3</p>
          </div>

        </div>

        {/* Courses */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900">
            My Courses
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">
                Computer Science
              </h3>

              <p className="mt-2 text-gray-600">
                Programming fundamentals and problem solving.
              </p>

              <p className="mt-4 text-sm font-medium text-blue-600">
                Progress: 75%
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">
                Data Structures
              </h3>

              <p className="mt-2 text-gray-600">
                Arrays, linked lists, stacks, queues and trees.
              </p>

              <p className="mt-4 text-sm font-medium text-blue-600">
                Progress: 60%
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">
                Database Systems
              </h3>

              <p className="mt-2 text-gray-600">
                SQL, relational databases and database design.
              </p>

              <p className="mt-4 text-sm font-medium text-blue-600">
                Progress: 45%
              </p>
            </div>

          </div>
        </section>

        {/* Upcoming Assignments */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900">
            Upcoming Assignments
          </h2>

          <div className="mt-6 overflow-hidden rounded-xl bg-white shadow-sm">

            <div className="border-b p-6">
              <div className="flex flex-col justify-between gap-2 sm:flex-row">
                <div>
                  <h3 className="font-semibold">
                    Data Structures Practice
                  </h3>

                  <p className="text-sm text-gray-500">
                    Data Structures
                  </p>
                </div>

                <span className="font-medium text-red-600">
                  Due Tomorrow
                </span>
              </div>
            </div>

            <div className="border-b p-6">
              <div className="flex flex-col justify-between gap-2 sm:flex-row">
                <div>
                  <h3 className="font-semibold">
                    SQL Queries
                  </h3>

                  <p className="text-sm text-gray-500">
                    Database Systems
                  </p>
                </div>

                <span className="font-medium text-orange-600">
                  Due in 3 days
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex flex-col justify-between gap-2 sm:flex-row">
                <div>
                  <h3 className="font-semibold">
                    Academic Writing Essay
                  </h3>

                  <p className="text-sm text-gray-500">
                    English
                  </p>
                </div>

                <span className="font-medium text-green-600">
                  Due in 5 days
                </span>
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}