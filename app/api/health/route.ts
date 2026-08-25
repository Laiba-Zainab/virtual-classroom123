export async function GET() {
  return Response.json({
    status: "healthy",
    service: "Virtual Classroom",
    timestamp: new Date().toISOString(),
  });
}