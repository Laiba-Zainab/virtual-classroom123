export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-600">
            Virtual Learning Platform
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Learn, manage, and succeed in one virtual classroom.
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Access your courses, assignments, schedule, and learning
            resources from one simple platform.
          </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/dashboard"
              className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Go to Dashboard
            </a>

            <a
              href="/courses"
              className="rounded-lg border border-gray-300 bg-white px-5 py-3 font-semibold text-gray-700 hover:bg-gray-100"
            >
              View Courses
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <h2 className="text-2xl font-bold text-gray-900">
          Everything you need
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Courses</h3>
            <p className="mt-2 text-gray-600">
              View and organize all your enrolled courses.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Assignments</h3>
            <p className="mt-2 text-gray-600">
              Keep track of assignments and upcoming deadlines.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Schedule</h3>
            <p className="mt-2 text-gray-600">
              Check your classes and manage your learning schedule.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}