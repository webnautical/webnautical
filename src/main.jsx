import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import BlogProvider from './contexts/BlogContext.jsx';
import QuoteProvider from './contexts/QuoteContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BlogProvider>
      <QuoteProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </QuoteProvider>
    </BlogProvider>
  </React.StrictMode>,
)
