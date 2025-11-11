import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
const name = 'React'
createRoot(document.getElementById('root')).render(
    <App name={name} />
)
