import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>  
    <App />
  </StrictMode>,
)

{/*React StrictMode is a tool provided by React that help developers write better quality code by highlighting potential problems during development */}
{/*highlights: not supported or deprecated React APIs and components, unsafe state updates, potentially unnecessary re-renders*/}

{/*Local Storage*/}
{/* feature in web browsers that allows web developers to store data on a user's computer.
This data can be accessed later by website or web application*/}

{/*useEffect*/}
{/* used to perform side effects(actions which are performed with the 'outside world')*/}
