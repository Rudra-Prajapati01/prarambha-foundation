import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { PageProvider } from "./context/PageContext"

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>

  <PageProvider>

    <App />

  </PageProvider>

</React.StrictMode>
)