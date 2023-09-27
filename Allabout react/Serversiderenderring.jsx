const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

// Create an Express application
const app = express();
const PORT = process.env.PORT || 3000;

// React component to render on the server
const HelloWorld = () => {
  return <h1>Hello, Server-Side Rendering!</h1>;
};

// Server route to render the React component
app.get('/', (req, res) => {
  // Render the React component to HTML
  const html = ReactDOMServer.renderToString(<HelloWorld />);
  
  // Send the HTML as the response
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Server-Side Rendering Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
      </body>
    </html>
  `);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
