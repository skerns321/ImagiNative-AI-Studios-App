import express from 'express';
import next from 'next';
import { createServer } from 'http';

const dev = process.env.NODE_ENV !== 'production';
const hostname = dev ? 'localhost' : '0.0.0.0';
const port = parseInt(process.env.PORT || '3000', 10);

console.log(`Environment: ${dev ? 'development' : 'production'}`);
console.log(`Server starting on port: ${port}`);

// Create the Next.js app
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Pre-middleware security layer
  server.use((req, res, next) => {
    // Strip out malicious headers
    delete req.headers['x-middleware-subrequest'];
    
    // Additional security checks
    const suspiciousPatterns = [
      /(\%00|\x00)/i,  // Null byte attacks
      /(\/\.\.\/)/i,   // Directory traversal
      /(<script>)/i    // Basic XSS patterns
    ];

    const requestUrl = req.url;
    if (suspiciousPatterns.some(pattern => pattern.test(requestUrl))) {
      return res.status(403).json({ error: 'Invalid request' });
    }

    next();
  });

  // Your existing server setup
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  createServer(server).listen(port, hostname, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
    console.log(`> Environment: ${process.env.NODE_ENV}`);
    console.log(`> Hostname: ${hostname}`);
    console.log(`> Port: ${port}`);
    console.log(`> Running in ${dev ? 'development' : 'production'} mode`);
  });
});
