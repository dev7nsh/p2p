import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Header from "./header.jsx"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Header/>
    {/* <Body /> */}
    
    {/* <App /> */}
  </StrictMode>,
)
