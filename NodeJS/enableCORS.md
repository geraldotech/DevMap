
To enable CORS (Cross-Origin Resource Sharing) in a Node.js Express application, you need to use the cors middleware. CORS is a mechanism that allows resources on a web page to be requested from another domain outside the domain from which the resource originated. Here's how you can enable CORS in your Node.js Express application:

First, install the cors package from npm if you haven't already done so: `npm install cors`


In your Express application, require the cors module: 
const cors = require('cors');



Use the cors middleware in your Express application. You can use it globally to allow CORS for all routes, or selectively enable it for specific routes:

```js
// Enable CORS globally for all routes
app.use(cors());

// Or enable CORS for specific routes
app.get('/example', cors(), (req, res) => {
  // Your route logic here
});


// global The cors() function can accept configuration options if you need more control over CORS behavior. For example:
app.use(cors({
  origin: 'http://example.com', // Allow requests only from this origin
  methods: ['GET', 'POST'],      // Allow only specified methods
  allowedHeaders: ['Content-Type'], // Allow only specified headers
}));


// Allow only GET requests from all origins
app.use(cors({
  methods: ['GET'],
}));

// Define allowed origins
const allowedOrigins = ['http://localhost:3000', 'http://example.com'];

```