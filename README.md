# Wikipedia Search

Wikipedia Search is a simple application built with TypeScript, Node.js, and React that allows users to search for Wikipedia articles.

## Getting Started

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/pramoddivekar31/wikipedia-search
   ```

2. **Navigate to the project directory:**

   ```bash
   cd wikipedia-search
   ```

3. **Create the .env file:**

   ```bash
   Refer the .env.example file, and create a new file named .env in the root location.
   ```

4. **Install dependencies:**

   ```bash
   npm run install-all

   OR

   npm install
   cd client && npm install
   ```

### Usage

**After installation, use the following scripts to run the application:**

Start the application (this will run the server and client development servers):

```bash
npm run dev

Access the application at http://localhost:3000.
```

Run the test cases of the client:

```bash
npm run test
```

Build the client and server:

```bash
npm run build
```

Start the client-side development server:

```bash
npm run client
```

Start the server with automatic restarts:

```bash
npm run server
```

## Performance Optimizations

**1. Debouncing Search:**

- Created a custom `useDebounce` hook to delay API calls until the user finishes typing their search query. This prevents unnecessary requests and improves responsiveness, especially for faster typists.

**2. Virtualized Search Results:**

- For displaying large lists of search results efficiently, we employ a virtualized list component. This renders only a visible subset of results, minimizing DOM manipulation and memory usage, ensuring even large datasets load quickly and smoothly.

**3. Node.js Caching with 30 Minute TTL:**

- To further enhance performance and reduce API calls/Database reads, have leverage Node.js caching with a 30-minute time-to-live (TTL) [30-minute TTL may be adjusted based on specific usage patterns and data update frequency.]. This means frequently accessed search results are temporarily stored on the server for faster retrieval, reducing load on the Wikipedia API/Db and improving response times. Cached results are automatically refreshed every 30 minutes to ensure data freshness.

**4. CDN:**

- In the production deployment, we will push the static assets and builds to Amazon S3, and it will be served via a Content Delivery Network (CDN)

## Security Measures

**1. Enhanced Content Security Policy (CSP):**

- A strong CSP, protect with Helmet middleware, rigorously blocks unauthorized scripts and thwarts XSS attacks. This acts as a vigilant gatekeeper, shielding your data from malicious code injection and web-based vulnerabilities.

**2. Reinforced HTTPS:**

- Enforced HTTPS by Helmet's HSTS, safeguards all connections, acting as a secure tunnel to prevent potential eavesdropping or data tampering during transit.

**4. Secure Cookies for Strengthened Data Protection:**

- Have implemented enhanced cookie security by employing both `secure` and `HttpOnly` flags. This minimizes the risk of cookie theft and ensures your information remains shielded.

**5. Common Middleware:**

- Created a common middleware `applySecurityMiddlewares` to handle the above all security aspects.


## Deployment Strategy

- This application can be deployed as a Node.js service on an EC2/EKS instance. The deployment strategy involves serving static assets through Express (with the option to define a CDN for enhanced performance). Additionally, API calls will be handled by the server.


### Author

Pramod Divekar
