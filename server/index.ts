// server.ts
import express, { Express, Request, Response } from "express";
import appRoutes from "./routes/routes";
import dotenv from "dotenv";
import path from "path";
import bodyParser from "body-parser";
import compression from "compression";
import applySecurityMiddlewares from "./middleware/securityMiddlewares";

dotenv.config();

const app: Express = express();
const NODE_PORT = process.env.NODE_PORT || 3001;
const BASE_PATH = "/api";

// Apply Security Middlewares
applySecurityMiddlewares(app);

// Other Middlewares
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(bodyParser.json({ limit: "30mb" }));
app.use(compression());

// Serve the React build in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "..", "client", "build")));
}

// Health Check Route
app.get(`${BASE_PATH}/health-check`, (req: Request, res: Response) => {
  res.send("Server is up");
});

// API Routes
app.use(BASE_PATH, appRoutes);

// API 404 Error
app.use(`${BASE_PATH}/*`, (req, res) => {
  res.status(404).send({ url: req.originalUrl + " not found" });
});

// For any other route, serve the index.html from the build folder
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});

// Centralized Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

app.listen(NODE_PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${NODE_PORT}`);
});
