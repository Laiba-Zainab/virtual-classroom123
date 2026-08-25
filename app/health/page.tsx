import { headers } from "next/headers";

export default async function HealthPage() {
  const headersList = await headers();

  const host = headersList.get("host");

  const protocol =
    process.env.NODE_ENV === "development" ? "http" : "https";

  const response = await fetch(`${protocol}://${host}/api/health`, {
    cache: "no-store",
  });

  const data = await response.json();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-3xl px-6 py-10">

        <h1 className="text-3xl font-bold text-gray-900">
          System Health
        </h1>

        <p className="mt-2 text-gray-600">
          This page checks whether the Virtual Classroom service is
          working correctly.
        </p>

        <div className="mt-8 rounded-xl bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">
              Application Status
            </h2>

            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
              {data.status}
            </span>
          </div>

          <div className="mt-6 space-y-4">
            <div>
              <p className="text-sm text-gray-500">
                Service
              </p>

              <p className="font-medium text-gray-900">
                {data.service}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Last checked
              </p>

              <p className="font-medium text-gray-900">
                {data.timestamp}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                API Response
              </p>

              <p className="font-medium text-green-600">
                API is responding successfully
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}