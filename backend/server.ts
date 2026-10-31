import http from "http";
import { contactController } from "../src/backend/controllers/contact.controller";

const PORT = process.env.PORT || 5000;

/**
 * Standalone Node.js HTTP Server:
 * Allows running the MVC backend independently on port 5000 if desired.
 */
const server = http.createServer(async (req, res) => {
  // CORS Headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  // Health check route
  if (req.method === "GET" && req.url === "/api/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "ok", service: "Portfolio Backend MVC", timestamp: new Date() }));
    return;
  }

  // Contact form submission route
  if (req.method === "POST" && req.url === "/api/contact") {
    let bodyStr = "";
    req.on("data", (chunk) => {
      bodyStr += chunk.toString();
    });

    req.on("end", async () => {
      try {
        const body = JSON.parse(bodyStr);
        const result = await contactController.handleContactSubmission(body);

        res.writeHead(result.statusCode, { "Content-Type": "application/json" });
        res.end(JSON.stringify(result.data));
      } catch (err) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ ok: false, error: "Invalid JSON body" }));
      }
    });
    return;
  }

  // 404 for unknown routes
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ ok: false, error: "Route not found" }));
});

if (process.env.NODE_ENV !== "test" && require.main === module) {
  server.listen(PORT, () => {
    console.log(`🚀 Portfolio MVC Backend running on http://localhost:${PORT}`);
  });
}

export default server;
