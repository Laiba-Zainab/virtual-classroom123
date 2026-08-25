export default function Schedule() {
  const classes = [
    {
      time: "09:00 AM - 10:30 AM",
      course: "Data Structures",
      instructor: "Dr. Sara",
      room: "Virtual Room 1",
    },
    {
      time: "11:00 AM - 12:30 PM",
      course: "Database Systems",
      instructor: "Dr. Hassan",
      room: "Virtual Room 2",
    },
    {
      time: "02:00 PM - 03:30 PM",
      course: "Computer Science",
      instructor: "Dr. Ahmed",
      room: "Virtual Room 3",
    },
    {
      time: "04:00 PM - 05:00 PM",
      course: "English",
      instructor: "Ms. Ayesha",
      room: "Virtual Room 4",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Class Schedule
          </h1>

          <p className="mt-2 text-gray-600">
            View your classes and upcoming learning sessions.
          </p>
        </div>

        {/* Date */}
        <div className="mt-8 rounded-xl bg-blue-600 p-6 text-white">
          <p className="text-sm font-medium">
            TODAY
          </p>

          <h2 className="mt-1 text-2xl font-bold">
            Tuesday, August 25, 2026
          </h2>
        </div>

        {/* Classes */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Today's Classes
          </h2>

          <div className="mt-6 space-y-4">

            {classes.map((classItem) => (
              <div
                key={classItem.course}
                className="rounded-xl bg-white p-6 shadow-sm"
              >
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                  {/* Time */}
                  <div className="md:w-48">
                    <p className="font-semibold text-blue-600">
                      {classItem.time}
                    </p>
                  </div>

                  {/* Course */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {classItem.course}
                    </h3>

                    <p className="mt-1 text-gray-500">
                      Instructor: {classItem.instructor}
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      {classItem.room}
                    </p>
                  </div>

                  {/* Button */}
                  <button className="rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white hover:bg-blue-700">
                    Join Class
                  </button>

                </div>
              </div>
            ))}

          </div>
        </section>

      </div>
    </div>
  );
}