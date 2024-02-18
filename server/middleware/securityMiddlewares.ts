import express, { Express } from "express";
import helmet from "helmet";
import cors from "cors";
import session from "express-session";

const applySecurityMiddlewares = (app: Express) => {
  // Helmet middleware for basic security headers
  app.use(helmet());

  // Content Security Policy middleware to control resources allowed to load
  app.use(
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'"],
      },
    })
  );

  // Frameguard middleware to prevent clickjacking
  app.use(helmet.frameguard({ action: "deny" }));

  // HTTP Strict Transport Security (HSTS) middleware for secure connections
  app.use(
    helmet.hsts({
      maxAge: 31536000, // 1 year
      includeSubDomains: true,
      preload: true,
    })
  );

  // CORS Configuration
  const allowedOrigins = ["https://wikipedia.com"];
  app.use(cors({ origin: allowedOrigins, optionsSuccessStatus: 200 }));

  // Session Configuration
  app.use(
    session({
      secret: "unique-security-key",
      resave: true,
      saveUninitialized: true,
      cookie: {
        secure: true, // Use only over HTTPS
        httpOnly: true, // Prevent client-side access
      },
    })
  );
};

export default applySecurityMiddlewares;
